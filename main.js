// Please complete the below exercises preferrably using JQuery

// 1. Make each item's paragraph collapse/expand when the title is clicked





// 2. Remove each item when we click on the closing X





// 3. Create a new item using the input field
//    The title of the new item has to match the input value
//    The new item should also have the same properties (collapse/expand and close) as the other items




//    Optional: 
//    If the user clicks "Add New" and the input is empty, 
//    the new item's title needs to default to Title {number} (ex: Title 6 or Title 7)
//    depending on the number of items already on the page
 
$(document).ready(function() {

	$("#add_new").click(function() {
		let titleCount = $('.item').length;
		if ($('#newtitle').val()) {
			$(".item-list").append(`<div class="item"><h1 class="title">${$('#newtitle').val()}</h1><span class=close>x</span><p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p></div>`);
			$("#newtitle").val('');
		}
		else {
			$(".item-list").append(`<div class="item"><h1 class="title">Title ${titleCount+1}</h1><span class=close>x</span><p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id scelerisque lacus, rutrum lobortis nisl. Ut dapibus, quam in auctor pharetra, nibh erat pharetra velit, vitae tristique mauris dui quis.</p></div>`);
		}
	});

	$(document).on('click', '.close', function() {
		$(this).closest(".item").remove();
	});
	$(document).on('click', '.title', function() {
		$(this).siblings(".description").slideToggle('slow')
    
	});


})


