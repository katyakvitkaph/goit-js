// const arg = [];

// for ( let i=0; i<10; i++) {
// arg.push('x')
// }
// console.log(arg);

// fn (10, 'a') 



// const arr = function (max = 2 , elem= ' oops' ) {

//     const newAr = [];
//     for ( let i=0; i<max; i++) {
//         newAr.push(elem)
//         } 
//        return newAr;
// }

// const result = arr()
// console.log(result)

// const word = '121';
// console.log(word);

// const newWord = word
// .split('')
// .reverse()
// .join('');

// console.log(newWord);

// console.log(word === newWord);


// const polindrome = function (word) {
// console.log(word);

// const newWord = word
// .split('')
// .reverse()
// .join('');
// let done ;
// if (word === newWord) {
//     done = 'its reversed' ;
// } else {
//     done= ' IT DOESNT '
// }
// return done;
// }

// const result = polindrome('okU');
// console.log(result);

// ===============
// const polindrome = word => 
// (word 
//     .split('')
// .reverse()
// .join('') ) === 
// word 
// ? 'полид'
// : 'no'

// const result = polindrome('oko');

// console.log (result);

// ============
const polid = word => word.split('').reverse().join('') === word ? 'yes' : 'no'; 

const result = polid('oko') ;

console.log(result);

// ================
// const fn = (word) => {
// const neeew = word.reverse() ? console.log('its reverse here') : console.log('but not here');

// return neeew;
// }
// console.log(neeew);

// const isReverse = function (neeew) {
//     if (word.reverse()) {
// console.log('here');
//     } else {
//         console.log('not here');
//     }
   
// }



// isReverse('123');