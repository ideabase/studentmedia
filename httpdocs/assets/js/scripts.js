// Lazy load below fold images

$(function() {
        $('.lazy').lazy({
            threshold: 300
        });
    });

// Wrap all JQuery functions in this function, which will pause execution until the document is ready.  No need to repeat these. //
$(document).ready(function() {

	// Initialize Carousels on Home Page //

	$('.home-carousel').owlCarousel({
			items:1,
			autoplay:8000,
			center: true,
			loop: true,
			smartSpeed: 1500,
	});

	setTimeout(function() {
	$('.brand-logo-grid').owlCarousel({
			items:5,
			nav: true,
			loop: true,
			center: false,
	    responsive: {
          0:{
              items:3,
              nav: true,
              loop: true,

          },
	        600:{
	            items:4,
							nav: true,
							loop: true,
	        },
          900:{
	            items:5,
							nav: true,
							loop: true,
							center: false,
	        },
	    }
		}, 3000);
	});

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

	$(".hero-image-caption__level").html(function(){
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

	var $menuTrigger = $('.has-children > a');
	$menuTrigger.click(function(e) {
	      e.stopImmediatePropagation();
				var $this = $(this);
				$this.toggleClass('active').next('ul').toggleClass('active');
	      $('.nav__level2').not($(this).siblings()).removeClass('active');
	      return false;
	});

	// Clicking away from dropdown will remove the dropdown class
	$('html').click(function() {
	  $('.nav__level2').removeClass('active');
	});

// Drop Down Staff Profiles //
	var $menuTrigger = $('.leader');
	$menuTrigger.click(function(e) {
		var $this = $(this);
		$this.toggleClass('active');
    return false;
	});

// Advertising Accordion //
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

	// Show more/less text in FAQ //
	$(".more-link").click(function(e){
	  $(this).closest(".FAQ").toggleClass("show-more");
	  e.preventDefault();
	});

	// Load the Embedded Video on Click //
		$('.video-thumb').smartVimeoEmbed();

}); // Ends the document ready function.  Be careful not to remove this!
