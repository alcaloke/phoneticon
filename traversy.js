/* JavaScript Crash Course For Beginners */


// alert('Hello')
 const x = 5;
const name = 'Yong';
// console.log(typeof x);

/* ES6 concat */
// console.log(`My name is ${name}`);

// A method is a function that is associated with an object

/* Basic Array Methods */
const str = "Love, wave, phoneticon";
const strArr = str.split(", ");
strArr.push('formony'); // adds an item at the end
strArr.pop(); // removes the last item
strArr.unshift('spirition'); // adds an item at the start
strArr.shift(); // removes an item at the start
// console.log(strArr);

/* Destructuring ES6 : to create variables out of object */
const person = {
    firstName: "Yong",
    lastName: "Shin",
    age: 33,
    hobbies: ['music', 'coding'],
    address: {
        street: '38 canonbie',
        city: 'London',
        country: 'UK'
    }
}
const { firstName, lastName} = person; // firstName & lastName becomes a variable. Can use instead of person.firstName
const {address: {city} } = person; // pulls out just the city value (London)
// console.log(city);
person.email = "alcaloke@gmail.com" // adding a prop
// console.log(person);

/* Converting object literal in JSON */
const todos = [
    {
        id: 1,
        text: 'laundry',
        isComplete: true
    },
    {
        id: 2,
        text: 'learn javascript',
        isComplete: false        
    },
    {
        id: 3,
        text: 'dry laundry',
        isComplete: false
    }
];
const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

for(let todo of todos) {
    // console.log(todo.text);
}

/* High order array methods */
// 1. forEach
todos.forEach(function(todo) {
    // console.log(todo.text);
});

// 2. map method maps through the array & returns a new array
const todoText = todos.map(function(todo) {
    return todo.text;
}); 
// console.log(todoText);

// 3. filter - returns the item 
const todoCompleted = todos.filter( (todo) => todo.isComplete === true);
// console.log(todoCompleted);

// 4. filter x map
const todoNotCompText = todos.filter( (todo) => todo.isComplete == false).map( (todo) => todo.text);
// console.log(todoNotCompText);

/* == vs. === (the latter tests the data type as well) */
const y = '27';
if(y === 27) {
    // console.log('y is 27')
} else {
    // console.log('y is not data type number 27')
}

/* Arrow function */

// example 1
const multiplyBy2 = (num) => {
    return num * 2;
};
// console.log(multiplyBy2(5));

// example 2
const multiply = (num1, num2) => num1 * num2;
// console.log(multiply(3, 9));

// example 3
const multiplyBy10 = num => num * 10;
// console.log(multiplyBy10(10));

/* Object oriented programming 
1. with function */

// constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getFullName = function() {
        return `Full name: ${this.firstName} ${lastName}`;
    }
}

Person.prototype.getBirthYear = function() {
        return this.dob.getFullYear();
}

//instantiate object
const person1 = new Person('Yong', 'Shin', '5-31-1985');
const p1birthYr = person1.getBirthYear();
const p1FullName = person1.getFullName();
// console.log(p1birthYr);

/* Object oriented programming 
2. with class */

class Human {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `Full name: ${this.firstName} ${lastName}`;
    }
}

const person2 = new Human('Yong', 'Shin', '5-31-1985');
// console.log(person2);

/* DOM */
// console.log(window);

// Single element
const emailIn = document.getElementById('email-input');
const querySelect = document.querySelector('header')
// console.log(querySelect);

// Multiple element
const allLi = (document.querySelectorAll('li'));
// console.log(allLi);
// console.log(document.getElementsByClassName('blueText'));
// console.log(document.getElementsByTagName('li'));
const anchors = document.querySelectorAll('a');
// anchors.forEach( (anchor) => console.log(anchor));

const li = document.querySelector('li');
// ul.remove();
li.firstElementChild.textContent = "formony";

const textCol = document.querySelector('.blueText');
// textCol.style.color = 'pink';

/* Events */
const btn = document.querySelector('#submit-button');
btn.addEventListener('click', (e) => {
    // e.preventDefault();
    // console.log(e.target);
    // document.querySelector('h2').style.background = 'pink';
});

/* Form Script */
const emailForm = document.querySelector('form');
const emailInput = document.querySelector('#email-input');

emailForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(emailInput.value === '') {
        alert('Please enter fields');
    } else {
        console.log('great!')
    }
}
