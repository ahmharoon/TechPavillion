
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
