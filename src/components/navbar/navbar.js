//navbar.js
window.onscroll = function() {
	stickNavbar();
}

function stickNavbar() {
	var position = window.pageYOffset | document.body.scrollTop;

	var nav = document.querySelector('.navbar');

	if(position < 200){
	
		nav.classList.remove('is-fixed');
		
	}
	else {
		nav.classList.add('is-fixed');
	}
}