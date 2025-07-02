let number = 10;
(() => {
    // console.log(number)

    let number = 20;
    console.log(number)
})();

console.log(number)

// let number 



function reverseStr(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}
function reverseString(str) {
  if (typeof str !== "string") return "";
  let reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

console.log(reverseString("Devraj"))

// console.log(reverseStr("Aryan"))

function maxNumber(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const arr = [2,3,6,1,9,5]

console.log(maxNumber(arr))
console.log(Math.max(...arr))

function isPalindrome(str){
  let palindrome = str.split("").reverse().join("")
  if(palindrome === str){
    return true
  } else {
    return false
  }
}

function palindromeCheck(str){
  let reverse = '';
  for(let i =str.length -1; i >=0; i--){
    reverse += str[i]
  }
  if(reverse === str){
      return 'isPalindrome';
    } else{
      return 'Not a Palindrome'
    }
}

console.log(palindromeCheck('yoy'))
console.log(isPalindrome("racecar"))


function fizzBuzz(n){
  let arr=[];
  for(let i=1; i<=n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      arr.push('FizzBuzz')
    } else if ( i % 3 === 0){
      arr.push('Fizz')
    } else if(i % 5 === 0){
      arr.push('Buzz')
    } else {
      arr.push(i)
    }
  }
  return arr;
}

console.log(fizzBuzz(15))

function removeDuplicate(arr){
  if (!Array.isArray(arr)) {
    return [];
  }
  return [...new Set(arr)];
}
  
function duplicateArray(arr){
  let duplicate =[];
  for( let i =0; i< arr.length; i++){
    if(!duplicate.includes(arr[i])){
      duplicate.push(arr[i])
    }
  }
  return duplicate;
}


console.log("N",duplicateArray(arr1))
// console.log(removeDuplicate(arr1))


