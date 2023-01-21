const toggle = document.querySelector('.toggle'),
  active = document.querySelector('.navigation'),
  list = document.querySelector('.list'),
  lists = document.querySelector('li'),
  anchor = document.querySelector('.list a')
  
toggle.addEventListener('click', () => {
  active.classList.toggle('active');
});
const arr = Array.lists

arr.forEach(anchor => {
  anchor.addEventListener('click', () => {
  list.classList.toggle('active');
});
});

