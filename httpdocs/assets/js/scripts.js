
// selected elements
var navTrigger = document.getElementById('nav-trigger');
var nav = document.getElementById('nav');
var labels = document.getElementsByClassName('nav-label');

// Event Listening
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
