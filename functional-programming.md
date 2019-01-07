# Functional Programming

## Refactor Global Variables Out of Functions

Refactor (rewrite) the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of an array. The remove function should remove the given bookName from an array. Both functions should return an array, and any new parameters should be added before the bookName one.

* bookList should not change and still equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
* newBookList should equal ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].
* newerBookList should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"].
* newestBookList should equal ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"].

```javascript
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
}

function remove (arr, bookName) {
  let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) { // indexOf : newArr Array에서 bookName에 해당하는 인덱스 값을 반환한다. 
    newArr.splice(newArr.indexOf(bookName),1); // splice : newArr Array에서 첫번째 인수에 해당하는 인덱스 값부터 두번째 인수에 해당하는 값 만큼의 Array 요소를 제거한다.
    return newArr;
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
console.log(newBookList);
console.log(newerBookList);
console.log(newestBookList);

/*
["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]
["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]
["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]
["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]
*/
```