
(function($) {

// See https://github.com/daneden/animate.css/issues/644
var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));


$('.two').one(animationEnd, doSomething);

var doSomething = function(){
    console.log('end')
}



// second div
var distance = $('.dtwo').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance/4*3 ) {
        $('.two').addClass('animated slideInLeft');
    }
});


// third div
var distancethree = $('.dthree').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancethree - 150 ) {
        $('.three').addClass('animated slideInLeft');
    }
});

$window.scroll(function() {
    if ( $window.scrollTop() >= distancethree -100 ) {
        $('.threet').addClass('animated slideInLeft');

    }
});

// fourth div
var distancefour = $('.dfour').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancefour -100) {
        $('.four').addClass('animated slideInLeft');
    }
});

// fifth div
var distancefive = $('.dfive').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancefive -100) {
        $('.five').addClass('animated slideInLeft');

    }
});

// sixth div
var distancesix = $('.dsix').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancesix-100 ) {
        $('.six').addClass('animated slideInLeft');

        $('.hidden').addClass('animated slideInRight');


    }
});

//seven div
var distanceseven = $('.dseven').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distanceseven-100 ) {
        $('.seven').addClass('animated slideInLeft');

        if($('.seven').css('display') != 'none'){
        $('.sevent').addClass('animated slideInLeft');
        }

    }
});


// ninth div
var distancenine = $('.dnine').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancenine-200) {
        $('.nine').addClass('animated slideInLeft');
}
    if ( $window.scrollTop() >= distancenine-100) {
    $('.ninet').addClass('animated slideInLeft');
    }
});


// ten div
var distanceten = $('.dten').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distanceten) {
        $('.tent').addClass('animated slideInLeft');
        $('.ten').addClass('animated slideInLeft');


    }
});


})(jQuery);




// on click terms & conditions
var terms = document.querySelector("#terms");
terms.addEventListener('click', revealterms);

var exit = document.querySelector("#exiterms");
exit.addEventListener('click', exiterms);

function revealterms() {
    document.querySelector('.tnc').style.display = "block";
    document.body.setAttribute("overflow-y", "hidden");
}

function exiterms() {
    document.querySelector('.tnc').style.display = "none";
}


// on click privacy statements
var pterms = document.querySelector("#privacy");
pterms.addEventListener('click', revealp);

var exitp = document.querySelector("#exitprivacy");
exitp.addEventListener('click', exitprivacy);


function revealp() {
    document.querySelector('.privacy').style.display = "block";
    document.body.setAttribute("overflow-y", "hidden");
}

function exitprivacy() {
    document.querySelector('.privacy').style.display = "none";
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}