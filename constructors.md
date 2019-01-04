# Constructors
Constructors are functions that create new objects.

## Example of Constructor
```javascript
function Bird() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
}
```

## Example of Constructor
```javascript
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

var myDog = new Dog("Sarang", "Brown");
```

## instanceof
Verify if the variable is created based on constructor
```javascript
let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
}
let crow = new Bird("Alexis", "Black");

crow instanceof Bird;
// true

let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
};

canary instanceof Bird;
// false
```

## hasOwnProperty
Check the new object's property and add new property.
```javascript
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
ownProps.push("own");
```

## Prototype
add universal properties on object created based on constructor
```javascript
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");

Dog.prototype.numLegs = 4;
```

## Prototype properties
get properties and prototype properties from constructors
```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 


for(let property in beagle) {
  if (beagle.hasOwnProperty(property)){
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
```

## constructor property in Constructors
there are consturctor property in Consturctor which is equal to the Constructor
```javascript
function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

```

## add mutiple prototype properties at once - using object
```javascript
function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  // Add your code below this line
  constructor: Dog, // Mandatory
  numLegs: 4,
  eat() {
    console.log("yam yam yam");
  },
  describe() {
    console.log("My name is " + this.name);
  }
};
```

## isPrototypeOf
```javascript
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line

Dog.prototype.isPrototypeOf(beagle);
```

## Inheritance
```javascript
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Add your code below this line
Dog.prototype = Object.create(Animal.prototype); // set dog's prototype using animal's prototype

let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"
```


## Private Property

```javascript
function Bird() {
  let weight = 15; // private property
  this.getWeight = function() {
    return weight;
  }
  
}

```

## IIFE (Immediately Invoked Function Expression)
```javascript
(function () {
  console.log("A cozy nest is ready");
})();
```