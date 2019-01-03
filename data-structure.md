# Data Structure

## Array

## push()

## unshift()

## pop()

## shift()

## splice()
```javascript
function sumOfTen(arr) {
  arr.splice(1,2);
  return arr.reduce((a, b) => a + b);
}
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
// 10
```

```javascript
function htmlColorNames(arr) {
  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
```

## slice()
```javascript
function forecast(arr) {
  // change code below this line
  arr = arr.slice(2,4);
  return arr;
}

// do not change code below this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
```

## Spread Operator ...
```javascript
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
```

## indexOf()
```javascript
function quickCheck(arr, elem) {
  // change code below this line
  return arr.indexOf(elem) > 0 ? true : false;
  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
```

## For loop - Iterate Through all an Array

```javascript
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for (let i = 0; i<arr.length; i++) {
    let count = 0;
    for (let j = 0; j<arr[i].length; j++) {
      if (arr[i][j] != elem) {
        count++;
      }
    }
    if (count==arr[i].length){
      newArr.push(arr[i]);
    }
  }
  // change code above this line
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```

## Object

```javascript
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// change code above this line

console.log(foods);
```

```javascript
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// change code below this line
userActivity.data.online = 45;
// change code above this line

console.log(userActivity);
```

```javascript
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
// do not change code above this line

function checkInventory(scannedItem) {
  // change code below this line
  return foods[scannedItem];
}

// change code below this line to test different cases:
console.log(checkInventory("apples"));
```

```javascript
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
  let count = 0;
  for(let user in obj) {
    if (obj[user].online === true) {
      count++;
    }
  }
  return count;
  // change code above this line
}

console.log(countOnline(users));
```

```javascript
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // change code below this line
  return Object.keys(obj);
  // change code above this line
}

console.log(getArrayOfUsers(users));
```

```javascript
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // change code below this line  
  userObj.data.friends.push(friend);
  return userObj.data.friends;
  // change code above this line
}

console.log(addFriend(user, 'Pete'));
```



