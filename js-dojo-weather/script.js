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

/* F to C (temp f - 32) * .555 */
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

// function selectedMeasure() {// this works in logging choice
//     var selected = document.querySelector("#temp-choice").value;
//     if (selected === "°C") {
//         console.log("Celsius is selected");
//     } else {
//         console.log("Farenheit is selected");
//     }
// }

//now attempting to act based on whether C or F selected, including conversions and writeback
function selectedMeasure() {// this works 
    var selected = document.querySelector("#temp-choice").value;
    if (selected === "°F") {
        convertTempsToF();
        } else {
        convertTempsToC();
    }
}




// // looking at conversion
// var allHighs = document.querySelectorAll(".temp-high");
// var allLows = document.querySelectorAll(".temp-low");
// var day1High = 0;
// var day1Low = 0;
// function convertTempsToF() { // this seems to work in testing for one day's values (haven't yet written back)
//     day1High = Math.round(parseInt(allHighs[0].innerText) * 1.8 + 32);
//     day1Low = Math.round(parseInt(allLows[0].innerText) * 1.8 + 32);
//     // console.log(allHighs[0].innerText,allHighs[1].innerText,allHighs[2].innerText,allHighs[3].innerText);
//     console.log(day1High,day1Low);
// }

// // looking at conversion
// var allHighs = document.querySelectorAll(".temp-high");
// var allLows = document.querySelectorAll(".temp-low");
// var day1High = 0;
// var day1Low = 0;
// var day2High = 0;
// var day2Low = 0;
// var day3High = 0;
// var day3Low = 0;
// var day4High = 0;
// var day4Low = 0;
// function convertTempsToF() { // this seems to work in testing for all days' values (haven't yet written back)
//     day1High = Math.round(parseInt(allHighs[0].innerText) * 1.8 + 32);
//     day1Low = Math.round(parseInt(allLows[0].innerText) * 1.8 + 32);
//     day2High = Math.round(parseInt(allHighs[1].innerText) * 1.8 + 32);
//     day2Low = Math.round(parseInt(allLows[1].innerText) * 1.8 + 32);
//     day3High = Math.round(parseInt(allHighs[2].innerText) * 1.8 + 32);
//     day3Low = Math.round(parseInt(allLows[2].innerText) * 1.8 + 32);
//     day4High = Math.round(parseInt(allHighs[3].innerText) * 1.8 + 32);
//     day4Low = Math.round(parseInt(allLows[3].innerText) * 1.8 + 32);
//     // console.log(allHighs[0].innerText,allHighs[1].innerText,allHighs[2].innerText,allHighs[3].innerText);
//     console.log(`Day 1: ${day1High} / ${day1Low}\nDay 2: ${day2High} / ${day2Low}\nDay 3: ${day3High} / ${day3Low}\nDay 4: ${day4High} / ${day4Low}`);
// }

// // looking at conversion + writeback
// var allHighs = document.querySelectorAll(".temp-high");
// var allLows = document.querySelectorAll(".temp-low");
// var day1High = 0;
// var day1Low = 0;
// var day2High = 0;
// var day2Low = 0;
// var day3High = 0;
// var day3Low = 0;
// var day4High = 0;
// var day4Low = 0;
// function convertTempsToF() { // this seems to work in testing for all days' values (written back only 1 day's worth)
//     day1High = Math.round(parseInt(allHighs[0].innerText) * 1.8 + 32);
//     day1Low = Math.round(parseInt(allLows[0].innerText) * 1.8 + 32);
//     day2High = Math.round(parseInt(allHighs[1].innerText) * 1.8 + 32);
//     day2Low = Math.round(parseInt(allLows[1].innerText) * 1.8 + 32);
//     day3High = Math.round(parseInt(allHighs[2].innerText) * 1.8 + 32);
//     day3Low = Math.round(parseInt(allLows[2].innerText) * 1.8 + 32);
//     day4High = Math.round(parseInt(allHighs[3].innerText) * 1.8 + 32);
//     day4Low = Math.round(parseInt(allLows[3].innerText) * 1.8 + 32);
//     // console.log(allHighs[0].innerText,allHighs[1].innerText,allHighs[2].innerText,allHighs[3].innerText);
//     console.log(`Day 1: ${day1High} / ${day1Low}\nDay 2: ${day2High} / ${day2Low}\nDay 3: ${day3High} / ${day3Low}\nDay 4: ${day4High} / ${day4Low}`);
//     // for (var i=0;i<allHighs.length;i++) {
        
//     // }
//     document.getElementById("hi1").innerText = `${day1High}°`;
//     document.getElementById("lo1").innerText = `${day1Low}°`;
// }

