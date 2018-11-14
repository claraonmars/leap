    var is_chrome = !!window.chrome && !is_opera;
    var is_explorer= typeof document !== 'undefined' && !!document.documentMode && !isEdge;
    var is_firefox = typeof window.InstallTrigger !== 'undefined';
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;


(function($) {

    $.browser.safari = $.browser.webkit && !window.chrome;
    $.browser.chrome = $.browser.webkit && !!window.chrome;
var ua = window.navigator.userAgent;
var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
var webkit = !!ua.match(/WebKit/i);
var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);


          $.scrollify({
            section : ".scroll",
            interstitialSection:".basesection",
            scrollSpeed: 1000
          });

          if (iOSSafari) {
             alert('safari');
            $.scrollify({
            section : ".scroll",
            interstitialSection:".basesection",
            scrollSpeed: 1000,
            touchScroll: false,
            scrollbars: true

            });
          };



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