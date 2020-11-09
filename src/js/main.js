

window.onload = function () {
  window.onscroll = () => {
    const headerF = document.querySelector('.header');
    const Y = window.scrollY;
    if (Y > 900) {
      headerF.classList.add('header-fix');
    } else if ( Y < 600) {
      headerF.classList.remove('header-fix');
    }
  };

  $(".callBackBtn").on('click', function () {
    $.fancybox.open({
      src: '#CB_Short',
      type: 'inline',
      opts: {
        afterShow: function afterShow(instance, current) {
          console.info('done!');
        }
      }
    });
  });
  $(document).ready(function () {
    $('#CB_Short').submit(function () {
      $.ajax({
        type: "POST",
        url: "/callback/send.php",
        data: $(this).serialize()
      }).done(function () {
        $(this).find('input').val('');
        $('#CB_Short').trigger('reset');
        $.fancybox.close();
        $.fancybox.open({
          src: `
          <div class="thanks">
            <div class="wrap">
              <div class="thanks__title">ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА</div>
              <img src="img/icon/oks.svg" alt="ок" class="thanks__oks">
              <div class="thanks__text"></div>
            </div>
          </div>`,
          type: 'html',
          smallBtn: true
        });
      });
      return false;
    });
  });

  $(document).ready(function () {
    $('#bigForm').submit(function () {
      $.ajax({
        type: "POST",
        url: "callback/send.php",
        data: $(this).serialize()
      }).done(function () {
        $.fancybox.open({
          src: `<div class="thanks">
          <div class="thanks">
            <div class="wrap">
              <div class="thanks__title">ЗАЯВКА УСПЕШНО ОТПРАВЛЕНА</div>
              <img src="img/icon/oks.svg" alt="ок" class="thanks__oks">
              <div class="thanks__text"></div>
            </div>
          </div>`,
          type: 'html',
          smallBtn: true
        });
        $(this).find('input').val('');
        $('#bigForm').trigger('reset');
      });
      return false;
    });
  });

  if (document.getElementsByClassName("randomPhotos")) {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: true,
      autoplayTimeout: 3500,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        }
      }
    });
  }



}

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});


$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
});


