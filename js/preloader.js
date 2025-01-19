// Simulate data loading
const isDataLoaded = true; // Set this to false to simulate data not loaded

window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        const content = document.querySelector('.content');
        
        if (isDataLoaded) {
            preloader.style.display = 'none'; // Hide preloader
            content.style.display = 'block'; // Show main content
        } else {
            console.log("Data not loaded. Keeping preloader visible.");
            // Optionally, show a fallback message or retry logic here if needed
        }
    }, 3000); // 3 seconds delay
});
