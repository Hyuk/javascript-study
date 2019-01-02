# Operators
* Arithmetic Operators

## Arithmetic Operators
* Addition
* Subtraction
* Multiplication
* Division
* Reminder
* Exponentiation

### Addition (+)
```javascript
// Number + Number -> addition
var num1 = 1;
var num2 = 2;
console.log(num1 + num2); // 3

// Boolean + Number -> addition
var num1 = true;
var num2 = 1;
console.log(num1 + num2); // 2

// Boolean + Bollean -> addition
var num1 = true;
var num2 = true;
console.log(num1 + num2); // 2

// Number + String -> concatenation
var num1 = 3;
var string1 = "people";
console.log(num1 + string1); // 3people

// String + Boolean -> concatenation
var string1 = "foo";
var bool1 = true;
console.log(string1 + bool1); // footrue

// String + String -> concatenation
var string1 = "foo";
var string2 = "bar";
console.log(string1 + string2); // foobar
```

### Subtraction (-)
```javascript
// Number - Number -> Subtraction
var num1 = 2;
var num2 = 1;
console.log(num1 - num2); // 1

// String - Number -> NaN
var string1 = "Hello";
var num1 = 3;
console.log(string1 - num1); // NaN
typeof (string1 - num1); // "number"
```

### Multiplication (*)
```javascript
// Number * Number
var num1 = 2;
var num2 = 3;
console.log(num1 * num2); // 6

// Infinity * 0 -> NaN
var num1 = Infinity;
var num2 = 0;
console.log(num1 * num2); // NaN

// Infinity * Infinity -> Infinity
var num1 = Infinity;
var num2 = Infinity;
console.log(num1 * num2); // Infinity

// String * Number -> NaN
var string1 = "foo";
var num1 = 2;
console.log(string1 * num1); // NaN
```

### Division (/)
```javascript
// Number / Number
var num1 = 3;
var num2 = 2;
console.log(num1 / num2); // 1.5

// Number / 0 -> Inifinity
var num1 = 1;
var num2 = 0;
console.log(num1 / num2); // Infinity

// -Number / 0 -> -Inifinity
var num1 = -1;
var num2 = 0;
console.log(num1 / num2); // -Infinity

// Number / -0 -> -Inifinity
var num1 = 1;
var num2 = -0;
console.log(num1 / num2); // -Infinity

// 0 / 0 -> NaN
var num1 = 0;
var num2 = 0;
console.log(num1 / num2); // NaN
typeof(num1 / num2); // "number"
```

### Reminder (%)
```javascript
// Number % Number
var num1 = 5;
var num2 = 2;
console.log(num1 % num2); // 1

// NaN % Number -> NaN
console.log(NaN % 2); // NaN 
```

### Exponentiation (**)
```javascript
console.log((-2) ** 2); // 4
// when using negative number for the first value, recommend to use parenthesis
```

### Increment (++)
```javascript
// num++
var num1 = 2
var num2 = num1++
console.log(num1); // 3
console.log(num2); // 2

// ++num
var num1 = 2
var num2 = ++num1
console.log(num1); // 3
console.log(num2); // 3
```

### Decrement (--)
```javascript
// num--
var num1 = 2
var num2 = num1--
console.log(num1); // 1
console.log(num2); // 2

// --num
var num1 = 2
var num2 = --num1
console.log(num1); // 1
console.log(num2); // 1
```