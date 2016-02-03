// This example of the pizzaClass will create the object and its properties/methods together
// in one chunk of code

// literal notation - uses colon to separate key/value pair

 var pizza = {
 	crust: "thin",
 	sauce: "pesto",
 	topping: ["pineapple", "ham", "mushrooms"],
 	describe: function(){
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
			} // closes the for loop, goes through all toppings
		} // closes else, where if there are toppings.
		return message;
 	}
 }

// object constructor notation 
function Pizza(crust, sauce, topping){
	this.crust = crust;
	this.sauce = sauce;
	this.topping = topping;
	this.describe = function(){
 		var message = "You ordered a pizza with ";
		message += this.crust + " crust, ";
		message += this.sauce + " sauce, ";
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
			} // closes the for loop, goes through all toppings
		} // closes else, where if there are toppings.
		return message;
 	} // closes the describe function
} // closes the function Pizza()



// TEST the object!
console.log(pizza.describe());

// example, using object constructor method
var pizza1 = new Pizza("thick", "tomato", ["basil", "onions", 'peppers']);
console.log(pizza1.describe());



