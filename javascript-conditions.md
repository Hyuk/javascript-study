# JavaScript Conditions
* else if
* switch
* while loop
* for loop

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