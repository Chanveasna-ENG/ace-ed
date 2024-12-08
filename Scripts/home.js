function adjustHeroImageHeight() {
    var heroContent = document.querySelector('.hero__content');
    var heroImage = document.querySelector('.hero__image');

    // Calculate the height of the hero__content
    var contentHeight = heroContent.offsetHeight;

    // Set the height of the hero__image to match the hero__content
    heroImage.style.height = contentHeight + 'px';
}

// Function to hide the image
function hideHeroImage() {
    var heroImage = document.querySelector('.hero__image');
    heroImage.classList.add('none');
}

// Function to show the image
function showHeroImage() {
    var heroImage = document.querySelector('.hero__image');
    heroImage.classList.remove('none');
    adjustHeroImageHeight();
}

// Debounce function to limit the rate at which a function can fire
function debounce(func, wait) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

// Adjust the height on page load
window.addEventListener('load', function() {
    adjustHeroImageHeight();
    showHeroImage();
});

// Hide the image on window resize
window.addEventListener('resize', hideHeroImage);

// Show the image and adjust the height after resizing stops
window.addEventListener('resize', debounce(showHeroImage, 200));