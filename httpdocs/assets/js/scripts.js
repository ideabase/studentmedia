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


// Accordion //

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);
});
