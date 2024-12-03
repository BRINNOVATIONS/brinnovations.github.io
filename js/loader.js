// Hide loader and show content after 3.5 seconds
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none'; // Hide loader
    }, 3500); // 3.5 seconds
});
