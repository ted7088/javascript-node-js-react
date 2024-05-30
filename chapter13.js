//1. 콜백함수

function main(value) {
  console.log(value);
}

function sub() {
  console.log("i am sub");
}

main(sub);

//2.콜백함수의 활용 및 정리

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
