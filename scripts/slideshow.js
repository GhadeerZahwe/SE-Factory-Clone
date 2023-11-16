let slideIndex = 1;
let slideIndex2 = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

// Function to show next/previous slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to show a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
} 

// Function to control the display of slides
function showSlides(n) {
  let i;
  
  // Check for boundaries
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark the corresponding dot as 'active'
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].className += " active";
}

// Function to automatically show slides
function showSlides2() {
  let i;

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Move to the next slide
  slideIndex2++;
  if (slideIndex2 > slides.length) {
    slideIndex2 = 1;
  }    

  // Remove 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and mark the corresponding dot as 'active'
  slides[slideIndex2-1].style.display = "flex";  
  dots[slideIndex2-1].className += " active";

  // Set a timeout for the next iteration
  setTimeout(showSlides2, 2000);
}

// Initial calls to display slides
showSlides(slideIndex);
showSlides2();
