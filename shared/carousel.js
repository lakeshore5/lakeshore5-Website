// Project page: infinite-loop showcase carousel auto-built from the page's gallery images.
(function () {
    function init() {
        var gallery = document.querySelector('.project-gallery-grid');
        var hero = document.querySelector('.project-hero');
        if (!gallery || !hero) return;

        var imgs = Array.from(gallery.querySelectorAll('img'));
        if (imgs.length < 2) return;

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
        imgs.forEach(function (img, i) {
            var slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.setAttribute('data-index', i);
            var cImg = document.createElement('img');
            cImg.src = img.currentSrc || img.src;
            cImg.alt = img.alt || '';
            cImg.className = 'carousel-image';
            cImg.loading = 'lazy';
            slide.appendChild(cImg);
            track.appendChild(slide);
        });

        // Insert after hero
        hero.parentNode.insertBefore(section, hero.nextSibling);

        // Move the Gallery section below the description content (only when a carousel exists)
        var gallerySection = gallery.closest('.project-section');
        var relatedSection = document.querySelector('.related-projects');
        if (gallerySection && relatedSection && gallerySection.parentNode === relatedSection.parentNode) {
            relatedSection.parentNode.insertBefore(gallerySection, relatedSection);
        }

        // Boot logic (based on reference infinite carousel)
        var container = section.querySelector('.carousel-container');
        var originalSlides = Array.from(track.querySelectorAll('.carousel-slide'));
        var ORIGINAL_COUNT = originalSlides.length;
        var CLONES_PER_SIDE = Math.min(5, ORIGINAL_COUNT);
        var AUTO_PLAY_DELAY = 4000;
        var TRANSITION_DURATION = 800;
        var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var currentIndex = CLONES_PER_SIDE; // Start on the first real (non-cloned) slide
        var autoPlayInterval = null;
        var isTransitioning = false;

        // Clone
        for (var i = CLONES_PER_SIDE - 1; i >= 0; i--) {
            var idx = (ORIGINAL_COUNT - CLONES_PER_SIDE + i + ORIGINAL_COUNT) % ORIGINAL_COUNT;
            var c = originalSlides[idx].cloneNode(true);
            c.classList.add('clone');
            c.setAttribute('aria-hidden', 'true');
            track.insertBefore(c, track.firstChild);
        }
        for (var j = 0; j < CLONES_PER_SIDE; j++) {
            var c2 = originalSlides[j % ORIGINAL_COUNT].cloneNode(true);
            c2.classList.add('clone');
            c2.setAttribute('aria-hidden', 'true');
            track.appendChild(c2);
        }

        var allSlides = Array.from(track.querySelectorAll('.carousel-slide'));
        var TOTAL_SLIDES = allSlides.length;
        var slideWidths = [], slidePositions = [];

        function cacheMetrics() {
            var gap = parseFloat(getComputedStyle(track).gap) || 24;
            slideWidths = allSlides.map(function (s) { return s.offsetWidth; });
            slidePositions = [];
            var pos = 0;
            for (var k = 0; k < allSlides.length; k++) {
                slidePositions.push(pos);
                pos += slideWidths[k] + gap;
            }
        }
        function getOffset(index) {
            var cw = container.offsetWidth;
            var sp = slidePositions[index] || 0;
            var sw = slideWidths[index] || allSlides[index].offsetWidth;
            return (cw / 2) - (sw / 2) - sp;
        }
        function updateVisuals(index) {
            allSlides.forEach(function (s, i) {
                s.classList.remove('active', 'adjacent');
                if (i === index) s.classList.add('active');
                else if (Math.abs(i - index) === 1) s.classList.add('adjacent');
            });
        }
        function goToSlide(index, animate) {
            currentIndex = index;
            track.style.transition = (animate !== false && !prefersReducedMotion)
                ? 'transform ' + TRANSITION_DURATION + 'ms cubic-bezier(0.25, 0.1, 0.25, 1)'
                : 'none';
            track.style.transform = 'translateX(' + getOffset(index) + 'px)';
            updateVisuals(index);
        }
        function checkBounds() {
            if (currentIndex < CLONES_PER_SIDE) {
                var offset = CLONES_PER_SIDE - currentIndex;
                currentIndex = TOTAL_SLIDES - CLONES_PER_SIDE - offset;
                track.style.transition = 'none';
                track.style.transform = 'translateX(' + getOffset(currentIndex) + 'px)';
                updateVisuals(currentIndex);
            } else if (currentIndex >= TOTAL_SLIDES - CLONES_PER_SIDE) {
                var off = currentIndex - (TOTAL_SLIDES - CLONES_PER_SIDE);
                currentIndex = CLONES_PER_SIDE + off;
                track.style.transition = 'none';
                track.style.transform = 'translateX(' + getOffset(currentIndex) + 'px)';
                updateVisuals(currentIndex);
            }
        }
        function nextSlide() {
            if (isTransitioning) return;
            isTransitioning = true;
            goToSlide(currentIndex + 1);
            setTimeout(function () { checkBounds(); isTransitioning = false; }, TRANSITION_DURATION + 50);
        }
        function prevSlide() {
            if (isTransitioning) return;
            isTransitioning = true;
            goToSlide(currentIndex - 1);
            setTimeout(function () { checkBounds(); isTransitioning = false; }, TRANSITION_DURATION + 50);
        }
        function startAutoPlay() { stopAutoPlay(); autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY); }
        function stopAutoPlay() { if (autoPlayInterval) { clearInterval(autoPlayInterval); autoPlayInterval = null; } }
        function resetAutoPlay() { stopAutoPlay(); startAutoPlay(); }

        function boot() {
            cacheMetrics();
            goToSlide(currentIndex, false);
            startAutoPlay();
        }

        // Wait for images so widths are correct (with safety timeout)
        var pending = allSlides.length;
        var booted = false;
        function tryBoot() {
            if (booted) return;
            booted = true;
            boot();
        }
        function done() { if (--pending <= 0) tryBoot(); }
        allSlides.forEach(function (s) {
            var im = s.querySelector('img');
            if (!im) { done(); return; }
            if (im.complete) { done(); return; }
            im.addEventListener('load', done);
            im.addEventListener('error', done);
        });
        if (allSlides.length === 0) tryBoot();
        // Safety: never wait more than 3s
        setTimeout(tryBoot, 3000);

        // Slide clicks
        allSlides.forEach(function (s, index) {
            s.addEventListener('click', function () {
                if (index !== currentIndex && !isTransitioning) {
                    isTransitioning = true;
                    goToSlide(index);
                    resetAutoPlay();
                    setTimeout(function () { checkBounds(); isTransitioning = false; }, TRANSITION_DURATION + 50);
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

        // Resize
        var rt;
        window.addEventListener('resize', function () {
            clearTimeout(rt);
            rt = setTimeout(function () {
                allSlides = Array.from(track.querySelectorAll('.carousel-slide'));
                cacheMetrics();
                track.style.transition = 'none';
                track.style.transform = 'translateX(' + getOffset(currentIndex) + 'px)';
            }, 100);
        });

        // Pause when hidden
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) stopAutoPlay(); else startAutoPlay();
        });

        // Pause on hover
        container.addEventListener('mouseenter', stopAutoPlay);
        container.addEventListener('mouseleave', startAutoPlay);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
