

const { gsap, Power3 } = window;

// Function to animate elements sequentially
function animateElements() {
  // Create a timeline for animations
  const tl = gsap.timeline();

  // Animate header
  tl.from('.header', {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: Power3.easeOut,
  });

  // Animate nav background
  tl.from('.nav', {
    duration: 0.5,
    y: -150,
    ease: Power3.easeOut,
  });

  // Animate logo
  tl.from('.logo', {
    duration: 0.5,
    y: -150,
    ease: Power3.easeOut,
  });

  // Animate menu items
  tl.from('.menu > div', {
    duration: 0.5,
    y: -150,
    stagger: 0.1,
    ease: Power3.easeOut,
  });

  // Animate appointment button
  tl.from('.appointment', {
    duration: 0.5,
    y: -150,
    ease: Power3.easeOut,
  });
}

// Wait for the document to be fully loaded before animating
document.addEventListener('DOMContentLoaded', animateElements);


// DROPDOWN ANIMATION

// Function to handle dropdown menu animations
function handleDropdownAnimation(menuId, dropdownId) {
    const menu = document.getElementById(menuId);
    const dropdown = document.getElementById(dropdownId);
  
    if (menu && dropdown) {
      menu.addEventListener('mouseover', () => {
        gsap.to(dropdown, {
          duration: 0.3,
          opacity: 1,
          y: -3,
          display: 'block',
        });
      });
  
      menu.addEventListener('mouseout', () => {
        gsap.to(dropdown, {
          duration: 0.3,
          opacity: 0,
          y: 0,
          display: 'none',
        });
      });
    }
  }
  
  // Wait for the document to be fully loaded before executing animations
  document.addEventListener('DOMContentLoaded', () => {
    // Call the function for services dropdown
    handleDropdownAnimation('services-menu', 'services-dropdown');
    
    handleDropdownAnimation('services-dropdown', 'services-dropdown');
  
    // Call the function for packages dropdown
    handleDropdownAnimation('packages-menu', 'packages-dropdown');

    handleDropdownAnimation('packages-dropdown', 'packages-dropdown');
  });
  



  
// APPOINTMENT FORM 
// Get the appointment element using querySelector since there's likely only one
const appointment = document.querySelector('.appointment');

// Add click event listener to the appointment element
appointment.addEventListener("click", () => {
    console.log('hello i am appointment');

    // Animate the appointment form using GSAP
    gsap.to(".appointment-form", {
        y: '100%',
        opacity: 1,
        duration: 1,
    });
});

// Get the close-form element
const close_form = document.querySelector('.close-form');

// Add click event listener to the close-form element
close_form.addEventListener("click", () => {
    // Animate the appointment form using GSAP to close it
    gsap.to(".appointment-form", {
        y: '-100%',
        opacity: 0,
        duration: 1,
    });
});



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

  
gsap.from(".plans-dm", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".plans-dm",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
    },
  });
  
gsap.from(".plans-ma", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".plans-ma",
      start: "top 80%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
    },
  });
  
gsap.from(".plans-ui", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".plans-ui",
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








  const plan1_dm = document.querySelector(".plans-dm .plan-1");

plan1_dm.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan1_dm, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan1_dm.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan1_dm, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});












  const plan1_ma = document.querySelector(".plans-ma .plan-1");

plan1_ma.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan1_ma, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan1_ma.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan1_ma, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});












  const plan1_ui = document.querySelector(".plans-ui .plan-1");

plan1_ui.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan1_ui, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan1_ui.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan1_ui, {
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









  const plan2_dm = document.querySelector(".plans-dm .plan-2");

plan2_dm.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan2_dm, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan2_dm.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan2_dm, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});









  const plan2_ma = document.querySelector(".plans-ma .plan-2");

plan2_ma.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan2_ma, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan2_ma.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan2_ma, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});









  const plan2_ui = document.querySelector(".plans-ui .plan-2");

plan2_ui.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan2_ui, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan2_ui.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan2_ui, {
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


  










  const plan3_dm = document.querySelector(".plans-dm .plan-3");

plan3_dm.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan3_dm, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan3_dm.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan3_dm, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});


  










  const plan3_ma = document.querySelector(".plans-ma .plan-3");

plan3_ma.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan3_ma, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan3_ma.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan3_ma, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});


  










  const plan3_ui = document.querySelector(".plans-ui .plan-3");

plan3_ui.addEventListener("mouseenter", () => {
  // Clear any existing timeline
  if (timeline) {
    timeline.kill();
  }

  // Create a new timeline for the bouncing animation
  timeline = gsap.timeline({ repeat: -1, yoyo: true });
  timeline.to(plan3_ui, {
    y: -20,
    duration: 0.5,
    ease: "power2.out",
  });
});

plan3_ui.addEventListener("mouseleave", () => {
  // Clear the timeline when the mouse leaves
  if (timeline) {
    timeline.kill();
  }

  // Reset the div to its original position
  gsap.to(plan3_ui, {
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  });
});


  


// GET STARTED ANIMATION

gsap.from('.text-gs', {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.get-started',
      start: 'top 80%', // Adjust the start position as needed
      end: 'bottom bottom', // Adjust the end position as needed
      scrub: 1, // Smooth scrolling effect
    }});
