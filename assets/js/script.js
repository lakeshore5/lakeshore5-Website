// lakeshore5 Website JavaScript
// Professional Minecraft Builder Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize build modal system
    initBuildModals();
    
    // Initialize build cards interaction
    initBuildCards();
    
    // Initialize image carousel
    initImageCarousel();
});

// Build data with descriptions and image lists
const buildData = {
    'loriostrond': {
        title: 'Loriostrond',
        description: 'Loriostrond, the Vaulted City of Dreams, is majestic elven stronghold nestled in the heart of war-torn lands. This build showcases intricate architectural details inspired by Tolkien\'s Middle-earth, featuring soaring spires, elegant bridges, and harmonious integration with the natural landscape. The design emphasizes organic curves and natural materials, creating a living fortress that feels both grand and welcoming.\n\nBuilt on athion.net, version 1.12.2\nPlot size is 1225x1225\nRanked to Grand Creator',
        images: [
            'builds/athion-builds/Loriostrond/Loriostrond.png',
            'builds/athion-builds/Loriostrond/LoriostrondAerialReal.png',
            'builds/athion-builds/Loriostrond/LoriostrondTerra.png',
            'builds/athion-builds/Loriostrond/LoriostrondRear.png',
            'builds/athion-builds/Loriostrond/LoriostrondCliffs.png',
            'builds/athion-builds/Loriostrond/LoriostrondSide.png',
            'builds/athion-builds/Loriostrond/LoriostrondBack.png',
            'builds/athion-builds/Loriostrond/LoriostrondForest.png',
            'builds/athion-builds/Loriostrond/LoriostrondGarden.png',
            'builds/athion-builds/Loriostrond/LoriostrondTerraDetails.png',
            'builds/athion-builds/Loriostrond/2025-09-28_03.45.38.png',
            'builds/athion-builds/Loriostrond/2025-09-28_03.50.43.png',
            'builds/athion-builds/Loriostrond/F38A1212-357A-49DC-9B6B-49E8E30EC118.jpeg',
            'builds/athion-builds/Loriostrond/DE517882-5A17-4025-B7B6-D0A90256E342.jpeg',
            'builds/athion-builds/Loriostrond/A54345AB-9C23-4922-B909-1F3A203B0E91.jpeg',
            'builds/athion-builds/Loriostrond/54A2F9D5-EB08-45A1-A5A6-A3CDE6DE13D2.jpeg',
            'builds/athion-builds/Loriostrond/6BDBA87F-774B-4C79-A649-5166F6076A0E.jpeg'
        ]
    },
    'aurelios': {
        title: 'Aurelios the Lost City',
        description: 'An underwater metropolis that once thrived beneath the waves, now partially reclaimed by the ocean. This ambitious build combines classical architecture with aquatic elements, featuring grand colonnades, sunken plazas, and mysterious ruins. The attention to detail in both the architectural elements and the underwater atmosphere creates a truly immersive experience.\n\nBuilt on athion.net, version 1.12.2\nPlot size 609x609',
        images: [
            'builds/athion-builds/Aurelios_the_Lost_City/Atlantis.png',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisAerial.png',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisBack.png',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisBackCliff.png',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisBoat.png',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisCity.png',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisGround.png',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisInterior.png',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisNecropolis.png',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisTerra.png'
        ]
    },
    'adventus-mortis': {
        title: 'Adventus Mortis',
        description: 'Inspired by the Monument to Cardinal Cinzio Aldobrandini, San Pietro in Vincoli, this tribute to the Angel of Death seamlessly integrates baroque altar designs with large scale organics and plantlife to create a dark, foreboding atmosphere. The harsh contrast of light and dark is reminiscent of chiaroscuro art works.\n\nBuilt in 2024 on BuildersRefuge.',
        images: [
            'builds/personal-projects/Adventus_Mortis/DeathAltar.png'
        ]
    }
};

// Mobile navigation is now handled by shared/navbar.js

