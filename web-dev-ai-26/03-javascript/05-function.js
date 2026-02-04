
{
console.log("안녕하세요!");
}
sayHello(); // 함수 호출
sayHello();

// 2. 매개변수 (parameter) 0, 리턴값 x
function greet(name = "게스트") {
    console.log(`${name}님, 안녕하세요!`);
}
greet("김도연");
greet(김서연);
greet();

{



  return 1049;
}
console.log(getNumber())

// 4. 매개변수 o, 리턴값 o
// 파라미터는 입력, 리턴은 출력
function add(a, b) {
    return a + b;
}
add(10,20);
console.log(add(10,20));

// 변수의 유호범위(Scope)
const num1 = 100; // 전역 변수
function sample1() {
    const num1 = 200; // 전역 변수
    // 함수 밖에서 안쪽 변수는 접근 불가
console.log("sample1 내부 : " + num1); //200
}
sample1();
console.log("sample1 외부 : " + num1); //100

// 선언적 vs 익명 vs 화살표 함수
// 선언적 함수(Function Declaration)
// 호이스팅
console.log("선언적 함수 :  ", multiply(3, 4));
function multiply(a,b) {
    return a * b;
}

// 익명 함수(Function Expression)
// 함수 이름이 없음, 변수에 할당
const subtract = function (a,b) {
    return a - b;
};
console.log("익명 함수 :", suntract(5,8));

// 화살표 함수(Arrow Function)
// function 대신 => 사용
const divide = (a, b) => {
    return a / b;
};
console.log("화살표 함수 :", divide(12, 3));

// 콜백 함수
// 다른 함수의 파라미터로 전달되는 함수
function callFunc(callback) {
    console.log("함수 호출 전!")
    console.log("함수 호출 후!")
}
function call() {
    console.log("안녕하세요~ 콜백 함수 호출!")
}
callFunc(call);