// looking at conversion + writeback  WORKS - C to F
var allHighsC = document.querySelectorAll(".temp-high");
var allLowsC = document.querySelectorAll(".temp-low");
var day1High = 0;
var day1Low = 0;
var day2High = 0;
var day2Low = 0;
var day3High = 0;
var day3Low = 0;
var day4High = 0;
var day4Low = 0;
function convertTempsToF() { // this works in testing for all days' values and writes back all
    day1High = Math.round(parseInt(allHighsC[0].innerText) * 1.8 + 32);
    day1Low = Math.round(parseInt(allLowsC[0].innerText) * 1.8 + 32);
    day2High = Math.round(parseInt(allHighsC[1].innerText) * 1.8 + 32);
    day2Low = Math.round(parseInt(allLowsC[1].innerText) * 1.8 + 32);
    day3High = Math.round(parseInt(allHighsC[2].innerText) * 1.8 + 32);
    day3Low = Math.round(parseInt(allLowsC[2].innerText) * 1.8 + 32);
    day4High = Math.round(parseInt(allHighsC[3].innerText) * 1.8 + 32);
    day4Low = Math.round(parseInt(allLowsC[3].innerText) * 1.8 + 32);
    // console.log(allHighs[0].innerText,allHighs[1].innerText,allHighs[2].innerText,allHighs[3].innerText);
    console.log(`Day 1: ${day1High} / ${day1Low}\nDay 2: ${day2High} / ${day2Low}\nDay 3: ${day3High} / ${day3Low}\nDay 4: ${day4High} / ${day4Low}`);
    document.getElementById("hi1").innerText = `${day1High}°`;
    document.getElementById("lo1").innerText = `${day1Low}°`;
    document.getElementById("hi2").innerText = `${day2High}°`;
    document.getElementById("lo2").innerText = `${day2Low}°`;
    document.getElementById("hi3").innerText = `${day3High}°`;
    document.getElementById("lo3").innerText = `${day3Low}°`;
    document.getElementById("hi4").innerText = `${day4High}°`;
    document.getElementById("lo4").innerText = `${day4Low}°`;
}

// looking at conversion + writeback  WORKS - F to C
var allHighsF = document.querySelectorAll(".temp-high");
var allLowsF = document.querySelectorAll(".temp-low");
var day1High = 0;
var day1Low = 0;
var day2High = 0;
var day2Low = 0;
var day3High = 0;
var day3Low = 0;
var day4High = 0;
var day4Low = 0;
function convertTempsToC() { // this works in testing for all days' values and writes back all
    day1High = Math.round((parseInt(allHighsF[0].innerText) - 32) * .555);
    day1Low = Math.round((parseInt(allLowsF[0].innerText) - 32) * .555);
    day2High = Math.round((parseInt(allHighsF[1].innerText) - 32) * .555);
    day2Low = Math.round((parseInt(allLowsF[1].innerText) - 32) * .555);
    day3High = Math.round((parseInt(allHighsF[2].innerText)- 32) * .555);
    day3Low = Math.round((parseInt(allLowsF[2].innerText) - 32) * .555);
    day4High = Math.round((parseInt(allHighsF[3].innerText) - 32) * .555);
    day4Low = Math.round((parseInt(allLowsF[3].innerText) - 32) * .555);
    // console.log(allHighs[0].innerText,allHighs[1].innerText,allHighs[2].innerText,allHighs[3].innerText);
    console.log(`Day 1: ${day1High} / ${day1Low}\nDay 2: ${day2High} / ${day2Low}\nDay 3: ${day3High} / ${day3Low}\nDay 4: ${day4High} / ${day4Low}`);
    document.getElementById("hi1").innerText = `${day1High}°`;
    document.getElementById("lo1").innerText = `${day1Low}°`;
    document.getElementById("hi2").innerText = `${day2High}°`;
    document.getElementById("lo2").innerText = `${day2Low}°`;
    document.getElementById("hi3").innerText = `${day3High}°`;
    document.getElementById("lo3").innerText = `${day3Low}°`;
    document.getElementById("hi4").innerText = `${day4High}°`;
    document.getElementById("lo4").innerText = `${day4Low}°`;
}

                    // FAIL using for loop
                // // looking at conversion + writeback using for loop
                // var allHighs = document.querySelectorAll(".temp-high");
                // var allLows = document.querySelectorAll(".temp-low");
                // var day1High = 0;
                // var day1Low = 0;
                // var day2High = 0;
                // var day2Low = 0;
                // var day3High = 0;
                // var day3Low = 0;
                // var day4High = 0;
                // var day4Low = 0;
                // function convertTempsToF() { // not quite - revisit)
                //     day1High = Math.round(parseInt(allHighs[0].innerText) * 1.8 + 32);
                //     day1Low = Math.round(parseInt(allLows[0].innerText) * 1.8 + 32);
                //     day2High = Math.round(parseInt(allHighs[1].innerText) * 1.8 + 32);
                //     day2Low = Math.round(parseInt(allLows[1].innerText) * 1.8 + 32);
                //     day3High = Math.round(parseInt(allHighs[2].innerText) * 1.8 + 32);
                //     day3Low = Math.round(parseInt(allLows[2].innerText) * 1.8 + 32);
                //     day4High = Math.round(parseInt(allHighs[3].innerText) * 1.8 + 32);
                //     day4Low = Math.round(parseInt(allLows[3].innerText) * 1.8 + 32);
                //     // console.log(allHighs[0].innerText,allHighs[1].innerText,allHighs[2].innerText,allHighs[3].innerText);
                //     // console.log(`Day 1: ${day1High} / ${day1Low}\nDay 2: ${day2High} / ${day2Low}\nDay 3: ${day3High} / ${day3Low}\nDay 4: ${day4High} / ${day4Low}`);
                //     // console.log(allHighs.length);
                //     for (var i = 0; i <= allHighs.length; i++) {
                //         var eachDayHi = document.getElementById("hi" + [i]);
                //         // var eachDayLo = document.getElementById("lo" + [i])
                //         // document.getElementById("hi" + [i]).innerText = "day" + [i] + "High" + [i] + "°";
                //         // document.getElementById("lo" + [i]).innerText = "day" + [i] + "Low" + [i] + "°";
                //         eachDayHi.innerText = "day" + [i] + "High" + "°"; //`${day[i]High}°`;
                //         // eachDayLo.innerText = "day" + [i] + "Low" + "°";
                //         console.log(eachDayHi);
                //     }
                // }

