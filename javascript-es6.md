# JavaScript ES6

## let
Unlike `var` declaired many times in one application, `let` declaired once in one application.

## "use strict"
`"use strict"` enables Strict Mode, which catches common coding mistakes and "unsafe" actions. 

## String Literal
```javascript
const val1 = 'my string1';
const val2 = 'my string2';

const conVal = val1 + ', ' + val2;
const litVal = `${val1}, ${val2}`;

console.log('test1');
console.log(conVal);
console.log('test1');
console.log(litVal);
```

## Object Destructuring(객체 비구조화)
```javascript
const address = {
    country: 'South Korea',
    city: 'Seoul',
    street: 'Gangnam',
    str_num: 141,
    postcode: '00510'
};

const {country} = address;
console.log(country);

const {country, city} = address;
console.log(`{country}, {city}`);
```

```javascript
const address = {
    country: 'South Korea',
    city: 'Seoul',
    street: 'Gangnam',
    str_num: 141,
    postcode: '00510'
};

const country: 'Japan';
const city: 'Osaka';

const {country: nextCountry, city: nextCity} = address;
console.log(`${nextCountry}, ${nextCity}`);
```

## Array Destructuring (배열 비구조화)
```javascript
const [firstcountry, secondcountry, thirdcountry] = ['South Korea', 'China', 'Taiwan'];
console.log(firstcountry);
```

## Object Literal (객체 리터럴)
```javascript
function getAddress(country, city, street){
    const myAddress = {
        country: country,
        city: city,
        street: street
    }
    console.log(myAddress);
}

getAddress('South Korea', 'Seoul', 'Sadang');
```
```javascript
function getAddress(country, city, street){
    const myAddress = {
        country,
        city,
        street
    }
    console.log(myAddress);
}

getAddress('South Korea', 'Seoul', 'Sadang');
```
```javascript
function getAddress(country, city, street){
    const myAddress = {
        country,
        city,
        street,
        str_num: 888,
        postcode: '9999'
    }
    console.log(myAddress);
}

getAddress('South Korea', 'Seoul', 'Sadang');
```

## for .. of
```javascript
let years = [2001, 2010, 2015, 2019];

// Depricated
for (let year in years) {
    console.log(year)
}
//0
//1
//2
//3

// Depricated
years.forEach(year => {
    console.log(year);
});

// Recommended
for (let year of years) {
    console.log(year)
}
// 2001
// 2010
// 2015
// 2019

const str = "I love smilehugo";

for (let char of str) {
    console.log(char);
}
```

## Spread Operator
```javascript
let years = [2001, 2015, 2018];
let yearsCp = [2000, ...years, 2019];
console.log(yearsCp);
// [2000, 2001, 2015, 2018, 2019]
```
```javascript
let koreanHistory =  {
    liberate: 1945,
    625: 1950
};
let history = {
    worldWar1: 1914,
    worldWar: 1945,
    ...koreanHistory
};
console.log(history);
// {'625': 1950, 'worldWar1': 1914, 'worldWar2': 1945, 'liberate': 1945}
```
```javascript
let address1 = {
    country: 'South Korea',
    city: 'Seoul'
};

let address2 = {
    ...address1,
    country: 'United State'
}
console.log(address2);
// {country: 'United State', city: 'Seoul'}
```

## Rest Operator
```javascript
function printYears(years) {
    console.log(years);
}

printYears(2000,2001, 2010, 2015, 2018);
// 2000
```
```javascript
function printYears(years) {
    console.log(arguments);
}

printYears(2000,2001, 2010, 2015, 2018);
// {'0': 2000, '1': 2001, '2': 2010, '3': 2015, '4': 2018}
```

## Arrow Function
```javascript
const years = [
    {
        year: 2001,
        data: '크리스마스'
    },
    {
        year: 2010,
        data: '롤리팝'
    },
    {
        year: 2013,
        data: '안드로이드'
    },
    {
        year: 2015,
        data: '리액트'
    },
    {
        year: 2018,
        data: '플러터'
    },
]

const result = years.filter(function (data) {
    return data.year > 2012;
})

console.log(result);
// [
//     {
//         year: 2013,
//         data: '안드로이드'
//     },
//     {
//         year: 2015,
//         data: '리액트'
//     },
//     {
//         year: 2018,
//         data: '플러터'
//     }
// ]

// Apply Arrow function

const result = years.filter((data) => data.year > 2012);
console.log(result);
```

