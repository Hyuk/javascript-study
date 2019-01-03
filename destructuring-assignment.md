# Destructuring Assignment

```javascript
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  const {tomorrow: tempOfTomorrow} = avgTemperatures;
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
```

```javascript
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {tomorrow:{max:maxOfTomorrow}} = forecast;
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6
```

```javascript
let a = 8, b = 6;
(() => {
  "use strict";
  let c = 0;
  c = a;
  a = b;
  b = c;
})();
console.log(a); // should be 6
console.log(b); // should be 8
```

```javascript
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
```

```javascript
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  "use strict";
  return function half({max, min}) {
    return (max + min) / 2.0;
  };

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
```