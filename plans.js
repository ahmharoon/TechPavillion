
// PLANS ANIMATION 

gsap.from(".plans", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".plans",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
    },
  });

  


  const plan1 = document.querySelector(".plan-1");
let timeline;

plan1.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan1, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan1.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan1, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});







  const plan2 = document.querySelector(".plan-2");

plan2.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan2, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan2.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan2, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});









  const plan3 = document.querySelector(".plan-3");

plan3.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan3, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan3.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan3, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});


  
  

