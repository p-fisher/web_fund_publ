//Always Hungry
function alwaysHungry(arr) {
   // console.log(`Array length: ${arr.length}`);
   for (i = 0; i < arr.length; i++) {
      if (arr[i] === "food") {
         console.log("yummy");
      } else {
         console.log("I'm hungry");
      }
   }
}
alwaysHungry([3.14, "food", "pie", true, "food"]); // this should console log "yummy", "yummy"
//alwaysHungry([4, 1, 5, 7, 2]);// this should console log "I'm hungry"

//---------------------------------------------------------------------------------

//High Pass Filter
function highPass(arr, cutoff) {
   var filteredArr = [];
   for (i = 0; i < arr.length; i++) {
      if (arr[i] > cutoff) {
         filteredArr.push(arr[i]);
      }
      //  console.log(filteredArr)
   }
   return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//---------------------------------------------------------------------------------

//Better than Average
function betterThanAverage(arr) {
   var sum = 0;
   for (i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      // console.log(sum);
   }
   // avg = sum / arr.length;
   var avg = Math.round(sum / arr.length * 10) / 10;
   console.log(`Sum: ${sum}`);
   console.log(`Length: ${arr.length}`);
   console.log(`Average: ${avg}`);
   var count = 0;
   for (i = 0; i < arr.length; i++) {
      if (arr[i] > avg) {
         count++;
      }
   }
   // count how many values are greater than the average
   return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(`Number of indices above average is: ${result}`); // we expect back 4
// console.log(result); // we expect back 4

//---------------------------------------------------------------------------------

// Array reverse
function reverse(arr) {
   posn = arr.length - 1;
   for (i = posn; i >= 0; i--) {
      // console.log(posn);
      arr.push(arr[posn]);
      posn--;
   }
   newLen = Math.floor(arr.length / 2);
   arr.splice(0,newLen)
   // console.log(arr);
   return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]); //using Math it also accounts for odd number in array
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//---------------------------------------------------------------------------------

//