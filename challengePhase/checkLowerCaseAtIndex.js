
//! im failed here 
// const checKlowerCase = () => {
//     let str = "HelloWorld"
//     let newStr = "";
//     for(let i = 0; i<=str.length-1;i++){
//         newStr = str[i] 
//         newStr[0]
        
//     }
// }

// checKlowerCase();

const isCharacterLowerCase =(str,index) => {
    if(index < 0 || index >= str.length){
        return "Invalid Index"
    }

    const checkingChar = str[index]
    if(checkingChar === checkingChar.toLowerCase()){
        return "Charcter is LowerCase"
    } else {
        return "character is not LowerCase"
    }
}

const result = isCharacterLowerCase("HelloJavaScript", 4)
console.log(result);