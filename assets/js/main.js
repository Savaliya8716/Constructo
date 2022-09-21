//  Counter JS Files Start ------------------------
$('.counter').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({ countNum: $this.text() }).animate({
    countNum: countTo
  },

    {

      duration: 8000,
      easing: 'linear',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }

    });


});

// Counter JS Files End 

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

// ------------Team----------------------------

$(".carousel").owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false
    }
  }
});

// ------------Testimonal-------------------
function owlcarousel() {
  $(".rb-testimonials .owl-carousel").each(function () {
    var $this = $(this),
      $items = ($this.data('items')) ? $this.data('items') : 1,
      $loop = ($this.data('loop')) ? $this.data('loop') : true,
      $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
      $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
      $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
      $space = ($this.attr('data-space')) ? $this.data('space') : 30;
    $(this).rb - testimonials.owlCarousel({
      loop: $loop,
      items: $items,
      responsive: {
        0: {
          items: $this.data('xx-items') ? $this.data('xx-items') : 1
        },
        600: {
          items: $this.data('xs-items') ? $this.data('xs-items') : 1
        },
        767: {
          items: $this.data('sm-items') ? $this.data('sm-items') : 2
        },
        992: {
          items: $this.data('md-items') ? $this.data('md-items') : 2
        },
        1190: {
          items: $this.data('lg-items') ? $this.data('lg-items') : 3
        },
        1200: {
          items: $items
        }
      },
      dots: $navdots,
      margin: $space,
      nav: $navarrow,
      navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
      autoplay: $autoplay,
      autoplayHoverPause: true
    });

  });

}

$(document).ready(function () {
  owlcarousel();
});

// ------------------------------
$(document).ready(function() {
  $('#demo2').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 2,
        nav: true,
        loop: false,
        margin: 20
      }
    }
  })
})