## Default Parameters
```javascript
const defulatParams = [
    {
        year: 2001,
        data: '안드로이드'
    },
    {
        year: 2005,
        data: '케잌'
    },
    {
        year: 2010,
        data: '사과'
    },
    {
        year: 2013,
        data: '바나나'
    },
    {
        year: 2018,
        data: '딸기'
    },
]

function printYear(years){
    console.log(years)
}

printYear();

// undefined

function printYear(years){
    console.log(years)
}

printYear('sdgsdg');
// sdgsdg

function printYear(years = defulatParams){
    console.log(years)
}

printYear();
//[ {year: 2001, data: '안드로이드'},
//  {year: 2005, data: '케잌'},
//  {year: 2010, data: '사과'},
//  {year: 2013, data: '바나나'},
//  {year: 2018, data: '딸기'} ]

function printYear(years = defulatParams){
    console.log(years)
}

printYear(
    {
        year: 2001, 
        data: '안드로이드'
    }
);
//  {year: 2001, data: '안드로이드'}
```

## includes
* 배열에 해당 값이 있는지 확인하기 위해 쓰인다.
```javascript
let years = [2001, 2003, 2005, 2007];
const fruits = ['apple', 'banana', 'potato']
console.log(years.indexOf(2001) !== -1);
// true
console.log(fruits.indexOf('apple') !== -1);
// true
console.log(years.includes(2001));
// true
```

# var, let, const 차이점은?
- `var`는 `function-scoped`이고, `let`, `const`는 `block-scoped`입니다.

- `function-scoped`와 `block-scoped`가 무슨말이냐?

