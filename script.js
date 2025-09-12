// Handle active link highlighting
const navLinks = document.querySelectorAll("nav a");
const currentPath = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPath || 
      (currentPath === "" && link.getAttribute("href") === "index.html")) {
    link.classList.add("active");
  }
});



// Fade-in-left with stagger and reverse on scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-in-left");
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    const boxBottom = el.getBoundingClientRect().bottom;

    if (boxTop < triggerBottom && boxBottom > 0) {
      el.classList.add("visible");
      // also make child image visible
      const img = el.querySelector("img");
      if (img) img.classList.add("visible");
    } else {
      el.classList.remove("visible");
      const img = el.querySelector("img");
      if (img) img.classList.remove("visible");
    }
  });
});




// Flip card functionality
const flipCard = document.querySelector(".flip-card");
if (flipCard) {
  flipCard.addEventListener("click", () => {
    flipCard.classList.toggle("flipped");
  });
}

