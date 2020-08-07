import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "../../node_modules/bootstrap/js/dist/dropdown";


$(".hamburger-btn").click(function () {
  if ($(this).hasClass("clicked")) {
    $(this).removeClass("clicked");
    $(".sidebar").css("width", "80px");
    $(".main").css("padding-left", "80px");
    $(".bottom").removeClass("collapsedBottom");
    shrinkNavItem();
  } else {
    $(this).addClass("clicked");
    $(".sidebar").css("width", "265px");
    $(".main").css("padding-left", "265px");
    $(".bottom").addClass("collapsedBottom");
    expnadNavItem();
  }
  showHideElements();
});

function showHideElements() {
  let hiddenElements = $(".hide");
  let shownElements = $(".show");
  hiddenElements.each(function () {
    $(this).toggleClass(["show", "hide"]);
  });
  shownElements.each(function () {
    $(this).toggleClass(["show", "hide"]);
  });
}

function expnadNavItem() {
  $(".nav-item").each(function () {
    $(this).addClass("expanded-nav-item");
  });
}

function shrinkNavItem() {
  $(".nav-item").each(function () {
    $(this).removeClass("expanded-nav-item");
  });
}


$(".dropdwon-nav-item").click(function () {
    $('.dp').toggleClass("show-dropdown");
    $('i').toggleClass("rotated");
});


$('.datepicker').datepicker({
  inline: true
});