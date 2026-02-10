// HTML 구조가 완전히 로드된 뒤 실행
window.addEventListener("DOMContentLoaded", () => {});

// h1 가져오기
const h1= document.querySelector('h1')
console.log(h1);

// 클릭 이벤트
const click = document.querySelector("#click");
click.addEventListener("click", () => {
    //클릭 이벤트가 일어날 시 실행하고자 하는 코드 작성
    alert("클릭 이벤트 발생!");
    click.style.backgroundColor = "hotpink"
});

const double = document.querySelector("#double");
double.addEventListener

const right = document.querySelector("#right");
right.addEventListener("contextmenu", (event) => {
    //console.log(event);
    event.preventDefault(); // 이벤트 제거
    alert("우클릭 발생!");
});

const hover = document.querySelector("#hover");
hover.addEventListener("mouseenter", () => {
    hover.textContent = "Mouse Enter!";
    console.log("mouseenter");
    hover.addEventListener("mouseenter!");
});
hover.addEventListener("mouseleave", () => {
    console.log("mouseleave!");
    // 배경색상은 navy, 텍스트는 Mouse Leave! 변경
    hover.style.backgroundColor = "navy";
    hover.textContent = "Mouse Leave!";
});

const form = document.querySelector("#form");
const input = document.querySelector("#input")
const inputResult = document.querySelector("#inputResult")
form.addEventListener("submit", (e) => {
    // input 입력이 비어있을시만 방지, 입력했다면 제출
    if (Input.value === "") e.preventDefault();
    else alert("제출 완료");
});
input.addEventListener("input", () => {
    console.log(input.value);
})
// select에 있는 option을 선택할 떄마다 일어나는 이벤트 : change
// 해당하는 이벤트가 일어날 시 selectResult에 값이 나타나도록
// e.target.valueS
const select = document.querySelector("#select");
select.addEventListener("change", (e) => {
    selectResult.textContent = e.target.value;
});
// 3. 키보드 이벤트
const key = document.querySelector("#key");
const keyResult = document.querySelector("#keyResult");
// keydown - keypress - keyup
key.addEventListener("keypress", () => {
    keyResult.textContent = key.value;
    keyResult.textContent = e,key;
});
const move = document.querySelector(".moveBox");

let y = 0;
let x = 0;
document.addEventListener("keyup", (e) => {
    if(e.key === "ArrowUp") {
        y -= 50;
    } else if (e.key === "ArrowDown") {
        y += 50;       
    } else if (e.key === "Arrowleft") {
        y -= 50;      
    } else if (e.key === "ArrowRight") {
        y += 50;
    }  
    
    move.style.top = `${y}px`);
    move.style.top = `${x}px`);
}
    

