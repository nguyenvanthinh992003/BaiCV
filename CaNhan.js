document.addEventListener("DOMContentLoaded", function() {
    const mainSlider = document.querySelector(".main-slider");
    const mainSlides = document.querySelectorAll(".main-slide");
    const thumbnailSlides = document.querySelectorAll(".thumbnail-slide");
    const prevArrow = document.querySelector(".prev-arrow");
    const nextArrow = document.querySelector(".next-arrow");
    const caption = document.getElementById("caption");
    let currentSlideIndex = 0;

    function showSlide(index) {
        mainSlides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });

        thumbnailSlides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add("active");
            } else {
                slide.classList.remove("active");
            }
        });
        const currentSlide = mainSlides[index];
        const altText = currentSlide.querySelector("img").alt;
        caption.textContent = altText;
    }

    function nextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex >= mainSlides.length) {
            currentSlideIndex = 0;
        }
        showSlide(currentSlideIndex);
    }

    function prevSlide() {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = mainSlides.length - 1;
        }
        showSlide(currentSlideIndex);
    }

    nextArrow.addEventListener("click", nextSlide);
    prevArrow.addEventListener("click", prevSlide);

    thumbnailSlides.forEach((slide, index) => {
        slide.addEventListener("click", function() {
            currentSlideIndex = index;
            showSlide(currentSlideIndex);
        });
    });

    showSlide(currentSlideIndex);
});