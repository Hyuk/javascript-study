# Regular Expressions

```javascript
let testStr = "freeCodeCamp";
let testRegex = /Code/ // find the text in the string
testRegex.test(testStr); 
// true
```

```javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // or 
petRegex.test(petString);
// true
```

```javascript
let myString = "freeCodeCamp";
let fccRegex = /freecodeCamp/i; // ignore case sensitive
fccRegex.test(myString);
// true
```

```javascript
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
// ["coding", index: 18, input: "Extract the word 'coding' from this string.", groups: undefined]
```

```javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex); 
// ["Twinkle", "twinkle"]
```

```javascript
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // wild character .
let result = unRegex.test(exampleStr);
```

```javascript
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // g - global flag returns an array / i - case insensitive flag 
let result = quoteSample.match(vowelRegex);
```

```javascript
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // any alphabet
let result = quoteSample.match(alphabetRegex);
```

```javascript
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```

```javascript
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```

```javascript
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```

```javascript
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /aa*a/gi; // Change this line
let result = chewieQuote.match(chewieRegex);
```

```javascript
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; // Change this line
let result = text.match(myRegex);
```

```javascript
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /c*c/i; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
```

```javascript
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // search patterns at the beginning of strings
let result = calRegex.test(rickyAndCal);
```

```javascript
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // search patterns at the end of strings
let result = lastRegex.test(caboose);
```

```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[A-Za-z0-9_]/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Shortcut for [A-Za-z0-9_]
let result = quoteSample.match(alphabetRegexV2).length;
```

```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\W/g; // Shortcut [^A-Za-z0-9_] exclude alphanumeric & _(underscore)
let result = quoteSample.match(alphabetRegexV2).length;
```

```javascript
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g; // Change this line
let result = numString.match(numRegex).length;
```

```javascript
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g; // Change this line
let result = numString.match(noNumRegex).length;
```

```javascript
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // username check - start with alphabet either lowercase or uppercase, at least 2 character and numbers at the end
let result = userCheck.test(username);
```

```javascript
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // find whitespaces
let result = sample.match(countWhiteSpace);
```

```javascript
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```

```javascript
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
```

```javascript
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```

```javascript
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```

```javascript
let favWord = "favorite";
let favRegex = /favou?rite/; // the character in front of ? is optional character
let result = favRegex.test(favWord);
```

```javascript
let sampleWord = "astronaut";
let pwRegex = /(?=[a-z]{3,})(?=\D*\d{2,})/; // greater than 5 characters long and have two consecutive digits
let result = pwRegex.test(sampleWord);
```

```javascript
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // repeated only three times in a string, each separated by a space
let result = reRegex.test(repeatNum);
```

```javascript
let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);
```

```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex,""); // remove the whitespaces beginning of the text and end of the text.
```