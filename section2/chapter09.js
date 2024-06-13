//5가지 배열 변형 메서드
//1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링 하여 새로운 배열로 변환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "강대범", hobby: "테니스" },
  { name: "신지유", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby == "테니스") return true;
});

console.log(tennisPeople);

//2. map
//배열의 모든 요소를 순회 하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult);

let names = arr1.map((item) => item.name);

// console.log(names);

//3.sort
//배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort;

console.log(arr3);

//4.toSorted
//정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

//5.join
//배열의 모든 요소를 하나의 문자열로 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join;
