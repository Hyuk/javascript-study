# JavaScript Object

## Basic Object
```javascript
var dog = {
    "name": "Mark",
    "legs": 4,
    "tail": 1,
    "friends": ["mom", "dad"]
};

console.log(dog.legs);
console.log(dog["legs"]); // recommend
```

## Add Object Property
```javascript
var dog = {
    "name": "Mark",
    "legs": 4,
    "tail": 1,
    "friends": ["mom", "dad"]
};
dog.bark = "bow-wow"; 
console.log(dog);
```

## Delete Object Property
```javascript
var dog = {
    "name": "Mark",
    "legs": 4,
    "tail": 1,
    "friends": ["mom", "dad"]
};
delete dog.tail;
console.log(dog);
```

## Musical Album Collection Object Manipulation Example
```javascript
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
    if (collection[id][prop]){
      collection[id][prop].push(value); // if the track array exist, add the new value at the last element.
    } else {
      collection[id][prop] = [value]; // if the track array is not set, add the new value as a array.
    }
  } else if (value !== "") {
    collection[id][prop] = value; // if the value is not empty, add the value to the corresponding prop.
  } else {
    delete collection[id][prop]; // if value is empty, delete the given prop.
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(2468, "tracks", "Free");
updateRecords(2548, "tracks", "");
updateRecords(1245, "album", "Riptide");
```

## Profile data lookup Example
```javascript
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
  for(var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
lookUpProfile("Kristian", "lastName");
lookUpProfile("Sherlock", "likes");
lookUpProfile("Harry","likes");
lookUpProfile("Bob", "number");
lookUpProfile("Bob", "potato");
lookUpProfile("Akira", "address");
```