 var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);


(function($) {
$(window).bind('resize', function(e)
{
  console.log('window resized..');
  this.location.reload(false); /* false to get page from cache */
  /* true to fetch page from server */
});

        $.scrollify({
            section : ".scroll",
            interstitialSection: ".basesection",
            standardScrollElements:'.basesection',
            scrollSpeed: 1000
          });


$('.arrow').click(function() {
       var target;
       $(".arrowdown").each(function(i, element) {
         target = $(element).offset().top;
         if (target - 10 > $(document).scrollTop()) {
           return false; // break
         }
       });
       $("html, body").animate({
         scrollTop: target
    }, 500);
    });


$('.logo').click(function() {
       var target;
       $("html, body").animate({
         scrollTop: 0
    }, 300);
    });

$('.top').click(function() {
       var target;
       $("html, body").animate({
         scrollTop: 0
    }, 300);
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




