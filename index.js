let isallshown = false;
var menusection = document.querySelectorAll(".items");
var sidebar = document.getElementById('menuSidebar');

function showhide(item){
  menusection.forEach(section => section.classList.add('hide'));
  item.classList.remove('hide');
  isallshown = false;

  if (window.innerWidth <= 768) {
    sidebar.classList.remove('show');
  }
}
 
function showhideall() {
  menusection.forEach(section => section.classList.remove('hide'));
  isallshown = true;

  if (window.innerWidth <= 768) {
    sidebar.classList.remove('show');
  }
}

function toggleSidebar() {
  if (window.innerWidth <= 768) {
    sidebar.classList.toggle('show');
  }
}

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    sidebar.classList.add('show');
  }
});