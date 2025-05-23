function reverseNumber(x){

    x= String(x);
    return Number(x.split("").reverse().join(""))
}
console.log(reverseNumber(32243));

//Number 2 
function checkPalindrome(str){
    reverseStr = str.split("").reverse().join("");
    console.log(reverseStr);
    return str=== reverseStr;

}
console.log(checkPalindrome('madam'));
//Number 3 
function generateCombination(str){
    for(let i=0; i< str.length; i++){
        for(let j=i; j<str.length; j++){
            console.log(str.slice(i,j+1));
        }
    }
}

generateCombination('dog');

//Number 4 
function orderWords(wrds){
    wrds=wrds.split("");

    for(let i=0; i<wrds.length; i++){
        for(let j=i+1; j< wrds.length; j++ ){
            
            if(wrds[i]>wrds[j]){
                let swap = wrds[i];
                wrds[i]=wrds[j];
                wrds[j]=swap;
                
            }
        }
    }
    return wrds.join("");

}
console.log(orderWords("webmaster"));

//Number 5 
function capitalizedWords(str){
   let strArray=str.split(" ");
   strArray.forEach((element, i, arr) => {
    
    arr[i]= element.charAt(0).toUpperCase()+arr[i].slice(1)
    
   });


   return strArray.join(" ");

}
console.log(capitalizedWords("the quick brown fox"));

//Number 6 
function longestStr(str){
    let arrayStr = str.split(" ");
    let largest= arrayStr[0].length;
    let longestWrds = arrayStr[0];
    for(let i=0; i< arrayStr.length; i++){
        if(largest<arrayStr[i].length){
            largest = arrayStr[i].length;
            longestWrds= arrayStr[i];
        }

    }

    return longestWrds;
}

console.log(longestStr("'Web Development Tutorial"));

//NAUMBER 7
function countVowel(words){
    let count=0;
    let vowels =['a', 'e', 'i', 'o', 'u']
    for(let y of words){
       if (vowels.includes(y)){
        count++;
       }
    }

    return count;
}
console.log(countVowel("the quick brown fox"));

//Number 8
function checkPrimeNumber(num){
    if(num<=1){
        return false;
    }
    for(let i=2; i<=num/2; i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
console.log(checkPrimeNumber(11));

//number 9
function checkType(value){
    const values =['object', 'boolean', 'function','number', 'string', 'undefined'];
    if(values.includes(typeof value)){

         return typeof value;
    }
   return 'value type unknown';

}
console.log(checkType("hello"));

//number 10
function identityMatrix(n){
   const matrix= Array.from({length: n}, (_,i)=>Array.from({length: n}, (_, j)=> (i==j? 1 : 0)))
 return matrix;
}
console.log(identityMatrix(3));

//number 11
function findlowestAndGreatest(arr){
    const newArr = arr.sort((a,b)=> a-b);
    
    return [newArr[1], newArr[newArr.length-2]];

}
console.log(findlowestAndGreatest([2,4,1,10,100,45,34,67]));

//  Number 12
function checkPerfecNumber(num){
    let sum=0;
    for(let i=0; i<=num/2; i++){
        if(num%i===0){
            sum +=i;
        }
    }
    console.log(sum)

    return sum === num;
}
console.log(checkPerfecNumber(6));
console.log(checkPerfecNumber(28));

//number 13
function computeFactors(num){
    if(num<=0){
        return []
    }
    let factors=[];
    for(let i=1; i< num; i++){
        if(num%i==0){
            factors.push(i);

        }
    }
    return factors;
}

console.log(computeFactors(24));

//number 14
function amountToCoins(amount, arr){

    let values=[];
    for(let i=0; i< arr.length; i++){
        while(amount>= arr[i]){
            values.push(arr[i]);
            amount-=arr[i];

        }
    }

    return values;

}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

//Number 15
function computeExponent(b, n){
    return Math.pow(b,n);
}
console.log(computeExponent(4,2));

//Number 16
function extractUniqueCharacters(str){
    let newStr="";
    for(let ch of str){
        if(newStr.indexOf(ch)===-1){
            newStr+=ch;
        }
    }
    return newStr;
}

console.log(extractUniqueCharacters("thequickbrownfoxjumpsoverthelazydog"));

//number 17
function countString(str){
    const newObject={

    };
    for(let ch of str){
        newObject[ch]= (newObject[ch]||0)+1
        
    }
    return newObject;
}

console.log(countString("thequickbrownfoxjumpsoverthelazydog"));

// number 18
function binarySearchTree(arr, target){
    let left =0;
    let right = arr.length-1;
    while(left <= right){
        let mid =   Math.floor((right + left)/2);
        if(arr[mid]==target){
            return mid
        }
        else if(target<arr[mid]){
            right=mid-1;
        }
        else if(target>arr[mid]){
            left=mid+1;
        }
    }
    return -1;
};
const arr=[1,4,8,9,10];
console.log(binarySearchTree(arr, 10));

//number 19
function getLargeElements(arr, num){
    return arr.filter(el=>el>num);
}

console.log( getLargeElements([34, 78, 6, 1, 2, 7], 5));

//number 20 
function generateRandomId(num){
    let res="";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i=0; i<=num; i++){
        let randomNum = Math.floor(Math.random()*str.length);
        
        res +=str[randomNum];

    }
    return res;

}
console.log(generateRandomId(5));

//number 21
function getCombination(arr, num){
    let result=[];
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){

            result.push([arr[i], arr[j]])
        }
    }
    return result;

}
console.log(getCombination([1,2,3], 2));
//number 22
function countCharacters(str, ch){
    let count =0
    for(let c of str){
        if(c===ch){
            count++
        }

    }
    return count;
}
console.log(countCharacters('microsoft.com', 'o' ));
//Number23

