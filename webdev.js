
gsap.to('.web-img', {
    y: 10, // Adjust the vertical distance of the bounce
    duration: 1, // Duration of each bounce
    repeat: -1, // Repeat indefinitely
    yoyo: true, // Reverse the animation to create the bounce effect
    ease: 'power2.inOut' // Easing function for smoother animation
  });
