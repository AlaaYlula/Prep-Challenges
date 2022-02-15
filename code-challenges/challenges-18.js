'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    // write your code here
    let arr = str.split(" ")
    let leng = arr.length;
    let index = Math.floor(leng / 2);

    return arr[index].length;
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    // write your code here
    if (str1.length == str2.length) {

        for (let i = 0; i < str1.length; i++) {
            if (!str2.includes(str1[i])) {
                return false;
            }
            return true;
        }
    } else {
        return false
    }
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    // write your code here
    let newarr = arr.filter((num)=>{
        if(num == int)
          return  arr.indexOf(num)
    });
    if(newarr.length == 1){ // if found
    return arr.indexOf(newarr[0])
    }else{//not found
      if(int > arr[arr.length-1]){
          return arr.length
      }else{
      for(let i = 0 ; i< arr.length ; i++){
        if(int > arr[i]){
          continue;
        }else{
          return i ;
        }
      }
      }
    }// not found
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };