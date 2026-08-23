let slideIndex = 1;
let slideTimer;

showSlides(slideIndex);
startAutoSlide();

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";

    if (dots.length > 0) {
        dots[slideIndex - 1].classList.add("active");
    }
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
    restartAutoSlide();
}

function previousSlide() {
    slideIndex--;
    showSlides(slideIndex);
    restartAutoSlide();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
    restartAutoSlide();
}

function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function startAutoSlide() {
    slideTimer = setInterval(autoSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(slideTimer);
}

function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

/* Pause slideshow when hovering over banner */
const slideshow = document.querySelector(".slideshow-container");

if (slideshow) {
    slideshow.addEventListener("mouseenter", stopAutoSlide);
    slideshow.addEventListener("mouseleave", startAutoSlide);
}

/* Keyboard controls */
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        nextSlide();
    }

    if (event.key === "ArrowLeft") {
        previousSlide();
    }
});
