$(function () {
  $("li").addClass("tile scale-anm all");
  let selectedClass = "";
  $(".nav-filter").click(function () {
    $("button").removeClass("btn-nav-active");
    $(this).addClass("btn-nav-active");
    selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0);
    $("#portfolio li")
      .not("." + selectedClass)
      .fadeOut()
      .removeClass("scale-anm");
    setTimeout(function () {
      $("." + selectedClass)
        .fadeIn()
        .addClass("scale-anm");
      $("#portfolio").fadeTo(250, 1);
    }, 350);
  });
});
