# JavaScript Conditions
* else if
* ternary operator
* switch
* while loop
* for loop
* nested for loop
* do while loop

## else if
```javascript
var num1 = 6;

if (num1 < 5) {
    console.log("the number is less than 5");
} else if (num1 == 5) {
    console.log("the number is 5");
} else {
    console.log("the number is greater than 5");
}

// the number is greater than 5
```

## ternary operator
```javascript
function checkEqual(a, b) {
  return a == b ? true : false;
}

checkEqual(1, 2); // false

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

checkSign(10); // positive
```

## switch
```javascript
var num1 = 3;

switch(num1) {
    case 1:
        console.log("the number is one");
        break;
    case 2:
        console.log("the number is two");
        break;
    case 3:
        console.log("the number is three");
        break;
    default:
        console.log("exit");
}

// the number is three
```

## while loop
```javascript
var myArray = [];

var i = 0;
while(i<5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

// [0,1,2,3,4]
```

## for loop
```javascript
var numArray = [];

for (var i = 1; i<5; i++) {
    numArray.push(i);
}
console.log(numArray);

// [1,2,3,4]
```

## nested for loop
```javascript
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

// 5040
```

## do while loop
```javascript
var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 11);
console.log(myArray);

// [10]
```