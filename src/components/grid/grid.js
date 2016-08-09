//grid.js
var headerGrid = document.querySelector('.grid.grid--header');
var msnry = new Masonry( headerGrid, {
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});



var bodyGrid = document.querySelector('.grid.grid--body');
var msnry2 = new Masonry( bodyGrid, {
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
 	percentPosition: true
});

imagesLoaded( headerGrid ).on( 'progress', function() {
	msnry.layout();
});

imagesLoaded( bodyGrid ).on( 'progress', function() {
	msnry2.layout();
});