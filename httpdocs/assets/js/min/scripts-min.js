function navToggle(a){var b=navTrigger.className.indexOf("close")>0;b?(navTrigger.className="nav-trigger open",nav.className="out"):(navTrigger.className="nav-trigger close",nav.className="in")}var navTrigger=document.getElementById("nav-trigger"),nav=document.getElementById("nav"),labels=document.getElementsByClassName("nav-label");navTrigger.addEventListener("click",navToggle),window.addEventListener("resize",resize),window.onload=resize;