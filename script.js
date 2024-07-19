function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


let typed = new Typed('#element', {
  strings: ['Mobile App Developer', 'Graphic Designer', 'UI/UX Designer', 'Video Editor','C++','java', 'Pythan', 'FullStack web Developer'],
  typeSpeed: 30,
});