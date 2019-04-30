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