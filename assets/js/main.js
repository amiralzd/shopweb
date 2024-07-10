$(document).ready(function (){

    // for navbar
    var timer;

  // Hover over button
  $('.homeMenu').hover(
    function() {
      clearTimeout(timer); // Clear any previous fade-out timer
      $('.home-dropdown').fadeIn(); // Fade in the box
    },
    function() {
      // Set a timer to fade out the box after 1 second
      timer = setTimeout(function() {
        $('.home-dropdown').fadeOut();
      });
    }
  );
  // Mouse movements inside the box
  $('.home-dropdown').on('mouseenter', function() {
    clearTimeout(timer); // Clear any fade-out timer
  }).on('mouseleave', function() {
    // Set a timer to fade out the box after 1 second
    timer = setTimeout(function() {
      $('.home-dropdown').fadeOut();
    });
  });



  $('.shopMenu').hover(
    function() {
      clearTimeout(timer); // Clear any previous fade-out timer
      $('.shop-dropdown').fadeIn(); // Fade in the box
    },
    function() {
      // Set a timer to fade out the box after 1 second
      timer = setTimeout(function() {
        $('.shop-dropdown').fadeOut();
      });
    }
  );
  // Mouse movements inside the box
  $('.shop-dropdown').on('mouseenter', function() {
    clearTimeout(timer); // Clear any fade-out timer
  }).on('mouseleave', function() {
    // Set a timer to fade out the box after 1 second
    timer = setTimeout(function() {
      $('.shop-dropdown').fadeOut();
    });
  });



  $('.blogMenu').hover(
    function() {
      clearTimeout(timer); // Clear any previous fade-out timer
      $('.blog-dropdown').fadeIn(); // Fade in the box
    },
    function() {
      // Set a timer to fade out the box after 1 second
      timer = setTimeout(function() {
        $('.blog-dropdown').fadeOut();
      });
    }
  );
  // Mouse movements inside the box
  $('.blog-dropdown').on('mouseenter', function() {
    clearTimeout(timer); // Clear any fade-out timer
  }).on('mouseleave', function() {
    // Set a timer to fade out the box after 1 second
    timer = setTimeout(function() {
      $('.blog-dropdown').fadeOut();
    });
  });



  $('.PortfolioMenu').hover(
    function() {
      clearTimeout(timer); // Clear any previous fade-out timer
      $('.Portfolio-dropdown').fadeIn(); // Fade in the box
    },
    function() {
      // Set a timer to fade out the box after 1 second
      timer = setTimeout(function() {
        $('.Portfolio-dropdown').fadeOut();
      });
    }
  );
  // Mouse movements inside the box
  $('.Portfolio-dropdown').on('mouseenter', function() {
    clearTimeout(timer); // Clear any fade-out timer
  }).on('mouseleave', function() {
    // Set a timer to fade out the box after 1 second
    timer = setTimeout(function() {
      $('.Portfolio-dropdown').fadeOut();
    });
  });



  $('.pagesMenu').hover(
    function() {
      clearTimeout(timer); // Clear any previous fade-out timer
      $('.pages-dropdown').fadeIn(); // Fade in the box
    },
    function() {
      // Set a timer to fade out the box after 1 second
      timer = setTimeout(function() {
        $('.pages-dropdown').fadeOut();
      });
    }
  );
  // Mouse movements inside the box
  $('.pages-dropdown').on('mouseenter', function() {
    clearTimeout(timer); // Clear any fade-out timer
  }).on('mouseleave', function() {
    // Set a timer to fade out the box after 1 second
    timer = setTimeout(function() {
      $('.pages-dropdown').fadeOut();
    });
  });



  $('.MyAccountMenu').hover(
    function() {
      clearTimeout(timer); // Clear any previous fade-out timer
      $('.MyAccount-dropdown').fadeIn(); // Fade in the box
    },
    function() {
      // Set a timer to fade out the box after 1 second
      timer = setTimeout(function() {
        $('.MyAccount-dropdown').fadeOut();
      });
    }
  );
  // Mouse movements inside the box
  $('.MyAccount-dropdown').on('mouseenter', function() {
    clearTimeout(timer); // Clear any fade-out timer
  }).on('mouseleave', function() {
    // Set a timer to fade out the box after 1 second
    timer = setTimeout(function() {
      $('.MyAccount-dropdown').fadeOut();
    });
  });


  



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



let selectedBox = null;

function selectBox(boxNumber) {
  if (selectedBox !== null) {
    selectedBox.classList.remove('selected');
  }
  
  const box = document.querySelector(`.box:nth-child(${boxNumber})`);
  box.classList.add('selected');
  selectedBox = box;
};




let selectedCircle = null;

function selectCircle(event) {
  const clickedCircle = event.target;
  
  if (selectedCircle !== null) {
    selectedCircle.classList.remove('active');
  }
  
  clickedCircle.classList.add('active');
  selectedCircle = clickedCircle;
};



// Get the element with class "noUi-connect"
const element = document.querySelector('.noUi-connect');

// Modify the style properties
// element.style.transform = 'translate(0%, 0px) scale(1, 1)';






let number = 0;

function moveNumberUp() {
  number++;
  document.getElementById("numberBox").value = number;
}

function moveNumberDown() {
  number--;
  document.getElementById("numberBox").value = number;
}





function activateBox(boxId) {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    if (box.id === boxId) {
      box.classList.add('product-active');
    } else {
      box.classList.remove('product-active');
    }
  });
}





