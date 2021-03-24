//asyncawait
function one() {
return new Promise(resolve => {
setTimeout(() => {
resolve('function 1');
}, 200);
  });
}

function two() {
return new Promise(resolve => {
setTimeout(() => {
resolve('function 2');
    }, 300);
  });
}

function three() {
return new Promise(resolve => {
setTimeout(() => {
resolve('function 3');
    }, 500);
  });
}

async function msg() {
  const a = await one();
  const b = await two();
  const c = await three();

  console.log(`${ a } ${ b } ${ c }`);
}

msg();

//calling fun
var foo= function(callAgain){
console.log( 'good' );
  if (callAgain === true) foo(false);
  };

  foo(true);
  
  var bar = foo;
  foo = function(){
 console.log('Bad.')
  };
  
  bar(true);

  //anonymous

function greet(name, myFunction) 
{
console.log('Anonymous function');
 myFunction(name);
}
function sayName(name) 
{
console.log('Hello' + ' ' + name);
}
setTimeout(greet, 2000, 'anu', sayName)

//callback
function serverRequest(query, callback)
{
setTimeout(function()
  {
var response = query + "full!";
callback(response);
  },1000);
}

function getResults(results){
console.log("to collect  the program: " + results);
}

serverRequest("then prepare it ", getResults);
//arrow
function scaryClown() {
return new Promise(resolve => {
setTimeout(() => {
 resolve('arrow function');
    }, 2000);
  });
}

async function msg() {
const msg = await scaryClown();
console.log('Message:', msg);
}

msg(); 