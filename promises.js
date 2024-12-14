// const promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async task is complete")
//         resolve("success")
//     },1000)
// })

// promise.then(function(res){
//     console.log('promise consumed')
//     console.log(res)
// })

// new Promise(function(resolve, reject){
//     setTimeout(() => {
//         console.log("Async task is complete")
//         // resolve()
//         reject("kya galat kar rha hai bhai!!!")
//     },1000)
// }).then(function(){
//     console.log('async consumed again')
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username: "javascript, password:123"})
//     })
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

const promiseFour = new Promise(function(resolve,reject){
    let error = false
    if(!error){
        resolve({username:"javascript",email:"javascript@gmail.com"})
    } else{
        reject("E: Something went wrong")
    }
})

// promiseFour.then(function(user){
//     console.log(user.username)
// }).catch(function(error){
//     console.log("404:",error)
// })

//? if we rturn something on then method, than the return value can be access with other .then method 
// promiseFour.then(function(user2){              
//     console.log(user2.email)
// }).then(function(childUser){
//     console.log(childUser)
// }).catch(function(er){
//     console.log(er)
// })

const promiseFive = new Promise(function(resolve,reject){
    let error = false
    if(!error){
        resolve({username:"javascript",email:"chai@gmail.com"})
    } else{
        reject("E: js went wrong")
    }
})

// async function consumePromiseFive(){
//    try {
//     const response = await promiseFive
//     console.log(response);

//     // const data = JSON.stringify(response);
//     // console.log(data)
//    } catch (error) {
//     console.log(error)
//    }
// }

// consumePromiseFive()

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   });

//   myPromise
//   .then((value) => `${value} and bar`)
//   .then((value) => `${value} and bar again`)
//   .then((value) => `${value} and again`)
//   .then((value) => `${value} and again`)
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// p2.then((value) => {
//     console.log(value)
// })

// const p3 = Promise.all([1, 2, 3, Promise.reject(555)]);
// p3.then((value) => {
//     console.log(value)
// }).catch((err) => {
//     console.log(err)
// })

// const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];
// const p = Promise.all(mixedPromisesArray);
// p.then((value)=>{
//     console.log("value",value)
// }).catch((error)=>{
//     console.log("error",error)
// })

// console.log("p",p);
// setTimeout(() => {
//   console.log("the queue is now empty");
//   console.log(p);
// });

function promptForDishChoice() {
    return new Promise((resolve, reject) => {
      const dialog = document.createElement("dialog");
      dialog.innerHTML = `
  <form method="dialog">
    <p>What would you like to eat?</p>
    <select>
      <option value="pizza">Pizza</option>
      <option value="pasta">Pasta</option>
      <option value="salad">Salad</option>
    </select>
    <menu>
      <li><button value="cancel">Cancel</button></li>
      <li><button type="submit" value="ok">OK</button></li>
    </menu>
  </form>
      `;
      dialog.addEventListener("close", () => {
        if (dialog.returnValue === "ok") {
          resolve(dialog.querySelector("select").value);
        } else {
          reject(new Error("User cancelled dialog"));
        }
      });
      document.body.appendChild(dialog);
      dialog.showModal();
    });
  }

  promptForDishChoice()
  
  // async function fetchPrices() {
  //   const response = await fetch("/prices");
  //   return await response.json();
  // }
  
// console.log(5 / 3)