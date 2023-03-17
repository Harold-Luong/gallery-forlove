//gen btn
$(function () {
  // create the buttons with jQuery
  var $allBtn = $("<button>", {
    class: "btn-nav nav-filter btn-nav-active",
    href: "",
    "data-rel": "all",
    text: "All",
  });

  var $webBtn = $("<button>", {
    class: "btn-nav nav-filter",
    "data-rel": "tayninh",
    text: "Tây Ninh",
  });

  var $flyersBtn = $("<button>", {
    class: "btn-nav nav-filter",
    "data-rel": "vungtau",
    text: "Vũng Tàu",
  });

  var $bCardsBtn = $("<button>", {
    class: "btn-nav nav-filter",
    "data-rel": "sg",
    text: "Sài Gòn",
  });

  // append the buttons to the toolbar div
  $(".toolbar").append($allBtn, $webBtn, $flyersBtn, $bCardsBtn);
});
