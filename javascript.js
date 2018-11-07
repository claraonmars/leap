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


// // text reveals

// function isScrolledIntoView(elem) {
//     var docViewTop = $(window).scrollTop();
//     var docViewBottom = docViewTop + $(window).height();

//     var elemTop = $(elem).offset().top;
//     var elemBottom = elemTop + $(elem).height();

//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


// // The checker
// const gambitGalleryIsInView = el => {
//     const scroll = window.scrollY || window.pageYOffset
//     const boundsTop = el.getBoundingClientRect().top + scroll

//     const viewport = {
//         top: scroll,
//         bottom: scroll + window.innerHeight,
//     }

//     const bounds = {
//         top: boundsTop,
//         bottom: boundsTop + el.clientHeight,
//     }

//     return (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
//         (bounds.top <= viewport.bottom && bounds.top >= viewport.top);
// }


// // Usage.
// document.addEventListener('DOMContentLoaded', () => {
//     const tester = document.querySelector('#target')

//     const handler = () => raf(() => {
//         if (gambitGalleryIsInView(tester)) {

//             // if (document.getElementById("hide").style.right == 0) {
//             //     var elem = document.getElementById("hide");
//             //     elem.style.display='block';
//             //     var pos = -500;
//             //     var id = setInterval(frame, 15);

//             //     function frame() {
//             //         if (pos == 0) {
//             //             clearInterval(id);
//             //         } else {
//             //             pos += 10;
//             //             elem.style.right = pos + 'px';
//             //         }
//             //     }

//             // }
//         } else {

//         }
//     })

//     handler()
//     window.addEventListener('scroll', handler)
// })


// // requestAnimationFrame
// const raf =
//     window.requestAnimationFrame ||
//     window.webkitRequestAnimationFrame ||
//     window.mozRequestAnimationFrame ||
//     function(callback) {
//         window.setTimeout(callback, 1000 / 60)
//     }



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}