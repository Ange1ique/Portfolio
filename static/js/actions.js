
/* 2-2 On navbar click: open item and scroll item to top with offset */
var openElement = function() {
  var viewportWidth = $(window).width();    // check viewportWidth on click
  var link = $(this).attr('link');          // check which link is clicked
  var openItem = document.getElementById(link);   // get link item to open and/or scroll to
  if ($(openItem).attr('class') === "scroll collapse") {
    $(openItem).collapse('show');           // open item (if collapsed)
  }
  if (viewportWidth < 768) {
    $('html,body').animate({
        scrollTop: $(openItem).offset().top -155
    });
  }
  else {
    $('html,body').animate({
        scrollTop: $(openItem).offset().top -81
    });
  }
};

/* 1-2 On navbar click: open item and scroll item to top with offset */
$(".nav-link.js").on("click", openElement);
$(".dropdown-item").on("click", openElement);
$("#collapseOne").on("click", ".linkid", openElement);

/* If item of accordion is collapsed -> make menu item white */
$('.scroll').on('hidden.bs.collapse', function (e) {
    $(".nav-link.js").removeClass("open");
    $(".dropdown-item").removeClass("open");
});

/* If link on navbar is clicked -> deactivate previous and active current */
$('.nav-link.js').on('click', function (e) {
    $(".nav-link.js").removeClass("open");
    $(".dropdown-item").removeClass("open");
    $(this).addClass("open");
});

/* When accordion item is opened */
$('.scroll').on('shown.bs.collapse', function (e) {
    /* Deactivate previous and activate current link on navbar */
    $(".nav-link.js").removeClass("open");
    $(".dropdown-item").removeClass("open");
    var activeLink = $(this).attr('id');
    $( "[link='"+activeLink+"']" ).addClass("open");

    /* Scroll item with offset to top on click in 2 viewports */
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
        $('html,body').animate({
            scrollTop: $(this).offset().top -155
        });
    }
    else {
        $('html,body').animate({
            scrollTop: $(this).offset().top -81
        });
    }
});
