// lakeshore5 Website JavaScript
// Professional Minecraft Builder Portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize build modal system
    initBuildModals();
    
    // Initialize build cards interaction
    initBuildCards();
    
    // Initialize image carousel
    initImageCarousel();
    
    // Initialize image zoom functionality
    initImageZoom();
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
        title: 'Aurelios The Lost City',
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
    'heliox-station': {
        title: 'Heliox Station',
        description: 'A massive orbital research facility suspended in the void of space, Heliox Station represents humanity\'s furthest reach into the cosmos. This ambitious sci-fi build features sleek industrial architecture, advanced docking systems, and cutting-edge research laboratories. The station\'s modular design showcases both functional engineering and aesthetic beauty, with sweeping curves and geometric precision that capture the essence of future space exploration.\n\nBuilt on athion.net, version 1.12.2',
        images: [
            'builds/athion-builds/Heliox_Station/SpaceCinematic.png',
            'builds/athion-builds/Heliox_Station/SpaceBuild.png',
            'builds/athion-builds/Heliox_Station/SpaceTerra.png',
            'builds/athion-builds/Heliox_Station/SpaceShip.png'
        ]
    },
    'yuanhua-pagoda': {
        title: 'Yuanhua Pagoda',
        description: 'A magnificent traditional Chinese pagoda that embodies the essence of ancient oriental architecture with meticulous attention to detail. This multi-tiered structure showcases intricate wooden frameworks, elegant curved rooflines, and ornate decorative elements that reflect centuries of architectural tradition. The pagoda stands as a testament to the harmony between natural materials and sophisticated design, featuring traditional landscaping and mythical dragon motifs that enhance its cultural authenticity.\n\nBuilt on the Bakery server, 2024\nPlot size 501x501',
        images: [
            'builds/personal-projects/Yuanhua_Pagoda/OrientalCinematic.png',
            'builds/personal-projects/Yuanhua_Pagoda/OrientalAerial.png',
            'builds/personal-projects/Yuanhua_Pagoda/OrientalDragon.png'
        ]
    },
    'adventus-mortis': {
        title: 'Adventus Mortis',
        description: 'Inspired by the Monument to Cardinal Cinzio Aldobrandini, San Pietro in Vincoli, this tribute to the Angel of Death seamlessly integrates baroque altar designs with large scale organics and plantlife to create a dark, foreboding atmosphere. The harsh contrast of light and dark is reminiscent of chiaroscuro art works.\n\nBuilt in 2024 on BuildersRefuge.',
        images: [
            'builds/personal-projects/Adventus_Mortis/DeathAltar.png'
        ]
    },
    'palais-lumiere': {
        title: 'Palais Lumière',
        description: 'An elegant French baroque palace showcasing the grandeur and sophistication of classical European architecture. This magnificent structure features ornate decorative elements and symmetrical facades that embody the opulence of French palatial design. Every detail has been meticulously crafted to capture the essence of aristocratic elegance and architectural refinement.\n\nBuilt in 2020 on BuildersRefuge\nInspired by French baroque architecture',
        images: [
            'builds/personal-projects/Palais_Lumière/FrenchFront.png',
            'builds/personal-projects/Palais_Lumière/FrenchBuild.png',
            'builds/personal-projects/Palais_Lumière/FrenchGate.png',
            'builds/personal-projects/Palais_Lumière/FrenchAesthetic.png',
            'builds/personal-projects/Palais_Lumière/FrenchAerial.png',
            'builds/personal-projects/Palais_Lumière/FrenchSide.png',
            'builds/personal-projects/Palais_Lumière/FrenchDetails.png'
        ]
    },
    'christmas-build-battle': {
        title: 'Christmas 2231',
        description: 'A collaborative futuristic Christmas wonderland that reimagines holiday traditions in the year 2231. Partnering with creeper5777, we blended festive cheer with cutting-edge sci-fi architecture to create a complete space-age Christmas village. The project features advanced structures, floating islands, and innovative holiday designs that demonstrate rapid creative execution while maintaining exceptional attention to detail and thematic consistency.\n\nBuilt in Minecraft 1.12.2 as a 2-person collaborative build battle\nCompleted in under one week',
        images: [
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmas.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasCinematic.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasAngle.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasBack.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasLow.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasTop.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasFacade.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasDetail.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasInterior.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasCandy.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasShip.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasIslands.png',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasBot.png'
        ]
    },
    'cma': {
        title: 'CMA NFT World',
        description: 'An expansive and immersive Minecraft world showcasing diverse landscapes with multiple biomes, settlements, and architectural styles seamlessly integrated into a cohesive design. This comprehensive project includes everything from grand palaces and bustling villages to serene lakes and dramatic terraforming, creating a complete virtual ecosystem ready for exploration and interaction.\n\nCommissioned NFT Worlds project for CMA, built with creeper5777 (XenosBuilds).',
        images: [
            'builds/xenos-builds/CMA/CMACinematic.png',
            'builds/xenos-builds/CMA/CMAImmersive.png',
            'builds/xenos-builds/CMA/CMAAerial.png',
            'builds/xenos-builds/CMA/CMASide.png',
            'builds/xenos-builds/CMA/CMAClose.png',
            'builds/xenos-builds/CMA/CMATerra.png',
            'builds/xenos-builds/CMA/CMAPalace.png',
            'builds/xenos-builds/CMA/CMALake.png',
            'builds/xenos-builds/CMA/CMAVillage.png',
            'builds/xenos-builds/CMA/CMAPlots.png',
            'builds/xenos-builds/CMA/CMAPVP.png'
        ]
    },
    'futurex': {
        title: 'FutureX',
        description: 'A cutting-edge futuristic city showcasing advanced technology and sleek architectural design. This ambitious project features towering skyscrapers, high-tech laboratories, defensive bastions, and interconnected urban districts that create a cohesive vision of tomorrow. The build demonstrates innovative use of modern materials and lighting to achieve a truly immersive sci-fi atmosphere with detailed interiors and expansive city planning.\n\nXenosBuilds project with creeper5777, designed as an interactive RPG environment.',
        images: [
            'builds/xenos-builds/FutureX/FutureX.png',
            'builds/xenos-builds/FutureX/FutureXCity.png',
            'builds/xenos-builds/FutureX/FutureXLab.png',
            'builds/xenos-builds/FutureX/FutureXClose.png',
            'builds/xenos-builds/FutureX/FutureXAerial.png',
            'builds/xenos-builds/FutureX/FutureXBastion.png'
        ]
    },
    'xenos-castle': {
        title: 'Xenos Castle',
        description: 'A formidable medieval fortress designed for epic siege warfare and strategic combat. This imposing castle features massive defensive walls, towering battlements, intricate interior chambers, and tactical positioning that creates the perfect battlefield for intense multiplayer encounters. The design balances historical authenticity with gameplay functionality, offering multiple levels of engagement from ground assaults to aerial perspectives.\n\nXenosBuilds project with creeper5777, designed as an interactive castle siege minigame.',
        images: [
            'builds/xenos-builds/XenosCastle/XenosCastle.png',
            'builds/xenos-builds/XenosCastle/XenosCastleGround.png',
            'builds/xenos-builds/XenosCastle/XenosCastleInside.png',
            'builds/xenos-builds/XenosCastle/XenosCastleAerial.png',
            'builds/xenos-builds/XenosCastle/XenosCastleOut.png'
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

// Initialize image zoom functionality
function initImageZoom() {
    let currentZoom = 1;
    let currentPanX = 0;
    let currentPanY = 0;
    
    document.addEventListener('wheel', function(e) {
        const modal = document.getElementById('buildModal');
        const modalImage = document.getElementById('modalImage');
        
        // Only zoom if modal is open and shift key is held
        if (!modal || modal.style.display !== 'block' || !e.shiftKey || !modalImage) {
            return;
        }
        
        e.preventDefault();
        
        const zoomSpeed = 0.1;
        const minZoom = 1;
        const maxZoom = 4;
        
        // Calculate new zoom level
        if (e.deltaY < 0) {
            // Zoom in
            currentZoom = Math.min(currentZoom + zoomSpeed, maxZoom);
        } else {
            // Zoom out
            currentZoom = Math.max(currentZoom - zoomSpeed, minZoom);
        }
        
        // Reset pan when zooming back to 1x
        if (currentZoom === minZoom) {
            currentPanX = 0;
            currentPanY = 0;
        }
        
        // Apply transform
        modalImage.style.transform = `scale(${currentZoom}) translate(${currentPanX}px, ${currentPanY}px)`;
        modalImage.style.cursor = currentZoom > 1 ? 'move' : 'default';
    });
    
    // Pan functionality when zoomed
    let isPanning = false;
    let lastPanX = 0;
    let lastPanY = 0;
    
    document.addEventListener('mousedown', function(e) {
        const modal = document.getElementById('buildModal');
        const modalImage = document.getElementById('modalImage');
        
        if (!modal || modal.style.display !== 'block' || e.target !== modalImage || currentZoom <= 1) {
            return;
        }
        
        isPanning = true;
        lastPanX = e.clientX;
        lastPanY = e.clientY;
        modalImage.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isPanning) return;
        
        const modalImage = document.getElementById('modalImage');
        if (!modalImage) return;
        
        const deltaX = e.clientX - lastPanX;
        const deltaY = e.clientY - lastPanY;
        
        currentPanX += deltaX / currentZoom;
        currentPanY += deltaY / currentZoom;
        
        modalImage.style.transform = `scale(${currentZoom}) translate(${currentPanX}px, ${currentPanY}px)`;
        
        lastPanX = e.clientX;
        lastPanY = e.clientY;
    });
    
    document.addEventListener('mouseup', function() {
        if (isPanning) {
            isPanning = false;
            const modalImage = document.getElementById('modalImage');
            if (modalImage && currentZoom > 1) {
                modalImage.style.cursor = 'move';
            }
        }
    });
    
    // Reset zoom when modal closes or image changes
    const originalCloseBuildModal = window.closeBuildModal;
    window.closeBuildModal = function() {
        currentZoom = 1;
        currentPanX = 0;
        currentPanY = 0;
        const modalImage = document.getElementById('modalImage');
        if (modalImage) {
            modalImage.style.transform = 'scale(1) translate(0px, 0px)';
            modalImage.style.cursor = 'default';
        }
        if (originalCloseBuildModal) originalCloseBuildModal();
    };
    
    // Reset zoom when changing images
    const originalShowImage = window.showImage;
    window.showImage = function(index) {
        currentZoom = 1;
        currentPanX = 0;
        currentPanY = 0;
        const modalImage = document.getElementById('modalImage');
        if (modalImage) {
            modalImage.style.transform = 'scale(1) translate(0px, 0px)';
            modalImage.style.cursor = 'default';
        }
        if (originalShowImage) originalShowImage(index);
    };
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
