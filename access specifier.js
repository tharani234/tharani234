// access specifier
class cofeeMachine
{
    #waterlimit=200;
    constructor(power)
    {
        this._power=power;
    }
    set waterAmount(value)
    {
     if(value<0)throw new Error('Negative water');
     if(value>this.#waterlimit)throw new Error('Too Much water');
     this.#waterlimit=value;
    }
    get waterAmount()
    {
    return this.#waterlimit;
    }
    get power(){
    return this._power;
    }
    let cofeemachine=new cofeemachine(200);
    alert('created Cofee Machine ${cofeeMachine.power}');
    cofeemachine.waterAmount=150;
    console.log('waterAmount is &{cofeeMachine.waterAmount}');
}
 
//try catch finally
let num = +prompt("Enter a positive integer number?", 35)

let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;
}

alert(result || "error occurred");

alert( `execution took ${diff}ms`);
    