
//увеличение картинки
$(document).ready(function() {
	
	$(".pizza1").click(function(){	
	  	var img = $(this);	
		var src = img.attr('src'); 
		$(".resize").append("<div class='okno'>"+ "<div class='fon'></div>"+ "<img src='"+src+"' class='yvelich_img' />"+ "</div>");
		$(".okno").fadeIn(200); 
		$(".fon").click(function(){	  
			$(".okno").fadeOut(200);	
      setTimeout(function() {	
			  $(".okno").remove(); 
			}, 200);
		});
	});
	
	
	
	
	
	
	
});

//счетчик для корзины
$(document).ready(function() {
$(".downgrade").click(function() {
    if($(this).prev(".counter").html() > 0) {
    $(this).prev(".counter").html(function(i, val) { return +val-1 });} else {console.log("eror")}

    
});
$(".update").click(function() {
    $(this).next(".counter").html(function(i, val) { return +val+1 });
    
});
		  
});
 
 
 

    






