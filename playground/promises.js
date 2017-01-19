// Promise() constructor takes one argument. Arrow functions.
// resolve returns that string in this example.
// somePromise,then() provides callback functions for both resolve and reject.
// resolve() or reject() is called only once. Subsequent calls are ignored.

var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

// asyncAdd(5,'9') - console.log(resChain) is getting called. As after printing error message Promise
// assumes everything is fine.

// asyncAdd(5, '9').then((res) => {
//   console.log(res);
//   return asyncAdd(res, 74);
// }, (errorMessage) => {
//   console.log(errorMessage);
// }).then((resChain) => {
//   console.log(resChain);
// }, (errorMessage) => {
//   console.log(errorMessage);
// });

asyncAdd(5, 9).then((res) => {
  console.log(res);
  return asyncAdd(res, 74);
}).then((resChain) => {
  console.log(resChain);
}).catch((errorMessage) => {
  console.log(errorMessage);
});

var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey, It worked!');
    reject('Unable to fulfill promise');
  }, 2500);
});

somePromise.then((message) => {
  console.log('Success: ', message);
}, (errorMessage) => {
  console.log('Error: ', errorMessage);
});
