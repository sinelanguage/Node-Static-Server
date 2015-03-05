/* VANILLA JS: Chainable methods ( Made using object literals and Object.create(pass_in_prototype_as_param_when_subclassing) ) */

var person = {

	height: "what is your height?",
	weight: "what is your weight?",
	name: "what is your name?"

};

// IF YOU RETURN "THIS", YOUR METHODS WILL BECOME CHAINABLE.

person.prototype = {

	setHeight: function(height) {

		this.height = height;
		return this // DOING THIS MAKES THIS METHOD CHAINABLE

	},

	setWeight: function(weight) {

		this.weight = weight;
		return this

	},

	setName: function(name) {

		this.name = name;
		return this

	}

}

// The parameter you pass to Object.create is the prototype of the object you're inheriting or subclassing off of

var Adam = Object.create(person.prototype);

Adam.setHeight("6ft 1").setWeight("225lb").setName("Adam Winick");

console.log("VANILLA JS OBJ CREATED: ", Adam);