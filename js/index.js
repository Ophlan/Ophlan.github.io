var slideIndex = 1;
var pageOrder = [0, 1, 2, 3, 4, 5, 6];

function initialize() {
  var count = new Date().getMilliseconds();
  for(var i = 0; i < count; i++){
    randomize();
  }
  showSlides(slideIndex);
}

function randomize() {
  var slot1 = getRandomInt(7);
  var slot2 = getRandomInt(7);
  var data1 = pageOrder[slot1];
  var data2 = pageOrder[slot2];
  pageOrder[slot1] = data2;
  pageOrder[slot2] = data1;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var prev = document.getElementsByClassName("prev")[0];
  var next = document.getElementsByClassName("next")[0];
  if (n >= slides.length) {
    // disable right arrow
    //slideIndex = 1
    next.style.display = "none";
  }
  else if (n <= 1) {
    // disable left arrow
    //slideIndex = slides.length
    prev.style.display = "none";
  }
  else {
    // enable arrows
    next.style.display = "block";
    prev.style.display = "block";
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[pageOrder[slideIndex-1]].style.display = "block";
}