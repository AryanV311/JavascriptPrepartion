const isPlaindrome = (str) => { 
    let reverseStr = "";
    
    for(let i = str.length -1; i>= 0; i--){
        reverseStr += str[i]
    }

    if(reverseStr.toLowerCase() === str.toLowerCase()){
        return "word is Palindrome"
    } else {
        return " word is Not palindrome"
    }

}

const result = isPlaindrome("Madam")
console.log(result);