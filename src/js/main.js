

window.onload = function () {
  window.onscroll = () => {
    const headerF = document.querySelector('.header');
    const Y = window.scrollY;
    if (Y > 900) {
      headerF.classList.add('header-fix');
    } else if (Y < 600) {
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

  var linkTabs;
  var ElemTabs;

  linkTabs = document.getElementsByClassName('tabs--link');
  ElemTabs = document.getElementsByClassName('tabs__block');

  // if (document.getElementById("tabs")){
  //   hideElemTabs(1);
  // }

  function hideElemTabs(a) {
    for (var i = a; i < ElemTabs.length; i++) {
      ElemTabs[i].classList.remove('show');
      ElemTabs[i].classList.add('hidden');
      linkTabs[i].classList.remove('link--active');
    }
  }
  if (document.getElementById("tabs")) {
    document.getElementById('tabs').onclick = function (event) {
      var target = event.target;
      console.log();
      if (target.classList.contains("tabs--link")) {
        console.log(target);
        for (var i = 0; i < linkTabs.length; i++) {
          if (target == linkTabs[i]) {
            showElemTabs(i);
            break;
          }
        }
      }
    };
  }

  function showElemTabs(b) {
    console.log(b);
    console.log(ElemTabs);
    if (ElemTabs[b].classList.contains('hidden')) {
      hideElemTabs(0);
      linkTabs[b].classList.add('link--active');
      ElemTabs[b].classList.remove('hidden');
      ElemTabs[b].classList.add('show');
    }
  }
}

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });
});


$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.header__link').click(function () {
    $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});

