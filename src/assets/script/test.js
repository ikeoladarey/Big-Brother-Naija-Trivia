//function to the close modal
function closeModal() {
    var coverDiv = document.getElementById("cover-div");
    var productDiv = document.getElementById("product-div");

    productDiv.style.webkitAnimation = "moveout .9s";
    productDiv.style.animation = "moveout .9s";

    setTimeout(function () {
        productDiv.style.display = "none";
        coverDiv.style.display = "none";
    }, 300);
}
function closeModal1() {
    var coverDiv = document.getElementById("cover-div");
    var productDiv = document.getElementById("first-div");

    productDiv.style.webkitAnimation = "moveout .9s";
    productDiv.style.animation = "moveout .9s";

    setTimeout(function () {
        productDiv.style.display = "none";
        coverDiv.style.display = "none";
    }, 300);
}
function closeModal2() {
    var coverDiv = document.getElementById("cover-div");
    var productDiv = document.getElementById("second-div");

    productDiv.style.webkitAnimation = "moveout .9s";
    productDiv.style.animation = "moveout .9s";

    setTimeout(function () {
        productDiv.style.display = "none";
        coverDiv.style.display = "none";
    }, 300);
}
function closeModal2b() {
    var coverDiv = document.getElementById("cover-div");
    var productDiv = document.getElementById("secondb-div");

    productDiv.style.webkitAnimation = "moveout .9s";
    productDiv.style.animation = "moveout .9s";

    setTimeout(function () {
        productDiv.style.display = "none";
        coverDiv.style.display = "none";
    }, 300);
}
function closeModal3() {
    var coverDiv = document.getElementById("cover-div");
    var productDiv = document.getElementById("third-div");

    productDiv.style.webkitAnimation = "moveout .9s";
    productDiv.style.animation = "moveout .9s";

    setTimeout(function () {
        productDiv.style.display = "none";
        coverDiv.style.display = "none";
    }, 300);
}
function closeModal4() {
    var coverDiv = document.getElementById("cover-div");
    var productDiv = document.getElementById("error-div");

    productDiv.style.webkitAnimation = "moveout .9s";
    productDiv.style.animation = "moveout .9s";

    setTimeout(function () {
        productDiv.style.display = "none";
        coverDiv.style.display = "none";
    }, 300);
}
function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

function clickd() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


function productTest(e) {
    var cover = document.getElementById("cover-div");
    var product = document.getElementById("product-div");
    var first = document.getElementById("first-div");
    var second = document.getElementById("second-div");
    var secondb = document.getElementById("secondb-div");
    var third = document.getElementById("third-div");
    var error = document.getElementById("error-div");

    if (e.target === cover) {
        cover.style.display = "none";
        product.style.webkitAnimation = "moveout .9s";
        product.style.animation = "moveout .9s";
        product.style.display = "none";
        first.style.display = "none";
        second.style.display = "none";
        secondb.style.display = "none";
        third.style.display = "none";
        error.style.display = "none";
    }
}