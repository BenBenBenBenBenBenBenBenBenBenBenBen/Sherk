$(document).ready(function(){

	var $grid = $('.grid').masonry({
		gutter: 30
	});
	  // layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
		$grid.masonry('layout');
	});
	/**
 * Listens for clicks on images, 
 * and opens modal with image 
 * and key information loaded.
 */
	$('.grid-item').click(function(){
		//Fetch image data
		var image_data = $(this).data(image);
		console.log(image_data);
		var image = image_data.image;
		//Build HTML from image data
		var description = `<p>${image.description}</p>`;
		var title = `<h5 class="modal-title">${image.name}<i class="fa fa-times" data-dismiss="modal" aria-label="Close" aria-hidden="true"></i></h5>`;
		var img = `<img src="${image.upload_location}" alt="${image.name}">`;
		//Add to modal and open modal
		$('#image-modal .modal-body').html(img + title + description);
		$('.modal').modal('show');
	});

});