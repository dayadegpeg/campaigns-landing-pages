var Script = (function () {
  /* Search Bar ============ */
  siteUrl = "";

  var screenWidth = $(window).width();

  /* One Page Layout ============ */
  var onePageLayout = function () {
    "use strict";
    var headerHeight = parseInt($(".onepage").css("height"), 10);

    $(".scroll")
      .unbind()
      .on("click", function (event) {
        event.preventDefault();

        if (this.hash !== "") {
          var hash = this.hash;
          var seactionPosition = $(hash).offset().top;
          var headerHeight = parseInt($(".onepage").css("height"), 10);

          $("body").scrollspy({ target: ".navbar", offset: headerHeight + 2 });

          var scrollTopPosition = seactionPosition - headerHeight;

          $("html, body").animate(
            {
              scrollTop: scrollTopPosition,
            },
            800,
            function () {}
          );
        }
      });
    $("body").scrollspy({ target: ".navbar", offset: headerHeight + 2 });
  };

  /* Header Height ============ */
  var handleResizeElement = function () {
    $(".header").css("height", "");
    var HeaderHeight = $(".header").height();
    $(".header").css("height", HeaderHeight);
    if (screenWidth > 991) {
      $(".homedemo")
        .find(".mega-menu")
        .css("height", "calc(100vh - " + HeaderHeight + "px)");
    }
  };

  /* Load File ============ */
  var dzTheme = function () {
    "use strict";
    var loadingImage = '<img src="error-404.html">';
    jQuery(".dzload").each(function () {
      var dzsrc = siteUrl + $(this).attr("dzsrc");
      //jQuery(this).html(loadingImage);
      jQuery(this).hide(function () {
        jQuery(this).load(dzsrc, function () {
          jQuery(this).fadeIn("slow");
        });
      });
    });

    if (screenWidth <= 991) {
      jQuery(".navbar-nav > li > a, .sub-menu > li > a")
        .unbind()
        .on("click", function (e) {
          if (jQuery(this).parent().hasClass("open")) {
            jQuery(this).parent().removeClass("open");
          } else {
            jQuery(this).parent().parent().find("li").removeClass("open");
            jQuery(this).parent().addClass("open");
          }
        });
    }

    jQuery(".full-sidenav .navbar-nav > li > a").next(".sub-menu").slideUp();
    jQuery(".full-sidenav .sub-menu > li > a").next(".sub-menu").slideUp();

    jQuery(
      ".full-sidenav .navbar-nav > li > a, .full-sidenav .sub-menu > li > a"
    )
      .unbind()
      .on("click", function (e) {
        jQuery(".full-sidenav .navbar-nav > li > a")
          .not(this)
          .next(".sub-menu")
          .slideUp();
        jQuery(this).next(".sub-menu").toggle(500);
      });
    jQuery(".menu-icon").on("click", function () {
      jQuery(".menu-close,.full-sidenav").addClass("active");
      onePageLayout();
    });
    jQuery(".menu-close").on("click", function () {
      jQuery(".menu-close,.full-sidenav").removeClass("active");
    });

    jQuery(".contact-btn").on("click", function () {
      jQuery(".contact-button, .contact-button-2").toggleClass("active");
    });
    jQuery(".enter-button, .enquire").on("click", function () {
      jQuery(".enter-form").addClass("active");

      setTimeout(function () {
        jQuery(".enter-form").removeClass("active");
      }, 500);
    });

    setTimeout(function () {
      jQuery("#myModal").modal("show");
    }, 3000);

    jQuery(".tabs-toggle-switch").on("click", function () {
      jQuery(".tabs-toggle-switch, .toggle-tabs").toggleClass("active");
    });
  };

  /* Scroll To Top ============ */
  var scrollTop = function () {
    "use strict";
    var scrollTop = jQuery("button.scroltop");
    /* page scroll top on click function */
    scrollTop.on("click", function () {
      jQuery("html, body").animate(
        {
          scrollTop: 0,
        },
        1000
      );
      return false;
    });

    jQuery(window).bind("scroll", function () {
      var scroll = jQuery(window).scrollTop();
      if (scroll > 900) {
        jQuery("button.scroltop").fadeIn(1000);
      } else {
        jQuery("button.scroltop").fadeOut(1000);
      }
    });
    /* page scroll top on click function end*/
  };

  /* Equal Height ============ */
  var equalHeight = function (container) {
    if (jQuery(container).length == 0) {
      return false;
    }

    var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      $el,
      topPosition = 0;

    $(container).each(function () {
      $el = $(this);
      $($el).height("auto");
      topPostion = $el.position().top;

      if (currentRowStart != topPostion) {
        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
        }
        rowDivs.length = 0; // empty the array
        currentRowStart = topPostion;
        currentTallest = $el.height();
        rowDivs.push($el);
      } else {
        rowDivs.push($el);
        currentTallest =
          currentTallest < $el.height() ? $el.height() : currentTallest;
      }
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
    });
  };

  /* Footer Align ============ */
  var footerAlign = function () {
    "use strict";
    jQuery(".site-footer").css("display", "block");
    jQuery(".site-footer").css("height", "auto");
    var footerHeight = jQuery(".site-footer").outerHeight();
    jQuery(".footer-fixed > .page-wraper").css("padding-bottom", footerHeight);
    jQuery(".site-footer").css("height", footerHeight);
  };

  /* Header Fixed ============ */
  var headerFix = function () {
    "use strict";
    /* Main navigation fixed on top  when scroll down function custom */
    jQuery(window).on("scroll", function () {
      if (jQuery(".sticky-header").length > 0) {
        var menu = jQuery(".sticky-header");
        if ($(window).scrollTop() > menu.offset().top) {
          menu.addClass("is-fixed");
          $(".site-header .container > .logo-header .logo").attr(
            "src",
            "images/logo.png"
          );
          $(".site-header .container > .logo-header .logo-2").attr(
            "src",
            "images/logo-2.png"
          );
          $(".site-header .container > .logo-header .logo-3").attr(
            "src",
            "images/logo-3.png"
          );
        } else {
          menu.removeClass("is-fixed");
          $(
            ".site-header .container > .logo-header .logo, .site-header .container > .logo-header .logo-2, .site-header .container > .logo-header .logo-3"
          ).attr("src", "images/logo-white.png");
        }
      }
    });
    /* Main navigation fixed on top  when scroll down function custom end */
  };

  /* handle Bootstrap Select ============ */
  var handleBootstrapSelect = function () {
    /* Bootstrap Select box function by  = bootstrap-select.min.js */
    if (jQuery("select").length) {
      jQuery("select").selectpicker();
    }
    /* Bootstrap Select box function by  = bootstrap-select.min.js end*/
  };

  /* Resizebanner ============ */
  var handleBannerResize = function () {
    $(".full-height").css("height", $(window).height());
  };

  /* Countdown ============ */
  var handleCountDown = function (WebsiteLaunchDate) {
    /* Time Countr Down Js */
    if ($(".countdown").length) {
      $(".countdown").countdown(
        { date: WebsiteLaunchDate + " 23:5" },
        function () {
          $(".countdown").text("we are live");
        }
      );
    }
    /* Time Countr Down Js End */
  };

  /*handlePlaceholderAnimation*/
  var handlePlaceholderAnimation = function () {
    /*if(jQuery('.dezPlaceAni').length)
		{*/

    $("input, textarea").focus(function () {
      $(this).parents(".form-group").addClass("focused");
    });

    $("input, textarea").blur(function () {
      var inputValue = $(this).val();
      if (inputValue == "") {
        $(this).removeClass("filled");
        $(this).parents(".form-group").removeClass("focused");
      } else {
        $(this).addClass("filled");
      }
    });
    /*}*/
  };

  /* WOW ANIMATION ============ */
  var wow_animation = function () {
    if ($(".wow").length > 0) {
      var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (true is default)
      });
      wow.init();
    }
  };

  /* BGEFFECT ============ */

  var reposition = function () {
    "use strict";
    var modal = jQuery(this),
      dialog = modal.find(".modal-dialog");
    modal.css("display", "block");

    /* Dividing by two centers the modal exactly, but dividing by three 
		 or four works better for larger screens.  */
    dialog.css(
      "margin-top",
      Math.max(0, (jQuery(window).height() - dialog.height()) / 2)
    );
  };

  var handelResize = function () {
    /* Reposition when the window is resized */
    jQuery(window).on("resize", function () {
      jQuery(".modal:visible").each(reposition);

      equalHeight(".equal-wraper .equal-col");
      footerAlign();
    });
  };

  /* Header Height ============ */
  var setResizeMargin = function () {
    if ($(".setResizeMargin").length > 0 && screenWidth >= 1280) {
      var containerSize = $(".container").width();
      var getMargin = (screenWidth - containerSize) / 2;
      $(".setResizeMargin").css("margin-left", getMargin);
    }
    if ($(".setResizeMargin-right").length > 0 && screenWidth >= 1280) {
      var containerSize = $(".container").width();
      var getMargin = (screenWidth - containerSize) / 2;
      $(".setResizeMargin-right").css("margin-right", getMargin);
    }
  };

  /* LightGallery ============ */
  var lightGallery = function () {
    if ($("#lightgallery, .lightgallery").length > 0) {
      $("#lightgallery, .lightgallery").lightGallery({
        selector: ".lightimg",
        loop: true,
        thumbnail: true,
        exThumbImage: "data-exthumbimage",
      });
    }
  };

  /* handle Bootstrap Touch Spin ============ */
  var handleBootstrapTouchSpin = function () {
    if (jQuery("input[name='demo_vertical2']").length) {
      jQuery("input[name='demo_vertical2']").TouchSpin({
        verticalbuttons: true,
        verticalupclass: "ti-plus",
        verticaldownclass: "ti-minus",
      });
    }
  };

  var boxHover = function () {
    jQuery(".pricingtable-wrapper, .box-hover").on("mouseenter", function () {
      var selector = jQuery(this).parent().parent();
      selector.find(".pricingtable-wrapper, .box-hover").removeClass("active");
      jQuery(this).addClass("active");
    });
  };

  /* Function ============ */
  return {
    init: function () {
      boxHover();
      wow_animation();
      onePageLayout();
      dzTheme();
      handleResizeElement();
      handlePlaceholderAnimation();
      scrollTop();
      footerAlign();
      headerFix();
      handleBannerResize();
      setResizeMargin();
      handelResize();
      lightGallery();
      jQuery(".modal").on("show.bs.modal", reposition);
    },

    load: function () {
      handleBootstrapSelect();
      equalHeight(".equal-wraper .equal-col");
      handleBootstrapTouchSpin();
    },

    resize: function () {
      screenWidth = $(window).width();
      dzTheme();
      setTimeout(function () {
        handleResizeElement();
      }, 500);
    },
  };
})();

/* Document.ready Start */
jQuery(document).ready(function () {
  "use strict";
  Script.init();

  jQuery(".navicon").on("click", function () {
    $(this).toggleClass("open");
  });
});

jQuery(window).on("load", function () {
  "use strict";
  Script.load();
  setTimeout(function () {
    jQuery("#loading-area").remove();
  }, 0);
});

jQuery(window).on("resize", function () {
  "use strict";
  Script.resize();
});
/*  Window Resize END */
