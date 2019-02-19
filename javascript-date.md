# Date

> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

* Date()
* getFullYear()
* getMonth()
* getDate()
* getHours()
* getMinutes()
* getSeconds()
* getMilliseconds()
* getTime()
* getDay()
* Date.now()
* Date.UTC()

## Date()
```javascript
Date();
// "Tue Feb 19 2019 16:25:30 GMT+0900 (한국 표준시)"
```

## getFullYear()
* 현재 년도를 반환한다.
```javascript
var d = new Date();
d.getFullYear();
// 2019
```

## getMonth()
* 현재 월을 반환한다.(0~11)
* January = 0, February = 1, March = 2, April = 3,  
* May = 4, June = 5, July = 6, August = 7,  
* September = 8, October = 9, November = 10, December = 11
```javascript
var d = new Date();
d.getMonth();
// 1
```

## getDate()
* 현재 일을 반환한다.(1~31)
```javascript
var d = new Date();
d.getDate();
// 19
```

## getHours()
* 현재 시간을 반환한다.(0~23)
```javascript
var d = new Date();
d.getHours();
// 15
```

## getMinutes()
* 현재 분을 반환한다.(0~59)
```javascript
var d = new Date();
d.getMinutes();
// 12
```

## getSecond()
* 현재 초를 반환한다.(0~59)
```javascript
var d = new Date();
d.getSecond();
// 10
```

## getMilliseconds()
* 현재 밀리미터초를 반환한다.(0~999)
```javascript
var d = new Date();
d.getMillisecond();
// 972
```

## getTime()
* 현재시각을 반환한다.
```javascript
var d = new Date();
// 1550556730972
```

## getDay()
* 현재 요일을 반환한다.(0~6)
```javascript
var d = new Date();
d.getDay();
// 2
```

## Date.now()
* 현재시각을 반환한다.
```javascript
Date.now();
// 1550556730972
```

## Date.UTC()
* UTC -> GMT 변환
```javascript
var d = new Date();
var utcDate1 = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinute(), d.getSecond(), d.getMilliseconds()));
d
// Tue Feb 19 2019 16:28:37 GMT+0900 (한국 표준시)
utcDate1
// Wed Feb 20 2019 01:28:28 GMT+0900 (한국 표준시)
```