# JavaScript Internal Functions
* Math.random()
* Math.floor()
* Math.pow()
* Math.sqrt()
* Math.round()
* filter()
* parseInt()
* map()
* flat()
* flatmap()

## Math.random()
Math.random() returns a decimal number between 0(inclusive) and 1(exclusive).
```javascript
Math.random();
```

## Math.floor()
`Math.floor()` round the number down to its nearest whole number.
```javascript
// the code below will generate a lottery number for korea
Math.floor(1 + Math.random()*45);
```

## Math.pow()
`Math.pow()` function returns the base to the exponenet power
```javascript
Math.pow(2,3); // 8
```

## Math.sqrt()
`Math.sqrt()` function returns the square root of the number
```javascript
Math.sqrt(9); // 3
Math.sqrt(-9); // NaN
```

## Math.round()
`Math.round()` function returns the integer of the number
```javascript
Math.round(5.7); // 6
```

## filter()
```javascript
var myArray = [4,4.5,-9,16];
myArray.filter((num) => num > 0); // [4, 4.5, 16]
```

## parseInt()
parseInt parses a string and returns an integer.\
Also, parseInt takes a second argument for the radix to return an integer base 10
```javascript
parseInt(9/2); // 4
parseInt(212,3) // 23
parseInt("007"); // 7
parseInt("10011", 2); // 19
```

## map()
```javascript
var myArray = [4,9,16];
myArray.map(Math.sqrt); [2,3,4]
```

```javascript
const alphabets = ["a","b","c"];
const fruits = ["apple", "banana", "cherry"];

const mappedExample = alphabets.map((alphabets,index) => [alphabets, fruits[index]]);
console.log(mappedExample);

// [["a","apple"],["b","banana"],["c","cherry"]]
```

## flat()
```javascript
var array1 = [1,2,3,[4,5,6]]; 
array1.flat(); 
// [1, 2, 3, 4, 5, 6]
```

## flatMap()
```javascript
const alphabets = ["a","b","c"];
const fruits = ["apple", "banana", "cherry"];

const mappedExample = alphabets.map((alphabets,index) => [alphabets, fruits[index]]);
console.log(mappedExample);

// [["a","apple"],["b","banana"],["c","cherry"]]

const alphabets = ["a","b","c"];
const fruits = ["apple", "banana", "cherry"];

const mappedExample = alphabets.flatMap((alphabets,index) => [alphabets, fruits[index]]);
console.log(mappedExample);

// ["a","apple","b","banana","c","cherry"]
```