// Shared Navbar Component Loader
function loadNavbar(activePage) {
    // Compute a base path that works in three environments:
    //  1. Custom domain root (www.lakeshore5.com/) → base = ""
    //  2. GitHub Pages project URL (lakeshore5.github.io/lakeshore5-Website/) → base = "/lakeshore5-Website"
    //  3. Local file:// preview → base = relative path back to site root
    const base = (function() {
        const path = window.location.pathname;
        // file:// - walk up from current file to site root by counting depth
        if (window.location.protocol === 'file:') {
            // Detect known subfolders and compute how many "../" to prepend
            if (/\/projects\//.test(path)) return '..';
            if (/\/services\//.test(path)) return '..';
            if (/\/articles\//.test(path)) return '..';
            return '.';
        }
        // GitHub Pages project site
        if (window.location.hostname.endsWith('github.io')) {
            const parts = path.split('/').filter(Boolean);
            if (parts.length > 0) return '/' + parts[0];
        }
        // Custom domain / local server at root
        return '';
    })();

    const url = (p) => base + p;

    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="${url('/')}">
                    <img src="${url('/assets/images/Logo.webp')}" alt="lakeshore5 logo" class="nav-logo-img">
                    <span>lakeshore5</span>
                </a>
            </div>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="${url('/')}" class="nav-link" data-page="portfolio">Portfolio</a>
                </li>
                <li class="nav-item nav-item-dropdown">
                    <span class="nav-link nav-link-parent" data-page="services" aria-haspopup="true" aria-expanded="false" tabindex="0" role="button">Services <span class="nav-caret" aria-hidden="true">&#9662;</span></span>
                    <ul class="nav-dropdown" role="menu">
                        <li role="none"><a role="menuitem" href="${url('/services/index.html')}">Services Overview</a></li>
                        <li role="none"><a role="menuitem" href="${url('/services/minecraft-build-commissions.html')}">Custom Build Commissions</a></li>
                        <li role="none"><a role="menuitem" href="${url('/services/minecraft-terrain-worldbuilding.html')}">Terrain &amp; Worldbuilding</a></li>
                        <li role="none"><a role="menuitem" href="${url('/services/minecraft-marketplace-professional-projects.html')}">Marketplace &amp; Studio Projects</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="${url('/about.html')}" class="nav-link" data-page="about">About</a>
                </li>
                <li class="nav-item nav-item-dropdown">
                    <span class="nav-link nav-link-parent" data-page="articles" aria-haspopup="true" aria-expanded="false" tabindex="0" role="button">Articles <span class="nav-caret" aria-hidden="true">&#9662;</span></span>
                    <ul class="nav-dropdown" role="menu">
                        <li role="none"><a role="menuitem" href="${url('/articles/index.html')}">All Articles</a></li>
                        <li role="none"><a role="menuitem" href="${url('/articles/building-loriostrond-athion-case-study.html')}">Loriostrond - Athion Case Study</a></li>
                        <li role="none"><a role="menuitem" href="${url('/articles/building-skull-castle-axiom-case-study.html')}">Skull Castle - Axiom Case Study</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="${url('/contact.html')}" class="nav-link" data-page="contact">Contact</a>
                </li>
            </ul>
            <div class="nav-toggle" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>`;
    
    // Insert navbar into the navbar container
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
    } else {
        // Fallback: insert at beginning of body
        document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    }
    
    // Set active page
    if (activePage) {
        const activeLink = document.querySelector(`[data-page="${activePage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Initialize mobile navigation after navbar is loaded
    initMobileNavigation();
    initServicesDropdown();
}

// Services / Articles dropdowns: hover on desktop (CSS), tap-toggle on mobile / keyboard
function initServicesDropdown() {
    const parents = document.querySelectorAll('.nav-item-dropdown');
    if (!parents.length) return;
    parents.forEach(function (parent) {
        const trigger = parent.querySelector('.nav-link-parent');
        if (!trigger) return;

        function toggle(e) {
            if (e.target !== trigger && !trigger.contains(e.target)) return;
            e.preventDefault();
            // Close any other open dropdowns
            parents.forEach(function (p) {
                if (p !== parent) {
                    p.classList.remove('is-open');
                    const t = p.querySelector('.nav-link-parent');
                    if (t) t.setAttribute('aria-expanded', 'false');
                }
            });
            const open = parent.classList.toggle('is-open');
            trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
        trigger.addEventListener('click', toggle);
        trigger.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { toggle(e); }
            if (e.key === 'Escape') {
                parent.classList.remove('is-open');
                trigger.setAttribute('aria-expanded', 'false');
            }
        });
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
        parents.forEach(function (parent) {
            if (!parent.contains(e.target)) {
                parent.classList.remove('is-open');
                const t = parent.querySelector('.nav-link-parent');
                if (t) t.setAttribute('aria-expanded', 'false');
            }
        });
    });
}

// Initialize mobile navigation (moved from script.js)
function initMobileNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!mobileMenu || !navMenu) return;
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}
