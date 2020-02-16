to_p1 = function (){
	$("#carousel-images-2").hide()
	$("#carousel-images-3").hide()
	$("#carousel-images-1").show()
	$("#carousel-images-1").css({'opacity':'0'})
	$("#carousel-images-1").animate({'opacity':'1'}, 500)

	$("#carousel-arrows-right").off()
	$("#carousel-arrows-right").click(to_p2)
	$("#carousel-arrows-left").off()
	$("#carousel-images-left").click(to_p3)

}

to_p2 = function (){
	$("#carousel-images-3").hide()
	$("#carousel-images-1").hide()
	$("#carousel-images-2").show()
	$("#carousel-images-2").css({'opacity':'0'})
	$("#carousel-images-2").animate({'opacity':'1'}, 500)

	$("#carousel-arrows-right").off()
	$("#carousel-arrows-right").click(to_p3)
	$("#carousel-arrows-left").off()
	$("#carousel-arrows-left").click(to_p2)

}

to_p3 = function (){
	$("#carousel-images-1").hide()
	$("#carousel-images-2").hide()
	$("#carousel-images-3").show()
	$("#carousel-images-3").css({'opacity':'0'})
	$("#carousel-images-3").animate({'opacity':'1'}, 500)

	$("#carousel-arrows-right").off()
	$("#carousel-arrows-right").click(to_p1)
	$("#carousel-arrows-left").off()
	$("#carousel-arrows-left").click(to_p2)
}

setup = function(){
	$("#carousel-arrows-right").click(to_p2)
	$("#carousel-images-1").show()
}
$(document).ready(setup)



