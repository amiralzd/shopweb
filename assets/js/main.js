$(document).ready(function (){

    //for navbar
  //   var timer;

  // // Hover over button
  // $('.homeMenu').hover(
  //   function() {
  //     clearTimeout(timer); // Clear any previous fade-out timer
  //     $('.home-dropdown').fadeIn(); // Fade in the box
  //   },
  //   function() {
  //     // Set a timer to fade out the box after 1 second
  //     timer = setTimeout(function() {
  //       $('.home-dropdown').fadeOut();
  //     });
  //   }
  // );
  // // Mouse movements inside the box
  // $('.home-dropdown').on('mouseenter', function() {
  //   clearTimeout(timer); // Clear any fade-out timer
  // }).on('mouseleave', function() {
  //   // Set a timer to fade out the box after 1 second
  //   timer = setTimeout(function() {
  //     $('.home-dropdown').fadeOut();
  //   });
  // });



  // $('.shopMenu').hover(
  //   function() {
  //     clearTimeout(timer); // Clear any previous fade-out timer
  //     $('.shop-dropdown').fadeIn(); // Fade in the box
  //   },
  //   function() {
  //     // Set a timer to fade out the box after 1 second
  //     timer = setTimeout(function() {
  //       $('.shop-dropdown').fadeOut();
  //     });
  //   }
  // );
  // // Mouse movements inside the box
  // $('.shop-dropdown').on('mouseenter', function() {
  //   clearTimeout(timer); // Clear any fade-out timer
  // }).on('mouseleave', function() {
  //   // Set a timer to fade out the box after 1 second
  //   timer = setTimeout(function() {
  //     $('.shop-dropdown').fadeOut();
  //   });
  // });



  // $('.blogMenu').hover(
  //   function() {
  //     clearTimeout(timer); // Clear any previous fade-out timer
  //     $('.blog-dropdown').fadeIn(); // Fade in the box
  //   },
  //   function() {
  //     // Set a timer to fade out the box after 1 second
  //     timer = setTimeout(function() {
  //       $('.blog-dropdown').fadeOut();
  //     });
  //   }
  // );
  // // Mouse movements inside the box
  // $('.blog-dropdown').on('mouseenter', function() {
  //   clearTimeout(timer); // Clear any fade-out timer
  // }).on('mouseleave', function() {
  //   // Set a timer to fade out the box after 1 second
  //   timer = setTimeout(function() {
  //     $('.blog-dropdown').fadeOut();
  //   });
  // });



  // $('.PortfolioMenu').hover(
  //   function() {
  //     clearTimeout(timer); // Clear any previous fade-out timer
  //     $('.Portfolio-dropdown').fadeIn(); // Fade in the box
  //   },
  //   function() {
  //     // Set a timer to fade out the box after 1 second
  //     timer = setTimeout(function() {
  //       $('.Portfolio-dropdown').fadeOut();
  //     });
  //   }
  // );
  // // Mouse movements inside the box
  // $('.Portfolio-dropdown').on('mouseenter', function() {
  //   clearTimeout(timer); // Clear any fade-out timer
  // }).on('mouseleave', function() {
  //   // Set a timer to fade out the box after 1 second
  //   timer = setTimeout(function() {
  //     $('.Portfolio-dropdown').fadeOut();
  //   });
  // });



  // $('.pagesMenu').hover(
  //   function() {
  //     clearTimeout(timer); // Clear any previous fade-out timer
  //     $('.pages-dropdown').fadeIn(); // Fade in the box
  //   },
  //   function() {
  //     // Set a timer to fade out the box after 1 second
  //     timer = setTimeout(function() {
  //       $('.pages-dropdown').fadeOut();
  //     });
  //   }
  // );
  // // Mouse movements inside the box
  // $('.pages-dropdown').on('mouseenter', function() {
  //   clearTimeout(timer); // Clear any fade-out timer
  // }).on('mouseleave', function() {
  //   // Set a timer to fade out the box after 1 second
  //   timer = setTimeout(function() {
  //     $('.pages-dropdown').fadeOut();
  //   });
  // });



  // $('.MyAccountMenu').hover(
  //   function() {
  //     clearTimeout(timer); // Clear any previous fade-out timer
  //     $('.MyAccount-dropdown').fadeIn(); // Fade in the box
  //   },
  //   function() {
  //     // Set a timer to fade out the box after 1 second
  //     timer = setTimeout(function() {
  //       $('.MyAccount-dropdown').fadeOut();
  //     });
  //   }
  // );
  // // Mouse movements inside the box
  // $('.MyAccount-dropdown').on('mouseenter', function() {
  //   clearTimeout(timer); // Clear any fade-out timer
  // }).on('mouseleave', function() {
  //   // Set a timer to fade out the box after 1 second
  //   timer = setTimeout(function() {
  //     $('.MyAccount-dropdown').fadeOut();
  //   });
  // });


  



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







/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}





$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
 
  });
 
});



// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let btn3 = document.getElementById('btn3');
// let btn4 = document.getElementById('btn4');
// let btn5 = document.getElementById('btn5');


$(document).ready(function() {
  $('.btn').click(function() {
    $('.btn').removeClass('active'); // Remove the 'active' class from all items
    $(this).addClass('active'); // Add the 'active' class to the clicked item
  });
});







$(document).ready(function () {
  $('#btn1').click(function () {
    $('#item1').fadeIn();
    $('#item2').fadeIn();
    $('#item3').fadeIn();
    $('#item4').fadeIn();
    $('#item5').fadeIn();
    $('#item6').fadeIn();
    $('#item7').fadeIn();
    $('#item8').fadeIn();
  })
  $('#btn2').click(function () {
    $('#item1').fadeOut();
    $('#item4').fadeOut();
    $('#item6').fadeOut();
    $('#item8').fadeOut();

    $('#item2').fadeIn();
    $('#item3').fadeIn();
    $('#item5').fadeIn();
    $('#item7').fadeIn();
  })
  $('#btn3').click(function () {
    $('#item2').fadeOut();
    $('#item3').fadeOut();
    $('#item5').fadeOut();
    $('#item6').fadeOut();
    $('#item7').fadeOut();

    $('#item1').fadeIn();
    $('#item4').fadeIn();
    $('#item8').fadeIn();
  })
  $('#btn4').click(function () {
    $('#item1').fadeOut();
    $('#item2').fadeOut();
    $('#item3').fadeOut();
    $('#item4').fadeOut();
    $('#item5').fadeOut();
    $('#item7').fadeOut();
    $('#item8').fadeOut();

    $('#item6').fadeIn();
  })
  $('#btn5').click(function () {
    $('#item1').fadeOut();
    $('#item3').fadeOut();
    $('#item5').fadeOut();
    $('#item6').fadeOut();
    $('#item7').fadeOut();
    $('#item8').fadeOut();

    $('#item2').fadeIn();
    $('#item4').fadeIn();
  })
});





$(document).ready(function() {
 
  $("#owl-demo2").owlCarousel({
    navigation : true
  });
 
});



document.addEventListener("DOMContentLoaded", function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  });

  scrollToTopBtn.addEventListener("click", function() {
    scrollToTop(1000); // Adjust the scroll duration (in milliseconds) as needed
  });

  function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    var scrollInterval = setInterval(function() {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  }
});