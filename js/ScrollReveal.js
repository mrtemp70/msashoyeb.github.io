const sr = ScrollReveal({
    reset: true,
});
    sr.reveal('.scroll-reveal', {
        duration: 1000,     // Animation duration in milliseconds
        origin: 'bottom',   // Animation origin (top, right, bottom, left)
        distance: '50px',  // Distance to reveal the element
        delay: 0,           // Delay before the animation starts (in milliseconds)
    });