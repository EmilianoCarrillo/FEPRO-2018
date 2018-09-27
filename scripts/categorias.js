$(".categoriasWrapper").on("click", function(){
  if($(this).children('p').css('height') == '0px'){
    $('.categoriasWrapper').children('p').css({
      'height': '0px',
      'padding': '0px',
      'transition': '0.5s ease-in-out'
    });
    $(this).children('p').css({
        'height': 'auto',
        'padding': '50px',
        'transition': '0.5s ease-in-out'
    });
  } else{
    $(this).children('p').css({
          'height': '0px',
          'padding': '0px',
          'transition': '0.5s ease-in-out'
      });
  }
});

//Cambiar botón activo (Schedule)
var btns = document.getElementsByClassName("btn-sched");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
