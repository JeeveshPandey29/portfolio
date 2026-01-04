document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".testimonial-card");
  
    // Function to reveal cards on scroll
    const revealCards = () => {
      const triggerBottom = window.innerHeight * 0.85;
  
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
  
        if (cardTop < triggerBottom) {
          card.classList.add("visible");
        } else {
          card.classList.remove("visible");
        }
      });
    };
  
    // Event listener for scroll to reveal cards
    window.addEventListener("scroll", revealCards);
    revealCards();
  
    // Add lift and blur effects on mouse hover
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        // Add lifted class to the hovered card
        card.classList.add("lifted");
  
        // Add blur class to all other cards
        cards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.classList.add("blur");
          }
        });
      });
  
      card.addEventListener("mouseleave", () => {
        // Remove lifted class from the hovered card
        card.classList.remove("lifted");
  
        // Remove blur class from all other cards
        cards.forEach((otherCard) => {
          otherCard.classList.remove("blur");
        });
      });
    });
  });
  