printHello
ƒ printHello() {
  console.log("Hello there!");
}
printHello()
VM98:3 Hello there!
undefined
function show() {
    return ”Hi!”;
    };
VM159:2 Uncaught SyntaxError: Invalid or unexpected token
function show() {
    return ”Hi!”;
    }
VM168:2 Uncaught SyntaxError: Invalid or unexpected token
function show() {
    return ”Hi!”
    };
VM181:2 Uncaught SyntaxError: Invalid or unexpected token
function addition(a, b) {
  return a + b;
}
undefined
addition(1,9)
10
console.log(addition(4, 5));
VM226:1 9
undefined
// Functions can call other functions
function doubleAddition(c, d) {
  var total = addition(c, d) * 2;
  return total;
}
undefined
doubleAddition(5, 5)
20
doubleAddition(65, 34);
198

printHello = () => "Hello there!";


printHello = () => "Hello there!";


() => "Hello there!"
printHello();
'Hello there!'
addition = (a+b) => a+b;
VM490:1 Uncaught SyntaxError: Invalid destructuring assignment target
addition = (a, b) => a + b;
(a, b) => a + b
addition(4,5)
9
doubleAddition = (c, d) => addition(c, d) * 2;
(c, d) => addition(c, d) * 2
doubleAddition(2, 2);
8
doubleAddition(33, 25)
116
let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
undefined
function listLoop(userList) {
   for (var i = 0; i < userList.length; i++) {
     console.log(userList[i]);
   }
}
undefined
listLoop(friends);
VM698:3 Sarah
VM698:3 Greg
VM698:3 Cindy
VM698:3 Jeff
undefined
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
undefined
function listLoopTwo(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}
undefined
listLoopTwo(vegetables);
VM1097:3 Carrots
VM1097:3 Peas
VM1097:3 Lettuce
VM1097:3 Tomatoes
undefined
for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}
VM1138:2 I love Carrots
VM1138:2 I love Peas
VM1138:2 I love Lettuce
VM1138:2 I love Tomatoes
undefined
for (var i = 0; i < 5; i++) {
   console.log("I am " + i);
}
VM1142:2 I am 0
VM1142:2 I am 1
VM1142:2 I am 2
VM1142:2 I am 3
VM1142:2 I am 4
undefined