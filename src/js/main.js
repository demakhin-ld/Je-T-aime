

window.onload = function () {
  let burgerMobile = document.querySelector('.burgerBtn');
  let menuContainer = document.querySelector('.mobile');

  function openMenuMObile() {
    menuContainer.classList.toggle("mobile--open");
    burgerMobile.classList.toggle("burgerBtn--activated");
  }

  burgerMobile.onclick = openMenuMObile;

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
}


$(document).ready(function () {
  $(".partners-owl-carousel").owlCarousel({
    center: true,
    loop: true,
    dots: false,
    margin: 20,
    nav: true,
    navElement: 'div',
    navText: ['<div class="owl-prev"></div>', '<div class="owl-next">Следующая категория</div>'],
    responsive: {
      0: {
        items: 1
      },
      981: {
        items: 2
      }
    }

  });
});


