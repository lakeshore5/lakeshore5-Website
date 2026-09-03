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
        pageUrl: 'projects/loriostrond.html',
        description: 'Loriostrond, the Vaulted City of Dreams, is majestic elven stronghold nestled in the heart of war-torn lands. This build showcases intricate architectural details inspired by Tolkien\'s Middle-earth, featuring soaring spires, elegant bridges, and harmonious integration with the natural landscape. The design emphasizes organic curves and natural materials, creating a living fortress that feels both grand and welcoming.\n\nBuilt on athion.net, version 1.12.2\nPlot size is 1225x1225\nRanked to Grand Creator',
        images: [
            'builds/athion-builds/Loriostrond/LoriostrondNew.webp',
            'builds/athion-builds/Loriostrond/LoriostrondNewAerial.webp',
            'builds/athion-builds/Loriostrond/LoriostrondNewTerra.webp',
            'builds/athion-builds/Loriostrond/LoriostrondNewSide.webp',
            'builds/athion-builds/Loriostrond/LoriostrondNewRear.webp',
            'builds/athion-builds/Loriostrond/LoriostrondNewCliffs.webp',
            'builds/athion-builds/Loriostrond/LoriostrondNewTerraSide.webp',
            'builds/athion-builds/Loriostrond/LoriostrondNewForest.webp',
            'builds/athion-builds/Loriostrond/LoriostrondNewGarden.webp',
            'builds/athion-builds/Loriostrond/LoriostrondNewTerraDetails.webp',
            'builds/athion-builds/Loriostrond/2025-09-28_03.45.38.webp',
            'builds/athion-builds/Loriostrond/2025-09-28_03.50.43.webp',
            'builds/athion-builds/Loriostrond/F38A1212-357A-49DC-9B6B-49E8E30EC118.webp',
            'builds/athion-builds/Loriostrond/DE517882-5A17-4025-B7B6-D0A90256E342.webp',
            'builds/athion-builds/Loriostrond/A54345AB-9C23-4922-B909-1F3A203B0E91.webp',
            'builds/athion-builds/Loriostrond/54A2F9D5-EB08-45A1-A5A6-A3CDE6DE13D2.webp',
            'builds/athion-builds/Loriostrond/6BDBA87F-774B-4C79-A649-5166F6076A0E.webp'
        ]
    },
    'aurelios': {
        title: 'Aurelios The Lost City',
        pageUrl: 'projects/aurelios.html',
        description: 'An underwater metropolis that once thrived beneath the waves, now partially reclaimed by the ocean. This ambitious build combines classical architecture with aquatic elements, featuring grand colonnades, sunken plazas, and mysterious ruins. Every major structure in the city is fully built out on the interior as well, with detailed chambers, sunken halls, and inhabited spaces throughout, so the ruins feel like a living lost civilization rather than a shell of one. The attention to detail in both the architectural elements and the underwater atmosphere creates a truly immersive experience.\n\nBuilt on athion.net, version 1.12.2\nPlot size 609x609',
        images: [
            'builds/athion-builds/Aurelios_the_Lost_City/Atlantis.webp',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisAerial.webp',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisBack.webp',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisBackCliff.webp',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisBoat.webp',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisCity.webp',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisGround.webp',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisInterior.webp',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisNecropolis.webp',
            'builds/athion-builds/Aurelios_the_Lost_City/AtlantisTerra.webp'
        ]
    },
    'heliox-station': {
        title: 'Heliox Station',
        pageUrl: 'projects/heliox-station.html',
        description: 'A massive orbital research facility suspended in the void of space, Heliox Station represents humanity\'s furthest reach into the cosmos. This ambitious sci-fi build features sleek industrial architecture, advanced docking systems, and cutting-edge research laboratories. The station\'s modular design showcases both functional engineering and aesthetic beauty, with sweeping curves and geometric precision that capture the essence of future space exploration.\n\nBuilt on athion.net, version 1.12.2',
        images: [
            'builds/athion-builds/Heliox_Station/SpaceCinematic.webp',
            'builds/athion-builds/Heliox_Station/SpaceBuild.webp',
            'builds/athion-builds/Heliox_Station/SpaceTerra.webp',
            'builds/athion-builds/Heliox_Station/SpaceShip.webp',
            'builds/athion-builds/Heliox_Station/SpaceAerial.webp',
            'builds/athion-builds/Heliox_Station/SpaceMap.webp'
        ]
    },
    'yuanhua-pagoda': {
        title: 'Yuanhua Pagoda',
        pageUrl: 'projects/yuanhua-pagoda.html',
        description: 'A magnificent traditional Chinese pagoda that embodies the essence of ancient oriental architecture with meticulous attention to detail. This multi-tiered structure showcases intricate wooden frameworks, elegant curved rooflines, and ornate decorative elements that reflect centuries of architectural tradition. Particular care was given to the small-scale detailing throughout the build, from hand-crafted latticework and layered roof tiles to the carefully composed interiors, where furnishings, lanterns, and decorative accents bring each room to life. The pagoda stands as a testament to the harmony between natural materials and sophisticated design, featuring traditional landscaping and mythical dragon motifs that enhance its cultural authenticity.\n\nBuilt on the Bakery server, 2024\nPlot size 501x501',
        images: [
            'builds/personal-projects/Yuanhua_Pagoda/OrientalCinematic.webp',
            'builds/personal-projects/Yuanhua_Pagoda/OrientalAerial.webp',
            'builds/personal-projects/Yuanhua_Pagoda/OrientalDragon.webp',
            'builds/personal-projects/Yuanhua_Pagoda/OrientalBuild.webp',
            'builds/personal-projects/Yuanhua_Pagoda/OrientalImmersive1.webp',
            'builds/personal-projects/Yuanhua_Pagoda/OrientalImmersive2.webp',
            'builds/personal-projects/Yuanhua_Pagoda/OrientalInterior.webp',
            'builds/personal-projects/Yuanhua_Pagoda/OrientalInterior2.webp',
            'builds/personal-projects/Yuanhua_Pagoda/OrientalInterior3.webp'
        ]
    },
    'helen-of-troy': {
        title: 'Helen of Troy Organic Showcase',
        pageUrl: 'projects/helen-of-troy.html',
        description: 'An organic terrain and character showcase inspired by the legendary Helen of Troy, whose face launched a thousand ships. This piece is part of an ongoing series of builds drawing from the epics of Homer, reimagining the myths of the Iliad and the Odyssey through large-scale Minecraft artistry. The showcase highlights sculpted organic forms, expressive silhouettes, and carefully layered detailing designed to translate the emotional weight of Homeric storytelling into a fully three-dimensional scene.\n\nBuilt in 2026 on BuildersRefuge, Minecraft version 1.21.11\nPart of an ongoing project inspired by the works of Homer',
        images: [
            'builds/personal-projects/HelenOfTroyOrganic/WomanOrganic.webp'
        ]
    },
    'adventus-mortis': {
        title: 'Adventus Mortis',
        pageUrl: 'projects/adventus-mortis.html',
        description: 'Inspired by the Monument to Cardinal Cinzio Aldobrandini, San Pietro in Vincoli, this tribute to the Angel of Death seamlessly integrates baroque altar designs with large scale organics and plantlife to create a dark, foreboding atmosphere. The harsh contrast of light and dark is reminiscent of chiaroscuro art works.\n\nBuilt in 2024 on BuildersRefuge.',
        images: [
            'builds/personal-projects/Adventus_Mortis/DeathAltar.webp'
        ]
    },
    'palais-lumiere': {
        title: 'Palais Lumière',
        pageUrl: 'projects/palais-lumiere.html',
        description: 'An elegant French baroque palace showcasing the grandeur and sophistication of classical European architecture. This magnificent structure features ornate decorative elements and symmetrical facades that embody the opulence of French palatial design. Every detail has been meticulously crafted to capture the essence of aristocratic elegance and architectural refinement.\n\nBuilt in 2020 on BuildersRefuge\nInspired by French baroque architecture',
        images: [
            'builds/personal-projects/Palais_Lumière/LumCard.webp',
            'builds/personal-projects/Palais_Lumière/LumFront.webp',
            'builds/personal-projects/Palais_Lumière/LumAngle.webp',
            'builds/personal-projects/Palais_Lumière/LumArch.webp',
            'builds/personal-projects/Palais_Lumière/LumFount.webp',
            'builds/personal-projects/Palais_Lumière/LumSide.webp',
            'builds/personal-projects/Palais_Lumière/LumAerial.webp'
        ]
    },
    'christmas-build-battle': {
        title: 'Christmas 2231',
        pageUrl: 'projects/christmas-2231.html',
        description: 'A collaborative futuristic Christmas wonderland that reimagines holiday traditions in the year 2231. Partnering with creeper5777, we blended festive cheer with cutting-edge sci-fi architecture to create a complete space-age Christmas village. The project features advanced structures, floating islands, and innovative holiday designs that demonstrate rapid creative execution while maintaining exceptional attention to detail and thematic consistency. Every building across the village is fully built out on the inside as well, with fully detailed interiors - decorated homes, festive shops, and themed rooms - so the entire wonderland is explorable from the storefronts all the way through to the private spaces.\n\nBuilt in Minecraft 1.12.2 as a 2-person collaborative build battle\nCompleted in under one week',
        images: [
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmas.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasCinematic.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasAngle.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasBack.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasLow.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasTop.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasFacade.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasDetail.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasInterior.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasCandy.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasShip.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasIslands.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasBot.webp',
            'builds/xenos-builds/Futuristic_Christmas_BuildBattle/SpaceChristmasVillage.webp'
        ]
    },
    'cma': {
        title: 'CMA NFT World',
        pageUrl: 'projects/cma-world.html',
        description: 'An expansive and immersive Minecraft world showcasing diverse landscapes with multiple biomes, settlements, and architectural styles seamlessly integrated into a cohesive design. This comprehensive project includes everything from grand palaces and bustling villages to serene lakes and dramatic terraforming, creating a complete virtual ecosystem ready for exploration and interaction. Every major structure across the map is fully built out on the inside as well as the outside, with detailed interiors throughout the palaces, villages, PvP areas, and player plots so no space feels like an empty shell.\n\nCommissioned NFT Worlds project for CMA, built with creeper5777 (XenosBuilds).',
        images: [
            'builds/xenos-builds/CMA/CMACinematic.webp',
            'builds/xenos-builds/CMA/CMAImmersive.webp',
            'builds/xenos-builds/CMA/CMAAerial.webp',
            'builds/xenos-builds/CMA/CMASide.webp',
            'builds/xenos-builds/CMA/CMAClose.webp',
            'builds/xenos-builds/CMA/CMATerra.webp',
            'builds/xenos-builds/CMA/CMAPalace.webp',
            'builds/xenos-builds/CMA/CMALake.webp',
            'builds/xenos-builds/CMA/CMAVillage.webp',
            'builds/xenos-builds/CMA/CMAPlots.webp',
            'builds/xenos-builds/CMA/CMAPVP.webp'
        ]
    },
    'futurex': {
        title: 'FutureX',
        pageUrl: 'projects/futurex.html',
        description: 'A cutting-edge futuristic city showcasing advanced technology and sleek architectural design. This ambitious project features towering skyscrapers, high-tech laboratories, defensive bastions, and interconnected urban districts that create a cohesive vision of tomorrow. Every skyscraper, lab, and bastion is fully built out on the interior as well, with detailed rooms, corridors, and functional spaces throughout, giving players a truly complete sci-fi city to explore rather than a hollow skyline. The build demonstrates innovative use of modern materials and lighting to achieve a truly immersive sci-fi atmosphere with expansive city planning.\n\nXenosBuilds project with creeper5777, designed as an interactive RPG environment.',
        images: [
            'builds/xenos-builds/FutureX/FutureX.webp',
            'builds/xenos-builds/FutureX/FutureXCity.webp',
            'builds/xenos-builds/FutureX/FutureXLab.webp',
            'builds/xenos-builds/FutureX/FutureXClose.webp',
            'builds/xenos-builds/FutureX/FutureXAerial.webp',
            'builds/xenos-builds/FutureX/FutureXBastion.webp'
        ]
    },
    'xenos-castle': {
        title: 'Xenos Castle',
        pageUrl: 'projects/xenos-castle.html',
        description: 'A formidable medieval fortress designed for epic siege warfare and strategic combat. This imposing castle features massive defensive walls, towering battlements, and tactical positioning that creates the perfect battlefield for intense multiplayer encounters. The entire castle is fully built out on the inside, with detailed great halls, barracks, corridors, and chamber-to-chamber interiors that allow combat and exploration to flow seamlessly from the outer walls all the way into the keep. The design balances historical authenticity with gameplay functionality, offering multiple levels of engagement from ground assaults to aerial perspectives.\n\nXenosBuilds project with creeper5777, designed as an interactive castle siege minigame.\nBuilt in one day.',
        images: [
            'builds/xenos-builds/XenosCastle/XenosCastle.webp',
            'builds/xenos-builds/XenosCastle/XenosCastleGround.webp',
            'builds/xenos-builds/XenosCastle/XenosCastleInside.webp',
            'builds/xenos-builds/XenosCastle/XenosCastleAerial.webp',
            'builds/xenos-builds/XenosCastle/XenosCastleOut.webp'
        ]
    },
    'dragon-point-castle': {
        title: 'Dragon Point Castle',
        pageUrl: 'projects/dragon-point-castle.html',
        description: 'A magnificent dragon-themed castle that combines medieval fortress architecture with fantastical dragon motifs. This impressive structure features towering spires, intricate stonework, and dramatic dragon sculptures integrated into the castle\'s design. The build is fully realized on the inside as well, with completely detailed interiors throughout every tower, hall, and chamber, so the castle reads as a living fortress rather than a facade. The build showcases both defensive capabilities and mythical grandeur, creating a perfect balance between functionality and fantasy aesthetics.\n\nBuilt as a collaboration with creeper5777, alaiwe, and mengzach.',
        images: [
            'builds/xenos-builds/DragonPoint/DragonPoint.webp',
            'builds/xenos-builds/DragonPoint/DragonPointSide.webp',
            'builds/xenos-builds/DragonPoint/DragonPointBack.webp',
            'builds/xenos-builds/DragonPoint/DragonPointDragon.webp',
            'builds/xenos-builds/DragonPoint/DragonPointVillage.webp',
            'builds/xenos-builds/DragonPoint/DragonPointGround.webp',
            'builds/xenos-builds/DragonPoint/DragonPointAerial.webp'
        ]
    },
    'royal-palace': {
        title: 'Royal Palace',
        pageUrl: 'projects/royal-palace.html',
        description: 'A majestic royal palace showcasing opulent architecture and regal grandeur. This magnificent structure features elegant facades, grand courtyards, and intricate detailing that embody the essence of royal sophistication. The palace is fully built out on the inside as well, with a complete set of luxurious interiors - throne rooms, ballrooms, private chambers, and connecting corridors - all designed to the same standard as the exterior so guests can wander the entire palace without ever hitting an empty room. From aerial perspectives to intimate interior spaces, every angle reveals the meticulous craftsmanship and architectural excellence that defines true palatial design.\n\nCommissioned for Nitric Concepts for the Minecraft Marketplace.',
        images: [
            'builds/marketplace-projects/NitricPalace/NitricPalace.webp',
            'builds/marketplace-projects/NitricPalace/NitricPalaceCenter.webp',
            'builds/marketplace-projects/NitricPalace/NitricPalaceDepth.webp',
            'builds/marketplace-projects/NitricPalace/NitricPalaceAngle.webp',
            'builds/marketplace-projects/NitricPalace/NitricPalaceSide.webp',
            'builds/marketplace-projects/NitricPalace/NitricPalaceAerial.webp',
            'builds/marketplace-projects/NitricPalace/NitricPalaceInterior.webp'
        ]
    },
    'skuxxverse': {
        title: 'SkuxxVerse',
        pageUrl: 'projects/skuxxverse.html',
        description: 'An expansive virtual world showcasing diverse environments and immersive gameplay experiences. This comprehensive project demonstrates advanced world-building techniques and creative design solutions that push the boundaries of what\'s possible in Minecraft. Every major structure across the world is fully built out on the interior, with detailed rooms, shops, and interactive spaces throughout, ensuring the experience holds up just as strongly indoors as it does from the outside. The build features multiple biomes, interactive elements, and carefully crafted landscapes that create a truly engaging virtual universe.\n\nNFT Worlds commission for XenosBuilds with creeper5777 and Kimbert.',
        images: [
            'builds/xenos-builds/SkuxxVerse/SkuxxVerse.webp',
            'builds/xenos-builds/SkuxxVerse/SkuxxverseAerial.webp',
            'builds/xenos-builds/SkuxxVerse/Screenshot1.webp',
            'builds/xenos-builds/SkuxxVerse/Screenshot2.webp',
            'builds/xenos-builds/SkuxxVerse/Screenshot3.webp',
            'builds/xenos-builds/SkuxxVerse/Screenshot4.webp',
            'builds/xenos-builds/SkuxxVerse/Screenshot5.webp',
            'builds/xenos-builds/SkuxxVerse/Screenshot6.webp',
            'builds/xenos-builds/SkuxxVerse/Screenshot7.webp'
        ]
    },
    'skull-castle': {
        title: 'Skull Castle',
        pageUrl: 'projects/skull-castle.html',
        description: 'A menacing fortress that embodies dark architectural mastery with intricate skull motifs and gothic design elements. This imposing structure showcases detailed stonework, dramatic spires, and ominous atmospheric elements that create a truly formidable presence. Every angle reveals the meticulous craftsmanship that brings this sinister castle to life.\n\nDemo project for an upcoming 11,000x11,000 map. Built as a collaboration with InfinityBuilds and Jetblade3000 in 3 days.',
        images: [
            'builds/personal-projects/Skull_Castle/SkullCastle.webp',
            'builds/personal-projects/Skull_Castle/SkullCastleSide.webp',
            'builds/personal-projects/Skull_Castle/SkullCastleBackSide.webp',
            'builds/personal-projects/Skull_Castle/SkullCastleBackAerial.webp',
            'builds/personal-projects/Skull_Castle/SkullCastleBack.webp',
            'builds/personal-projects/Skull_Castle/SkullCastleFrontDetails.webp',
            'builds/personal-projects/Skull_Castle/SkullCastleBackDetails.webp',
            'builds/personal-projects/Skull_Castle/SkullCastleTopDetails.webp'
        ]
    },
    'sunset-isle': {
        title: 'Sunset Isle',
        pageUrl: 'projects/sunset-isle.html',
        description: 'A serene tropical paradise that captures the tranquil beauty of an island getaway at golden hour. This charming build features pristine beaches, lush vegetation, and carefully designed pathways that invite exploration. The warm lighting and natural terrain create a peaceful atmosphere perfect for relaxation and contemplation.\n\nBuilt for fun in one day.',
        images: [
            'builds/personal-projects/SunsetIsle/FrontSS.webp',
            'builds/personal-projects/SunsetIsle/SideSS.webp',
            'builds/personal-projects/SunsetIsle/BackSS.webp',
            'builds/personal-projects/SunsetIsle/TerraSS.webp',
            'builds/personal-projects/SunsetIsle/PathSS.webp',
            'builds/personal-projects/SunsetIsle/AerialSS.webp'
        ]
    },
    'mrbeast': {
        title: 'MrBeast Competition',
        pageUrl: 'projects/mrbeast-competition.html',
        description: 'As a part of Mr. Beast\'s 2 week long, 1500x1500, prestigious Countries Build Competition, lakeshore5 joined an all star lineup to compete as, and against, the other absolute top global builders in the world. The Scope of the project was to capture the essence of the United States in a single build. lakeshore5 contributed by doing 100% of the terraforming (in less than 2 days), several city blocks, the Seattle Space needle, the composition for the 6 surrounding Islands (The Northwest, the Midwest, Hollywood, Hawaii, The East Coast, and The South), The Alamo and surrounding structures, Uncle Sam, the Washington Memorial and other monumental east coast architecture, atmosphereic details, pasting in all the lovely trees and organic elements (designed by the esteemed InfinityBuilds), and a large amount of the touch up, integration, and general thematic elements. lakeshore5 was thrilled to work with some of his closest colleagues in InfinityBuilds and creeper5777 on a project of just magnitude, and was happy to be counted among the best builders alive.',
        images: [
            'builds/personal-projects/MrBeast/BeastFront.webp',
            'builds/personal-projects/MrBeast/Beast3.webp',
            'builds/personal-projects/MrBeast/NW1.webp',
            'builds/personal-projects/MrBeast/NW2.webp',
            'builds/personal-projects/MrBeast/Beast4.webp',
            'builds/personal-projects/MrBeast/NW3.webp',
            'builds/personal-projects/MrBeast/NW4.webp',
            'builds/personal-projects/MrBeast/Beast5.webp',
            'builds/personal-projects/MrBeast/MW1.webp',
            'builds/personal-projects/MrBeast/MW2.webp',
            'builds/personal-projects/MrBeast/Beast6.webp',
            'builds/personal-projects/MrBeast/MW3.webp',
            'builds/personal-projects/MrBeast/MW4.webp',
            'builds/personal-projects/MrBeast/Beast7.webp',
            'builds/personal-projects/MrBeast/EC1.webp',
            'builds/personal-projects/MrBeast/EC2.webp',
            'builds/personal-projects/MrBeast/Beast8.webp',
            'builds/personal-projects/MrBeast/EC3.webp',
            'builds/personal-projects/MrBeast/Cali1.webp',
            'builds/personal-projects/MrBeast/Cali2.webp',
            'builds/personal-projects/MrBeast/Beast9.webp',
            'builds/personal-projects/MrBeast/Cali3.webp',
            'builds/personal-projects/MrBeast/Cali4.webp',
            'builds/personal-projects/MrBeast/Beast10.webp',
            'builds/personal-projects/MrBeast/Cali5.webp',
            'builds/personal-projects/MrBeast/Cali6.webp',
            'builds/personal-projects/MrBeast/Beast11.webp',
            'builds/personal-projects/MrBeast/South1.webp',
            'builds/personal-projects/MrBeast/South2.webp',
            'builds/personal-projects/MrBeast/Beast12.webp',
            'builds/personal-projects/MrBeast/South3.webp',
            'builds/personal-projects/MrBeast/South4.webp',
            'builds/personal-projects/MrBeast/Beast13.webp',
            'builds/personal-projects/MrBeast/Hawaii1.webp',
            'builds/personal-projects/MrBeast/Hawaii2.webp',
            'builds/personal-projects/MrBeast/Islands1.webp',
            'builds/personal-projects/MrBeast/Islands2.webp',
            'builds/personal-projects/MrBeast/Animal1.webp',
            'builds/personal-projects/MrBeast/Animal2.webp',
            'builds/personal-projects/MrBeast/Animal3.webp',
            'builds/personal-projects/MrBeast/BeastFinal.webp'
        ]
    }
};

// Mobile navigation is now handled by shared/navbar.js

// Initialize build cards interaction
function initBuildCards() {
    const buildCards = document.querySelectorAll('.build-card');

    buildCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const buildId = this.getAttribute('data-build');
            const build = buildData[buildId];
            if (!build) return;
            // If a dedicated case-study page exists, navigate to it.
            if (build.pageUrl) {
                // Allow cmd/ctrl-click behavior for new tab via anchor fallback if present
                window.location.href = build.pageUrl;
                return;
            }
            openBuildModal(buildId);
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
