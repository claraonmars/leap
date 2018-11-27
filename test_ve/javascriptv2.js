///////////////////////////////////////////////////////////////////////
// Set body height as window inner viewport height
///////////////////////////////////////////////////////////////////////
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


///////////////////////////////////////////////////////////////////////
// Check what browser
///////////////////////////////////////////////////////////////////////
var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);


// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);


///////////////////////////////////////////////////////////////////////
// Check if mobile
///////////////////////////////////////////////////////////////////////
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}

// if (isMobile && isSafari){
//     console.log('safari');
//     document.querySelector('.footer').style.top = '60vh';
//     var main = document.querySelectorAll('.main')


//         for (var i = 0; i<main.length; i++){
//             main[i].style.height ='90vh'
//         }

// }

///////////////////////////////////////////////////////////////////////
// Resize on portrait to landscape switch
///////////////////////////////////////////////////////////////////////
(function($) {

        $(window).bind('resize', function(e)
        {
          console.log('window resized..');
          this.location.reload(false);

          /* false to get page from cache */
          /* true to fetch page from server */
        });


///////////////////////////////////////////////////////////////////////
// Initiate scrollify
///////////////////////////////////////////////////////////////////////
        // $.scrollify({
        //     section : ".scroll",
        //     interstitialSection: ".deleven",
        //     standardScrollElements: ".deleven",
        //     scrollSpeed: 1000
        //   });



    //'use strict';
    var $section = $('.scroll');
    var $pager = $('#js-pager');

    var option = {
      section : '.scroll',
      sectionName:false,
      easing: "swing",
      scrollSpeed: 1000,
      overflowscroll: true
    };

    $(document).ready(function(e){
        $.scrollify(option);
    });



///////////////////////////////////////////////////////////////////////
// Click events
///////////////////////////////////////////////////////////////////////

        // Arrow down
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

        // Logo to top
        $('.logo').click(function() {
               var target;
               $("html, body").animate({
                 scrollTop: 0
            }, 300);
            });

        // Back to top
        $('#top').click(function() {
               var target;
               $("html, body").animate({
                 scrollTop: 0
            }, 300);
    });

///////////////////////////////////////////////////////////////////////
// Hide canvas on mobile portrait >> landscape
///////////////////////////////////////////////////////////////////////

        if (isMobile === true){
        var mains=document.querySelectorAll('.main')
        for (var i = 0;  i< mains.length; i++){
            mains[i].style.height = $(window).innerHeight() + 'px!important'
        }

        $(window).scroll(function() {
           var hT = $('.dsix').offset().top,
               hH = $('.dsix').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           if (wS > (hT+hH-wH)){
             document.querySelector('#canvas').style.display='none'
           }
           else{
            document.querySelector('#canvas').style.display='block'
           }
        });

        $('input').on('click', function() {
          if ($(document.activeElement).is('.email') || $(document.activeElement).is('.mailercompany') || $(document.activeElement).is('.mailername')) {
            option ={
                updateHash:false
            }

          }

        });


        // var main = document.querySelectorAll('.main')


        // for (var i = 0; i<main.length; i++){
        //     main[i].style.height = $(window).innerHeight + 'px'
        // }
    }


    $(window).scroll(function() {
           var hT = $('.dten').offset().top,
               hH = $('.dten').outerHeight(),
               wH = $(window).height(),
               wS = $(this).scrollTop();
           if (wS > (hT+hH-wH)){
             document.querySelector('.wrapper').style.zIndex='+14'
           }
           else{
            document.querySelector('.wrapper').style.zIndex='0'
           }
        });

    var locked = false;

$('body').bind('mousewheel', function(e) {
    if(locked) {
        var $div = $('.text');

        $div.scrollTop($div.scrollTop()
                        - e.originalEvent.wheelDelta);

        return false;
    }
});

///////////////////////////////////////////////////////////////////////
// Lightbox reveals
///////////////////////////////////////////////////////////////////////




// on click privacy statements
var pterms = document.querySelector("#privacy");
pterms.addEventListener('click', revealp);

var exitp = document.querySelector("#exitprivacy");
exitp.addEventListener('click', exitprivacy);

function revealp() {
    document.querySelector('.privacy').style.display = "block";
    locked = !locked;
    if (isMobile){
        var active = document.querySelectorAll(".popup");
        active[1].classList.remove("col-6");
    }

}

function exitprivacy() {
    document.querySelector('.privacy').style.display = "none";
        locked = !locked;

}


// on click terms & conditions
var terms = document.querySelector("#terms");
terms.addEventListener('click', revealterms);

var exit = document.querySelector("#exiterms");
exit.addEventListener('click', exiterms);

function revealterms() {
    document.querySelector('.tnc').style.display = "block";
    locked = !locked;
    if (isMobile){
        var active = document.querySelector(".popup");
        active.classList.remove("col-6");
    }
}

function exiterms() {
    document.querySelector('.tnc').style.display = "none";
    locked = !locked;

}

})(jQuery);







