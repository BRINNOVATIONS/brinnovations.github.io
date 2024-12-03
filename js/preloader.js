// Wait for the DOM to load completely
document.addEventListener('DOMContentLoaded', () => {
    // Set a timeout to hide the preloader after 3.5 seconds
    setTimeout(() => {
        // Get the preloader element and hide it
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.style.display = 'none';  // Hide preloader

        // Optionally, show the main content (if it's initially hidden)
        const content = document.querySelector('.content');
        if (content) content.style.display = 'block';  // Show main content
    }, 3500); // 3.5 seconds delay
});
