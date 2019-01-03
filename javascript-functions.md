# JavaScript Function Basic


## Simple Function for Saying Hello World
```javascript
function sayHello() {
    console.log("Hello World");
}
sayHello(); // Hello World
```

## Simple Function for Adding two numbers
```javascript
function addFunction(a, b) {
    console.log(a+b);
}
addFunction(3,5); // 8
```

## ...args Unkown number of parameters passing through a function
```javascript
const sum = (function() {
  "use strict";
  return function sum(...args) {
    let sumNum = 0;
    for (let i = 0; i<args.length;i++){
      sumNum += args[i];
    }
    return sumNum; 
  };
})();
console.log(sum(1, 2, 3)); // 6
```

## Array Queue Function
https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line
```javascript
function queue(arr,item) {
    arr.push(item);
    return arr.shift(); // return the shifted value in the array.
}

var testArr = [3,4,5,6,7];

console.log("Before: " + JSON.stringify(testArr)); // [3,4,5,6,7]
console.log(queue(testArr, 8)); // 3
console.log("After: " + JSON.stringify(testArr)); // [4,5,6,7,8]
```