
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, 'foo'),
// );
// const promises = [promise1, promise2];

// Promise.allSettled(promises).then((results) =>{
//   results.forEach((val1)=>{
//     console.log(val1.status)
//   })
// });

// Promise.allSettled([
//   Promise.resolve(300),
//   new Promise((resolve)=> setTimeout(()=> resolve(60),0)),99,
//   Promise.reject(new Error("ERROR HO GYA"))
// ]).then((value) => {
//   console.log(value)
// }).catch((err)=>{
//   console.log(err)
// })