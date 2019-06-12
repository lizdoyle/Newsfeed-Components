
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  
  menu.classList.toggle(".menu--open");
  menu.classList.toggle(".menu-button");
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAlls(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.queryselectorAll(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu
clickHandler() => {
  menuOpen.addEventListener('click', toggleMenu() )
}