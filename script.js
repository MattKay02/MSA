// Handle active link highlighting
const navLinks = document.querySelectorAll("nav a");
const currentPath = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPath || 
      (currentPath === "" && link.getAttribute("href") === "index.html")) {
    link.classList.add("active");
  }
});
