function pizzaOven(crust,style,cheese,toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.style = style;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var myPizza = pizzaOven("thin", "pesto", "extra mozz", ["arugula", "sun-dried tomatoes"]);
console.log(myPizza);

var yourPizza = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(yourPizza);

var theirPizza = pizzaOven("hand-tossed", "marinara", ["Mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(theirPizza);

var thatPizza = pizzaOven("pan", "no sauce just olive oil", "feta", ["spinach", "mushrooms"]);
console.log(thatPizza);

var thisPizza = pizzaOven("hand-tossed", "barbeque", "mozzarella", ["chicken", "onions", "banana peppers"]);
console.log(thisPizza);

//
//--------------------------------------------------------------
//

// function topNumPicker(arr) {
//     var tops = Math.floor(arr.length * Math.random());
// }
// function numGen(max) {
//     return Math.floor(Math.random() * max);
// }

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}
function topNumPicker(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}
// var crust = ["hand-tossed","thin","deep dish"];
// var style = ["marinara","barbeque","zesty","pesto","alfredo","olive oil"];
// var cheese = ["mozzarella","feta","cheddar","blue cheese","non-dairy"];

function randomPizza(crust,style,cheese,toppings) {
    var toppings = ["beef","pepperoni","anchovies","chicken","spinach","black olives","tomatoes","sun-dried tomatoes","bell pepper","banana pepper","onion"];
    var pizza = {};
    pizza.crust = crust;//Math.floor(Math.random() * crust.length);
    pizza.style = style;//Math.floor(Math.random() * style.length);
    pizza.cheese = cheese;//Math.floor(Math.random() * cheese.length);
    pizza.toppings = [];
    for (var i = 0; i < randomRange(6,1); i++) {
        pizza.toppings.push(topNumPicker(toppings));
    }
    return pizza;
}

console.log(randomPizza("thin","pesto","mozzarella",[]));

// Math.random([crust])   Math.random([style])  Math.random([cheese])  Math.random([toppings])

// Math.floor(Math.random() * crust.length)  Math.floor(Math.random() * style.length)  Math.floor(Math.random() * cheese.length)  Math.floor(Math.random() * toppings.length)
