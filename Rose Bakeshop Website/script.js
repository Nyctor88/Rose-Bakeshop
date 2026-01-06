// script.js

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// Connect this to your Arrow Buttons in HTML: onclick="plusSlides(1)" and onclick="plusSlides(-1)"
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
// Connect this to your Dots: onclick="currentSlide(1)", etc.
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-content");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Deactivate all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide and activate the dot
  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].className += " active";
}

// AUTO PLAY (Optional: Switches every 5 seconds)
setInterval(() => {
  plusSlides(1);
}, 8000);
