function double(num) {
  return num * 2;
}

console.log(double(10));

function echo(x) {
  return x;
}

console.log(echo(1));
console.log(echo());

function argumentsToArray(x, y) {
  return [x, y];
}

console.log(argumentsToArray(1, 2));
console.log(argumentsToArray(1));

const max = Math.max(1, 5, 10, 20);
console.log(max);

function fn(...args) {
  console.log(args);
}
fn("a", "b", "c");

function fn(arg1, ...restArgs) {
  console.log(arg1);
  console.log(restArgs);
}
fn("a", "b", "c");

function printUserId(user) {
  console.log(user.id);
}
const user = {
  id: 42
}
printUserId(user);

function fn() {
  console.log("fnが呼び出されました")
}
const myFunc = fn;
myFunc();