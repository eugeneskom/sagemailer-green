const toggle = document.querySelector('.nav__toggle');
const menuBox = document.querySelector('.nav__links');
const menuLine = document.querySelector('.nav__line');

toggle.addEventListener('click', menuToggle);

function menuToggle(){
  menuBox.classList.toggle('nav__links--active');
  menuLine.classList.toggle('nav__line--active');
}