$(function() {
  // hamburger-menu
  $('.l-header-hamburger').on('click', function(){
    hamburger();
  });
  function hamburger() {
    $('.l-header-hamburger').toggleClass('active');
    if ($('.l-header-hamburger').hasClass('active')) {  //l-header-hamburgerクラスにactiveクラスが存在する場合
      $('.l-header-open').addClass('active');  //l-header-openにもactiveクラスを追加する
    } else {  // hamburgerクラスにactiveクラスが存在しない場合
      $('.l-header-open').removeClass('active');//l-header-openからactiveクラスを削除する
    }
  }
});