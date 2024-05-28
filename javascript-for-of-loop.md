# JavaScript for of loop

## for of loop with array

```javascript
const arr = [1, 2, 3, 4, 5];

for (let num of arr) {
  console.log(num);
}

// => 1
// => 2
// => 3
// => 4
// => 5

```

## for of loop with string

```javascript
const str = 'hello';

for (let char of str) {
  console.log(char);
}

// => h
// => e
// => l
// => l
// => o

```

## for of loop with array of objects

```javascript
const arr = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jack', age: 40 }
];
```

```javascript
for (let person of arr) {
  console.log(person.name + ' is ' + person.age + ' years old.');
}

// => John is 30 years old.
// => Jane is 25 years old.
// => Jack is 40 years old.

```

## for of loop with Object

```javascript
const obj = { name: 'John', age: 30 };

for (let key in Object.keys(obj)) {
  console.log(key + ': ' + obj[key]);
}

// => name: John
// => age: 30

```

## for of loop with Object using Object.entries()

```javascript

const obj = { name: 'John', age: 30 };

for (let [key, value] of Object.entries(obj)) {
  console.log(key + ': ' + value);
}

// => name: John
// => age: 30

```
