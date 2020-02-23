

to_p1 = function (){
	$("#carousel-images-2").hide()
	$("#carousel-images-3").hide()
	$("#carousel-images-1").show()
	$('#carousel-images-1').css({'opacity':'0'})
	$('#carousel-images-1').animate({'opacity':'1'}, 500)

	$("#carousel-arrows-right").off()
	$("#carousel-arrows-right").click(to_p2)
	$("#carousel-arrows-left").off()
	$("#carousel-arrows-left").click(to_p3)

}

to_p2 = function (){
	$("#carousel-images-3").hide()
	$("#carousel-images-1").hide()
	$("#carousel-images-2").show()
	$('#carousel-images-2').css({'opacity':'0'})
	$('#carousel-images-2').animate({'opacity':'1'}, 500)

	$("#carousel-arrows-right").off()
	$("#carousel-arrows-right").click(to_p3)
	$("#carousel-arrows-left").off()
	$("#carousel-arrows-left").click(to_p1)

}

to_p3 = function (){
	$("#carousel-images-1").hide()
	$("#carousel-images-2").hide()
	$("#carousel-images-3").show()
	$('#carousel-images-3').css({'opacity':'0'})
	$('#carousel-images-3').animate({'opacity':'1'}, 500)

	$("#carousel-arrows-right").off()
	$("#carousel-arrows-right").click(to_p1)
	$("#carousel-arrows-left").off()
	$("#carousel-arrows-left").click(to_p2)
}

setup = function(){
	$("#carousel-arrows-right").click(to_p2)
	$("#carousel-arrows-left").click(to_p3)
	$("#carousel-images-1").show()
}
$(document).ready(setup)

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(50,50),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDLRgUHjuLTn7s629OxjVujuHOROcvB8"


 showMenu=function(){
        if (!display){
          $("nav").animate({"left":"0%"}, 1000)

        }else{
          $("nav").animate({"left":"-150%"}, 1000)
        }
        display = !display
      }
      display = false
      setup = function(){
        $(".Menu-Hambuger").click(showMenu)
      }
      $(document).ready(setup)

      function displaySearchArea(){
        var x = document.getElementById("inputName");
        if(x.style.display == ""){
          x.style.display = "block"
        }else{
          x.style.display = ""
        }
      }
