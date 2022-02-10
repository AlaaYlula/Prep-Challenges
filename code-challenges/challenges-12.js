'use strict';
// Important Note: 
// Kindly use filter instead of for in all of your solutions

// Resource:
// Filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// 1) ---------------------
// 
// Given an array of values use filter to extract odd values.
//  
// EX:
// [20, 54, 89, 41, 2, 31, 111, 15, 0, 31, 200] ==> [89, 41, 31, 111, 31]
// 
// ------------------------

const oddFiltration = (arr) => {
    // write your code here
    let oddArray = arr.filter((num) => {
        return (num % 2);
    });
    return oddArray;
}

// 2) ---------------------
// 
// Given data of candidates return the candidates CVs that have more than 4 years of experience 
// and works as JS developer 

// EX:
// var cvs = [
//     {
//         firstName: "Jason",
//         LastName: "James",
//         yearsOfExperience: 20,
//         tech: "JS"
//     },
//     {
//         firstName: "Shira",
//         LastName: null,
//         yearsOfExperience: 5,
//         tech: ".Net"
//     },
//     {
//         firstName: "Dmitri",
//         LastName: "Akkerman",
//         yearsOfExperience: 1,
//         tech: "Python"
//     },
//     {
//         firstName: "Isabella",
//         LastName: null,
//         yearsOfExperience: 4,
//         tech: "Java"
//     }
// ]
//
//   ===>
//
// [
//     {
//         fullName: "Jason James",
//         tech: "JS"
//     }
// ]

//  Note that:
//  1- Full name is first name + last name
//  2- If one of the names is null dont add it to the full name
// ------------------------

const cvsFiltration = (arr) => {
    // write your code here
    
    let newArray = arr.filter((obj) => {

        return (obj.yearsOfExperience >= 4 && obj.tech == "JS")
    });
    
    let result = newArray.map((element) => {

        let objResult = {}
        if (element.firstName == null) {
            objResult["fullName"] = `${element.LastName}`
        } else if (element.LastName == null) {
            objResult["fullName"] = `${element.firstName}`

        } else {
            objResult["fullName"] = `${element.firstName} ${element.LastName}`
        }
       objResult["tech"] = element.tech;
       return objResult
    });
    return result

}

// 3) ---------------------
//
// Given an array of words filter the names that contains one of the vowels (a, e, i, o, u)

// EX:
// ['car', 'boy', 'spy', 'building', 'why', 'dry' ] ==> ['spy', 'why', 'dry']
// 
// ------------------------

const vowelsFiltration = (arr) => {
    // write your code here
    let newArray = arr.filter((word)=>{

        for(let i = 0 ; i < word.length ; i++){
            if(word.charAt(i) == 'a' || word.charAt(i) == 'e' || word.charAt(i) == 'i' || word.charAt(i) == 'o' || word.charAt(i) == 'u' ){
                    return 0;
            }
        }
        return 1 ; 

        //2nd:
        //return !(word.includes('a') ||  word.includes('o') ||   word.includes('e') ||  word.includes('i') ||  word.includes('u'))
    
    });
return newArray;
}

// 4) ---------------------
//
// An employer wants to compare between his employees skills, write a function that will extract the differences 
// between the employees skills.

// EX:
// first_Employee = [C, C#, Java, Angular, PHP]
// first_Employee = [C#, .Net, JavaScript, React, Angular]
// ==>
// result = [C, Java, PHP, .Net, JavaScript, React]
// Hint:
// - the 'include' method can help you, read about it.
// ------------------------

const skillComparison = (arr1, arr2) => {
    // write your code here
    let result = arr1.filter((element) =>{
        return !(arr2.includes(element))
    });

    let result2 = arr2.filter((element) =>{
        return !(arr1.includes(element))
    });

    let array = [];
    result.forEach((skill) =>{
        array.push(skill);
    });
    result2.forEach((skills) =>{
        array.push(skills);
    });

    return array;
}


module.exports = { oddFiltration, cvsFiltration, vowelsFiltration, skillComparison };

