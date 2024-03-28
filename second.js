
gsap.to('.animated-img', {
    width: '100px',
    height: '100px',
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.tech',
        start: 'top center', // Adjust the start position as needed
        end: 'center 60%', // Adjust the end position as needed
        scrub: 1, // Smooth scrolling effect
      },
});

gsap.from('.next h1, .next p, .next button,.react h1, .react p, .react button,.wordpress h1, .wordpress p, .wordpress button', {
    opacity: 0,
    y: 0,
    duration: 0.5,
    stagger: 0.2,
    delay: 0.5,
    scrollTrigger: {
        trigger: '.tech',
        start: 'top center', // Adjust the start position as needed
        end: 'center 60%', // Adjust the end position as needed
        scrub: 1, // Smooth scrolling effect
      },
});

