// Check for JavaScript support and add class to body //
$('body').addClass('js');

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

// Mark First and Last Words //

$(".head-line").html(function(){
  var text= $(this).text().trim().split(" ");
  var first = text.shift();
  return (text.length > 0 ? "<span class='first-word'>"+ first + "</span> " : first) + text.join(" ");
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
		  var $menuTrigger = $('.has-children > a');
		$menuTrigger.click(function(e) {
      e.stopImmediatePropagation();
			var $this = $(this);
			$this.toggleClass('active').next('ul').toggleClass('active');
      return false;
		});
});

// Drop Down Staff Profiles //

$(document).ready(function() {
		  var $menuTrigger = $('.leader');
		$menuTrigger.click(function(e) {
			var $this = $(this);
			$this.toggleClass('active');
      return false;
		});
});

// Advertising Accordion //
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

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".video-box__container").fitVids();
  });
