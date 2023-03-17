(function () {
  "use strict";

  var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
      var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas")) {
          $("body").removeClass("offcanvas");
          $(".js-fh5co-nav-toggle").removeClass("active");
        }
      }
    });
  };

  var offcanvasMenu = function () {
    $("#page").prepend('<div id="fh5co-offcanvas" />');
    // $('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
    var clone1 = $(".menu-1 > ul").clone();
    $("#fh5co-offcanvas").append(clone1);
    var clone2 = $(".menu-2 > ul").clone();
    $("#fh5co-offcanvas").append(clone2);

    $("#fh5co-offcanvas .has-dropdown").addClass("offcanvas-has-dropdown");
    $("#fh5co-offcanvas").find("li").removeClass("has-dropdown");

    // Hover dropdown menu on mobile
    $(".offcanvas-has-dropdown")
      .mouseenter(function () {
        var $this = $(this);

        $this.addClass("active").find("ul").slideDown(500, "easeOutExpo");
      })
      .mouseleave(function () {
        var $this = $(this);
        $this.removeClass("active").find("ul").slideUp(500, "easeOutExpo");
      });

    $(window).resize(function () {
      if ($("body").hasClass("offcanvas")) {
        $("body").removeClass("offcanvas");
        $(".js-fh5co-nav-toggle").removeClass("active");
      }
    });
  };

  var burgerMenu = function () {
    $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
      var $this = $(this);

      if ($("body").hasClass("overflow offcanvas")) {
        $("body").removeClass("overflow offcanvas");
      } else {
        $("body").addClass("overflow offcanvas");
      }
      $this.toggleClass("active");
      event.preventDefault();
    });
  };

  var contentWayPoint = function () {
    var i = 0;
    $(".animate-box").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("animated-fast")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .animate-box.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn animated-fast");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft animated-fast");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight animated-fast");
                  } else {
                    el.addClass("fadeInUp animated-fast");
                  }

                  el.removeClass("item-animate");
                },
                k * 200,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "85%" }
    );
  };

  var dropdown = function () {
    $(".has-dropdown")
      .mouseenter(function () {
        var $this = $(this);
        $this
          .find(".dropdown")
          .css("display", "block")
          .addClass("animated-fast fadeInUpMenu");
      })
      .mouseleave(function () {
        var $this = $(this);

        $this
          .find(".dropdown")
          .css("display", "none")
          .removeClass("animated-fast fadeInUpMenu");
      });
  };

  var testimonialCarousel = function () {
    var owl = $(".owl-carousel-fullwidth");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      dots: true,
      smartSpeed: 800,
      autoHeight: true,
    });
  };

  var goToTop = function () {
    $(".js-gotop").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: $("html").offset().top,
        },
        500,
        "easeInOutExpo"
      );

      return false;
    });

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $(".js-top").addClass("active");
      } else {
        $(".js-top").removeClass("active");
      }
    });
  };

  // Loading page
  var loaderPage = function () {
    $(".fh5co-loader").fadeOut("slow");
  };

  var counter = function () {
    $(".js-counter").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals);
      },
    });
  };

  var counterWayPoint = function () {
    if ($("#fh5co-counter").length > 0) {
      $("#fh5co-counter").waypoint(
        function (direction) {
          if (direction === "down" && !$(this.element).hasClass("animated")) {
            setTimeout(counter, 400);
            $(this.element).addClass("animated");
          }
        },
        { offset: "90%" }
      );
    }
  };

  // Parallax
  var parallax = function () {
    $(window).stellar();
  };

  $(function () {
    mobileMenuOutsideClick();
    parallax();
    offcanvasMenu();
    burgerMenu();
    contentWayPoint();
    dropdown();
    testimonialCarousel();
    goToTop();
    loaderPage();
    counter();
    counterWayPoint();
  });
})();

/*
1. back to top script
2. magnific-popup
3. product-slider
4. testimonial-slider
5. featured-slider
6. For Expired Timer
7. video-popup
8. service hover js
9. client-logos-slider
10. testimonial-boxes
11. animation wow
12. newsletter form email validation
13. website loader js
14. fat-nav js
*/

