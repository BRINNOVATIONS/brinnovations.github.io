// Hide loader and show content after 3.5 seconds
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Hide preloader
        const preloader = document.getElementById('preloader');
        if (preloader) preloader.style.display = 'none';

        // Show main content
        const content = document.querySelector('.content');
        if (content) content.style.display = 'block';
    }, 3500); // 3.5 seconds delay
});