## var(function-scoped)
[jsfiddle 참고주소](https://jsfiddle.net/LeoHeo/u9j4u5vh/1/)

```javascript

// var는 function-scope이기 때문에 for문이 끝난다음에 i를 호출하면 값이 출력이 잘 된다.
// 이건 var가 hoisting이 되었기 때문이다.
for(var j=0; j<10; j++) {
  console.log('j', j)
}
console.log('after loop j is ', j) // after loop j is 10


// 아래의 경우에는 에러가 발생한다.
function counter () {
  for(var i=0; i<10; i++) {
    console.log('i', i)
  }
}
counter()
console.log('after loop i is', i) // ReferenceError: i is not defined
```

그럼 항상 function을 만들어서 호출해야 할까? 그건 아니다.

javascript에서는 `immediately-invoked function expression (or IIFE, pronounced "iffy")`라는것이 있다.

`IIFE`로 `function-scope`인거 처럼 만들 수가 있다.

```javascript
// IIFE를 사용하면
// i is not defined가 뜬다.
(function() {
  // var 변수는 여기까지 hoisting이 된다.
  for(var i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i) // ReferenceError: i is not defined
```

근데 javascript는 여기서 좀 웃긴 부분이 있다.

위에서 잠깐 말했지만 `IIFE`는 `function-scope`처럼 보이게 만들어주지만 `결과가 같지는 않다.`

```javascript
// 이 코드를 실행하면 에러없이 after loop i is 10이 호출된다.
(function() {
  for(i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i) // after loop i is 10
```

위에 코드가 아무 에러 없이 실행되는 이유는 `i`가 hoisting이 되어서 `global variable`이 되었기 때문이다.

그래서 아래와 같이 된 것이다.

```javascript
var i
(function() {
  for(i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i) // after loop i is 10
```

`IIFE`는 쓰는데 이렇게 hoisting이 된다면 무슨 소용이 있겠는가?!

그래서 이런 `hoisting`을 막기 위해 `use strict`를 사용한다.

```javascript
// 아까랑 다르게 실행하면 i is not defined라는 에러가 발생한다.
(function() {
  'use strict'
  for(i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i) // ReferenceError: i is not defined
```

어떤가? 뭔가 변수 선언때문에 너무 많은 일을 한다고 생각하지 않는가?

그럼 `let`, `const`에 대해서 알아보자.

## let, const(block-scoped)
- es2015에서는 `let`, `const`가 추가 되었다.

javascipt에는 그동안 `var`만 존재했기 때문에 아래와 같은 문제가 있었다.

```javascript
// 이미 만들어진 변수이름으로 재선언했는데 아무런 문제가 발생하지 않는다.
var a = 'test'
var a = 'test2'

// hoisting으로 인해 ReferenceError에러가 안난다.
c = 'test'
var c
```

위와 같은 문제점으로 인해 javascript를 욕 하는 사람이 참 많았다.

하지만 `let`, `const`를 사용하면 `var`를 사용할때보다 상당히 이점이 많다.

두개의 공통점은 var와 다르게 `변수 재선언 불가능`이다. 

`let`과 `const`의 차이점은 변수의 `immutable`여부이다.

`let`은 변수에 재할당이 가능하지만, 

`const`는 변수 재선언, 재할당 모두 불가능하다.

```javascript
// let
let a = 'test'
let a = 'test2' // Uncaught SyntaxError: Identifier 'a' has already been declared
a = 'test3'     // 가능

// const
const b = 'test'
const b = 'test2' // Uncaught SyntaxError: Identifier 'a' has already been declared
b = 'test3'    // Uncaught TypeError:Assignment to constant variable.
```

`let`, `const`가 hoisting이 발생하지 않는건 아니다. 

`var`가 `function-scoped`로 hoisting이 되었다면 

`let`, `const`는 `block-scoped`단위로 hoisting이 일어나는데 

```javascript 
c = 'test' // ReferenceError: c is not defined
let c
```

위에 코드에서 `ReferenceError`가 발생한 이유는 `tdz(temporal dead zone)`때문이다.

`let은 값을 할당하기전에 변수가 선언 되어있어야 하는데 그렇지 않기 때문에` 에러가 난다.

이건 `const`도 마찬가지인데 좀 더 엄격하다.

```javascript
// let은 선언하고 나중에 값을 할당이 가능하지만
let dd
dd = 'test'

// const 선언과 동시에 값을 할당 해야한다.
const aa // Missing initializer in const declaration
```

이렇게 javascript에 `tdz`가 필요한 이유는 동적언어이다 보니깐 `runtime type check` 가 필요해서이다.
## Reference
- [js-interview-prep/temporal-dead-zone](https://github.com/ajzawawi/js-interview-prep/blob/master/answers/es6/temporal-dead-zone.md)
- [why-tdz](http://2ality.com/2015/10/why-tdz.html)

`const`는 Array와 Object에서 값 할당 및 변경이 가능하다.
```javascript
const fruit = {};
fruit.first = 'apple';
console.log(fruit);
//{fruit: 'apple'}
//array
const apples = [0,1,2];
apples[0] = 5;
console.log(apples);
//[5,1,2]

```

## import && export


## Class
```javascript
//ES5
function Animal() {
    this.type = 'chosic';
    this.tail = false;
}

Animal.prototype.setType = function(type) {
    this.type = type;
}

Animal.prototype.getType = function() {
    return this.type;
}
```

```javascript
//ES6
class Animal {
    constructor(type, tail) {
        this.type = type;
        this.tail = tail;
    }

    //method
    cry(value = "Woof Woof") {
        console.log(value);
    }

    //static method
    static instance() {
        console.log('instance!!!!')
    }
}

let dog = new Animal('Dog', true);
dog.tail = false;
console.log(dog);

dog.cry('woof');

Animal.instance();

// Inheritance
class Cat extends Animal() {
    constructor(type, tail) {
        super(type, tail);
        this.color = color;
    }
    cry(value = "Meow Meow") {
        console.log(value);
    }
}

let cat = new Cat('Cat', true, 'yellow');
cat.cry();
console.log(cat);
```

## Trailing Commas
ES6에서는 Trailing Comma를 지원하기 때문에 객체 또는 배열 마지막 변수에 Comma를 써도 오류가 나지 않는다.
```javascript
const myObj = {
    first: "test1",
    second: "test2",
};

//json 에서는 마지막에 Comma를 쓰면 안된다.

```

## Map 
```javascript
//map
let map = new Map([['id','dooboolab']]);
map.set('testId', 'test');
map.get('testId');
console.log(map);
// Map {'id' => 'dooboolab', 'testId' => 'test'}
console.log(map.size);
// 2
console.log(map.has('testId'));
// true
console.log(map.entries());
// [Map Iterator] {['id', 'dooboolab'], ['testId', 'test']}
console.log(map.key());
// [Map Iterator] {['id', 'testId']}
console.log(map.value());
// [Map Iterator] {['dooboolab', 'test']}
console.log(map.delete('testId'));
// true
map.clear(); // 전체 삭제
```

## Set
Set은 중복된 값을 허용하지 않는다. 고유값만 남겨 보여준다.
```javascript
const set = new Set([1,1,1,1,2,2,3,3,4]);
set.add(4);
set.add(5).add(6);
console.log(set);
// Set {1,2,3,4,5}
console.log(set.size);
// 5
set.delete(5);
console.log(set);
// Set {1,2,3,4}
console.log(set.size);
// 4
set.clear();
console.log(set.size);
// 0
```

## Async & Await
```javascript
function resolvePromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done!');
        }, 2000);
    });
}

async function getPromise() {
    const result = await resolvePromise();
    console.log(result);
    await resolvePromise();
    console.log(result);
}

getPromise();
```