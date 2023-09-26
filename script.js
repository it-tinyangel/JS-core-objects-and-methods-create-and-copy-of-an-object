let person = { // create an object
	firstName: "Ivan",
	secondName: "Ivanov",
	showData: function() {
		console.log(this.firstName + " " + this.secondName); // outputting properties of the object
	}
};

let newPerson = Object.assign({}, person); // create a copy of the object

// change the properties
newPerson.firstName = "Petro";
newPerson.secondName = "Petriv";

person.showData(); 
newPerson.showData();