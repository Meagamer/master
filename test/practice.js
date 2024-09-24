/* let srt = 'arshad';
let numer = 1234567890;

function reverse(sring){  // custom
    let reversed = ''
for(char of sring){
    reversed = char + reversed;
}  return reversed;
};

function build(number){  //  builin 
  let num= String(number);
  console.log(num);
  let result = num.split('').reverse().join('')
  return Number(result);
}

console.log(reverse(srt));
console.log(build(numer));


function same(str){
    let reversed = ''
     for(char of str){
     reversed = char + reversed;
     }if(reversed === str){
        return true;
    } else{
        return false;
    }

};

console.log(same('hello'));
console.log(same('madam'));

maxCahar('wtyqdgfggfvvvdhfvyvvygvvvvvdsfyuug');

function maxCahar(chars){
    let charToobj = {}
    let max = 0;
    let maxChar = '';
    for(let char of chars){
        charToobj[char] = ++charToobj[char]|| +1
        console.log(charToobj);
    }
    for(let key in charToobj){
        if(charToobj[key] > max){
            max = charToobj[key]
            console.log(max);
            maxChar = key
            console.log(maxChar);
        }

    }
   return maxChar;

};

console.log(maxCahar('wtyqdgfggfvvvdhfvyvvygvvvvvdsfyuug'));
    

function consoOrVowels(s) {
    let result = {};
    const vowels = 'A, E, I, O, U, Y'; // Corrected spelling: 'vowels'
    let conNum = 0;
    let vowNum = 0;

    // Convert the string to uppercase to handle case insensitivity
    s = s.toUpperCase();

    for (let i of s) {
        if (vowels.includes(i)) {
            vowNum++;
        } else if (i.match(/[A-Z]/)) { // Check if it's a letter
            conNum++;
        }
    }

    result.vowels = vowNum;
    result.consonants = conNum; // Corrected spelling: 'consonants'
    return result;
}

// Example usage
const counts = consoOrVowels("Hello World");
console.log(counts); // Output: { vowels: 3, consonants: 7 }


console.log(consoOrVowels('hello world'));

function mostOcured(arr){
  let result;
  let acc ;
  let maxCount = 0;
    const counts = arr.reduce((acc, element) =>{
        acc[element] = ++acc[element] || 1; if // if it exist existing + 1 else +1
        return acc
    },{}); // initail valuue (acc) empty object
     for(let count in counts){
        if(counts[count] > maxCount){
            maxCount = counts[count]
            result = count;
        }
     }
     return result;
  }

const input = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];
console.log(mostOcured(input));

let option1 = 'hello';
let option2 = 'hello';

function anegram(option1,option2){
    let answer = option1.includes(option2) ? true : false;
    
   return answer;
};

console.log(anegram(option1, option2));

function step(n){
    for(let i=1; i<= n; i++){
       return console.log('#');
    };
};

step(10); */

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

function sorting(input){
    const output = {};
    const tostring = input.join().toLowerCase()
   console.log(tostring);
   input.forEach(input => {
    const sortedWords = input.replace(/[\W]/gi,'').split('').sort().join('')
    const length = input.length
    console.log(sortedWords);
    console.log(length);

    const key = `${sortedWords}-${length}`; // ex aet-3
    if (!output[key]) { // if output deos have this key 
        output[key] = []; // create an empty arrey in that object
    }
    // console.log(output);   { 'aet-3': [], 'ant-3': [], 'abt-3': [] }
    output[key].push(input);
    // console.log(output);    {'aet-3': [ 'eat', 'tea', 'ate' ],'ant-3': [ 'tan', 'nat' ],'abt-3': [ 'bat' ]}
   });
   let result = Object.values(output); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ] removes key from object and return an arrey
//    let result = Object.keys(output);  [ 'aet-3', 'ant-3', 'abt-3' ]
   console.log(result);
    
   
}
sorting(input);