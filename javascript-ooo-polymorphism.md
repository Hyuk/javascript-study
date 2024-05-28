# JavaScript OOO Polymorphism

## Polymorphism

Polymorphism is a feature of object-oriented programming languages that allows a single interface to be used to represent multiple types of objects. In JavaScript, polymorphism is achieved by using the same method to perform different tasks depending on the object.

When you call the same method on different objects, you get different results. This is called polymorphism.
To implement polymorphism in a function, you can pass an object as an argument and call the object's method.

To understand what polymorphism is about, let's consider some real-life objects.

- A door has a bell. Purpose of the bell is to get someone to show up at the door.

- A bycicle has a bell. Purpose of the bell is to warn people that the bycicle is coming.

- A phone has a bell. Purpose of the bell is to notify the owner that someone is calling.

In the above examples, the bell is the same object, but it is used for different purposes depending on the object it is attached to.

In JavaScript, polymorphism is achieved by using the same method to perform different tasks depending on the object.

### Example #1

```javascript
const bycicle = {
  bell: function() {
    console.log('Ring, ring! Watch out, please!');
  }
};

const phone = {
  bell: function() {
    console.log('Ring, ring! Someone is calling!');
  }
};

const door = {
  bell: function() {
    console.log('Ring, ring! Someone is at the door!');
  }
};
```

In the above example, the `bell` method is used to perform different tasks depending on the object it is attached to.

You can achieve polymorphism in JavaScript by using the same method to perform different tasks depending on the object.

```javascript
function ringTheBell(thing) {
  thing.bell();
}

ringTheBell(bycicle); // => Ring, ring! Watch out, please!
ringTheBell(phone); // => Ring, ring! Someone is calling!
ringTheBell(door); // => Ring, ring! Someone is at the door!
```

### Example #2

```javascript

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

```
