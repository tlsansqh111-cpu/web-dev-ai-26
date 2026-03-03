// 객체 : 예시) 사람 { 특징 = 변수 (이름, 나이, 사는 곳 등등), 행동 = 함수 / 기능 ( 외출, 식사, 치장 등등) }
// 문제점 : 각기 다른 개체를 표현하기 어려움, 변수 사이의 관계가 보이지 않음
const name = "아무개";
const age = "20";
const adress = "서울";

// 배열은 변수 사이의 관계가 보이지만 각각의 값의 의미가 보이지 않음
const personArr = ["아무개", "20", "서울"];

// 객체 작성 방법 대괄호[]는 배열이지만 {}는 객체를 표현함
const person = {
  name: "아무개",
  age: "20",
  adress: "서울",

  // 객체 내의 함수는 굳이 function을 쓰지 않아도 됨
  greet() {
    console.log(this); // 포함되어 있는 객체를 뜻함
    console.log(`안녕하세요! ${this.name}입니다!`); // this.변수 이름으로 활용 가능
  },
};
console.log(person); // 객체 전체 불러오기
console.log(person.name); // 객체내의 특정 변수 불러오기
person.greet(); // 객체내의 특정 함수 불러오기

// 객체 생성과 속성 / 함수 추가
const person1 = {};
person1.name = "김철수";
person1.name = "김영희";
person1["age"] = 9; // 객체의 속성 추가
// 함수 추가
person1.greet = function () {
  console.log(`안녕하세요 ${this.name}, ${this.age}살 입니다`);
};
console.log(person1); // 함수 수정도 가능
person1.greet();

// 객체를 만드는 두번째 방법 / 거의 안씀
const person2 = new Object();
person2.name = "김철수";
person2.age = 9;
person2.greet = function () {
  console.log(`안녕하세요 ${this.name}, ${this.age}살 입니다`);
};
console.log(person2); // 함수 수정도 가능
person2.greet();

// this는 익명 함수에선 보이지만 화살표 함수에선 보이지 않음
const person3 = {
  name: "스폰지밥",
  greet: function () {
    console.log(`익명 함수 : ${this.name}`);
  },
};
const person4 = {
  name: "뚱이",
  greet: () => {
    // 화살표 함수 내에서의 this는 전역 개체인 window를 가리킴, 그렇기에 사용하지 않는 것을 추천
    // console.log(this.alert("안녕하세요"));
    console.log(`화살표 함수: ${this.name}`);
  },
};
person3.greet();
person4.greet();

// 생성자 함수, 클래스 / 대문자로 시작
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`안녕하세요 ${this.name}, ${this.age}살 입니다`);
  };
}
const p1 = new Person("땅콩피자", 22);
p1.greet();
const p2 = new Person("코코로", 22);
p2.greet();
const p3 = new Person("짭", 22);
p3.greet();

// 함수 형식보단 클래스 형식을 더 사용
class Person2 {
  // 생성자를 의미하는 함수 / 객체 생성시 바로 호출
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`안녕하세요 ${this.name}, ${this.age}살 입니다`);
  }
}
const p4 = new Person2("레턴", 17);
p4.greet();