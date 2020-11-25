// check off sepecific todos by clicking
$("ul").on("click", "li", function(){
	// if li is grey
	$(this).toggleClass("completed");
});

// click on x to delete todo
$("ul").on("click", "li span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


// adding todo
$("input[type='text']").keypress(function(event){
	if (event.which === 13) {
		// grapping new todo text and add to ul
		var todoText = $(this).val();
		// remove input from input given
		$(this).val("");
		// creating a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});
$(".fa-plus").css("cursor", "pointer");
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(500);
});
