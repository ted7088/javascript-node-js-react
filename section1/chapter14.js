//스코프
//->전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
//->전역 스코프:전체 영역에서 접근 가능
//->지역 스코프 : 특정 영역 접근 가능

let a = 1; //전역 스코프

function funcA() {
  let b = 2; //지역 스코프
  console.log(a);
}

funcA();
console.log(b);

if (true) {
  let c = 1;
}

console.log(c);
