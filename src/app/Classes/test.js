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


console.log('8. Find repeated character in string');

function solution(S = "sdfsdf") {
  let mySet = new Set();

  for (let i = 0; i < S.length; i++ )
  {
    if (mySet.has(S.charAt(i)))
    {
      return S.charAt(i)
    }
    else
    {
      mySet.add(S.charAt(i))
      // console.log('i = ', i, ', my set is', mySet);
    }
  }
}
console.log('repeated char is ', solution("codlituyy12345"));


console.log("9. If binary graph is zigzag");

let rootNode = {};
rootNode.left = new String('1');
// rootNode.right = new String('2');
// //
rootNode.left.right = new String('3');
// rootNode.right.right = new String('4');
rootNode.left.right.left = new String('5');
// rootNode.left.left.right = new String('6');



function isZigzag(node) {
  if (!node)
    return 'node is null';

  const leftNode = node.left;
  const rightNode = node.right;

  if (leftNode && rightNode)
  {
    console.log('have both left and right - not zigzag');
    return false;
  }

  if (!(leftNode || rightNode))
  {
    console.log('no left, no right - end of graph');
    return true;
  }

  if (leftNode) {
    if (leftNode.left) return false;
    console.log('go left');
    return isZigzag(leftNode);
  }

  if (rightNode) {
    if (rightNode.right) return false;
    console.log('go right');
    return isZigzag(rightNode);
  }
}

console.log(isZigzag(rootNode));

