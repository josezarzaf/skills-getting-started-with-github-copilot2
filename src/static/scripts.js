// GitHub Copilot Skills Exercise JavaScript
// This file demonstrates interactive features generated with Copilot assistance

function showMessage() {
    const messageDisplay = document.getElementById('message-display');
    const messages = [
        "🤖 This message was suggested by GitHub Copilot!",
        "🚀 Copilot helps you code faster and smarter!",
        "✨ AI-powered development is the future!",
        "🎯 You're mastering GitHub Copilot skills!",
        "💡 Copilot turns your comments into code!"
    ];
    
    // Get a random message
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Display the message with animation
    messageDisplay.innerHTML = `
        <h4>🎉 Copilot Says:</h4>
        <p>${randomMessage}</p>
        <small>Generated at: ${new Date().toLocaleTimeString()}</small>
    `;
    
    messageDisplay.style.display = 'block';
    messageDisplay.style.opacity = '0';
    
    // Fade in animation
    setTimeout(() => {
        messageDisplay.style.transition = 'opacity 0.5s ease-in-out';
        messageDisplay.style.opacity = '1';
    }, 50);
}

// Add some interactive behavior when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to navigation links
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            if (!this.classList.contains('current')) {
                this.style.transform = 'translateY(-2px)';
                this.style.boxShadow = '0 4px 12px rgba(3, 102, 214, 0.3)';
            }
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add a welcome animation to feature items
    const featureItems = document.querySelectorAll('.features-list li, .info-section li');
    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease-out';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 100 + 200);
    });
});

// Function to simulate Copilot code generation
function generateCode() {
    const codeExamples = [
        "def hello_world():\n    print('Hello from Copilot!')",
        "const greeting = (name) => `Hello ${name}!`;",
        "function calculateSum(a, b) {\n    return a + b;\n}",
        "class CopilotDemo:\n    def __init__(self):\n        self.name = 'GitHub Copilot'"
    ];
    
    return codeExamples[Math.floor(Math.random() * codeExamples.length)];
}