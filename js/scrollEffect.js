document.addEventListener("DOMContentLoaded", () => {
  const revealCards = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15, 
    }
  );

  revealCards.forEach((el) => observer.observe(el));
});
