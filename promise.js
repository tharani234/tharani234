function Async(value) 
{
return new Promise((resolve) => {
 {
    console.log("Resolving " + value);
resolve(value);
 }  
 Math.floor(Math.random());
    });
 }
function test() {
const promises = [];
for (let i = 0; i < 1000; ++i) 
       {
 promises.push(Async(i));
       }
       
Promise.all(promises)
 .then((results) => {
console.log("complete", results);
 })
.catch((e) => {
 });
}
  test();