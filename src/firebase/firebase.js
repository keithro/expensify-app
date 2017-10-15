import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyDV37T0YNvVdSFJUGhKBddhOOINimItnpQ",
	authDomain: "expensify-2df68.firebaseapp.com",
	databaseURL: "https://expensify-2df68.firebaseio.com",
	projectId: "expensify-2df68",
	storageBucket: "expensify-2df68.appspot.com",
	messagingSenderId: "953496759186"
};

firebase.initializeApp(config);

const database = firebase.database();

// database.ref().set({
// 	name: 'Keith Rodriguez',
// 	age: 26,
// 	isSingle: true,
// 	location: {
// 		city: 'New York City',
// 		country: "United States"
// 	}
// }).then(() => {
// 	console.log('Date is saved');
// }).catch((e) => {
// 	console.log('This failed.', e);
// });

// DELETE
// -----------------
// // // remove property of above entry
// // database.ref('isSingle')
// // 	.remove()
// // 	.then(() => {
// // 		console.log('Data removed');
// // 	}).catch((e) => {
// // 		console.log('Epic FAIL', e);
// // 	});

// // // differnt methods to remove property
// // database.ref('isSingle').set(null);

// UPDATE
// -----------------
// // Update but only at root level, not nested objects **update also supports promises
// database.ref().update({
// 	name: 'Mike',
// 	age: 29,
// 	// can also set new property as well
// 	job: 'Software developer',
// 	// can also delete properties by setting to null
// 	isSingle: null
// });

// // can use "/" to update nested properties
// database.ref().update({
// 	job: 'Manager',
// 	'location/city': 'Boston'
// });

// READ data
// ----------

// // fetching data once
// database.ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', e);
// 	});

// -----------------

// // subscribe to data changes
// database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// });

// setTimeout(() => {
// 	database.ref('age').set(25);
// }, 4000);

// // use .off() to unsubscribe from all
// setTimeout(() => {
// 	database.ref().off();
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(28);
// }, 10000);

// -----------------

// // use .off() to unsubscribe from one particular 
// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (e) => {
// 	console.log('Error with data fetching', e);
// });

// setTimeout(() => {
// 	database.ref('age').set(25);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(28);
// }, 10500);
