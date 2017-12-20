if (nCONFIG.theme == 'banderole') {
  Nlvi.utils.back2top = function() {
    var scrollTop = Nlvi.tools.scroll(window);
    scrollTop(function(sct) {
      if (sct > 110) {
        Nlvi.tools.opreateClass('#backtop', 'bloom', 'add');
        Nlvi.tools.opreateClass('#backtop', 'dead', 'remove');
      } else {
        Nlvi.tools.opreateClass('#backtop', 'dead', 'add');
        Nlvi.tools.opreateClass('#backtop', 'bloom', 'remove');
      }
      var scrollPercentRounded = Math.floor(
        sct 
        / ($(document).height() - $(this).height())
        * 100
      );
      $('#scrollpercent').html(scrollPercentRounded);
    });
    $('.toTop').on('click', function () {
      $('html, body').animate({
        scrollTop: 0
      });
    });
  }
}