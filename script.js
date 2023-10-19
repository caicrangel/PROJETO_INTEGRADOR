const slider = document.querySelector(".slider");
const radioButtons = document.querySelectorAll(".radio-button");

let currentSlide = 0;

function goToSlide(slideIndex) {
    if (slideIndex < 0) {
        slideIndex = radioButtons.length - 1;
    } else if (slideIndex >= radioButtons.length) {
        slideIndex = 0;
    }

    currentSlide = slideIndex;

    const translateXValue = -slideIndex * 100;
    slider.style.transform = `translateX(${translateXValue}%)`;

    radioButtons.forEach((button, index) => {
        button.classList.remove("active");
        if (index === currentSlide) {
            button.classList.add("active");
        }
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

// Automatic slider
setInterval(nextSlide, 5000);

// Add event listeners to radio buttons
radioButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        goToSlide(index);
    });
});