function f(x) {
  x *= 2;
  return function (y) {
    y *= x;
    return function (z) {
      return z * y;
    }
  }
}
let g = f(3)(4)(5);

console.log("1. G is " + g);

let event = {
  name: "Hot Dog and Burger Sunday",
  financials: {
    baseCost:"$19.99",
    discountAvailable: false,
    maxCount: "$29.99"
  },
  subscribers: [
    //lots of subscribers here
  ]
};
let eventPrice;
const assignEvent = ({ financials: {baseCost: price} }) => eventPrice = price;
console.log("2. assignEvent is " + assignEvent(event));

this.val = true;
window.val = false;
let val = 'hello';



var function_logger = function() {
  let val = 'hello';
  return {
    val: "Vova",
    log: function () {
      console.log("3. function_logger is " + this.val);
    }
  }
};


var fat_arrow_logger = function() {
  let val = 'hello';
  return {
    val: "Vova",
    log: () => {
      console.log("4. fat_arrow_logger is " + this.val);
    }
  }
};

var create_logger = function() {
  let val = 'hello';
  return {
    val: "Vova",
    log: new Function('console.log("5. create_logger is " + this.val);'),
  }
};

function_logger().log.bind(this)();
fat_arrow_logger().log.bind("Hello")();
create_logger().log();

// function_logger().log.bind(this)();
// fat_arrow_logger().log.bind(this)();


const a = {};
const b = { name: 'b' };
const c = { name: 'c' };
a [ b ] = 200 ;
a [ c ] = 400 ;
console.log ("6. a[b] = ", a [ b ]);
console.log ("6. a = ", a );
console.log ("6. b = ", b );
console.log ("6. c = ", c );


let code = "return a+b";
let sum = new Function("a", "b", code);
console.log("7. a+b = ", sum(1,2));




// function solution(A, B) {
//   return B.toString().indexOf(A);
// }

// console.log(solution(999999, 8899999999));


console.log("8. Solution");
function solution(S = "sdfsdf") {
  let mySet = new Set();

  console.log('my set is', mySet);
  for (let i; i < S.length; i++ ) {
    if (mySet.has(S.charAt(i)))
    {
      console.log('mySet.has(S.charAt(i))');
      return S.charAt(i)
    }
    else
    {
      console.log( "mySet.add()");
      mySet.add(S.charAt(i))
    }
  }
}
console.log(solution("codility"));
