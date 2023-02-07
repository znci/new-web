document.addEventListener("DOMContentLoaded", function(){
	window.addEventListener('scroll', function() {
		if (window.scrollY > 50) {
		  document.querySelector('.navbar-top').classList.remove('not-fixed');
		  document.querySelector('.navbar-top').classList.add('fixed');
		} else {
		  document.querySelector('.navbar-top').classList.remove('fixed');
		  document.querySelector('.navbar-top').classList.add('not-fixed');
		} 
	});
});