// Initialize build cards interaction
function initBuildCards() {
    const buildCards = document.querySelectorAll('.build-card');
    
    buildCards.forEach(card => {
        card.addEventListener('click', function() {
            const buildId = this.getAttribute('data-build');
            if (buildData[buildId]) {
                openBuildModal(buildId);
            }
        });
    });
}

// Initialize build modal system
function initBuildModals() {
    const modal = document.getElementById('buildModal');
    const closeBtn = document.querySelector('.close');
    
    if (!modal || !closeBtn) return;
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', closeBuildModal);
    
    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeBuildModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeBuildModal();
        }
    });
}

// Open build modal with specific build data
function openBuildModal(buildId) {
    const modal = document.getElementById('buildModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');
    const thumbnailContainer = document.querySelector('.image-thumbnails');
    
    if (!modal || !modalTitle || !modalDescription || !modalImage || !thumbnailContainer) return;
    
    const build = buildData[buildId];
    
    // Set modal content
    modalTitle.textContent = build.title;
    modalDescription.innerHTML = `<p>${build.description}</p>`;
    
    // Set up images
    if (build.images.length > 0) {
        modalImage.src = build.images[0];
        modalImage.alt = build.title;
        modalImage.setAttribute('data-current-index', '0');
        
        // Create thumbnails
        thumbnailContainer.innerHTML = '';
        build.images.forEach((imageSrc, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = imageSrc;
            thumbnail.alt = `${build.title} - Image ${index + 1}`;
            thumbnail.className = 'thumbnail';
            if (index === 0) thumbnail.classList.add('active');
            
            thumbnail.addEventListener('click', function() {
                showImage(index);
            });
            
            thumbnailContainer.appendChild(thumbnail);
        });
    }
    
    // Store current build data for carousel
    window.currentBuildImages = build.images;
    window.currentImageIndex = 0;
    
    // Show modal first
    modal.style.display = 'block';
    
    // Reset scroll position to top for all scrollable elements in modal
    // Use setTimeout to ensure DOM is updated before scroll reset
    setTimeout(() => {
        const modalContent = modal.querySelector('.modal-content');
        const modalBody = modal.querySelector('.modal-body');
        const modalInfo = modal.querySelector('.modal-info');
        
        // Reset scroll for modal itself
        modal.scrollTop = 0;
        
        // Reset scroll for modal content
        if (modalContent) {
            modalContent.scrollTop = 0;
        }
        
        // Reset scroll for modal body
        if (modalBody) {
            modalBody.scrollTop = 0;
        }
        
        // Reset scroll for modal info section (this is the main scrolling element)
        if (modalInfo) {
            modalInfo.scrollTop = 0;
        }
    }, 10);
}

// Close build modal
function closeBuildModal() {
    const modal = document.getElementById('buildModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Show specific image in carousel
function showImage(index) {
    if (!window.currentBuildImages) return;
    
    const modalImage = document.getElementById('modalImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (!modalImage) return;
    
    // Update main image
    modalImage.src = window.currentBuildImages[index];
    modalImage.setAttribute('data-current-index', index);
    
    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    
    // Auto-scroll to active thumbnail
    if (thumbnails[index]) {
        thumbnails[index].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    
    window.currentImageIndex = index;
}

// Initialize image carousel controls
function initImageCarousel() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (!prevBtn || !nextBtn) return;
    
    prevBtn.addEventListener('click', function() {
        if (!window.currentBuildImages) return;
        
        let newIndex = window.currentImageIndex - 1;
        if (newIndex < 0) {
            newIndex = window.currentBuildImages.length - 1;
        }
        
        showImage(newIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        if (!window.currentBuildImages) return;
        
        let newIndex = window.currentImageIndex + 1;
        if (newIndex >= window.currentBuildImages.length) {
            newIndex = 0;
        }
        
        showImage(newIndex);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('buildModal');
        if (!modal || modal.style.display !== 'block') return;
        
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
}

// Add smooth scrolling for any anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
