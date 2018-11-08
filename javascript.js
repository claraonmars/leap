
(function($) {

// second div
var distance = $('.dtwo').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distance/4*3 ) {
        $('.two').show("slide");
    }
});


// third div
var distancethree = $('.dthree').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancethree - 150 ) {
        $('.three').show("slide");
    }
});

$window.scroll(function() {
    if ( $window.scrollTop() >= distancethree -100 ) {
        $('.threet').show("slide");

    }
});

// fourth div
var distancefour = $('.dfour').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancefour -100) {
        $('.four').show("slide");

    }
});

// fifth div
var distancefive = $('.dfive').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancefive -100) {
        $('.five').show("slide");

    }
});

// sixth div
var distancesix = $('.dsix').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancesix +500) {
        $('.hidden').show("slide"), {direction: "right"};

        $('.six').show("slide");


    }
});

//seven div
var distanceseven = $('.dseven').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distanceseven + 500) {
        $('.seven').show("slide");


        if($('.seven').css('display') != 'none'){
        $('.sevent').show("slide");
        }

    }
});


// ninth div
var distancenine = $('.dnine').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distancenine) {
        $('.nine').show("slide"), {direction: "right"};
        $('.ninet').show("slide"), {direction: "right"};


    }
});


// ten div
var distanceten = $('.dten').offset().top,
    $window = $(window);

$window.scroll(function() {
    if ( $window.scrollTop() >= distanceten) {
        $('.tent').show("slide");
        $('.ten').show("slide");


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