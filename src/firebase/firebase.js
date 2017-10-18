import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


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
// // remove property of above entry
// database.ref('isSingle')
// 	.remove()
// 	.then(() => {
// 		console.log('Data removed');
// 	}).catch((e) => {
// 		console.log('Epic FAIL', e);
// 	});

// // differnt methods to remove property
// database.ref('isSingle').set(null);

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

// --------------------

// // FIREBASE DOES NOT SUPPORT ARRAYS

// // what our database will look like
// const firebaseNotes = {
// 	notes: {
// 		23898dq903093: {
// 			title: 'First note',
// 			body: 'This is my note'
// 		},
// 		84e0fj03kf83j: {
// 			title: 'Another note',
// 			body: 'This is my note'
// 		}
// 	}
// }

// // does not work correctly
// const notes = [{
// 	id: '12',
// 	title: 'First note',
// 	body: 'This is my note'
// }, {
// 	id: '761lese',
// 	title: 'Another note',
// 	body: 'This is my note'
// }];

// database.ref('firebaseNotes').set(notes);

// --------------------

// // TO ADD NOTES PROPERLY TO FIREBASE:
// database.ref('notes').push({
// 	title: 'Course Topics',
// 	body: 'React Native, Angular, Python'
// });

// // TO UPDATE (using id from firebase)
// database.ref('notes/-KwfEeRvZ1PSVJtQj6e5').update({
// 	body: 'Buy food'
// });

// // TO REMOVE (using id from firebase)
// database.ref('notes/-KwfEeRvZ1PSVJtQj6e5').remove();

// --------------------
//      CHALLENGE
// --------------------

// database.ref('expenses').push({
// 	description: 'food',
// 	note: 'lunch with sam',
// 	amount: 1600,
// 	createdAt: 452675673
// });

	// database.ref('expenses').push({
	// 	description: 'sunglasses',
	// 	note: '',
	// 	amount: 10000,
	// 	createdAt: 342875443
	// });

// database.ref('expenses').push({
// 	description: 'movie',
// 	note: 'movie with neda',
// 	amount: 3000,
// 	createdAt: 342875443
// });

// database.ref('expenses').push({
// 	description: 'rent',
// 	note: '',
// 	amount: 105000,
// 	createdAt: 12305485743
// });

// // TO READ

// GET DATA ONCE (and parse into array?)
// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];

// 		// here forEach() is a firebase DataSnapshot method
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				// keys are the id and all the values are child elements
// 				id: childSnapshot.key,
// 				// so we can spreaad whatever data comes back
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// 	});

// SUBSRIBE TO DATABASE
// // subscribe with ".on()" however it does not support promises
// database.ref('expenses').on('value', (snapshot) => {
// 		const expenses = [];

// 		// here forEach() is a firebase DataSnapshot method
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({

// 				// keys are the id and all the values are child elements
// 				id: childSnapshot.key,
// 				// so we can spreaad whatever data comes back
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// 	});

// SUBSCRIBE TO ACTIONS

// // subscribe to child REMOVED with .on('child_removed)
// database.ref('expenses').on('child_removed', (snapshot) => {
// 		console.log(snapshot.key, snapshot.val());
// });

// // subscribe to child CHANGED with .on('child_removed)
// database.ref('expenses').on('child_changed', (snapshot) => {
// 		console.log(snapshot.key, snapshot.val());
// });

// // subscribe to child ADDED with .on('child_removed)
// database.ref('expenses').on('child_added', (snapshot) => {
// 		console.log(snapshot.key, snapshot.val());
// });
