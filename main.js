$(function() {
  // hamburger-menu
  $('.l-header-hamburger').on('click', function(){
    hamburger();
  });
  function hamburger() {
    $('.l-header-hamburger').toggleClass('active');    
    if ($('.l-header-hamburger').hasClass('active')) {  //l-header-hamburgerクラスにactiveクラスが存在する場合
      $('.l-header-spMenu').addClass('active');  //l-header-spMenuにもactiveクラスを追加する
    } else {  // hamburgerクラスにactiveクラスが存在しない場合
      $('.l-header-spMenu').removeClass('active');//l-header-spMenuからactiveクラスを削除する
    }
    if ($('#header').hasClass('open')) {
      $('#header').removeClass('open');
    } else {
      $('#header').addClass('open');
    }
    $('#mask').on('click', function() {
      // openクラスを削除して、メニューを閉じる
      $('#footer').removeClass('open');
    });
  }
});

