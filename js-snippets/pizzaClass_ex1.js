// This code snippet creates a pizza class, then adds properities and methods!
// You can first create a new object in 2 ways: literal notation or object constructor notation

// using the object literal
// var pizza = {};

// using the object constructor
var pizza = new Object();

pizza.crust = "regular";
pizza.sauce = "tomato";
pizza.topping = ["pepperoni", "mushrooms", "peppers"];

// small little function that returns the time the pizza will be delivered
// UNDER CONSTRUCTION - pissa.deliveryTime method

// pizza.deliveryTime = function(currentTime){
// 	var timeMade = Date.now();
// 	var delivered = false;
// 	return timeMade;
// }

// pizza description method, tells everything about the pizza
pizza.describe = function(){
	var message = "You ordered a pizza with ";
	message += pizza.crust + " crust, ";
	message += pizza.sauce + " sauce, ";
	// if no toppings
	if (this.topping.length === 0){
		message += "and no toppings."
	}
	// else, then there are toppings, loop to list all
	else {
		message += "and the following toppings: "
		// loop to go through all toppings
		for (var i = 0; i < this.topping.length; i++){
			// if its not the last topping, then add a comma afterwards
			if (i != (this.topping.length - 1)){
				message += this.topping[i] + ", ";
			} // closes the if statement
			// if its the last item, then end with a period
			else {
				message += this.topping[i] + "."
			} // closes else statement, if its the last item
		}
	}
	return message;
}

// TEST class!
console.log(pizza.describe());