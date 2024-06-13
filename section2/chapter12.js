function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;

    callback(sum);
  });
}

add(1, 2, (value) => {
  console.log(value);
});

//음식을 주문하는 상황
function orderFood() {
  setTimeout(() => {
    const food = "떡볶이";
  }, 3000);
}

orderFood((food) => {
  console.log(food);
});
