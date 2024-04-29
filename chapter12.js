function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);

varA();

let varB = function funcB() {
  console.log("funcB");
};

varB();

//화살표 함수
let VarC = () => {
  return 1;
};

console.log(varC());
