// print odds 1-20
for (i = 1; i < 21; i+=2) {
    console.log(i);
}
//or
var i = 1;
while (i < 21) {
    console.log(i);
    i+=2;
}

// decreasing multiples of 3
for (i = 99; i > 0; i -= 3) {
    console.log(i);
}
//or 
for (i = 100; i > 0; i -= 3) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

//print the sequence
for (i = 4; i > -4; i -= 1.5) {
    console.log(i);
}

//sigma
var sum = 0;
for (var i = 0; i <= 100; i++) {
    console.log(i);
    sum += i;
}
console.log(`total of output= ${sum}`);

//factorial
var product = 1;
for (i = 1; i < 13; i++) {
    console.log(i);
    product *= i//product * i;
}
console.log("the total of var 'product' is: " + product)//should be 479001600
//or
var product = 1;
var i = 1;
while (i < 13) {
    console.log(i);
    product *= i;
    i++;
}
console.log(`the total of var "product" is: ${product}`); //note: switching lines 48 and 49 alters result to 6227020800 instead of desired 479001600!
