$(document).ready(function (){

//     //for navbar
//     var timer;

//   // Hover over button
//   $('.homeMenu').hover(
//     function() {
//       clearTimeout(timer); // Clear any previous fade-out timer
//       $('.home-dropdown').fadeIn(); // Fade in the box
//     },
//     function() {
//       // Set a timer to fade out the box after 1 second
//       timer = setTimeout(function() {
//         $('.home-dropdown').fadeOut();
//       });
//     }
//   );
//   // Mouse movements inside the box
//   $('.home-dropdown').on('mouseenter', function() {
//     clearTimeout(timer); // Clear any fade-out timer
//   }).on('mouseleave', function() {
//     // Set a timer to fade out the box after 1 second
//     timer = setTimeout(function() {
//       $('.home-dropdown').fadeOut();
//     });
//   });



//   $('.shopMenu').hover(
//     function() {
//       clearTimeout(timer); // Clear any previous fade-out timer
//       $('.shop-dropdown').fadeIn(); // Fade in the box
//     },
//     function() {
//       // Set a timer to fade out the box after 1 second
//       timer = setTimeout(function() {
//         $('.shop-dropdown').fadeOut();
//       });
//     }
//   );
//   // Mouse movements inside the box
//   $('.shop-dropdown').on('mouseenter', function() {
//     clearTimeout(timer); // Clear any fade-out timer
//   }).on('mouseleave', function() {
//     // Set a timer to fade out the box after 1 second
//     timer = setTimeout(function() {
//       $('.shop-dropdown').fadeOut();
//     });
//   });



//   $('.blogMenu').hover(
//     function() {
//       clearTimeout(timer); // Clear any previous fade-out timer
//       $('.blog-dropdown').fadeIn(); // Fade in the box
//     },
//     function() {
//       // Set a timer to fade out the box after 1 second
//       timer = setTimeout(function() {
//         $('.blog-dropdown').fadeOut();
//       });
//     }
//   );
//   // Mouse movements inside the box
//   $('.blog-dropdown').on('mouseenter', function() {
//     clearTimeout(timer); // Clear any fade-out timer
//   }).on('mouseleave', function() {
//     // Set a timer to fade out the box after 1 second
//     timer = setTimeout(function() {
//       $('.blog-dropdown').fadeOut();
//     });
//   });



//   $('.PortfolioMenu').hover(
//     function() {
//       clearTimeout(timer); // Clear any previous fade-out timer
//       $('.Portfolio-dropdown').fadeIn(); // Fade in the box
//     },
//     function() {
//       // Set a timer to fade out the box after 1 second
//       timer = setTimeout(function() {
//         $('.Portfolio-dropdown').fadeOut();
//       });
//     }
//   );
//   // Mouse movements inside the box
//   $('.Portfolio-dropdown').on('mouseenter', function() {
//     clearTimeout(timer); // Clear any fade-out timer
//   }).on('mouseleave', function() {
//     // Set a timer to fade out the box after 1 second
//     timer = setTimeout(function() {
//       $('.Portfolio-dropdown').fadeOut();
//     });
//   });



//   $('.pagesMenu').hover(
//     function() {
//       clearTimeout(timer); // Clear any previous fade-out timer
//       $('.pages-dropdown').fadeIn(); // Fade in the box
//     },
//     function() {
//       // Set a timer to fade out the box after 1 second
//       timer = setTimeout(function() {
//         $('.pages-dropdown').fadeOut();
//       });
//     }
//   );
//   // Mouse movements inside the box
//   $('.pages-dropdown').on('mouseenter', function() {
//     clearTimeout(timer); // Clear any fade-out timer
//   }).on('mouseleave', function() {
//     // Set a timer to fade out the box after 1 second
//     timer = setTimeout(function() {
//       $('.pages-dropdown').fadeOut();
//     });
//   });



//   $('.MyAccountMenu').hover(
//     function() {
//       clearTimeout(timer); // Clear any previous fade-out timer
//       $('.MyAccount-dropdown').fadeIn(); // Fade in the box
//     },
//     function() {
//       // Set a timer to fade out the box after 1 second
//       timer = setTimeout(function() {
//         $('.MyAccount-dropdown').fadeOut();
//       });
//     }
//   );
//   // Mouse movements inside the box
//   $('.MyAccount-dropdown').on('mouseenter', function() {
//     clearTimeout(timer); // Clear any fade-out timer
//   }).on('mouseleave', function() {
//     // Set a timer to fade out the box after 1 second
//     timer = setTimeout(function() {
//       $('.MyAccount-dropdown').fadeOut();
//     });
//   });



//for burger Menu
  $('.burgerMenu').click(function () {
    $('.burgermenuShadow').fadeIn();
    $('.BM-card').fadeIn();
    $('#body').css({
        "overflow" : "hidden",
    });
  });
  $('.close-BMenu').click(function () {
    $('.burgermenuShadow').fadeOut();
    $('.BM-card').fadeOut();
    $('#body').css({
        "overflow" : "auto",
    });
  })



  
});