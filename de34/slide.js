var slideIndex = 0;
var slides = document.getElementsByClassName("slides")[0].getElementsByTagName("img");
var arrow = document.getElementsByClassName("arrow")[0];
arrow.onclick = function() {
  if (this.classList.contains("right")) {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
  } else {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }
  var slideWidth = slides[0].offsetWidth;
  var slidePosition = slideIndex * slideWidth * -1;
  document.getElementsByClassName("slides")[0].style.transform = "translateX(" + slidePosition + "px)";
}
