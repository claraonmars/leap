 var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);


(function($) {

          if (isSafari) {
           $.scrollify({
            section : ".scroll",
            interstitialSection: ".basesection",
            scrollSpeed: 1000,
            touchScroll: false
          });
    }else{
        $.scrollify({
            section : ".scroll",
            interstitialSection: ".basesection, .tnc, .privacy, .lockup, .lockupm, .lockupp, .logo",
            scrollSpeed: 1000
          });
    }



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