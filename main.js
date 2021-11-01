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
    if ($('.l-header-hamburger').hasClass('active')) {
      $('.l-header').addClass('open');
    } else {
      $('.l-header').removeClass('open');
    }
    $('.l-header-spMenu__link').on('click', function() {
      $('.l-header-hamburger').removeClass('active');
      $('.l-header-spMenu').removeClass('active');
      $('.l-header').removeClass('open');
    });
    $('#mask').on('click', function() {
      // openクラスを削除して、メニューを閉じる
      $('.l-header-hamburger').removeClass('active');
      $('.l-header-spMenu').removeClass('active');
      $('.l-header').removeClass('open');
    });
  }
});
$(function(){
  //  スムーススクロール
  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function(){
    // リンクを取得
    let href= $(this).attr("href");
    // ジャンプ先のid名をセット
    let target = $(href == "#" || href == "" ? 'html' : href);
    // トップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う
    // 500はスクロール速度で単位はミリ秒
    $("html, body").animate({scrollTop:position}, 500, "swing");
    return false;
  });
})

