if (true) {
  console.log("この行は実行されます")
}

if (true)
  console.log("この行は実効されます短縮系")

const x = 42;
if (x > 10) {
  console.log("xは10より大きな値です");
}

const version = "ES6";
if (version === "ES5") {
  console.log("ECMAScript 5");
} else if (version === "ES6") {
  console.log("ECMAScript 2015");
} else if (version === "ES7") {
  console.log("ECMAScript 2016");
}

const num = 1;
if (num > 10) {
  console.log(`numは10より大きいです：　${num}`);
} else {
  console.log(`numは10以下です： ${num}`);
}

const year = new Date().getFullYear();
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year}年はうるう年です`);
    } else {
      console.log(`${year}年はうるう年ではない`);
    }　
  }　else {
    console.log(`${year}年はうるう年です`);
  }
}　else {
  console.log(`${year}年はうるう年ではないですよ`);
}

const version = "ES9";
switch (version) {
  case "ES5":
    console.log("ECMAScript 5");
    break;
  case "ES6":
    console.log("ECMAScript 2015");
    break;
  case "ES7":
    console.log("ECMAScript 2016");
    break;
  default:
    console.log("知らないバージョン")
    break;
}