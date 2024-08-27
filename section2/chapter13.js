function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업
    //executor

    setTimeout(() => {
      if (typeof num == "number") {
        resolve(num + 10);
      } else {
        reject("num은 숫자 아님");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);

p.then((result) => {
  console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });
});
