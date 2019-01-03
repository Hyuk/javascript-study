# Create Strings using Template Literals

```javascript
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  const resultDisplayArray = [
      `<li class="text-warning">${arr[0]}</li>`,
      `<li class="text-warning">${arr[1]}</li>`,
      `<li class="text-warning">${arr[2]}</li>`
    ];

  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
```