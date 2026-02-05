/*
가람 {
     // 트징들! => 변수
     이름,
     나이,
     사는곳
     
     // 행동들! => 함수 (기능)
     일어난다
     밥먹는다
     씻는다
     옷입는다
     나간다
}
*/
// 변수끼리 서로 관련이 있다는 게 보이지 x
const name = "김현우";
const age = 10;
const addr = "서울";

// 배열은 서로 관련이 있다는 게 O, 각각의 값이 뭘 의미하는지 x
const personArr  = ["김현우", 10, "서울"]

// 객체 (변수 - 키: 값)
const person = {
     name: "김현우",
     age: 10,
     addr: "서울",
     // 함수
     hello() {
          // this : 본인 자체
          console.log(`안녕하세요, ${this.name}입니다.`);
     },
};
console.log(person);
console.log(person.name);
person.hello();

// 객체 생성과 속성/함수 추가
const person1 = {};
person1.name = "고은정";
person1.name = "최서윤";
person1["age"] = 9;
person1.hello = function () {
     console.log(`나는 ${this.name}이고, 나이는 ${this.age}살이야`);
};
console.log(person1);
person1.hello();

const person2 = new Object(); //거의 안 씀! {}랑 동일
person2.name = "고은정";
person2.age = "7";

person2.hello();

// this
const person3 = {
     name: "송슬비",
     hello: function () {
          console.log(`익명함수 : ${this}`);
     },
};
const person4 = {
     name: "황지민",
     hello: () => {
          // 화살표 함수 내에서 this -> 전역 객체인 Window
          //console.log(this.alert("안녕하세요!"));
          console.log(this);
          console.log(`화살표 함수 : ${this.name}`);
     },
};
person3.hello();
person4.hello();

// 생성자 함수, 클래스
function person (name,age) {
     this.name = name;
     this.age = age;
     this.hello = function () {
          console.log(`안녕? ${this.name}이야, 나이는 ${this.age}살이야`);
     };
}
const p1 = new person("신원준",5);
p1.hello();
const p2= new person("홍승아",3);
p2.hello();

class person2 {
     constructor() {

     }
}