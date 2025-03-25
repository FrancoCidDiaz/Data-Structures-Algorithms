//REVERSE STRING
//Convert string into array
//Reverse the array
//Convert array back to string


const reverseString = (str) => str.split("").reverse().join("")


const forReverseString = (str) => {
  const stack = []

  for(let i = str.length -1; i >= 0 ; i--) {
    stack.push(str[i])
  }
  return stack.splice("").join("")

}





//PALINDROMO


const IsPalindrome = (str) => str.split("").reverse().join("") === str ? true : false



//Int reversal

const intReversal = (int) => {
  
    const reversedInt = parseInt(int.toString().split('').reverse().join(''));
    
    return int < 0 ? -reversedInt : reversedInt; //Tambien se puede usar Math.sign(int)
  };
  

const capitalization = (str) => str.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)) .join(" ")  


const fizzBuzz = (n) => {
  for(let i = 1;  i <= n; i ++){
   
    if(i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz")
    }
    else if(i % 3 == 0) {
      console.log("Fizz")
    } 
    else if(i % 5 == 0) {
      console.log("Buzz")
    } 
    else {
     console.log(i)
    }

  }
  return
  
}


const prices = [7,1,5,3,6,4]

const maxProfit = (prices) => {
  let minPrice = prices[0]
  let maxProfit = 0

  for(let i = 1 ; i < prices.length; i++){
   
   const currentPrice = prices[i]

   minPrice = Math.min(minPrice, currentPrice)
  
   const potencialProfit = currentPrice - minPrice


  maxProfit = Math.max(maxProfit, potencialProfit)

    }

   return maxProfit

  }


const arrayChunk = (array, size) => {
  const result = []
  let index = 0
  
  while(index < array.length){
    const chunk = array.slice(index, index + size)
    result.push(chunk)
    index += size
    
  }


  return result

}  

const twoSum = (array, target) => {
   
  for(let i = 0; i < array.length; i++){  
    for(let j = i + 1 ; j < array.length; j++){
      if(array[i] + array[j] === target){
        return [array[i], array[j]]
      }
    }
  }
 
}

const isValidParenthesis = (str) => {
  const stack = []
  const brackets = {
    "{" : "}",
    "[" : "]",
    "(" : ")"
  }
  
  for(let char of str) {
    if(brackets[char]){
      stack.push(char)
    }
    else{
      const top = stack.pop()

      if(!top || brackets[top] !== char){
        return false  
      }
    }
  }

  return stack.length === 0

} 


const stackReverseString = (str) => {
  const stack = []
  
  for(let char of str){
    stack.push(char)
  }

  let reversedStr = ""

  while(stack.length > 0){
    reversedStr += stack.pop()
  }

  return reversedStr

}


const wordCounter = (str) => {
  let result = {}
  const convertedText = str.toLowerCase().split(/\s+/)

  for(const word of convertedText){
    if(word in result){
      result[word]++ 
      
    }
    else{
      result[word] = 1
    }
  }
  
  return result
}


const correctTwoSum = (nums, target) => {
  const numMap = {}

  for(let i = 0; i < nums.length ; i++){
    const compliment = target - nums[i]
    if(compliment in numMap && numMap[compliment] !== i){
      return [numMap[compliment] , i]
    }
    numMap[nums[i]] = i
  }

  return []
}




console.log("REVERSE STRING:")
console.log(reverseString("Hola franco"))
console.log("PALINDROME:")
console.log(IsPalindrome("cddc"))
console.log(IsPalindrome("hello world"))
console.log("INT REVERSAL:")
console.log(intReversal(1234))
console.log("CAPITALIZATION:")
console.log(capitalization("hello world"))
console.log("FIZZ BUZZ:")
fizzBuzz(20)
console.log("MAX PROFIT:")
console.log(maxProfit(prices))
console.log("ARRAY CHUNK:")
console.log(arrayChunk([1,2,3,4,5,6], 2))
console.log("TWO SUM")
console.log(twoSum([2,7,11,15], 22))
console.log("IS VALID PARENTHESIS")
console.log(isValidParenthesis("(){}"))
console.log(isValidParenthesis("([)]"))
console.log("STACK REVERSE STRING:")
console.log(stackReverseString("probando la funcion"))
console.log(wordCounter("Este es el contador de palabras contador"))
console.log(correctTwoSum([2,7,11,15], 22))

