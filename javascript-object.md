# JavaScript Object

## Basic Object
```javascript
var dog = {
    "name": "Mark",
    "legs": 4,
    "tail": 1,
    "friends": ["mom", "dad"]
};

console.log(dog.legs);
console.log(dog["legs"]); // recommend
```

## Add Object Property
```javascript
var dog = {
    "name": "Mark",
    "legs": 4,
    "tail": 1,
    "friends": ["mom", "dad"]
};
dog.bark = "bow-wow"; 
console.log(dog);
```

## Delete Object Property
```javascript
var dog = {
    "name": "Mark",
    "legs": 4,
    "tail": 1,
    "friends": ["mom", "dad"]
};
delete dog.tail;
console.log(dog);
```