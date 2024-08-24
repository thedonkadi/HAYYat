window.addEventListener('load', function() {
    const heading = document.getElementById('fadeHeading');
    heading.classList.add('fade-in');
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button and the target section
    const scrollToFeaturesButton = document.getElementById('scrollToFeatures');
    const featuresSection = document.getElementById('features');

    // Add click event listener to the button
    scrollToFeaturesButton.addEventListener('click', function() {
        // Scroll smoothly to the features section
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    });
});