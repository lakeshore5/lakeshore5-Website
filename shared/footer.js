// Load footer component
function loadFooter() {
    console.log('Loading footer...');
    const footerContainer = document.getElementById('footer-container');
    
    if (!footerContainer) {
        console.error('Footer container not found!');
        return;
    }

    // Embed footer HTML directly to avoid file:// protocol issues
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>lakeshore5</h3>
                    <p>Professional Minecraft Builder</p>
                    <p>Building digital worlds since 2014</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="index.html">Portfolio</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Connect</h4>
                    <div class="connect-links">
                        <p><span class="connect-label">Website:</span> <a href="https://lakeshore5.com" class="connect-link">lakeshore5.com</a></p>
                        <p><span class="connect-label">YouTube:</span> <a href="https://www.youtube.com/@lakeshore5" target="_blank" class="connect-link social-link">@lakeshore5</a></p>
                        <p><span class="connect-label">Twitch:</span> <a href="https://www.twitch.tv/lakeshore5" target="_blank" class="connect-link social-link">lakeshore5</a></p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 lakeshore5. All rights reserved.</p>
            </div>
        </div>
    </footer>`;

    footerContainer.innerHTML = footerHTML;
    console.log('Footer loaded successfully');
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { loadFooter };
}
