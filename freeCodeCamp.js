/* JSON: Record Collection - Basic JS */
let collection = {
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

function returnCollection(id, prop) {
    if (collection[id][prop]) {
    console.log(collection[id][prop]);
    }
}
// returnCollection(5439, "album");
// returnCollection(1245, "tracks");

/* Higher Order Arrow function - ES6 - */
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (array) => {
    "use strict";
    const squaredIntegers = array.filter( (num) => num > 0 && num % parseInt(num) === 0).map( (x) => Math.pow(x,2) );

    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
// console.log(squaredIntegers);