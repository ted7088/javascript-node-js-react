const promise = new Promise((resolve, reject) => {
  //비동기 작업 실행하는 함수
  //executor

  setTimeout(() => {
    const num = 10;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num 숫자가 아닙니다.");
    }
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);

//then 메서드
//->그 후에

promise.then((value) => {
  console.log(value);
});
