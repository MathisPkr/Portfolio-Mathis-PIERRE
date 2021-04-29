$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 30) {
      $(".navbar").addClass("navbar-white");
    } else {
      $(".navbar").removeClass("navbar-white");
    }
  });
});
