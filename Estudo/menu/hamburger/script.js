const btn = document.getElementById('hamburger');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  btn.classList.toggle('active', isOpen);
  btn.setAttribute('aria-expanded', isOpen);
});