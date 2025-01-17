const nums =[1,22,45,35,334,98,78,645,452]
// nums.sort()                                 // it will sort an array alphabetically 
// console.log(nums)


// how to sort array in ascending order 

// let compare = (a,b) => {                // creating an compare function to sort an array in ascending order 
    // return a-b
// }

// let compare2 = (a,b) => {               // sorting an array in descending order 
    // return b-a
// }

// nums.sort(compare)
// console.log(nums)

// nums.reverse()                      
// console.log(nums)

// let sort_new = nums.toSorted()     // i will not change an original array
// console.log(sort_new)



// ****** sorting an array in random order
let points = [1,2,3,4,5,6]

for(let i = points.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1))
    let k = points[i]
    points[i] = points[j]
    points[j] = k
}

// console.log(points)

const names = ["arya","aryan","mangesh","shailesh"]

let compare = (a, b) => {
    return a- b
}

names.sort(compare)

console.log(names);