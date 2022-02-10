'use strict';

// Resource:
// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// slice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// indexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// lastIndexOf: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf

// 1) ---------------------
// 
// Using the slice and indexOf/lastIndexOf methods, return the last word in a string
//
// Note: consider that the string may have one word but never empty
//
// Ex: "I did my waiting 12 years of it in Azkaban" ==> "Azkaban"
// Ex: "Impossible" ==> "Impossible"
//
// ------------------------

const LastWord = (str) => {
    // write your code here
    return str.slice(str.lastIndexOf(' ')+1);

}

// 2) ---------------------
// 
//  Hopefully you struggled in the last code challenge, you can try to do the same task using the split method
//
//  EX: "you dare use my spells against me, potter" ===> "potter"
//
// ------------------------

const LastWord_2 = (str) => {
    // write your code here
    let arrayWords = str.split(' ');
    return arrayWords[arrayWords.length - 1]
}

// 3) ---------------------
// 
// Number 2 was easy right?, ok then using the splice method replace all the "I" with "We", "am" with "are" and "was" with "were"
//
// Note: you may use another method for search (indexOf)
//
// Ex: "I thought you had a plan" ==> "We thought you had a plan"
// Ex: "I was there 3000 years ago" ==> "We were there 3000 years ago"
// Ex: "I am Venom" ==> "We are Venom"
//
// ------------------------

const replaceWords = (str) => {
    // write your code here
    let array = str.split(' ');
    let idx = array.indexOf('I');
    while (idx != -1) {
      array[idx]= 'We';
      idx = array.indexOf('I', idx + 1);
    }
    let idx1 = array.indexOf('am');
    while (idx1 != -1) {
      array[idx1]= 'are';
      idx1 = array.indexOf('am', idx1 + 1);
    }
    let idx2 = array.indexOf('was');
    while (idx2 != -1) {
      array[idx2]= 'were';
      idx2 = array.indexOf('was', idx2+ 1);
    }
    let str_convert=array.join(' ');
    return str_convert;

    //2nd: Splice : Not work !!!!!!
    // let array = str.split(' ');

    // array.splice(array.indexOf('I'),1,'We');
    // array.splice(array.indexOf('am'),1,'are');
    // array.splice(array.indexOf('was'),1,'were');

    // let str_convert=array.join(' ');

    // return str_convert;

}

// 4) ---------------------
// 
// Write a function that "joins" the array of words together and put a comma "," after every five words
// ["move","it","away","from","the","street"] ==> "move it away from the, street" 
//
// ------------------------

const arrToStr = (arr) => {
    // write your code here

    let newArray = arr.map((item,index)=>{
        if(index%4 == 0 && index != 0)
        {
            return item+','
        }else{
            return item;
        }
    });
   // console.log(newArray)

    let str = newArray.join(' ');
  //  console.log(str)
return str;    

}

// 5) ---------------------
// 
// Simon got a string manipulation question for his interview, it asked him to replace the duplicated letters in a string to an indicator and counter
// as in the example:
//
// "aaaa bbb sdf" ===> "a4 b3 s1d1f1"
//  "door" ==> "d1o2r1"
//
// help him by writing the function
//
// ------------------------

const letterCounter = (str) => {
    // write your code here
    
    let arrayWords = str.split(' ');
    //console.log(arrayWords)
    let arrayCount= arrayWords.map((word,index)=>{// aaaa
          let elementarray="";
          let letter = " ";
          let count = 1
          let arrayword  = word.split('');//[a,a,a,a]
         // console.log(arrayword)

          let arraywordcount = arrayword.reduce((acc,current,index)=>{
         
                   if(acc == current){
                         count++;
                         letter = current;                         
                         return current;
                   }else if(acc != current || !current){
                    elementarray = elementarray +`${acc}${count}`
                    count=1;
                    letter=current;
                    return current;
                   }
          },);
         
          elementarray = elementarray +`${letter}${count}`
          return elementarray;
    });

    //console.log(arrayCount)
    let stringresult  = arrayCount.join(' '); 
    //console.log(stringresult)
    return stringresult;
  }



module.exports = { LastWord, LastWord_2, replaceWords, arrToStr, letterCounter };