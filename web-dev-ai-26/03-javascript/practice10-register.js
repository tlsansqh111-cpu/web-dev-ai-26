// 요소 선택
const signup = document.querySelector("#submitBtn");
const cancel = document.querySelector("#passwordbtn");

// 각 입력 필드
const inputId = document.querySelector("#idword");
const inputPw = document.querySelector("#pwword");
const inputRepw = document.querySelector("#repw");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputPhone = document.querySelector("#phone");

// 각 메시지 출력 영역
const msgId = document.querySelector("#idMsg");
const msgPw = document.querySelector("#pwMsg");
const msgRepw = document.querySelector("#repwMsg");
const msgName = document.querySelector("#nameMsg");
const msgEmail = document.querySelector("#emailMsg");
const msgPhone = document.querySelector("#phoneMsg");

// 체크 상태 변수 (6개)
let checks = {
  idword: false,
  pwword: false,
  repw: false,
  name: false,
  email: false,
  phone: false
};

const inputCheck = (input, reg, msgElement, message) => {
  input.addEventListener("input", () => {
    const value = input.value;
    const id = input.getAttribute("id");
    let isValid = false;

    if (reg !== null) {
      isValid = reg.test(value);
    } else {
      // 비밀번호 확인용 (null일 때)
      isValid = value !== "" && value === inputPw.value;
    }

    // 결과 반영
    if (isValid) {
      msgElement.textContent = "OK!";
      msgElement.style.color = "#0063b2";
      checks[id] = true;
    } else if (value === "") {
      msgElement.textContent = message;
      msgElement.style.color = "#707070";
      checks[id] = false;
    } else {
      msgElement.textContent = message;
      msgElement.style.color = "red";
      checks[id] = false;
    }

    // 비밀번호 원본이 바뀔 때 재확인 칸도 동기화
    if (id === "pwword") {
        if(inputRepw.value !== "") {
            const isMatch = inputRepw.value === value;
            msgRepw.textContent = isMatch ? "OK!" : "위 비밀번호와 동일하게";
            msgRepw.style.color = isMatch ? "#0063b2" : "red";
            checks["repw"] = isMatch;
        }
    }

    // 모든 체크가 true인지 확인 후 버튼 활성화
    const allPassed = Object.values(checks).every(v => v === true);
    signup.disabled = !allPassed;
    signup.style.opacity = allPassed ? "1" : "0.5";
  });
};

// 함수 실행 (HTML의 ID와 정규식 매칭)
inputCheck(inputId, /^[a-zA-Z][a-zA-Z0-9]{3,11}$/, msgId, "영문자로 시작, 영숫자 조합 4~12자");
inputCheck(inputPw, /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/, msgPw, "영문/숫자/특수문자 조합 8~15자");
inputCheck(inputRepw, null, msgRepw, "위 비밀번호와 동일하게");
inputCheck(inputName, /^[가-힣]{2,}$/, msgName, "한글 2자 이상");
inputCheck(inputEmail, /^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]+$/, msgEmail, "이메일 형식");
inputCheck(inputPhone, /^010-[0-9]{4}-[0-9]{4}$/, msgPhone, "전화번호 형식(010-0000-0000)");

// 클릭 이벤트
signup.addEventListener("click", (e) => {
  e.preventDefault();
  alert("회원가입 완료!");
});

cancel.addEventListener("click", () => {
  if(confirm("초기화 하시겠습니까?")) {
      location.reload();
  }
});