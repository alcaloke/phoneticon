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