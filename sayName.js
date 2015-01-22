//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

var person = function(name, age, handle){
	this.name = name;
	this.age = age;
	this.handle = handle;
}

//Now create three instances of Person with data you make up

var user1 = new person("Robert", 27, "@robert")
var user2 = new person("Bryan", 33, "@bryan")
var user3 = new person("Scott", 31, "@scott")


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

person.prototype.sayName = function(){
	alert(this.name)
}
