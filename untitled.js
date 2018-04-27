//. For example, arrow functions are not ideal for declaring object methods, as they will not pick up the object as the this context.

const difObj = {a:function func(b){return this;}};
difObj.a();
//{a: ƒ}
const obj = {a:(b)=>(this)};
obj.a();
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
//!!!!!!!!!!!!!
function difFunc(){
  return function func(b){
    return this;
  }.bind(this);
}
difFunc()();
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}


function func(){return (b)=>(this);}
func()();
// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}

const person = {
  firstName: 'bob',
  greet: function reallyGreet() {
      return `Hi, I'm ${this.firstName}`;
    }.bind(this)
  };
person.greet();
// "Hi, I'm undefined"



const difPerson = {
  firstName: 'bob',
  greet: function() {
    return function reallyGreet() {
      return `Hi, I'm ${this.firstName}`;
    }.bind(this);
  }
};
difPerson.greet()();
// "Hi, I'm bob"




// Final question - Write an IIFE that takes in two names, flips a 'coin' three times, and immediately returns the name that won the most games, along with the number of times that player won.

// ((name1,name2)=>{
//   let count = 0;
//   for (let i=0; i<3 ; i++) {
//     let chance = Math.floor(Math.random()*2);
//     if (chance===0){
//       count++;
//     }
//   }
//   if (count >=2){
//     console.log(`${name1} won ${count} times.`);
//   } else {
//     console.log(`${name2} won ${3-count} times.`);
//   }
// })('Andrew','Rob');
//
//
// function square(num) { return num*num;}
//
//
// console.log(square(5));
//
// console.log(((num)=>{return num*num;})(5));

// function fibonacci(n){
//   if (n ==0 || n==1){
//     return n;
//   } else {
//     return fibonacci(n-1) + fibonacci(n-2);
//   }
// }
//
// console.log(fibonacci(37));
//
// let answers = {};
// function fibmemo(n){
//   if (answers.hasOwnProperty(n)) {
//     return answers[n];
//   }
//   console.log("fib for", n);
//   if (n ==0 || n==1){
//     return n;
//   } else {
//     let answer =  fibmemo(n-1) + fibmemo(n-2);
//     answers[n] = answer;
//     return answer;
//   }
//
// }
// console.log(fibmemo(37));
