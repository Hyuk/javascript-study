# JavaScript Internal Functions
* Math.random()
* Math.floor()
* parseInt();

## Math.random()
Math.random() returns a decimal number between 0(inclusive) and 1(exclusive).
```javascript
Math.random();
```

## Math.floor()
Math.floor() round the number down to its nearest whole number.
```javascript
// the code below will generate a lottery number for korea
Math.floor(1 + Math.random()*45);
```

## parseInt()
parseInt parses a string and returns an integer.\
Also, parseInt takes a second argument for the radix to return an integer base 10
```javascript
parseInt("007"); // 7
parseInt("10011", 2) // 19
```