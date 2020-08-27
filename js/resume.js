(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

//display documnets:
// row1
function show()
{
  var img = document.getElementById('myCertificate');
  var butt = document.getElementById('p')
  if (img.style.display == "none")
  {
    img.style.display = "block";
    butt.innerHTML = "Hide";
  }else{
    img.style.display ="none";
    butt.innerHTML = "Show";
  }

}



//row2
function show2()
{
  var img = document.getElementById('resume');
  var butt2 = document.getElementById('p2')
  if (img.style.display == "none")
  {
    img.style.display = "block";
    butt2.innerHTML = "Hide";
  }else{
    
    img.style.display ="none";
    butt2.innerHTML = "Show";
  }

}

//row3
function show3()
{
  var img = document.getElementById('uni');
  var butt3 = document.getElementById('p3')
  if (img.style.display == "none")
  {
    img.style.display = "block";
    butt3.innerHTML = "Hide";
  }else{
    img.style.display ="none";
    butt3.innerHTML = "Show";
  }

}

//row4
function show4()
{
  var img = document.getElementById('uni1');
  var butt4 = document.getElementById('p4')
  if (img.style.display == "none")
  {
    img.style.display = "block";
    butt4.innerHTML = "Hide";
  }else{
    img.style.display ="none";
    butt4.innerHTML = "Show";
  }
}


//row5
function show5()
{
  var img = document.getElementById('uni22');
  var butt4 = document.getElementById('p5')
  if (img.style.display == "none")
  {
    img.style.display = "block";
    butt4.innerHTML = "Hide";
  }else{
    img.style.display ="none";
    butt4.innerHTML = "Show";
  }
}

//row6
function show6()
{
  var img = document.getElementById('uni0101');
  var butt4 = document.getElementById('p6')
  if (img.style.display == "none")
  {
    img.style.display = "block";
    butt4.innerHTML = "Hide";
  }else{
    img.style.display ="none";
    butt4.innerHTML = "Show";
  }
}

