//Math 객체
console.log("최소값 :", Math.min(5, 2, 4, -1, -9));
console.log("최대값 :", Math.max(5, 2, 4, -1, -9));
console.log("절대값 :", Math.abs(-7.57));
console.log("반올림 :", Math.round(2.897));
console.log("내림 :", Math.floor(2.897));
console.log("올림 :", Math.ceil(2.897));
console.log("0~1 사이의 랜덤 :", Math.random());

// 1~10까지의 랜덤숫자

// 0<= Math.random() < 1
//*10을 하면
// 0<= Math.random() * 10 < 10
// + 1
// 1<= Math.random() * 10 + 1 < 11
// 근데 이러면 이제 소수가 나오니까 내림으로 없애줌
//
console.log(Math.ceil(Math.random() * 10));

// 5~ 15까지의 랜덤 숫자
console.log(Math.ceil(Math.random() * 10) + 5);

// Date 객체
const now = new Date ();
// 현재 날짜 및 시간
console.log(now);
console.log(`
    ${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`,
);

//
const date = new Date(2026, 7, 20, 18, 10, 0)
console.log(date);

//
const date2 = new Date("2026-08-20")
console.log(date2.toLocaleDateString("ko-KR",{weekday:"long" }));

//형식 지정
const date3 = new Date("2026-08-20T18:10:00")
console.log(date3.toLocaleDateString("en-CA"));

// String
const str = new string("Hello, JavaScript!");
console.log(str.length);

// 1000 = 1초
setTimeout(() => {
    console.log("3초 후 실행!");
}, 3000);

let sec = 0;
// 일정 시간마다 반복 실행
setInterval(() => {
    console.log(`{++sec}초!`);
}, 1000);

// JSON
const obj = {
    name: "김도연",
    age: 12,
};
// 객체 - > 문자열
const JsonStr = JSON.stringify(obj);
console.log(obj, typeof obj);
console.log(JsonStr, typeof JsonStr);
// 문자열 -> 객체
const jsonParse = JSON.parse(jeonStr);
console.log(jsonParse);

// BOM
console.log(location.href);
console.log(location.host);
console.log(location.pathname);
