import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import "bootstrap";

$(".hamburger-btn").click(function () {
  if ($(this).hasClass("clicked")) {
    $(this).removeClass("clicked");
    $(".sidebar").css("width", "80px");
    $(".main").css("padding-left", "80px");
    hideElements();
  } else {
    $(this).addClass("clicked");
    $(".sidebar").css("width", "265px");
    $(".main").css("padding-left", "265px");
    showElements();
  }
});

function hideElements() {
  $(".show").each(function () {
    $(this).removeClass("show");
    $(this).addClass("hide");
  });
}

function showElements() {
  $(".hide").each(function () {
    $(this).removeClass("hide");
    $(this).addClass("show");
  });
}
