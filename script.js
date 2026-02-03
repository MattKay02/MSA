// Handle active link highlighting
const navLinks = document.querySelectorAll("nav a");
const currentPath = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPath ||
      (currentPath === "" && link.getAttribute("href") === "index.html")) {
    link.classList.add("active");
  }
});

// Mobile hamburger menu
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
  });

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      menuToggle.classList.remove("active");
      nav.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

// Fade-in animation on scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".fade-in-left");
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    const boxBottom = el.getBoundingClientRect().bottom;

    if (boxTop < triggerBottom && boxBottom > 0) {
      el.classList.add("visible");
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
const flipCards = document.querySelectorAll(".flip-card");
flipCards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
