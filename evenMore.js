// 1. Write a program that prints ‘Hello World’ to the screen.
console.log('Hello World')

// 2. Write a program that asks the user for their name and greets them with their
// name.
var userInput = prompt('What is your name?')

console.log("Why, hello " + userInput);

// 3. Modify the previous program such that only the users Alice and Bob are greeted
// with their names.

if (userInput == "Alice" || userInput == "Bob") {
    console.log("Why, hello " + userInput);
}   else {
    console.log('Get away from me! Idk who you are!!')
}

// 4. Write a program that asks the user for a number n and prints the sum of the
// numbers 1 to n
var userInput4 = prompt("Hey, pick a number and I will print one to that number")

var sum = 0

for (let i=1; i <= userInput4; i++){
   sum += i;
}

console.log(sum)

// 5. Modify the previous program such that only multiples of three or five are
// considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
var userInput5 = prompt("Hey, pick a number and I will print one to that number")

var sum = 0;

for (let i=1; i <= userInput5; i++){
    
    if(i % 3 == 0 || i % 5 == 0){
        sum += i;
    }
}

console.log(sum)

// 6. Write a program that asks the user for a number n and gives them the possibility
// to choose between computing the sum and computing the product of 1,…,n.
var userInput6 = prompt('hey, pick a number.')
var userInput6a = prompt("now tell me if you want to add or multiply")

if (userInput6a == 'add' || userInput6a == 'sum') {
    console.log(1 + userInput6);
} else if( userInput6a == 'multiply' || userInput6a == 'product') {
    console.log(1 * userInput6);
} else {
    console.log("Hey buddy, I said add or multiply! Refresh the page and try again.")
}

// 7. Write a program that prints a multiplication table for numbers up to 12.

var array7 = [1,2,3,4,5,6,7,8,9,10,11,12];
var array7a = [];

for (let i=1; i <= 12; i++){
    var numLine = array7.map(function(x){
        return x * i
    })

    console.log ('Mulitples of ', i, ": ", numLine)
}

// 8. Write a program that prints all prime numbers. (Note: if your programming
// language does not support arbitrary size numbers, printing all primes up to the
// largest number you can easily represent is fine too.)
var array8 = [];

