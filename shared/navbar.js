// Shared Navbar Component Loader
function loadNavbar(activePage) {
    // For now, let's embed the navbar directly to test
    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="index.html">
                    <img src="assets/images/Logo.png" alt="lakeshore5 logo" class="nav-logo-img">
                    <span>lakeshore5</span>
                </a>
            </div>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="index.html" class="nav-link" data-page="portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a href="about.html" class="nav-link" data-page="about">About</a>
                </li>
                <li class="nav-item">
                    <a href="contact.html" class="nav-link" data-page="contact">Contact</a>
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
