# Algorithm

## Convert Celsius to Fahrenheit

```javascript
function convertToF(celsius) {
  let fahrenheit = celsius*9/5+32;
  return fahrenheit;
}

convertToF(30);
```

## Reverse a String
```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
```

## Factorialize a Number
```javascript
function factorialize(num) {
  let factorialNum = 1;
  for (let i = 1; i <= num; i++){
    factorialNum *= i;
  }
  return factorialNum;
}

factorialize(5);
```

## Find the Longest Word in a String
```javascript
function findLongestWordLength(str) {
  let strArray = [];
  strArray = str.split(" ");
  let maxlength = 0;
  for (let i = 0; i < strArray.length; i++) {
    if (maxlength < strArray[i].length) {
      maxlength = strArray[i].length;
    }
  }

  return maxlength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```

## Return Largest Numbers in Arrays
```javascript
function largestOfFour(arr) {
  // You can do this!
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.max.apply(null,arr[i])
  }
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```

## Confirm the Ending

```javascript
function confirmEnding(str, target) {
  return (str.split("").splice(str.length-target.length,target.length).join("") == target ? true : false);
}

confirmEnding("Bastian", "n");
```
```javascript
function confirmEnding(str, target) {
  let targetLength = target.length;
  let strSplit = str.split("");
  let strSplice = strSplit.splice(str.length-targetLength,targetLength).join("");
  return (strSplice == target ? true : false);
}
confirmEnding("Bastian", "n");
```

## Repeat a String Repeat a String

```javascript
function repeatStringNumTimes(str, num) {
  // repeat after me
  
  let strResult = "";
  if (num < 0){
    return strResult; 
  } else {
    for (let i = 0; i<num; i++) {
      strResult += str;
    }
    return strResult;
  }
}

repeatStringNumTimes("abc", 3);
```

## truncate a String

```javascript
function truncateString(str, num) {
  // Clear out that junk in your trunk
  let truncStr = "";
  if (str.length <= num) {
    truncStr = str;
  } else {
    truncStr = str.split("").splice(0,num).join("") + "...";
  }
  return truncStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```

## Finders Keepers

```javascript
function findElement(arr, func) {
  let num = 0;
  for (var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

## Boo who

```javascript
function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  
  return typeof bool === 'boolean';
}

booWho(null);
```

## Title Case a Sentence

```javascript
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

titleCase("I'm a little tea pot");
```

## Slice and Splice

```javascript
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArr.splice(n, 0, arr1[i]);
    n++;
  }
  return localArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

## Falsy Bouncer
Remove false values from an Array.
```javascript
function bouncer(arr) {
  return arr.filter(Boolean);
}
bouncer([7, "ate", "", false, 9]);
// [7, "ate", 9]
```

## Where do I belong

```javascript
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  let localArr = arr.sort((a,b)=>a-b);
  for (let i = 0; i < localArr.length; i++) {
    if(localArr[i] >= num) {
      return i;
    }
  }
  return localArr.length;
}

getIndexToIns([40, 60], 50);
```

## Mutation

```javascript
function mutation(arr) {
  let test = arr[1].toLowerCase();
  let target = arr[0].toLowerCase()
  for (let i = 0; i < test.length; i++){
    if(target.indexOf(test[i]) < 0) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);
```

## Chunky Monkey
Slice the array based on given numbers
```javascript
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let localArr = [];
  let i = 0;
  while(i < arr.length) {
    localArr.push(arr.slice(i, i+size))
    i += size;
  }
  return localArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```

## Sum All Numbers in A Range

```javascript
// my basic solution
function sumAll(arr) {
  let localArr = arr.sort((a,b) => a > b).slice();
  let count = 1;
  let num = localArr[0];
  for(let i = localArr[0]; i < localArr[localArr.length-1]-1; i++) {
    num++;
    localArr.splice(count,0,num);
    count++
  }
  return localArr.reduce((a,b)=>a+b);
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);

// best advanced solution
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);
```

## Diff Two Arrays

```javascript
function diffArray(arr1, arr2) {
      var newArr = [];

      function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
        for (var i=0;i<first.length;i++) {
          if (second.indexOf(first[i]) === -1) {
            // Pushing the elements unique to first to newArr
            newArr.push(first[i]);
          }
        }
      }

      onlyInFirst(arr1, arr2);
      onlyInFirst(arr2, arr1);

      return newArr;
    }

    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
```

## Seek and Destroy

```javascript
//basic solution
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

// advanced solution
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));
```