function isPrime(n) {
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

for (let i=0; i < 10000; i++) {
    if (isPrime(i)){
        array8.push(i)
    }
}

console.log(array8);

// 9. Write a guessing game where the user has to guess a secret number. After every
// guess the program tells the user whether their number was too large or too small.
// At the end the number of tries needed should be printed. It counts only as one try
// if they input the same number multiple times consecutively.

var userInput9 = prompt('Hey, guess a number 1 - 100');
var rightNum = 49;
var tries = 1;

while(userInput9 != rightNum) {

    if (userInput9 > rightNum) {
        tries++
        userInput9 = prompt("Nah, to high. Try again")
    } else {
        tries++
        userInput9 = prompt('Nope, to low, Try again')
    }

}

alert('Good Job! It only took you ' + tries + " tries!")


// 10.Write a program that prints the next 20 leap years.
var startingYear = 2020;
var leapYears = []
var addTo = 0

for (let i=0; i < 20; i++){
    addTo += 4
    leapYears.push(startingYear + addTo);
}

console.log(leapYears.join(' '));


// 11.Write a function that returns the largest element in a list.
var array11 = [1, 34, 54, 29, 14, 84, 65, 39, 52, 64, 77, 93, 3, 13, 61, 10]

function returnLargeBoi(){
    
    var highest = 0;

    array11.forEach(function(i){
        if(i > highest){
            highest = i;
        }
    })

    return highest
}

console.log(returnLargeBoi());

// 12.Write a function that reverses a list, preferably in place.
var array12 = ['this', 'that', 'those', 'the other']

console.log(array12.reverse());

// 13.Write a function that checks whether an element occurs in a list.
var array13 = ['milk', 'eggs', 'salad', 'rice', 'oatmeal', 'tea'];

var userInput13 = prompt('Ask and I will let you know if your item is in your grocery list')

var result = ''

for (let i=0; i < array13.length; i++){

    result = 'No ' + userInput13 + ' is not in there.'

    if (userInput13 == array13[i]){
        result = ('Yes ' + userInput13 + ' is in there.')
        break;
    }
    
}

alert(result);


// 14.Write a function that returns the elements on odd positions in a list.
var array14 = ['milk', 'eggs', 'salad', 'rice', 'oatmeal', 'tea'];
var array14a = []

for (let i=0; i < array14.length; i++){
    if (i % 2 != 0){
        array14a.push(array14[i]);
    }
}

console.log(array14a);


// 15.Write a function that computes the running total of a list.
var array15 = [1, 34, 54, 29, 14, 84, 65, 39, 52, 64, 77, 93, 3, 13, 61, 10]
var sum = 0

array15.forEach(function(i){
    sum += i
})

console.log(sum);

// 16.Write a function that tests whether a string is a palindrome.

function palindromeFinder(word) {

    //split up each letter into an array
    var splitStr = word.split('');
    // reverse that new array to flip the word
    var reverseStr = splitStr.reverse()
    // join it back into a word that is now backwards
    var joinStr = reverseStr.join('');

    var wordRev = joinStr; 

    if(word == wordRev){
        return "Yep, that's a palindrome"
    } else {
        return "No this is not a palindrome"
    }

}

console.log(palindromeFinder('tacocat'));

// 17.Write three functions that compute the sum of the numbers in a list: using a
// for-loop, a while-loop and recursion. (Subject to availability of these constructs in
// your language of choice.)

var array17 = [1, 34, 54, 29, 14, 84, 65, 39, 52, 64, 77, 93, 3, 13, 61, 10]
var sum = 0

for (let i=0; i < array17.length; i++){
    sum += array17[i]

}
console.log(sum);

var sum2 = 0;
var c = 0;

while (c < array17.length){
    sum2 += array17[c]
    c++;
}

console.log(sum2);

var sum3 = 0;


// 18.Write a function on_all that applies a function to every element of a list. Use it to
// print the first twenty perfect squares. The perfect squares can be found by
// multiplying each natural number with itself. The first few perfect squares are 1*1=
// 1, 2*2=4, 3*3=9, 4*4=16. Twelve for example is not a perfect square because
// there is no natural number m so that m*m=12. (This question is tricky if your
// programming language makes it difficult to pass functions as arguments.)
var array18 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

function on_all(num){
    return num * num
}

for(let i=0; i < array18.length; i++){
    array18[i] = on_all(array18[i]);
}

console.log(array18)


// 19.Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
var array19a = ['a','b','c']
var array19b = [1,2,3]
var newArray = array19a.concat(array19b);

console.log(newArray);


// 20.Write a function that combines two lists by alternatingly taking elements, e.g.
// [a,b,c], [1,2,3] → [a,1,b,2,c,3].
var array20a = ['a','b','c']
var array20b = [1,2,3]
var newArray = []

for (let i=0; i < array20a.length; i++){
    newArray.push(array20a[i])
    newArray.push(array20b[i])
}

console.log(newArray)

// 21.Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5]
// → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a sort.
var array21a = [1,4,6] 
var array21b = [2,3,5]

var newArray = array21a.concat(array21b).sort()

console.log(newArray)


// 22.Write a function that rotates a list by k elements. For example [1,2,3,4,5,6]
// rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of
// the list. How many swap or move operations do you need?
var array22 = [1,2,3,4,5,6];

function rotate(num){

    for(let i=0; i < num; i++){
        array22.push(array22.shift())
    }

    return array22

}

console.log(rotate(4));


//23.Write a function that computes the list of the first 100 Fibonacci numbers. The
// first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be
// computed by adding the n-th and the n-1-th Fibonacci number. The first few are
// therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

function fibin(){
    var fib = 1
    var prev = 0
    var temp = 0
    var output = []

    for (let i=0; i < 100; i++){
        temp = fib
        fib = fib + prev
        prev = temp
        output.push(prev)
    }

    return output
}

console.log(fibin());


// 24.Write a function that takes a number and returns a list of its digits. So for 2342 it
// should return [2,3,4,2].
var num = 2342
var splitNum = num.toString().split('')
var myList = splitNum.map(function(i){return parseInt(i)})

console.log(myList);


// 25.Write a function that translates a text to Pig Latin and back. English is translated
// to Pig Latin by taking the first letter of every word, moving it to the end of the
// word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay
// oxfay”

var mySentence = 'Did you do the laundry'

function pigLatin(sen){

   var array25 = sen.split(' ')

   var newAr = array25.map(function(i){
    var disect = i.split('');
    disect.push( (disect.shift() + "ay") )

    var joinAr = disect.join('')

    console.log (joinAr)  
    return joinAr

   })

   return newAr.join(' ')

}

console.log(pigLatin(mySentence));

