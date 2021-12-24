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