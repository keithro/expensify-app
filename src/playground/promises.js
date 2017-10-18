const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Keith',
      age: 26
    });

    // can only have one resolve or reject
    // reject('Something went wrong');
  }, 5000)
});

console.log('before');

// --------------------

// // data passed in from promise function above
// promise.then((data) => {
//   console.log('1', data)
// }).catch((error) => {
//   console.log('error: ', error);
// });

// --------------------

// // same as above but catch is written as second argument to 'then'
// promise.then((data) => {
//   console.log('1', data)
// }, (error) => {
//   console.log('error: ', error);
// });

// promise.then((data) => {
//   console.log('2', data)
// });

// --------------------

// // with additional then call chained on
// promise.then((data) => {
//   console.log('1', data)

//   // second then call does not receive data unless we pass it in
//   return 'same data';
// }).then((str) => {
//   console.log('does this run?', str);
// }).catch((error) => {
//   console.log('error: ', error);
// });

// --------------------

// 
promise.then((data) => {
  console.log('1', data)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000);
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

// --------------------

console.log('after');