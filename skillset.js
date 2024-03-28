

 // Initial position of the elements
 gsap.set('.img-skill', { x: '-100%', opacity: 0 });
 gsap.set('.text', { opacity: 0 });

 // Animation for the image to come from the left
 gsap.to('.img-skill', {
   x: '0%',
   opacity: 1,
   duration: 1,
   scrollTrigger: {
     trigger: '.main-skill',
     start: 'top bottom', // Adjust the start position as needed
     end: 'bottom bottom', // Adjust the end position as needed
     scrub: 1, // Smooth scrolling effect
   }
 });

 // Animation for the text to appear from behind the image
 gsap.to('.text', {
   opacity: 1,
   duration: 1,
   scrollTrigger: {
     trigger: '.main-skill',
     start: 'top bottom', // Adjust the start position as needed
     end: 'bottom bottom', // Adjust the end position as needed
     scrub: 1, // Smooth scrolling effect
   }
 });

