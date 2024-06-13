//1.date 객체를 생성하는 방법
let date1 = new Date(); //생성자
console.log(date1);

//2. 타임 스탬프
//특정시간이 몇 ms 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);

//3.시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

//4.시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

//5.시간을 여러 포멧으로 출력하기
console.log(date1.toDateString());