function checkNoRepeate(str) {
  let chk = "";
  for (let i = 0; i < str.length; i++) {
    let newEL = str.split("");
    newEL.splice(i, 1);

    if (!newEL.join("").includes(str[i])) {
      return str[i];
    }
  }
}
console.log(checkNoRepeate("abacddbec"));

// Number 24
function bubbleSort(arg) {
  let smallest = arg[0];
  for (let i = 0; i < arg.length; i++) {
    let swap = arg[i];
    for (let j = i + 1; j < arg.length; j++) {
      if (arg[i] < arg[j]) {
        swap = arg[i];
        arg[i] = arg[j];
        arg[j] = swap;
      }
    }
  }
  return arg;
}

console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

//Number 25
function longest_Country_Name(countries) {
  let mapped = {};
  for (c of countries) {
    mapped[c] = c.length;
  }
  let highest = 1;

  for (x of Object.values(mapped)) {
    if (highest < x) {
      highest = x;
      highestIndex = Object.values(mapped).indexOf(highest);
    }
  }

  return countries[highestIndex];
}

console.log(
  longest_Country_Name(["Australia", "Germany", "United States of America"])
);

//Number 26 LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
function longestSubstring(str) {
  let longest = [];

  let curr = "";
  for (let i = 0; i < str.length; i++) {
    if (curr.includes(str[i])) {
      longest.push(curr);
      let num = str.indexOf(str[i]);
      curr = curr.substring(num + 1);
    }

    curr += str[i];
  }

  longest.push(curr);
  let highest = longest[0];

  for (let high of longest) {
    if (high.length > highest.length) {
      highest = high;
    }
  }

  return highest;
}

console.log(longestSubstring("abcdefabcbb"));

//number 28 javascript to pass js function as params

function passFunction(fn) {
  fn();
  return "we are inside passfunction";
}

function fn() {
  console.log("we are in fn");
}

console.log(passFunction(fn));

//number 29 get a function name

function getFunctionName() {
  return this;
}

console.log(getFunctionName.name);

//number 27 longest palindrome
function findLongestPalindrome(str) {
  let res = "";
  let highest = 0;

  for (let i = 0; i < str.length; i++) {
    let l = i;
    let r = i;
    while (l > 0 && r < str.length && str[l] == str[r]) {
      if (str.slice(l, r + 1).length > highest) {
        highest = str.slice(l, r + 1).length;
        res = str.slice(l, r + 1);
        ("");
      }
      l--;
      r++;
    }

    l = i;
    r = i + 1;
    while (l > 0 && r < str.length && str[l] == str[r]) {
      if (str.slice(l, r + 1).length > highest) {
        highest = str.slice(l, r + 1).length;
        res = str.slice(l, r + 1);
        ("");
      }
      l--;
      r++;
    }
  }

  return res;
}
console.log(findLongestPalindrome("babad"));