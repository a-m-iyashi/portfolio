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
  }
  $('#mask').on('click', function() {
    $('.l-header-hamburger').removeClass('active');  
  });
});
