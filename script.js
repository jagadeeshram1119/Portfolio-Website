const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-link");
const menuIcon = document.querySelector(".menu-btn i"); // Select the icon

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
  }
});
