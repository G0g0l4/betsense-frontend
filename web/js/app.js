import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

$(".hamburger-btn").click(function () {
  if ($(this).hasClass("clicked")) {
    closeSidebar();
    shrinkNavItem();
  } else {
    $(this).addClass("clicked");
    $(".sidebar").addClass("opened");
    $(".main").addClass("sidebar-opened");
    $(".bottom").addClass("collapsedBottom");
    $("body").addClass("hide-overflow");
    expnadNavItem();
  }
  showHideElements();
});

$(".close-sidebar-btn").click(function () {
  closeSidebar();
  showHideElements();
  shrinkNavItem();
});

function closeSidebar() {
  $(".hamburger-btn").removeClass("clicked");
  $(".sidebar").removeClass("opened");
  $(".main").removeClass("sidebar-opened ");
  $(".bottom").removeClass("collapsedBottom");
  $("body").removeClass("hide-overflow");
}

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
  $(".dp").toggleClass("show-dropdown");
  $("#hide-botton-line").toggleClass("hide");
  $("i").toggleClass("rotated");
});

$(".nav-item")
  .hover(function () {
    $(this).addClass("hide-bottom-line");
    $(this).prev().addClass("hide-bottom-line");
    $(this).prev(".nav-item").addClass("hide-bottom-line");
    $(this).next(".dp").addClass("hide-bottom-line");
  })
  .mouseleave(function () {
    $(this).removeClass("hide-bottom-line");
    $(this).prev().removeClass("hide-bottom-line");
    $(this).next(".dp").removeClass("hide-bottom-line");
  });

$("#file-uploader").click(function () {
  $("#file-input").click();
});

$("#file-input").change(function () {
  $("#icon")[0].value = $(this).val();
});

// hide previus element border in nav-bar

$(".nav-bar-item-wrapper")
  .hover(function () {
    $(this).prev().addClass("hide-border");
  })
  .mouseleave(function () {
    $(this).prev().removeClass("hide-border");
  });

$(".show-nested-table-btn").click(function () {
  $(`#${$(this).val()}`).toggleClass("show-hide-table-row");
  $(this).toggleClass("rotated");
});

// custom select

$(document).ready(function () {
  $(".default-option").click(function () {
    $(this).parent().toggleClass("active");
    $('.rotate').toggleClass('rotated');
  });

  $(".select-ul li").click(function () {
    let current = $(this).html();
    $(".default-option li").html(current);
    $(this).parents(".custom-select-wrapper").removeClass("active");
    $('.rotate').removeClass('rotated');
  });
});