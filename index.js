/*function to hide and show cards in menu */
let isallshown = false;
  var menusection = document.querySelectorAll(".items");
  function showhide(item){
    if(isallshown){
      
      item.classList.toggle('hide');
      isallshown =!isallshown;
    }
    else{
      showhideall();
      item.classList.toggle('hide');
      isallshown=!isallshown;
    }
  }
 
  function showhideall(){
    isallshown = !isallshown;
    for(var i=0;i<menusection.length;i++)
  {
    
    menusection[i].classList.toggle('hide',isallshown);
  }
  }