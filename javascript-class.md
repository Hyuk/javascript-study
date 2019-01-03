# JavaScript Class

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