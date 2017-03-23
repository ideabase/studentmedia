// Sticky Navigation //

var mn = $("header");
    mns = "main-nav-scrolled";
    bns = "body-nav-scrolled";
    body = $("body");
    hnav = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > (hnav+175) ) {
    mn.addClass(mns);
    body.addClass(bns);
  } else {
    mn.removeClass(mns);
    body.removeClass(bns);
  }
});

// Navigation Menu Button //

var navTrigger = document.getElementById('nav-trigger');
var nav = document.getElementById('nav');
var labels = document.getElementsByClassName('nav-label');


// Navigation Menu Open/Close //
navTrigger.addEventListener('click', navToggle);

function navToggle(e) {
  var closed = (navTrigger.className.indexOf('close') > 0);
  if(closed) {
    navTrigger.className = 'nav-trigger open';
    nav.className = 'out';
  } else {
    navTrigger.className = 'nav-trigger close';
    nav.className = 'in';
  }
}

// Drop Down / Accordion Open/Close //

$(document).ready(function() {
  	  $('body').addClass('js');
		  var $menuTrigger = $('.has-subnav > a');
		$menuTrigger.click(function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.toggleClass('active').next('ul').toggleClass('active');
		});
});

// Accordion //
