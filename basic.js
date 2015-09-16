$(document).ready(function() {
  $("#name").children().on("click", function() {
      $("#menu_tabs a div").each(function() {
        if($(this).hasClass("active")) {
            $(this).removeClass("active");
        } 
      });
      window.location.hash = "bio";
  });
	$("._col:not(#resume)").on("click", function() {
		 $("._col").each(function() {
    		if($(this).hasClass("active")) {
       			$(this).removeClass("active");
    		} 
  		});
		$(this).addClass("active");
	});
  if (location.hash !== '') {
    $('#menu_tabs a[href="' + location.hash + '-tab"]').tab('show');
    $('#menu_tabs a[href="' + location.hash + '-tab"] div').addClass("active");
  } else {
    $('#menu_tabs a[href="bio-tab"]').tab('show');
  }
  $('#menu_tabs a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
      window.location.hash = e.target.hash.substr(1).replace("-tab","") ; 
  });
});