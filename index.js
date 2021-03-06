const slides = document.getElementsByClassName("carousel-item")

let totalSlides = slides.length

let slidePosition = 0

document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide)


document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide)

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item');
    }
}

function moveToPrevSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToNextSlide() {
    hideAllSlides();
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    slides[slidePosition].classList.add("carousel-item-visible");
}

