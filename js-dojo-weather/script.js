// var thisElement = document.querySelector(".cookies-info")
function cookiesHide(element) {
    // console.log(document.querySelector(".cookies-info"));
    // console.log(thisElement);
    document.querySelector(".cookies-info").remove();
    // thisElement.remove();
}

function cityAlert() {
    alert('Loading weather report...')
}

/* F to C (temp f - 32) * 1.8 */
/* C to F (temp c * 1.8) + 32 */

// function convertTemps() { // base function works
//     console.log(document.querySelector("#temp-choice"));
// }

// function convertTemps() { // this also works
//     console.log(document.querySelector("#C"));
// }

// function convertTemps() { // this also works
//     console.log(document.querySelector("#C").innerText); // returns °C
// }

// function getDayTemps() { // this works but only for first day found by query selector
//     console.log(document.querySelector(".temp-high").innerText); // returns 24°
//     console.log(document.querySelector(".temp-low").innerText); // returns 18°
// }

// // look at isolating each day's temp values
// var allHighs = document.querySelectorAll(".temp-high");
// function getDayTemps() { // this works -- returns each value from array index(es) requested
//     console.log(allHighs[0].innerText,allHighs[1].innerText,allHighs[2].innerText,allHighs[3].innerText);
// }

// var allHighs = document.querySelectorAll(".temp-high");
// function getDayTemps() { // this also works
//     var day1High = allHighs[0].innerText;
//     // console.log(allHighs[0].innerText,allHighs[1].innerText,allHighs[2].innerText,allHighs[3].innerText);
//     console.log(day1High);
// }

// var allHighs = document.querySelectorAll(".temp-high");
// var allLows = document.querySelectorAll(".temp-low");
// function getDayTemps() { // this also works
//     var day1High = "Day 1 High: " + allHighs[0].innerText;
//     var day1Low = "Day 1 Low: " + allLows[0].innerText;
//     // console.log(allHighs[0].innerText,allHighs[1].innerText,allHighs[2].innerText,allHighs[3].innerText);
//     console.log(day1High,day1Low);
// }

// function selectedMeasure() {// this works in logging choice
//     console.log(document.querySelector("#temp-choice").value);
// }

function selectedMeasure() {// this works in logging choice
    var selected = document.querySelector("#temp-choice").value;
    if (selected === "°C") {
        console.log("Celsius is selected");
    } else {
        console.log("Farenheit is selected");
    }
}


// looking at conversion
var allHighs = document.querySelectorAll(".temp-high");
var allLows = document.querySelectorAll(".temp-low");
var day1High = 0;
var day1Low = 0;
function convertTempsToF() { // 
    day1High = Math.round(parseInt(allHighs[0].innerText) * 1.8 + 32);
    day1Low = Math.round(parseInt(allLows[0].innerText) * 1.8 + 32);
    // console.log(allHighs[0].innerText,allHighs[1].innerText,allHighs[2].innerText,allHighs[3].innerText);
    console.log(day1High,day1Low);
}


// plan, using various elements from above
// if C is selected onchange, get each array index value and return (temp - 32) * 1.8
// if F is selected onchange, get each array index and return (temp * 1.8) + 32
