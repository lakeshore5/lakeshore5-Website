// Project page: infinite-loop showcase carousel auto-built from the page's gallery images.
// Optimized: fewer clones, transitionend-driven bounds check, decode-first-slide boot,
// IntersectionObserver + ResizeObserver refresh, GPU-cheap transitions.
(function () {
    function init() {
        var gallery = document.querySelector('.project-gallery-grid');
        var hero = document.querySelector('.project-hero');
        if (!gallery || !hero) return;

        var srcImgs = Array.from(gallery.querySelectorAll('img'));
        if (srcImgs.length < 2) return;

        // Build markup
        var section = document.createElement('section');
        section.className = 'showcase-section';
        section.innerHTML =
            '<div class="showcase-carousel" aria-label="Project showcase carousel" role="region">' +
                '<div class="carousel-container">' +
                    '<div class="carousel-track" id="carouselTrack"></div>' +
                '</div>' +
            '</div>';
        var track = section.querySelector('.carousel-track');
        var container = section.querySelector('.carousel-container');

        srcImgs.forEach(function (img, i) {
            var slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.setAttribute('data-index', i);
            var cImg = document.createElement('img');
            cImg.src = img.currentSrc || img.src;
            cImg.alt = img.alt || '';
            cImg.className = 'carousel-image';
            // First slide eager for fast first paint; rest lazy.
            cImg.loading = i === 0 ? 'eager' : 'lazy';
            cImg.decoding = 'async';
            cImg.draggable = false;
            slide.appendChild(cImg);
            track.appendChild(slide);
        });

        // Insert after hero
        hero.parentNode.insertBefore(section, hero.nextSibling);

        // Move Gallery section below description when a carousel exists
        var gallerySection = gallery.closest('.project-section');
        var relatedSection = document.querySelector('.related-projects');
        if (gallerySection && relatedSection && gallerySection.parentNode === relatedSection.parentNode) {
            relatedSection.parentNode.insertBefore(gallerySection, relatedSection);
        }

        var originalSlides = Array.from(track.querySelectorAll('.carousel-slide'));
        var ORIGINAL_COUNT = originalSlides.length;
        // 2 clones per side is enough for a windowed peek; huge perf win over 5.
        var CLONES_PER_SIDE = Math.min(2, ORIGINAL_COUNT);
        var AUTO_PLAY_DELAY = 4000;
        var TRANSITION_DURATION = 800;
        var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var currentIndex = CLONES_PER_SIDE;
        var autoPlayInterval = null;
        var isTransitioning = false;

        // Clone
        for (var i = CLONES_PER_SIDE - 1; i >= 0; i--) {
            var idx = (ORIGINAL_COUNT - CLONES_PER_SIDE + i + ORIGINAL_COUNT) % ORIGINAL_COUNT;
            var c = originalSlides[idx].cloneNode(true);
            c.classList.add('clone');
            c.setAttribute('aria-hidden', 'true');
            var ci = c.querySelector('img'); if (ci) { ci.loading = 'lazy'; ci.decoding = 'async'; }
            track.insertBefore(c, track.firstChild);
        }
        for (var j = 0; j < CLONES_PER_SIDE; j++) {
            var c2 = originalSlides[j % ORIGINAL_COUNT].cloneNode(true);
            c2.classList.add('clone');
            c2.setAttribute('aria-hidden', 'true');
            var ci2 = c2.querySelector('img'); if (ci2) { ci2.loading = 'lazy'; ci2.decoding = 'async'; }
            track.appendChild(c2);
        }

        var allSlides = Array.from(track.querySelectorAll('.carousel-slide'));
        var TOTAL_SLIDES = allSlides.length;
        var slideWidths = [], slidePositions = [], cachedGap = 0, cachedContainerWidth = 0;

        function cacheMetrics() {
            cachedGap = parseFloat(getComputedStyle(track).gap) || 24;
            cachedContainerWidth = container.offsetWidth;
            slideWidths = new Array(allSlides.length);
            slidePositions = new Array(allSlides.length);
            var pos = 0;
            for (var k = 0; k < allSlides.length; k++) {
                slideWidths[k] = allSlides[k].offsetWidth;
                slidePositions[k] = pos;
                pos += slideWidths[k] + cachedGap;
            }
        }
        function getOffset(index) {
            var sp = slidePositions[index] || 0;
            var sw = slideWidths[index] || 0;
            return (cachedContainerWidth / 2) - (sw / 2) - sp;
        }
        function updateVisuals(index) {
            for (var i = 0; i < allSlides.length; i++) {
                var s = allSlides[i];
                var isActive = i === index;
                var isAdj = Math.abs(i - index) === 1;
                // Direct class toggling; avoids double-reflow of remove+add
                if (isActive) { s.className = s.className.replace(/\s*adjacent\b/, ''); if (!/\bactive\b/.test(s.className)) s.className += ' active'; }
                else if (isAdj) { s.className = s.className.replace(/\s*active\b/, ''); if (!/\badjacent\b/.test(s.className)) s.className += ' adjacent'; }
                else { s.className = s.className.replace(/\s*(active|adjacent)\b/g, ''); }
            }
        }
        function applyTransform(index, animate) {
            track.style.transition = (animate !== false && !prefersReducedMotion)
                ? 'transform ' + TRANSITION_DURATION + 'ms cubic-bezier(0.25, 0.1, 0.25, 1)'
                : 'none';
            track.style.transform = 'translate3d(' + getOffset(index) + 'px, 0, 0)';
        }
        function goToSlide(index, animate) {
            currentIndex = index;
            applyTransform(index, animate);
            updateVisuals(index);
        }
        function jumpWithoutAnim(index) {
            currentIndex = index;
            track.style.transition = 'none';
            track.style.transform = 'translate3d(' + getOffset(index) + 'px, 0, 0)';
            // Force reflow so the next transition takes effect
            /* eslint-disable no-unused-expressions */
            track.offsetHeight;
            updateVisuals(index);
        }
        function checkBounds() {
            if (currentIndex < CLONES_PER_SIDE) {
                jumpWithoutAnim(currentIndex + ORIGINAL_COUNT);
            } else if (currentIndex >= CLONES_PER_SIDE + ORIGINAL_COUNT) {
                jumpWithoutAnim(currentIndex - ORIGINAL_COUNT);
            }
        }

        // transitionend-driven state - stays in sync with the actual animation
        track.addEventListener('transitionend', function (e) {
            if (e.propertyName !== 'transform') return;
            checkBounds();
            isTransitioning = false;
        });

        function nextSlide() {
            if (isTransitioning) return;
            isTransitioning = true;
            goToSlide(currentIndex + 1);
        }
        function prevSlide() {
            if (isTransitioning) return;
            isTransitioning = true;
            goToSlide(currentIndex - 1);
        }
        function startAutoPlay() { stopAutoPlay(); autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY); }
        function stopAutoPlay() { if (autoPlayInterval) { clearInterval(autoPlayInterval); autoPlayInterval = null; } }
        function resetAutoPlay() { stopAutoPlay(); startAutoPlay(); }

        function boot() {
            cacheMetrics();
            goToSlide(currentIndex, false);
            startAutoPlay();
        }

        // Boot as soon as the first (active) slide's image is decodable.
        // Everything else can stream in behind and refresh metrics via ResizeObserver.
        var firstImg = allSlides[CLONES_PER_SIDE] && allSlides[CLONES_PER_SIDE].querySelector('img');
        var booted = false;
        function tryBoot() { if (booted) return; booted = true; boot(); }

        if (firstImg) {
            if (typeof firstImg.decode === 'function') {
                firstImg.decode().then(tryBoot).catch(tryBoot);
            } else if (firstImg.complete) {
                tryBoot();
            } else {
                firstImg.addEventListener('load', tryBoot, { once: true });
                firstImg.addEventListener('error', tryBoot, { once: true });
            }
        } else {
            tryBoot();
        }
        // Safety
        setTimeout(tryBoot, 1500);

        // ResizeObserver: when any late-loading slide finally sizes itself, refresh metrics.
        var refreshQueued = false;
        function queueRefresh() {
            if (refreshQueued || !booted) return;
            refreshQueued = true;
            requestAnimationFrame(function () {
                refreshQueued = false;
                cacheMetrics();
                track.style.transition = 'none';
                track.style.transform = 'translate3d(' + getOffset(currentIndex) + 'px, 0, 0)';
            });
        }
        if ('ResizeObserver' in window) {
            var ro = new ResizeObserver(queueRefresh);
            ro.observe(container);
            allSlides.forEach(function (s) { ro.observe(s); });
        }
        // Backup: if any image loads after boot, refresh
        allSlides.forEach(function (s) {
            var im = s.querySelector('img');
            if (im && !im.complete) im.addEventListener('load', queueRefresh, { once: true });
        });

        // Slide clicks
        allSlides.forEach(function (s, index) {
            s.addEventListener('click', function () {
                if (index !== currentIndex && !isTransitioning) {
                    isTransitioning = true;
                    goToSlide(index);
                    resetAutoPlay();
                }
            });
        });

        // Keyboard
        document.addEventListener('keydown', function (e) {
            var rect = container.getBoundingClientRect();
            var inView = rect.top < window.innerHeight && rect.bottom > 0;
            if (!inView) return;
            if (e.key === 'ArrowRight') { nextSlide(); resetAutoPlay(); }
            else if (e.key === 'ArrowLeft') { prevSlide(); resetAutoPlay(); }
        });

        // Touch
        var touchStartX = 0, SWIPE = 50;
        container.addEventListener('touchstart', function (e) { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
        container.addEventListener('touchend', function (e) {
            var diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > SWIPE) { if (diff > 0) nextSlide(); else prevSlide(); resetAutoPlay(); }
        }, { passive: true });

        // Resize (fallback for browsers without ResizeObserver)
        var rt;
        window.addEventListener('resize', function () {
            clearTimeout(rt);
            rt = setTimeout(queueRefresh, 120);
        });

        // Pause when hidden or when carousel off-screen (huge CPU/GPU saver on long project pages)
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) stopAutoPlay(); else if (isCarouselVisible) startAutoPlay();
        });

        var isCarouselVisible = true;
        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    isCarouselVisible = entry.isIntersecting;
                    if (!isCarouselVisible) stopAutoPlay();
                    else if (!document.hidden) startAutoPlay();
                });
            }, { threshold: 0.1 });
            io.observe(container);
        }

        // Pause on hover
        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', function () { if (isCarouselVisible && !document.hidden) startAutoPlay(); });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
