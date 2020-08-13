import "../scss/style.scss";

document.getElementById("scrollable").onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.getElementById("scrollable").scrollTop;
  var height =
    document.getElementById("scrollable").scrollHeight -
    document.getElementById("scrollable").clientHeight;
  var scrolled = (winScroll / height) * 100;

  document.getElementById("pBar").style.height = scrolled + "%";
}
