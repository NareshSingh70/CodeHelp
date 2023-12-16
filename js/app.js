// Hanburger-Toggle
let hamburger = document.querySelector(".hamburger");
let header = document.querySelector("header");

hamburger.addEventListener("click", () => {
    header.classList.toggle("open");
})

// Slide-Text
var typeData = new Typed(".role", {
    strings: [
        "Love",
        "Babber"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

// Follower-Count
let valueDisplay = document.querySelectorAll(".num");
let interval = 5000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    // let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let endValue = valueDisplay.getAttribute("data-val");

    let duration = Math.floor(interval / endValue);

    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);

})