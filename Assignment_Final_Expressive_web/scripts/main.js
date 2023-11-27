// Additional JavaScript to add/remove the 'visible' class to the images and poems when the user scrolls
function handleScroll() {
    const images = document.querySelectorAll('.image');
    const poems = document.querySelectorAll('.poem');
    const scrollPosition = window.scrollY;

    // Handle images
    images.forEach(image => {
        // Calculate the position for making the image visible
        const triggerPosition = image.offsetTop - window.innerHeight;

        if (scrollPosition > triggerPosition) {
            image.classList.add('visible');
        } else {
            // Remove the 'visible' class when scrolling back up
            image.classList.remove('visible');
        }
    });

    // Handle poems
    poems.forEach(poem => {
        // Calculate the position for making the poem visible
        const triggerPosition = poem.offsetTop - window.innerHeight;

        if (scrollPosition > triggerPosition) {
            poem.classList.add('visible');
        } else {
            // Remove the 'visible' class when scrolling back up
            poem.classList.remove('visible');
        }
    });
}

// Update positions on scroll
window.addEventListener('scroll', handleScroll);

// Initialize positions when the page loads
window.addEventListener('load', handleScroll);
