// 변수 선언 (요청하신 형식 활용)
const form = document.querySelector("#reg");
const idCheck = document.querySelector("#idword");
const pw = document.querySelector("#pwword");
const repw = document.querySelector("#repw");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const submitBtn = document.querySelector("#submitBtn");
const cancelBtn = document.querySelector("#passwordbtn");

// 이벤트가 입력하는 순간 - 6개, 버튼 클릭 -2개
const inputCheck = (input, regExp, inputCheck, message) => {
idword.addEventListener("input", () => {
    const regExp = /^[a-zA-z][a-zA-Z0-9]{3,11}$/;
    if (regExp.test(idword.value)) {
        idCheck.textContent = "OK!";
        idCheck.style.color = "#0063b2";
    } else if (idword.value === "") {
        "영문자로 시작하고 영문자와 숫자 조합으로 4~12자 이내";
        idCheck.style.color = "#707070";
    } else {
        idCheck.textContent =
            "영문자로 시작하고 영문자와 숫자 조합으로 4~12자 이내";
        idCheck.style.color = "red";
    }
});
}
pw.addEventListener("input", () => {
    // 영문자, 숫자, 특수문자 조합으로 8~15자 이내
    const regExp = /^[!-~][8,15]$/;
});
repw.addEventListener("input", () => {
    
});
username.addEventListener("input", () => {
    // 한글 2자 이상
    const regExp = /^[가-힣]{2,}$/;
});
email.addEventListener("input", () => {
    // 이메일 형식 : admib@google.com
    // \. \없으면 .을 인지 못함
    const regExp = /^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]+$/;
});
phone.addEventListener("input", () => {
    // 전화번호 형식 : 010-0000-0000
    // {4} 몇자리 숫자 제한 수치 값
    const regExp = /^010-[0-9]{4}-[0-9]{4}$/;
});
submitBtn.addEventListener("click", () => {});
cancelBtn.addEventListener("click", () => {
    reloding
});
