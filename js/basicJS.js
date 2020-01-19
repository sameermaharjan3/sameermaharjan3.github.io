/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + found;
    }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    };
}

/*maxofThree returns the maximum of 3 arguements*/
function maxOfThree(num1,num2,num3){
    if(num1>num2){
      if(num1>num3){
          return num1;
      }else{
          return num3;
      }
    }else{
        if(num2>num3){
            return num2;
        }else{
            return num3;
        }
    };
}

/*isVowel check if the given character is a vowel*/
function isVowel(c){
    if(c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'){
        return true;
    }else{
        return false;
    };
}

/*sum adds up all the numbers in the array*/
function sum(arr){
    let add = 0;
    for(i=0;i<arr.length;i++){
        add = add + arr[i];
    }
    return add;
}

/*multiply gives product of all elements in the array*/
function multiply(arr){
    let result = 1;
    for(i=0;i<arr.length;i++){
        result = result * arr[i];
    }
    return result;
}

/*this function reverses string*/
function reverse(str){
    let rev = str.charAt(str.length-1);
    for(i=str.length-2;i>=0;i--){
        rev = rev + str.charAt(i)
    }
    return rev;
}

/*finds longest word in the array*/
function findLongestWord(arr){
    let longest = arr[0];
    for(i=1;i<arr.length;i++){
        if(longest.length < arr[i].length){
            longest = arr[i];
        }
    }
    return longest;
}

/*filters word that are greater than i*/
function filterLongWords(arr,i){
    let longest = [];
    for(j=0;j<arr.length;j++){
        if(arr[j].length > i){
            longest.push(arr[j]);
        }
    }
    return longest;
}


/*-------------------------------Testing functions on console-------------------------------*/
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
console.log("Expected output of maxOfThree(20,10,100) is 100  " + myFunctionTest(100, maxOfThree(20, 10, 100)));
console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
console.log("Expected output of isVowel('x') is false  " + myFunctionTest(false, isVowel('x')));
const arr = [1,2,3,4,5]
console.log("Expected output of sum([1,2,3,4,5]) is 15  " + myFunctionTest(15, sum(arr)));
console.log("Expected output of multiply([1,2,3,4,5]) is 120  " + myFunctionTest(120, multiply(arr)));
console.log("Expected output of reverse(java script) is tpircs avaj  " + myFunctionTest('tpircs avaj', reverse('java script')));
const words = ['find','the','longest','word']
console.log("Expected output of findLongestWord(['find','the','longest','word']) is longest  " + myFunctionTest('longest', findLongestWord(words)));
const exp=['find','longest','word']
console.log("Expected output of filterLongWords(['find','the','longest','word'],3) is [find, longest, word] : Found = ["
    + filterLongWords(words,3) +"]");


/*------------------------------------Js fiddle modification------------------------------------*/
const a = [1,3,5,3,3];
const b = a.map(function(elem, i, array) {
    return elem * 10;
})
console.log("Array multiplied by 10 : " +b);
const c = a.filter(function(elem, i, array){
    return elem === 3;});
console.log("Array consisting of only 3 : "+c);
const d = a.reduce(function(prevValue, elem, i, array){
    return prevValue * elem;
});
console.log("Product of all elements : " +d);
