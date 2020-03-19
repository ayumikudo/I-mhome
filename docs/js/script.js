/* メインイメージ切り替え */
$(function(){
  $(".main_image").bgswitcher({
    images: ["images/main_image_01.png", "images/main_image_02.png", "images/main_image_03.png"],
    Interval: 4000, //切り替えの間隔
    loop: true, //切り替えをループする
  });
});

/* 幅が640px以下の場合 */
if (window.matchMedia( "(max-width: 640px)" ).matches) {
  $(function(){
    /* カルーセル */
    $(function(){
      $('.carousel').slick({
        slidesToShow: 1,
      });
    });
    /* スマホ用メニュー */
    $(function(){
      $(".sp_menu").hide(); //デフォルトでメニューを隠す

      $(".nav_icon").click(function(){
        $(this).toggleClass("on");

        if($(this).hasClass("on")) { //クラス「on」が付いていた時の処理
          $(".nav_icon img").attr('src','images/menu_close.png'); //attrメソッドで画像をclose用に変更
          $(".sp_menu").fadeIn(300); //メニューの項目を表示

        } else { //クラス「on」が付いていない時の処理
          $(".nav_icon img").attr('src','images/menu_open.png'); //attrメソッドで画像を従来のものに変更
          $(".sp_menu").fadeOut(300); //メニューの項目を非表示
        }
      });
      $(".sp_menu").click(function(){ //メニューの領域を押したら
        $(".sp_menu").fadeOut(300);
        $(".nav_icon img").attr('src','images/menu_open.png');
        return false;
      });
    });
  });

  /* 幅が640px以上の場合 */
} else {
  $(function(){
    /* カルーセル */
    $(function(){
      $('.carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows:  true,
        centerPadding: '10px',
      });
    });
  });
}
