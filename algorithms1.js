//REVERSE STRING
//Convert string into array
//Reverse the array
//Convert array back to string


const reverseString = (str) => str.split("").reverse().join("")




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
