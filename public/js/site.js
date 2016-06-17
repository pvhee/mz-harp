$(function() {
  var breakMobile = 730, // viewport px breakpoint

      fixedHeader = function() {
        var viewportWidth = $( window ).width(),
            fixedClass = 'navigation--fixed-top',
            $navElement = $(".navigation");

        if ($(window).scrollTop() > '1' && viewportWidth >= breakMobile) {
          $navElement.addClass(fixedClass);
        } else {
          $navElement.removeClass(fixedClass);
        }
      },

      showLogo = function() {
        var viewportWidth = $( window ).width(),
            logovisibleClass = 'visible-logo',
            $logoElement = $(".navigation__item--logo");

        if ($(window).scrollTop() > '150' && viewportWidth >= breakMobile) {
          $logoElement.addClass(logovisibleClass);
        } else {
         $logoElement.removeClass(logovisibleClass);
        }
      },

      replaceMailto = function() {
        var $emailElement = $(".contact-button__email");

        $emailElement.click(function() {
          window.location.href = 'mailto:' + $(this).text().split('').reverse().join('');
        });
      };

      // Toggle mobile navigation
      $(".navigation__mobile-menu__toggle").click(function() {
        $(this).parent().toggleClass('is-open');
      });

      // Force close mobile navigation when clicking anywhere (except the toggle button itself)
      $( document ).on('mousedown touchstart', function(event) {
        if (!$(event.target).closest(".navigation__mobile-menu__toggle").length) {
          $(".navigation.is-open").removeClass('is-open');
        }
      });

      // Call on DOM ready

      $('.carousel').flickity({
        autoPlay: true,
        setGallerySize: false,
        wrapAround: true,
        imagesLoaded: true,
        prevNextButtons: false,
        pageDots: false,
        freeScroll: true,
        autoPlay: true
      });

      $('.carousel__testimonials-wrapper').flickity({
        autoPlay: true,
        wrapAround: true,
        imagesLoaded: true,
        prevNextButtons: false,
        pageDots: true,
        freeScroll: true,
        autoPlay: true
      });

  $(window).on('resize scroll', fixedHeader);
  $(window).on('resize scroll', showLogo);
  replaceMailto();
});
