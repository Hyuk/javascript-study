# Technics

* [Remove duplicates from an array of numbers/strings]()
* [A simple search (case-sensitive)]()
* [A simple search (case-insensitive)]()
* [Check if any of the users have admin rights]()
* [Flattening an array of arrays]()
* [Create an object that contains the frequency of the specified key]()
* [Indexing an array of objects (lookup table)]()
* [Extract the unique values for the given key of each item in the array]()
* [Object key-value map reversal]()
* [Create an array of Fahrenheit values from an array of Celsius values]()
* [Encode an object into a query string]()
* [Print a table of users as a readable string only with specified keys]()
* [Find and replace a key-value pair in an array of objects]()
* [Union (A ∪ B) of arrays]()
* [Intersection (A ∩ B) of arrays]()

## Remove duplicates from an array of numbers/strings
```javascript
let values = [3, 1, 3, 5, 2, 4, 4, 4];
let uniqueValues = [...new Set(values)];
uniqueValues
// uniqueValues is [3, 1, 5, 2, 4]
```

## A simple search (case-sensitive)
```javascript
let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let res = users.filter(it => it.name.includes('oli'));
res
// res is []
```

## A simple search (case-insensitive)
```javascript
let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let res = users.filter(it => new RegExp('oli', "i").test(it.name));
res
// [
//   { id: 97, name: 'Oliver', age: 28, group: 'admin' }
// ]
```

## Check if any of the users have admin rights
```javascript
let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let hasAdmin = users.some(user => user.group === 'admin');
hasAdmin
// true
```

## Flattening an array of arrays
```javascript
let nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((acc, it) => [...acc, ...it], []);
flat
// flat is [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
* shorter way
```javascript
let nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = [].concat.apply([], nested);
flat
```

## Create an object that contains the frequency of the specified key
```javascript
let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let groupByAge = users.reduce((acc, it) =>
  ({ ...acc, [it.age]: (acc[it.age] || 0) + 1 }),
{});
groupByAge
// groupByAge is {23: 1, 28: 2, 34: 1}
```

## Indexing an array of objects (lookup table)
```javascript
let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let uTable = users.reduce((acc, it) => ({...acc, [it.id]: it }), {})
uTable
// uTable equals:
{
  11: { id: 11, name: 'Adam', age: 23, group: 'editor' },
  47: { id: 47, name: 'John', age: 28, group: 'admin' },
  85: { id: 85, name: 'William', age: 34, group: 'editor' },
  97: { id: 97, name: 'Oliver', age: 28, group: 'admin' }
}
```

## Extract the unique values for the given key of each item in the array
```javascript
let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let listOfUserGroups = [...new Set(users.map(it => it.group))];
listOfUserGroups
// listOfUserGroups is ['editor', 'admin'];
```

## Object key-value map reversal
```javascript
let cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France'
};
let countries = Object.keys(cities).reduce(
  (acc, k) => (acc[cities[k]] = [...(acc[cities[k]] || []), k], acc) , {});
countries
// countries is
// {
//   France: ["Lyon", "Paris"],
//   Germany: ["Berlin"]
// }
```
* the other way
```javascript
let cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France'
};
let countries = Object.keys(cities).reduce((acc, k) => {
  let country = cities[k];
  acc[country] = [...(acc[country] || []), k];
  return acc;
}, {});
```
## Create an array of Fahrenheit values from an array of Celsius values
```javascript
let celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
let fahrenheit = celsius.map(t => t * 1.8 + 32);
fahrenheit
// fahrenheit is [5, 23, 32, 50, 60.8, 68, 75.2, 89.6]
```

## Encode an object into a query string
```javascript
let params = {lat: 45, lng: 6, alt: 1000};
let queryString = Object.entries(params).map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&');
queryString;
// queryString is "lat=45&lng=6&alt=1000"
```

## Print a table of users as a readable string only with specified keys
```javascript
let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
users.map(({id, age, group}) => `\n${id} ${age} ${group}`).join('')
// it returns:
// "
// 11 23 editor
// 47 28 admin
// 85 34 editor
// 97 28 admin"
```

## Find and replace a key-value pair in an array of objects
```javascript
let users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];
let updatedUsers = users.map(
  p => p.id !== 47 ? p : {...p, age: p.age + 1}
);
updatedUsers
// John is turning 29 now
```

## Union (A ∪ B) of arrays
```javascript
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
[...new Set([...arrA, ...arrB])]; // returns [1, 4, 3, 2, 5, 6, 7]
```

## Intersection (A ∩ B) of arrays
```javascript
let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];
arrA.filter(it => arrB.includes(it)); // returns [1, 2]
```