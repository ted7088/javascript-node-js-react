function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    //executor

    setTimeout(() => {
      const num = 10;
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }

      reject("왜 실패했는지 이유...");
    }, 2000);
  });

  return promise;
}

//then 메서드
//->그 후에

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

add10(0);
