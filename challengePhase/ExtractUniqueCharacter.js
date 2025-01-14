
const extractUniqueCharacter = (str) => {
    let newStr = "";

    str = str.split("")
    str.map((item) => {
       if(!newStr.includes(item)){
         newStr += item
       }
       
    })

    return newStr 

    
}

// extractUniqueCharacter("aabbccdd")
const result = extractUniqueCharacter("aabbccdd")
console.log(result);