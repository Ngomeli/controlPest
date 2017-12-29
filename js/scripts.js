
$(document).ready(function(){
  $("button").click(function(){
    var box= document.getElementById("email");
    if (box.value.length<5) {
      box.focus();
      box.style.border="solid 3px red";
      return false;
    }
    $("#pop-up").hide();
  });
});
