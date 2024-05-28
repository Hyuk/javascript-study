# JavaScript Class

## Class 만드는 방법

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
```

## Class로 인스턴스 만드는 방법

```javascript
let animal = new Animal('animal');
animal.speak(); // => animal makes a noise.
```

## 함수를 사용해서 Class 만드는 방법

```javascript
function makeClass() {
  "use strict";
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
```

```javascript
function makeClass() {
  "use strict";
  class Thermostat {
    constructor(temperature){
      this._temperature = temperature;
    }
    //getter
    get temp() {
      return (temperature-32)*5/9;
    }
    //setter
    set temp(udpatedTemperature) {
      this._temperature = udpatedTemperature;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
```
