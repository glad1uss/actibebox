$(window).on('scroll', function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});

function features(){
    var init = $("#features .wrapper");

    if(window.innerWidth <= 768){
      if( !$(init).hasClass('slick-initialized') ){
        $(init).slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            responsive: [
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
      }
    }
    else {
      if($(init).hasClass('slick-initialized')){
        $(init).slick('unslick');
      }
    }
  };

  function team(){
    var init = $("#team .wrapper");

    if(window.innerWidth <= 1260){
      if( !$(init).hasClass('slick-initialized') ){
        $(init).slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            // centerMode: true,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                  }
                },
                {
                  breakpoint: 590,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                  }
                }
              ]
        });
      }
    }
    else {
      if($(init).hasClass('slick-initialized')){
        $(init).slick('unslick');
      }
    }
  };

$( document ).ready(function() {
    var sections = $('section')
    nav = $('.top-nav');

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
          var top = $(this).offset().top - 78
              bottom = top + $(this).outerHeight();
          if (cur_pos >= top && cur_pos <= bottom) {
              nav.find('a').removeClass('active');
              nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
          }
        });
    });
    nav.find('a').on('click', function () {
        var $el = $(this)
          id = $el.attr('href');
      $('html, body').animate({
        scrollTop: $(id).offset().top - 75
      }, 500);
      return false;
    });

    $('#nav-bar').click(function(){
      $(this).toggleClass('open');
    });

    $(function(){
        $.getJSON('assets/json/features.json', function(data) {
            for(var i=0;i<data.cards.length;i++){

                var card_div = $('<div/>', { "class": 'card' })

                $('#features').find('.wrapper').append(card_div);

                    $(card_div).append('<div class="card__img"> <img src=' + data.cards[i].img + '></div>');
                    $(card_div).append('<div class="card__title"><h4>' + data.cards[i].title + '</h4></div>');
                    $(card_div).append('<div class="card__description"><p>' + data.cards[i].description + '</p></div>');

                
            }
        });
    });

    //slider initialization
    team();

    setTimeout( features, 500);

    $( window ).resize(function(){
        features();
        team();
    });


});


