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

Variable names are case sensitive.
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
### Arithmetic Operators
* 