jQuery(function () {
  /*===================================================================================*/
  /*  back to top script
    /*===================================================================================*/
  var offset = 500;
  var back_top = jQuery(".skip_swing");
  jQuery(window).on("scroll", function () {
    jQuery(this).scrollTop() > offset
      ? back_top.addClass("show_icon")
      : back_top.removeClass("show_icon");
  });

  jQuery("a.skip_swing").on("click", function () {
    var Lochref = jQuery(this).attr("href");
    jQuery("html, body")
      .stop()
      .animate(
        {
          scrollTop: jQuery(Lochref).offset().top,
        },
        1500
      );
    return false;
  });

  /*===================================================================================*/
  /*  magnific-popup
    /*===================================================================================*/
  if (jQuery(".popup-link").length > 0) {
    jQuery(".popup-link").magnificPopup({
      type: "image",
      preloader: true,
      mainClass: "mfp-fade",
      preload: [1, 3],
      gallery: {
        enabled: true,
      },
      // false loop when lightbox goes to last item
      callbacks: {
        open: function () {
          var mfp = $.magnificPopup.instance;
          var proto = $.magnificPopup.proto;

          // extend function that moves to next item
          mfp.next = function () {
            // if index is not last, call parent method
            if (mfp.index < mfp.items.length - 1) {
              proto.next.call(mfp);
            } else {
              // otherwise do whatever you want, e.g. hide "next" arrow
            }
          };

          // same with prev method
          mfp.prev = function () {
            if (mfp.index > 0) {
              proto.prev.call(mfp);
            }
          };
        },
      },
    });
  }

  /*===================================================================================*/
  /*  product-slider
    /*===================================================================================*/
  if (jQuery(".product-slider").length > 0) {
    jQuery(".product-slider").owlCarousel({
      items: 1, // The number of items you want to see on the screen.
      margin: 24, //margin-right(px) on item.
      loop: true, //Infinity loop. Duplicate last and first items to get loop illusion.
      autoplay: false, //Autoplay true or false
      mouseDrag: true, // Mouse drag enabled.
      touchDrag: true, // Touch drag enabled.
      navText: [
        '<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>',
      ], // HTML allowed.
      nav: false, // Show next/prev buttons.
      dotsEach: false, //Show dots each x item.
      smartSpeed: 350, // slide speed
      dots: true, //Show dots navigation.
      lazyLoad: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        767: {
          items: 3,
        },
        992: {
          items: 4,
        },
      },
    });
  }

  /*===================================================================================*/
  /*  testimonial-slider
    /*===================================================================================*/
  if (jQuery(".testimonial-slider").length > 0) {
    jQuery(".testimonial-slider").owlCarousel({
      items: 1, // The number of items you want to see on the screen.
      margin: 0, //margin-right(px) on item.
      loop: false, //Infinity loop. Duplicate last and first items to get loop illusion.
      autoplay: false, //Autoplay true or false
      mouseDrag: true, // Mouse drag enabled.
      touchDrag: true, // Touch drag enabled.
      navText: [""], // HTML allowed.
      nav: false, // Show next/prev buttons.
      dotsEach: false, //Show dots each x item.
      dots: true, //Show dots navigation.
      smartSpeed: 750, // slide speed
    });
  }

  /*===================================================================================*/
  /*  featured-slider
    /*===================================================================================*/
  if (jQuery(".featured-slider").length > 0) {
    jQuery(".featured-slider").owlCarousel({
      items: 1, // The number of items you want to see on the screen.
      margin: 0, //margin-right(px) on item.
      loop: false, //Infinity loop. Duplicate last and first items to get loop illusion.
      autoplay: false, //Autoplay true or false
      mouseDrag: true, // Mouse drag enabled.
      touchDrag: true, // Touch drag enabled.
      navText: [""], // HTML allowed.
      nav: false, // Show next/prev buttons.
      dotsEach: false, //Show dots each x item.
      dots: true, //Show dots navigation.
      smartSpeed: 750, // slide speed
    });
  }

  /*===================================================================================*/
  /*  video-popup
    /*===================================================================================*/
  if (jQuery(".video-button").length > 0) {
    jQuery(".video-button").modalVideo({
      youtube: {
        autoplay: 1,
        controls: 1,
      },
      ratio: "16:9",
    });
  }

  /*===================================================================================*/
  /*  service hover js
    /*===================================================================================*/
  jQuery(document).ready(function () {
    jQuery(".service-hover").on({
      mouseenter: function () {
        jQuery(this).find(".service-cont-wrap p").slideDown(500);
      },
      mouseleave: function () {
        jQuery(this).find(".service-cont-wrap p").slideUp(500);
      },
    });
  });

  /*===================================================================================*/
  /*  client-logos-slider
    /*===================================================================================*/
  if (jQuery(".client-logos-slider").length > 0) {
    jQuery(".client-logos-slider").owlCarousel({
      items: 5, // The number of items you want to see on the screen.
      margin: 15, //margin-right(px) on item.
      loop: true, //Infinity loop. Duplicate last and first items to get loop illusion.
      autoplay: false, //Autoplay true or false
      mouseDrag: true, // Mouse drag enabled.
      touchDrag: true, // Touch drag enabled.
      navText: [""], // HTML allowed.
      nav: false, // Show next/prev buttons.
      dotsEach: false, //Show dots each x item.
      smartSpeed: 750, // slide speed
      dots: false, //Show dots navigation.
      lazyLoad: true,
      responsive: {
        0: {
          items: 2,
        },
        480: {
          items: 3,
        },
        767: {
          items: 4,
        },
        991: {
          items: 5,
        },
      },
    });
  }

  /*===================================================================================*/
  /*  testimonial-boxes
    /*===================================================================================*/
  if (jQuery(".testimonial-boxes").length > 0) {
    jQuery(".testimonial-boxes").owlCarousel({
      items: 3, // The number of items you want to see on the screen.
      margin: 30, //margin-right(px) on item.
      loop: false, //Infinity loop. Duplicate last and first items to get loop illusion.
      autoplay: false, //Autoplay true or false
      mouseDrag: true, // Mouse drag enabled.
      touchDrag: true, // Touch drag enabled.
      navText: [
        '<i class="fas fa-angle-left"></i>',
        '<i class="fas fa-angle-right"></i>',
      ], // HTML allowed.
      nav: true, // Show next/prev buttons.
      dotsEach: false, //Show dots each x item.
      smartSpeed: 750, // slide speed
      dots: false, //Show dots navigation.
      lazyLoad: true,
      responsive: {
        0: {
          items: 1,
        },
        580: {
          items: 2,
        },
        991: {
          items: 3,
        },
      },
    });
  }

  /*===================================================================================*/
  /*  animation wow
    /*===================================================================================*/
  if (jQuery(".wow").length > 0) {
    jQuery(function () {
      var wow = new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
        scrollContainer: null,
      });
      wow.init();
    });
  }
});

