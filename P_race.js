// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => {
//     setTimeout(()=>{
//        resolve('quick') 
//     })
// });
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));

// async function fetchAndDecode(url, description) {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     const data = await res.blob();
//     return [data, description];
//   }
  
//   const coffee = fetchAndDecode("coffee.jpg", "Coffee");
//   const tea = fetchAndDecode("tea.jpg", "Tea");
  
//   Promise.any([coffee, tea])
//     .then(([blob, description]) => {
//       const objectURL = URL.createObjectURL(blob);
//       const image = document.createElement("img");
//       image.src = objectURL;
//       image.alt = description;
//       document.body.appendChild(image);
//     })
//     .catch((e) => {
//       console.error(e);
//     });
  

  