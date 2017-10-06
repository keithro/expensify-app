// OBJECT DESTRUCTURING
// --------------------
// const person = {
//   // name : 'Keith',
//   age: 26,
//   location: {
//     city: 'New York',
//     temp: 92
//   }
// };

// // destructuring creates name and age variables
// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// // destructuring and renaming a variable
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// // destructuring renaming var and setting default
// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

// ARRAY DESTRUCTURING
// -------------------
// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// // gets value by location/index using any name you like
// const [ , city, state ] = address;

// console.log(`You are in ${city} ${state}.`);

// const address = [];
// // you can also set default
// const [ , city, state = 'New York' ] = address;
// console.log(`You are in ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [ itemName, , medPrice ] = item;
console.log(`A medium ${itemName} costs ${medPrice}.`);