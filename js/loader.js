window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const content = document.querySelector('.content');
    
    setTimeout(() => {
        preloader.style.display = 'none';
        content.style.display = 'block';
    }, 4000); // 4 seconds delay
});
