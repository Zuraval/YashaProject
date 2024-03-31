let isVisible = true;
const div = document.getElementById('face');
const div2 = document.getElementById('back');

function trigger() {
  isVisible = !isVisible;
  div.style.display = isVisible ? "block" : "none";
  div2.style.display = isVisible ? "none" : "block";
};

document
  .getElementById('push')
  .addEventListener('click', trigger);