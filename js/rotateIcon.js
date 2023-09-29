let rotating = false;

        function rotateAndReload() {
            const reloadIcon = document.getElementById('reloadIcon');

            if (!rotating) {
                rotating = true;
                reloadIcon.style.transform = 'rotate(360deg)';

                // Simulate a delay for reloading (replace this with your actual reload logic)
                setTimeout(function () {
                    // Reset the rotation and perform the actual reload action
                    reloadIcon.style.transform = 'rotate(0deg)';
                    generateCaptcha(); // Call your reload function here
                    rotating = false;
                }, 300); // Change the delay time as needed
            }
        }