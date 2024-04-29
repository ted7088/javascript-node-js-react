//1.if 조건문
let num = 4;

if (num >= 10) {
  console.log("num은 10 이상입니다");
} else if (num >= 5) {
  console.log("num 5이상입니다.");
} else {
  console.log("거짓입니다.");
}

//2. switch 문
//if 문과 기능 자체는 동일

let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("야옹이 ");
    break;
  }
  case "dog": {
    confirm.log("개");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }

  default: {
    console.log("그런 동물은 전 모릅니다.");
  }
}
