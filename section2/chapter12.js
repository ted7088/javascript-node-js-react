function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b; //3

    callback(sum);
  });
}

add(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황 가정
function orderFood(callback) {
  setTimeout(() => {
    const food = "짜장면";
    callback(food); // 콜백 함수로 food 전달
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood); //식은 음식 전달
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezeFood = `냉동된 ${food}`;
    callback(freezeFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food); // "짜장" 출력

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood); // "식은 짜장" 출력

    freezeFood(cooldownedFood, (freezeFood) => {
      console.log(freezeFood);
    });
  });
});
