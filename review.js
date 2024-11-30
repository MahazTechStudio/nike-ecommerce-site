

// Get all review elements
const reviewElements = document.querySelectorAll(".review");

// Add click event to each review for bounce animation
reviewElements.forEach((review) => {
  review.addEventListener("click", () => {
    review.style.animation = "bounce 0.5s";
    setTimeout(() => {
      review.style.animation = "none";
    }, 500);
  });
});

// CSS animation for bounce effect
const style = document.createElement("style");
style.textContent = `
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
`;
document.head.appendChild(style);