
gsap.from('.text-gs', {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.get-started',
      start: 'top 80%', // Adjust the start position as needed
      end: 'bottom bottom', // Adjust the end position as needed
      scrub: 1, // Smooth scrolling effect
    }});

