# JavaScript Basic

## Comment
* in-line comment
* multi-line comment 

### in-line comment
```javascript
// this is an in-line comment
```

### multi-line comment
```javascript
/* this is a
multi-line comment */
```

## Variables
* undefined
* number
* string
* symbol
* object
* function
* boolean
* null

Variable names are case sensitive. \
Recommend to use camelCase when declaring a variable.

```javascript
var someVariable;
```

### undefined
```javascript
var a;
console(a); // undefined
```

### number
```javascript
var num1 = 12;
console.log(num1); // 12
typeof num1; // "number"
```

### string
```javascript
var text1 = "Hello World";
console.log(text1); // "Hello World"
typeof text1; // "string"
```

### symbol
```javascript
var sym1 = Symbol('foo');
console.log(sym1); // Symbol(foo)
typeof sym1; // "symbol"
Symbol('foo') === Symbol('foo'); // false
```

### object
```javascript
var fruit = ['Apple', 'Banana', 'Orange'];
console.log(fruit); // ["Apple", "Banana", "Orange"]
typeof fruit; // "object"
```

### function
```javascript
var function1 = new Function('5 + 2');
console.log(myFun);
/*
ƒ anonymous() {
5 + 2
}
*/
typeof myFun // "function"
```

### boolean
```javascript
var flag = true;
console.log(flag); // true
typeof flag // "boolean"
```

### null
```javascript
// foo is known to exist now but it has no type or value
var foo = null;
foo // null
typeof null // "object"
typeof undefined // "undefined"
null === undefined // false
null == undefined // true
null === null // true
null == null // true
null // null
!null // true
```

## Operators
* Arithmetic Operators

### Arithmetic Operators
* Addition
* Subtraction
* Multiplication
* Division
* Reminder
* Exponentiation

#### Addition
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

#### Subtraction
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

#### Multiplication
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

#### Division
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

#### Reminder
```javascript
// Number % Number
var num1 = 5;
var num2 = 2;
console.log(num1 % num2); // 1

// NaN % Number -> NaN
console.log(NaN % 2); // NaN 
```

#### Exponentiation
```javascript
console.log((-2) ** 2); // 4
// when using negative number for the first value, recommend to use parenthesis
```