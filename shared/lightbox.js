// Simple gallery lightbox - click any .project-gallery-grid img to open a large preview.
(function () {
    function init() {
        var imgs = document.querySelectorAll('.project-gallery-grid img');
        if (!imgs.length) return;

        var overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.setAttribute('role', 'dialog');
        overlay.setAttribute('aria-hidden', 'true');
        overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img class="lightbox-image" alt="">';
        document.body.appendChild(overlay);

        var lbImg = overlay.querySelector('.lightbox-image');
        var closeBtn = overlay.querySelector('.lightbox-close');

        function open(src, alt) {
            lbImg.src = src;
            lbImg.alt = alt || '';
            overlay.classList.add('is-open');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
        function close() {
            overlay.classList.remove('is-open');
            overlay.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            lbImg.src = '';
        }

        imgs.forEach(function (img) {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', function () {
                open(img.currentSrc || img.src, img.alt);
            });
        });

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay || e.target === closeBtn) close();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
