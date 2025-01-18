     // Simulate data loading
        const isDataLoaded = true; // Set this to false to simulate data not loaded

        window.addEventListener('load', () => {
            setTimeout(() => {
                if (isDataLoaded) {
                    const preloader = document.getElementById('preloader');
                    const content = document.querySelector('.content');
                    preloader.style.display = 'none'; // Hide preloader
                    content.style.display = 'block'; // Show main content
                } else {
                    console.log("Data not loaded. Keeping preloader visible.");
                }
            }, 3000); // 3 seconds delay
        });
