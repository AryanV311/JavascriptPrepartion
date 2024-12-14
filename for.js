// for(let i = 1;i<=5;i++){
//     let pattern = " "
//     for(let j=1; j<=i;j++){
//         pattern = pattern + "*"
//     }
//     console.log(pattern);
// }

// function add(a,b){
//     // console.log(a+b); 
//     return a+ b;
// }

// let result = add(4,5)
// console.log(result)

//  reverse strings

// function isReverse(str){
//     let reverse ="";
//     for(char=str.length-1; char>=0;char--){
//         reverse += str[char]
//     }
//     return reverse
// }

// console.log(isReverse("aryan"))

// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// Palindrome Check  (level = level) 


function isPlaindrome(str){
    let reverse2 ="";
    for(let char=str.length-1; char>=0; char--){
        reverse2 += str[char];
    }
    if(str == reverse2){
        return 'string is palindrome'
    }else{
        return 'string is not palindrome'
    }
}

// console.log(isPlaindrome("isi"))

// const students = {
//     name:'aryan',
//     age:21,
//     isActive:false
// }

// for(let value of students){
//     console.log(students[value]);
// }

let n= 2;

for( i=0; i <=10; i++){
    console.log(n*i)
}
