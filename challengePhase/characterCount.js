const countCharacter = (str) => {
    const countChar = {}

    for(let char of str){
        if(countChar[char]){
            countChar[char]++
        } else {
            countChar[char] = 1
        }
    }

    return countChar
}

let result = countCharacter("hello world")
// console.log(result)

