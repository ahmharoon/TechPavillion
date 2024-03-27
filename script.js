// Import GSAP libraries
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



// RESPONSOVE NAVBAR 

const opennav = document.querySelector('.opennav');

opennav.addEventListener("click", () => {
  document.querySelector(".nav-res").style.display = "block";
  gsap.from(".nav-res", {
    width: "0%",
    height: "0%",
    duration: 2, // Duration should be specified in seconds, not milliseconds
  });
});


const closenav = document.querySelector('.closenav');

closenav.addEventListener("click", ()=>{
  gsap.to(".nav-res", {
    width:"0%",
    height:"0%",
    duration:2,
  })
  document.querySelector(".nav-res").style.display = "none";
});

document.addEventListener('DOMContentLoaded', (event) => {
  const services = document.querySelector(".services-res");

  services.addEventListener("click", () => {
    const dropdown = document.querySelector("#services-dropdown-res");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const packages = document.querySelector(".packages-res");

  packages.addEventListener("click", () => {
    const dropdown = document.querySelector("#packages-dropdown-res");
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  });
});






//   SERVICES ANIMATION



gsap.registerPlugin(ScrollTrigger);

    // Animation for the section heading
    gsap.from('.section-headding', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.section-headding',
          start: 'top 80%',
          end: 'top 50%',
          scrub: true,
        }
      });

    // Animation for each services box
    gsap.utils.toArray('.services-box').forEach((box, index) => {
      gsap.from(box, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: box,
          start: 'top 80%',
          end: 'top 80%',
          scrub: true,
        }
      });
    });



// PORTFOLIO ANIMATION

gsap.registerPlugin(ScrollTrigger);

// Fade-in effect for portfolio items
gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
  gsap.from(item, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: item,
      start: 'top 100%',
      end: 'bottom 90%',
      scrub: true
    }
  });
});


// ABOUT ANIMATION 
  gsap.to('.content-2', {
    y: 10, // Adjust the vertical distance of the bounce
    duration: 1, // Duration of each bounce
    repeat: -1, // Repeat indefinitely
    yoyo: true, // Reverse the animation to create the bounce effect
    ease: 'power2.inOut' // Easing function for smoother animation
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


//   SKILLSET ANIMATION 

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



 gsap.to('.web-img', {
    y: 10, // Adjust the vertical distance of the bounce
    duration: 1, // Duration of each bounce
    repeat: -1, // Repeat indefinitely
    yoyo: true, // Reverse the animation to create the bounce effect
    ease: 'power2.inOut' // Easing function for smoother animation
  });


  gsap.to('.animated-img', {
    width: '100px',
    height: '100px',
    opacity: 1,
    stagger: 0.2,
    duration: 1.5,
    scrollTrigger: {
        trigger: '.tech',
        start: 'top bottom', // Adjust the start position as needed
        end: 'bottom bottom', // Adjust the end position as needed
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
        end: 'center center', // Adjust the end position as needed
        scrub: 1, // Smooth scrolling effect
      },
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


  
  





// REVIEW 
  document.addEventListener('DOMContentLoaded', function () {
    const reviews = document.querySelectorAll('.review');
    let currentReviewIndex = 0;
  
    function showReview(index) {
      reviews.forEach((review, i) => {
        if (i === index) {
          review.style.display = 'block';
        } else {
          review.style.display = 'none';
        }
      });
    }
  
    function rotateReviews() {
      currentReviewIndex++;
      if (currentReviewIndex >= reviews.length) {
        currentReviewIndex = 0;
      }
      showReview(currentReviewIndex);
    }
  
    showReview(currentReviewIndex);
    setInterval(rotateReviews, 5000); // Change review every 5 seconds
  });
  


  
 // Initial position of the elements
 gsap.set('.contact .rightc', { x: '-100%', opacity: 0 });
 gsap.set('.contact .leftc', { opacity: 0 });

 // Animation for the image to come from the left
 gsap.to('.contact .rightc', {
   x: '0%',
   opacity: 1,
   duration: 1,
   scrollTrigger: {
     trigger: '.contact',
     start: 'top bottom', // Adjust the start position as needed
     end: 'bottom bottom', // Adjust the end position as needed
     scrub: 1, // Smooth scrolling effect
   }
 });
