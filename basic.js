$(document).ready(function() {
	$("#name").on("click", function() {
  		$(".nav li").each(function() {
    		if($(this).hasClass("active")) {
       			$(this).removeClass("active");
    		} 
  		});
	});
	$("._col:not(#resume)").on("click", function() {
		console.log("zzz");
		 $("._col").each(function() {
    		if($(this).hasClass("active")) {
       			$(this).removeClass("active");
    		} 
  		});
		$(this).addClass("active");
	});
});