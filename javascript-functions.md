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

## Array Queue
```javascript
function queue(arr,item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); // [1,2,3,4,5]
console.log(queue(testArr, 6)); // 1
console.log("After: " + JSON.stringify(testArr)); // [2,3,4,5,6]
```