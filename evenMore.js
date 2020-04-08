// // 1. Write a program that prints ‘Hello World’ to the screen.
// console.log('Hello World')

// // 2. Write a program that asks the user for their name and greets them with their
// // name.
// var userInput = prompt('What is your name?')

// console.log("Why, hello " + userInput);

// // 3. Modify the previous program such that only the users Alice and Bob are greeted
// // with their names.

// if (userInput == "Alice" || userInput == "Bob") {
//     console.log("Why, hello " + userInput);
// }   else {
//     console.log('Get away from me! Idk who you are!!')
// }

// // 4. Write a program that asks the user for a number n and prints the sum of the
// // numbers 1 to n
// var userInput4 = prompt("Hey, pick a number and I will print one to that number")

// var array4 = [];

// for (let i=1; i <= userInput4; i++){
    
//     array4.push(i)
// }

// console.log(array4.join(','))

// // 5. Modify the previous program such that only multiples of three or five are
// // considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
// var userInput5 = prompt("Hey, pick a number and I will print one to that number")

// var array5 = [];

// for (let i=1; i <= userInput5; i++){
    
//     if(i % 3 == 0 || i % 5 == 0){
//         array5.push(i)
//     }
// }

// console.log(array5.join(','))

// // 6. Write a program that asks the user for a number n and gives them the possibility
// // to choose between computing the sum and computing the product of 1,…,n.
// var userInput6 = prompt('hey, pick a number.')
// var userInput6a = prompt("now tell me if you want to add or multiply")

// if (userInput6a == 'add' || userInput6a == 'sum') {
//     console.log(1 + userInput6);
// } else if( userInput6a == 'multiply' || userInput6a == 'product') {
//     console.log(1 * userInput6);
// } else {
//     console.log("Hey buddy, I said add or multiply! Refresh the page and try again.")
// }

// 7. Write a program that prints a multiplication table for numbers up to 12.

var array7 = [1,2,3,4,5,6,7,8,9,10,11,12];
var array7a = [];

// console.log(array7.join(' '));

for (var i=1; i <= array7.length; i++){

    for (var x=1; x <= 12; x++){
        var result = array7[x] * i;
        array7a.push(result);
    }

    // console.log(array7a.join(' '))
}

// 8. Write a program that prints all prime numbers. (Note: if your programming
// language does not support arbitrary size numbers, printing all primes up to the
// largest number you can easily represent is fine too.)
var array8 = [];
var top = 100000000



// // 9. Write a guessing game where the user has to guess a secret number. After every
// // guess the program tells the user whether their number was too large or too small.
// // At the end the number of tries needed should be printed. It counts only as one try
// // if they input the same number multiple times consecutively.

// var userInput9 = prompt('Hey, guess a number 1 - 100');
// var rightNum = 49;
// var tries = 1;

// while(userInput9 != rightNum) {

//     if (userInput9 > rightNum) {
//         tries++
//         userInput9 = prompt("Nah, to high. Try again")
//     } else {
//         tries++
//         userInput9 = prompt('Nope, to low, Try again')
//     }

// }

// alert('Good Job! It only took you ' + tries + " tries!")


// // 10.Write a program that prints the next 20 leap years.
// var startingYear = 2020;
// var leapYears = []
// var addTo = 0

// for (let i=0; i < 20; i++){
//     addTo += 4
//     leapYears.push(startingYear + addTo);
// }

// console.log(leapYears.join(' '));


// // 11.Write a function that returns the largest element in a list.
// var array11 = [1, 34, 54, 29, 14, 84, 65, 39, 52, 64, 77, 93, 3, 13, 61, 10]

// function returnLargeBoi(){
    
//     var highest = 0;

//     array11.forEach(function(i){
//         if(i > highest){
//             highest = i;
//         }
//     })

//     return highest
// }

// console.log(returnLargeBoi());

// // 12.Write a function that reverses a list, preferably in place.
// var array12 = ['this', 'that', 'those', 'the other']

// console.log(array12.reverse());

// // 13.Write a function that checks whether an element occurs in a list.
// var array13 = ['milk', 'eggs', 'salad', 'rice', 'oatmeal', 'tea'];

// var userInput13 = prompt('Ask and I will let you know if your item is in your grocery list')

// var result = ''

// for (let i=0; i < array13.length; i++){

//     result = 'No ' + userInput13 + ' is not in there.'

//     if (userInput13 == array13[i]){
//         result = ('Yes ' + userInput13 + ' is in there.')
//         break;
//     }
// }

// alert(result);



// // 14.Write a function that returns the elements on odd positions in a list.
// var array14 = ['milk', 'eggs', 'salad', 'rice', 'oatmeal', 'tea'];
// var array14a = []

// for (let i=0; i < array14.length; i++){
//     if (i % 2 != 0){
//         array14a.push(array14[i]);
//     }
// }

// console.log(array14a);


// // 15.Write a function that computes the running total of a list.
// var array15 = [1, 34, 54, 29, 14, 84, 65, 39, 52, 64, 77, 93, 3, 13, 61, 10]
// var sum = 0

// array15.forEach(function(i){
//     sum += i
// })

// console.log(sum);

// 16.Write a function that tests whether a string is a palindrome.

function palindromeFinder(word) {

    var wordRev = word.reverse(); 

    if(word == wordRev){
        return "Yep, that's a palindrome"
    } else {
        return "No this is not a palindrome"
    }

}

console.log(palindromeFinder('this'));

// 17.Write three functions that compute the sum of the numbers in a list: using a
// for-loop, a while-loop and recursion. (Subject to availability of these constructs in
// your language of choice.)
// 18.Write a function on_all that applies a function to every element of a list. Use it to
// print the first twenty perfect squares. The perfect squares can be found by
// multiplying each natural number with itself. The first few perfect squares are 1*1=
// 1, 2*2=4, 3*3=9, 4*4=16. Twelve for example is not a perfect square because
// there is no natural number m so that m*m=12. (This question is tricky if your
// programming language makes it difficult to pass functions as arguments.)
// 19.Write a function that concatenates two lists. [a,b,c], [1,2,3] → [a,b,c,1,2,3]
// 20.Write a function that combines two lists by alternatingly taking elements, e.g.
// [a,b,c], [1,2,3] → [a,1,b,2,c,3].
// 21.Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5]
// → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a
// sort.
// 22.Write a function that rotates a list by k elements. For example [1,2,3,4,5,6]
// rotated by two becomes [3,4,5,6,1,2]. Try solving this without creating a copy of
// the list. How many swap or move operations do you need?
// 23.Write a function that computes the list of the first 100 Fibonacci numbers. The
// first two Fibonacci numbers are 1 and 1. The n+1-st Fibonacci number can be
// computed by adding the n-th and the n-1-th Fibonacci number. The first few are
// therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.
// 24.Write a function that takes a number and returns a list of its digits. So for 2342 it
// should return [2,3,4,2].
// 25.Write a function that translates a text to Pig Latin and back. English is translated
// to Pig Latin by taking the first letter of every word, moving it to the end of the
// word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay
// oxfay”