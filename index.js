var menusection = document.querySelectorAll(".items");
var sidebar = document.getElementById('menuSidebar');

//Show all menu categories
function showhideall() {
  menusection.forEach(section => section.classList.remove('hide'));

  //Collapse sidebar menu in mobile view
  if (window.innerWidth <= 1024) {
    sidebar.classList.remove('show');
  }
}

//Toggle sidebar menu visibility in mobile view
function toggleSidebar() {
  if (window.innerWidth <= 1024) {
    sidebar.classList.toggle('show');
  }
}

function showhide(item){
  menusection.forEach(section => section.classList.add('hide'));
  item.classList.remove('hide');

  if (window.innerWidth <= 1024) {
    sidebar.classList.remove('show');
  }
}

//Show or hide specific menu categories based on the category clicked
function showhide(button) {
  var targetId = button.getAttribute('data-target');
  var item = document.getElementById(targetId);

  menusection.forEach(section => section.classList.add('hide'));
  item.classList.remove('hide');

  //Collapse sidebar menu in mobile view
  if (window.innerWidth <= 1024) {
    sidebar.classList.remove('show');
  }
}

window.addEventListener('resize', function() {
  if (window.innerWidth > 1024) {
    sidebar.classList.add('show');
  } else {
    sidebar.classList.remove('show');
  }
});