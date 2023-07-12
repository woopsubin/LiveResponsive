// Noto Sans CJK KR CDN
  var koreanFont = new FontFace('Noto Sans CJK KR', 'url(https://cdn.jsdelivr.net/npm/noto-sans-cjk-kr@latest/fonts/NotoSansCJKkr-Regular.otf)');
  koreanFont.load().then(function(loadedFont) {
    document.fonts.add(loadedFont);
    document.body.style.fontFamily = "'Noto Sans CJK KR', sans-serif";
  });


//   toggle 
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  $(function () {


    // 레이어팝업 
    $(".btn").on("click", function () {
        $("#popup").fadeIn();
    });
    $(".close").on("click", function () {
        $("#popup").fadeOut();
    });
});
