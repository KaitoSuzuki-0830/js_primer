let x = 0;
console.log(`ループ開始前のxの値：　${x}`);
while (x < 10) {
  console.log(x);
  x += 1;
}
console.log(`ループ終了後のxの値：　${x}`);

const x = 1000;
do {
  console.log(x);
} while (x < 10);

let total = 0;
for (let i = 0; i < 100; i++) {
  total += i + 1;
}
console.log(total);

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;

}
console.log(sum([1, 2, 3, 4, 5]));