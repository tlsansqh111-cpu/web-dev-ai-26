const idInput = document.querySelector("#idword");
const pwInput = document.querySelector("#pwword");
const repwInput = document.querySelector("#repw");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const signupBtn = document.querySelector("#submitBtn");

const idMsg = document.querySelector("#ida");
const pwMsg = document.querySelector("#pw");
const repwMsg = document.querySelector("#repassword");
const nameMsg = document.querySelector("#name + div"); 
const emailMsg = document.querySelector("#email + div");
const phoneMsg = document.querySelector("#phone + div");

// 로그인/프로필 관련
const loginForm = document.querySelector("#login-form");
const loginPage = document.querySelector(".page1");
const profilePage = document.querySelector("#page2-container");
const loginIdInput = document.querySelector('#username');
const loginPwInput = document.querySelector('#password');

const goToSignUpBtn = document.querySelector('#click'); 
const logoutBtn = document.querySelector('#logoutclick');
const drawBtn = document.querySelector('#drawclick');

const welcomeMsg = document.querySelector('.welcome');
const emailDisplay = document.querySelector('#display-email');
const phoneDisplay = document.querySelector('#display-phone');

// 회원가입 상태 관리
let checks = { idword: false, pwword: false, repw: false, name: false, email: false, phone: false };

// ==========================================
// 2. 회원가입 로직 (practice10)
// ==========================================

const inputCheck = (input, reg, msgElement, message) => {
    if(!input || !msgElement) return; // 요소가 없으면 실행 안함

    input.addEventListener("input", () => {
        const value = input.value;
        const id = input.getAttribute("id");
        let isValid = reg ? reg.test(value) : (value !== "" && value === pwInput.value);

        msgElement.textContent = isValid ? "OK!" : message;
        msgElement.style.color = isValid ? "#0063b2" : (value === "" ? "#707070" : "red");
        checks[id] = isValid;

        // 비밀번호 수정 시 재확인 동기화
        if (id === "pwword" && repwInput && repwInput.value !== "") {
            const isMatch = repwInput.value === value;
            repwMsg.textContent = isMatch ? "OK!" : "비밀번호 불일치";
            repwMsg.style.color = isMatch ? "#0063b2" : "red";
            checks["repw"] = isMatch;
        }

        // 버튼 활성화 상태 업데이트
        if (signupBtn) {
            const allPassed = Object.values(checks).every(v => v === true);
            signupBtn.disabled = !allPassed;
            signupBtn.style.opacity = allPassed ? "1" : "0.5";
        }
    });
};

// 검사 실행 (요소가 존재할 때만)
if (idInput) {
    inputCheck(idInput, /^[a-zA-Z][a-zA-Z0-9]{3,11}$/, idMsg, "영문 시작, 4~12자");
    inputCheck(pwInput, /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/, pwMsg, "영/수/특 조합 8~15자");
    inputCheck(repwInput, null, repwMsg, "비밀번호 재입력");
    inputCheck(nameInput, /^[가-힣]{2,}$/, nameMsg, "한글 2자 이상");
    inputCheck(emailInput, /^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]+$/, emailMsg, "이메일 형식");
    inputCheck(phoneInput, /^010-[0-9]{4}-[0-9]{4}$/, phoneMsg, "010-0000-0000");

    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const userObj = {
            id: idInput.value,
            password: pwInput.value,
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };
        localStorage.setItem("user", JSON.stringify(userObj));
        alert("가입 성공! 로그인 페이지로 이동합니다.");
        location.href = "./practice11-login.html";
    });
}

// ==========================================
// 3. 로그인 및 페이지 이동 로직 (practice11)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 로그인 처리
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const rawData = localStorage.getItem("user");
            if (!rawData || rawData === "[object Object]") {
                alert("가입 정보가 없습니다.");
                return;
            }
            const storedUser = JSON.parse(rawData);

            if (loginIdInput.value === storedUser.id && loginPwInput.value === storedUser.password) {
                alert(`${storedUser.name}님 환영합니다!`);
                welcomeMsg.innerText = `${storedUser.name}님 환영합니다!`;
                emailDisplay.innerText = storedUser.email;
                phoneDisplay.innerText = storedUser.phone;
                loginPage.classList.add('hidden');
                profilePage.classList.remove('hidden');
            } else {
                alert("정보가 일치하지 않습니다.");
            }
        });
    }

    // 가입 페이지로 이동 버튼
    if (goToSignUpBtn) {
        goToSignUpBtn.addEventListener("click", (e) => {
            e.preventDefault();
            location.href = "./practice10-register.html";
        });
    }

    // 로그아웃
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            alert("로그아웃 되었습니다.");
            location.reload();
        });
    }

    // 회원 탈퇴
    if (drawBtn) {
        drawBtn.addEventListener('click', () => {
            if (confirm("정말 탈퇴하시겠습니까?")) {
                localStorage.removeItem("user");
                location.reload();
            }
        });
    }
});