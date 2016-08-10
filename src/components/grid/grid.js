//grid.js

var Masonry = require('masonry');
var imgLoaded = require('imagesloaded')

var bodyGrid = document.querySelector('.grid.grid--body');
var msnry2 = new Masonry( bodyGrid, {
	//options
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
 	percentPosition: true
});


imagesLoaded( bodyGrid ).on( 'progress', function() {
	msnry2.layout();
});