// Initialize Carousels on Home Page //

$(document).ready(function() {

	$('.home-carousel').owlCarousel({
	    items:1,
			autoplay:true,
			center: true,
			loop: true
	});

	$('.brand-logo-grid').owlCarousel({
	    responsive: {
          0:{
              items:3,
              nav: false,
              loop: true,

          },
	        600:{
	            items:3,
							nav: true,
							loop: true,
	        },
          900:{
	            items:4,
							nav: true,
							loop: true,
	        },
	    }
	});

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
      $('.nav__level2').not($(this).siblings()).removeClass('active');
      return false;
		});
});

// Clicking away from dropdown will remove the dropdown class
$('html').click(function() {
  $('.nav__level2').removeClass('active');
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

// Show more/less text in FAQ //
$(".more-link").click(function(e){
  $(this).closest(".FAQ").toggleClass("show-more");
  e.preventDefault();
});

// Lazy Load Home Page Video //

/*
 *	jQuery Smart Vimeo Embed - v1.1.1
 *	Author: Warren L. Parsons
 *	Company: Hanson, Inc.
 *
 *	Licensed under the MIT license
 */

;(function ( $, window, document, undefined ) {

	var pluginName = "smartVimeoEmbed",
	defaults = {
		idSelectorName: 'vimeo-id',
		vimeoPatternUrl: 'https://vimeo.com/api/oembed.json?url=https%3A%2F%2Fvimeo.com/',
		autoplay: true,
		width: 640,
		onComplete: function(){},
		onError: function(){}
	};

	function Plugin( element, options ) {
		this.element = element;
		this.options = $.extend( {}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function() {
			var options = this.options;

			$(this.element).each(function (i, e) {
				var $e = $(e);
				var id = $e.data(options.idSelectorName);

				// only execute on non-vimeo images
				if (id && !/VIMEO/i.test($e.attr('src'))) {

					// build Vimeo JSON URL
					var url = options.vimeoPatternUrl + id + '&autoplay=' + options.autoplay + '&width=' + options.width + '&callback=?';

					// fetch video data from Vimeo
					$.ajax({
						url: url,
						dataType: 'jsonp',
						success: function(data){
							$('#output').text(JSON.stringify(data));

							// add wrapper for play icon positioning
							$e.wrap('<div class="vimeo-wrapper" />');

							// swap placeholder image with video thumbnail
							$e.attr('src', data.thumbnail_url);

							// add play icon and click event listener
							$e.parent().prepend('<span class="play-icon"/>').on('click', function(){
								var $this = $(this);

								// only append video once
								if ( !$this.find('iframe').length ) {

									// append video iframe and hide poster
									// image and play icon
									$this.append(data.html).find('img, .play-icon').hide();
								}

								if (options.onComplete && typeof(options.onComplete) === 'function') {
									options.onComplete.call(this);
								}
							});
						},
						error: function(errorSender, errorMsg){
							if (options.onError && typeof(options.onError) === 'function') {
								options.onError.call(this);
							}
						}
					});
				}
			});
		}
	};

	$.fn[pluginName] = function ( options ) {
		return this.each(function () {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin( this, options ));
			}
		});
	};

})( jQuery, window, document );

// Load the Embedded Video on Click //
$(document).ready(function(){
	$('.video-thumb').smartVimeoEmbed();
});