$(document).ready(function () {
  $('#card2').click(function () {
    $('#card2').addClass("product-active");
    $('#card1').removeClass("product-active");
    $('#card3').removeClass("product-active");
  })

  $('#card3').click(function () {
    $('#card3').addClass("product-active");
    $('#card1').removeClass("product-active");
    $('#card2').removeClass("product-active");
  })

  $('#card1').click(function () {
    $('#card1').addClass("product-active");
    $('#card2').removeClass("product-active");
    $('#card3').removeClass("product-active");
  })
})




$(document).ready(function () {
  $('#colorItem1').click(function () {
    $('#colorItem1').addClass("borderActive");
    $('#colorItem2').removeClass("borderActive");
    $('#colorItem3').removeClass("borderActive");
    $('#colorItem4').removeClass("borderActive");
  })

  $('#colorItem2').click(function () {
    $('#colorItem2').addClass("borderActive");
    $('#colorItem1').removeClass("borderActive");
    $('#colorItem3').removeClass("borderActive");
    $('#colorItem4').removeClass("borderActive");
  })

  $('#colorItem3').click(function () {
    $('#colorItem3').addClass("borderActive");
    $('#colorItem1').removeClass("borderActive");
    $('#colorItem2').removeClass("borderActive");
    $('#colorItem4').removeClass("borderActive");
  })

  $('#colorItem4').click(function () {
    $('#colorItem4').addClass("borderActive");
    $('#colorItem1').removeClass("borderActive");
    $('#colorItem2').removeClass("borderActive");
    $('#colorItem3').removeClass("borderActive");
  })
})



$(document).ready(function () {
  $('.btn1').click(function () {
    $('.container1').show();
    $('.container2').hide();
    $('.btn1').addClass('btn-border');
    $('.btn2').removeClass('btn-border');
  })
  $('.btn2').click(function () {
    $('.container2').show();
    $('.container1').hide();
    $('.btn2').addClass('btn-border');
    $('.btn1').removeClass('btn-border');
  })
})




$(document).ready(function() {
 
  $("#owl-product").owlCarousel();
 
});




$(document).ready(function() {
 
  $("#shop-item1").click(function () {
    $('#shopItemsDrop').toggle();
  })
 
});


//lightGallery
var handleLightgallery = function () {
  if (jQuery('#lightgallery').length > 0) {
    lightGallery(document.getElementById('lightgallery'), {
      plugins: [lgThumbnail, lgZoom],
      selector: '.lg-item',
      thumbnail: true,
      exThumbImage: 'data-src'
    });
  }
  
}







(function() {

  var parent = document.querySelector(".range-slider");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
        	slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
			var number1 = parseFloat(numberS[0].value),
					number2 = parseFloat(numberS[1].value);
			
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });

})();








