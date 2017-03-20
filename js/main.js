$(document).ready(function() {
  // list-block accordion
  // slide functionality
  $('#js-site-wrapper').on('click', '.list-block__title', function() {
    $('.list-block__description').slideUp().removeClass('opened');
  	$('.list-block__title').removeClass('active');
  	$(this).next('.list-block__description:hidden').slideDown().addClass('opened').prev('.list-block__title').addClass('active');
  });

  // pagination for list blocks
  // arrow key functionality
  $(document).keydown(function(e) {
    switch(e.which) {
      case 37: // left
      break;

      case 39: // right
      break;

      default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)

    setTimeout(function() {
      if (e.which === 37) {
        $('.pagination__prev').click();
      } else {
        $('.pagination__next').click();
      }
    });
  });

  // pagination click functionality
  $('#js-site-wrapper').on('click', '.pagination a', function(e) {
    e.preventDefault();

    if (window.location === this.href) {
      return;
    }

    var destination = $(this).attr('href');

    window.history.pushState(null, null, destination);

    $('#js-site-wrapper').fadeOut(200, loadList);

    function loadList() {
      $('#js-site-wrapper').load(destination + ' #js-site-wrapper', function() {
        checkboxState(); // reload checkbox state
        $('#js-site-wrapper').fadeIn(100);
        // set list to visible once loaded
        $('[id*="js-list-location-"]').css('visibility', 'visible');
      });
    }
  });

  // footer about
  // $('.site-footer').on('click', function() {
  //   $('.footer-about').slideToggle().toggleClass('testing');
  //   if ($('.footer-about').hasClass('testing')) {
  //     $('#js-site-wrapper').css('margin-bottom', 250);
  //     $('html, body').animate({
  //       scrollTop: $(document).height()
  //     }, 2000);
  //   } else {
  //     $('#js-site-wrapper').css('margin-bottom', 186);
  //   }
  // });

  // nav toggle
  $('#js-nav-toggle').on('click', function() {
    $(this).toggleClass('active');
    $('html').toggleClass('menu-open');
    $('#js-overlay-nav').toggleClass('active');
    $('#header').toggleClass('z-index');
  });

  // color pattern
  $('#js-color-pattern').find('span').on('mouseenter', function() {
    var color = $(this).data('col');

    // remove all colors
    $('.intro').removeClass (function (index, className) {
      return (className.match (/\bcolor-\S+/g) || []).join(' ');
    });

    switch (color) {
      case '#5ac8fa':
        color = 'light-blue';
        break;
      case '#fee94e':
        color = 'yellow';
        break;
      case '#fb9638':
        color = 'orange';
        break;
      case '#cdd855':
        color = 'olive';
        break;
      case '#53d76a':
        color = 'green';
        break;
      case '#ff554d':
        color = 'red';
        break;
      case '#fd82c4':
        color = 'pink';
        break;
      case '#7b7c84':
        color = 'dark-grey';
        break;
      case '#fff':
        color = 'white';
        break;
      case '#414cb7':
        color = 'purple';
        break;
      default:
    }

    // add this color
    $('.intro').addClass('color-' + color);
  });

  // intro height
  function introHeight() {
    var introHeight = $('.page-home #js-intro-section').outerHeight();
    $('#js-site-wrapper').css('margin-top', introHeight + 6);
  }
  introHeight(); // init
  $(window).resize(introHeight); // rezize

  // footer height
  function footerHeight() {
    var footerHeight = $('#footer').outerHeight();
    $('#js-site-wrapper').css('margin-bottom', footerHeight);
  }
  footerHeight(); // init
  $(window).resize(footerHeight); // resize

  // choose a city block slider
  $('#js-city-slider').slick({
    slidesToShow: 5
  });
});

$(window).load(function() {
  // header animations
  $('#js-header-animation1').addClass('animated fadeInUp');
  $('#js-header-animation2').addClass('animated fadeInUp2');
  $('#js-header-animation3').addClass('animated fadeInUp3');
  $('#js-header-animation3').find('span').addClass('animated strikeThrough');

  // set list to visible once loaded
  $('[id*="js-list-location-"]').css('visibility', 'visible');
});
