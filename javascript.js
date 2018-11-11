(function($) {
          $.scrollify({
            section : ".main",
            interstitialSection:".basesection",
            scrollSpeed: 1400,


          });

// second div
var distance = $('.dtwo').offset().top,
    $window = $(window);


$window.scroll(function() {

    if ( $window.scrollTop() >= distance/4*3 ) {
        $('.two').addClass('animated slideInLeft faster');
    }
});


// third div
var distancethree = $('.dthree').offset().top,
    $window = $(window);

$window.scroll(function() {

    if ( $window.scrollTop() >= distancethree - 150 ) {
        $('.three').addClass('animated slideInLeft faster');
        $('.two').removeClass('animated slideInLeft slideOutLeft faster');

    }
});

$window.scroll(function() {
    if ( $window.scrollTop() >= distancethree -100 ) {
        $('.threet').addClass('animated slideInLeft faster');

    }
});

// fourth div
var distancefour = $('.dfour').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancefour -100) {
        $('.four').addClass('animated slideInLeft faster');
        $('.three').removeClass('animated slideInLeft slideOutLeft faster');
        $('.threet').removeClass('animated slideInLeft slideOutLeft faster');


    }
});

// fifth div
var distancefive = $('.dfive').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancefive -100) {
        $('.five').addClass('animated slideInLeft faster');
        $('.four').removeClass('animated slideInLeft slideOutLeft faster');


    }
});

// sixth div
var distancesix = $('.dsix').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancesix-100 ) {
        $('.six').addClass('animated slideInLeft faster');
        $('.hidden').addClass('animated slideInRight fast');

        $('.five').removeClass('animated slideInLeft slideOutLeft faster');


    }
});

//seven div
var distanceseven = $('.dseven').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distanceseven-100 ) {
        $('.seven').addClass('animated slideInLeft faster');
        $('.six').removeClass('animated slideInLeft slideOutLeft faster');

        if($('.seven').css('display') != 'none'){
        $('.sevent').addClass('animated slideInLeft faster');
        }

    }
});


// ninth div
var distancenine = $('.dnine').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancenine-500) {
        $('.nine').addClass('animated slideInLeft faster');
        $('.seven').removeClass('animated slideInLeft slideOutLeft faster');
        $('.sevent').removeClass('animated slideInLeft slideOutLeft faster');


}
    if ( $window.scrollTop() >= distancenine-300) {
    $('.ninet').addClass('animated slideInLeft faster');
    }
});


// ten div
var distanceten = $('.dten').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distanceten - 200) {
        $('.tent').addClass('animated slideInLeft faster');
        $('.ten').addClass('animated slideInLeft faster');
        $('.nine').removeClass('animated slideInLeft slideOutLeft faster');
        $('.ninet').removeClass('animated slideInLeft slideOutLeft faster');


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