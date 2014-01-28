$(function () {
  $(".menu li").on("click", function() {
    var item = $(this).attr('data-item'),
        $menu = $(this).parent();

    $menu.find(".active").removeClass("active");
    $(this).addClass("active")

    $(".pages").attr('data-active', item);
  });

  // The Map Slideshow Transition
  setInterval(function() {
    var isActive = $(".pages").attr('data-active') == "home",
        $slideshow_list = $(".map_slideshow ul");

    if(isActive) {
      var $first_child = $slideshow_list.find("li:first");

      $first_child.animate({
        marginLeft: -1 * $first_child.width()
      }, 500, function() {
        $first_child.appendTo($slideshow_list).attr('style', '')
      });
    }
  }, 5000);

  var changing_selection = false;
  $(".select_list .choices li").on("click", function() {
    if(!changing_selection) {
      var $choice_item = $(this),
          selection = $choice_item.attr('data-content'),
          $content_list = $(this).closest(".select_list").find('.content ul'),
          $content = $content_list.find('li[data-content="' + selection + '"]');

      if($content.index() > 0) {
        $choice_item.parent().find('.active').removeClass('active');
        $choice_item.addClass('active');
        $first_child = $content_list.find('li:first-child');
        $content.insertAfter($first_child);

        changing_selection = true;
        $first_child.animate({
          marginLeft: -1 * $first_child.width()
        }, 500, function() {
          $first_child.appendTo($content_list).attr('style', '')
          changing_selection = false;
        });
      } 
    }
  });
});