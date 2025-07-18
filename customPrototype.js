

Array.prototype.myMap = function(callback){
  let results = [];

  for(let i =0; i < this.length; i++){
    results.push(callback(this[i], i, this))
  }

  return results;
}

Array.prototype.myFilter = function(callback){
  let results = [];
  
  for(let i=0; i< this.length; i++){
    if(callback(this[i], i, this)){
      results.push(this[i])
    }
  }
  return results;
}

Array.prototype.myReduce = function(callback, initialValue){
  let accumulator = initialValue === undefined ? this[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;
  
  for(let i =startIndex; i< this.length; i++){
    accumulator = callback(accumulator, this[i], i, this)
  }
  return accumulator;
}

const arr = [1,2,3,4,5]

const newArr = arr.myMap(num => num + 2);
console.log(newArr)

const even = arr.myFilter(num => num % 2 === 0)
console.log(even)

const allSum = arr.myReduce((acc, val) => acc + val)
console.log(allSum)



Function.prototype.myCall = function(context = globalThis, ...args){
  if(typeof this !== 'function'){
    throw new Error(this + " It's not a callable")
  }
  
  console.log("context",context)
  console.log("args", ...args)
  
  const uniqueKey = Symbol();
  console.log(uniqueKey);

  context[uniqueKey] = this;
  console.log("unique",context[uniqueKey]);

  const result = context[uniqueKey](...args);
  console.log(result);

  delete context[uniqueKey];
  return result;
}

const call = getInfo.myCall(user, 'hello')
console.log(call)
