$(document).ready(function() {
	$("#name").on("click", function() {
  		$("#menu_tabs a div").each(function() {
    		if($(this).hasClass("active")) {
       			$(this).removeClass("active");
    		} 
  		});
	});
	$("._col:not(#resume)").on("click", function() {
		 $("._col").each(function() {
    		if($(this).hasClass("active")) {
       			$(this).removeClass("active");
    		} 
  		});
		$(this).addClass("active");
	});
});