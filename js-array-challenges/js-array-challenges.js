//Always Hungry
function alwaysHungry(arr) {
// console.log(`Array length: ${arr.length}`);
for (i = 0;i < arr.length; i++) {
    if (arr[i] === "food") {
        console.log("yummy");
    } else {
        console.log("I'm hungry");
    }
}
}
alwaysHungry([3.14, "food", "pie", true, "food"]);// this should console log "yummy", "yummy"
//alwaysHungry([4, 1, 5, 7, 2]);// this should console log "I'm hungry"


//High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
for (i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
        filteredArr.push(arr[i]);
    }
    //  console.log(filteredArr)
}    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//Better than Average
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    var count = 0
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

