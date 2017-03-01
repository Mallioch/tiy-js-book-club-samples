
var Car = function() {
}

Car.prototype.beep = function() {
  console.log('honk honk');
}


var Tacoma = function() {
}

Tacoma.prototype = new Car();




var myTruck = new Tacoma();
myTruck.color = 'red';
myTruck.beep();

console.log(myTruck)










class Animal {

}

class Dog extends Animal {

}

var rover = new Dog();
console.log(rover);








class User {
  changeName() {
    console.log('changing name!');
  }
}

class PremiumUser extends User {

}

class GoldUser extends PremiumUser {
  seePrettyPeople() {
    console.log('pretty people only')
  }
}

console.log('-------------');

var bob = new GoldUser();
console.log(bob);
bob.changeName();
//bob.seePrettyPeople();
