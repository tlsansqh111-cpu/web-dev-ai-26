// 1. UI 요소 객체화 (중복 선택 제거)
const UI = {
    signup: {
        inputs: document.querySelectorAll("#idword, #pwword, #repw, #name, #email, #phone"),
        msgs: {
            idword: document.querySelector("#ida"),
            pwword: document.querySelector("#pw"),
            repw: document.querySelector("#repassword"),
            name: document.querySelector("#name + div"),
            email: document.querySelector("#email + div"),
            phone: document.querySelector("#phone + div")
        },
        btn: document.querySelector("#submitBtn")
    },
    login: {
        form: document.querySelector("#login-form"),
        id: document.querySelector("#username"),
        pw: document.querySelector("#password"),
        view: document.querySelector(".page1")
    },
    profile: {
        view: document.querySelector("#page2-container"),
        welcome: document.querySelector(".welcome"),
        email: document.querySelector("#display-email"),
        phone: document.querySelector("#display-phone")
    }
};

const REGEX = {
    idword: /^[a-zA-Z][a-zA-Z0-9]{3,11}$/,
    pwword: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/,
    name: /^[가-힣]{2,}$/,
    email: /^[a-zA-Z0-9_.]+@[a-zA-Z]+\.[a-zA-Z]+$/,
    phone: /^010-[0-9]{4}-[0-9]{4}$/
};

let checks = {};

// 회원가입

if (UI.signup.btn) {
    UI.signup.inputs.forEach(input => {
        const id = input.id;
        checks[id] = false;

        input.addEventListener("input", () => {
            const isRepw = id === "repw";
            const isValid = isRepw 
                ? input.value !== "" && input.value === document.querySelector("#pwword").value
                : REGEX[id].test(input.value);

            // 메시지/색상 일괄 처리
            const msg = UI.signup.msgs[id];
            msg.textContent = isValid ? "OK!" : (input.value === "" ? "" : "형식 오류");
            msg.style.color = isValid ? "#0063b2" : "red";
            checks[id] = isValid;

            // 비밀번호 변경 시 재확인 칸 강제 업데이트
            if (id === "pwword") UI.signup.inputs[2].dispatchEvent(new Event("input"));

            // 버튼 활성화 (모든 값이 true인지 검사)
            const allOk = Object.values(checks).every(v => v);
            UI.signup.btn.disabled = !allOk;
            UI.signup.btn.style.opacity = allOk ? "1" : "0.5";
        });
    });

    UI.signup.btn.onclick = (e) => {
        e.preventDefault();
        const data = {};
        UI.signup.inputs.forEach(i => data[i.id === 'idword' ? 'id' : (i.id === 'pwword' ? 'password' : i.id)] = i.value);
        localStorage.setItem("user", JSON.stringify(data));
        alert("가입 성공!");
        location.href = "./practice11-login.html";
    };
}

// ==========================================
// 3. 로그인 및 버튼 액션 (이벤트 위임/통합)
// ==========================================
document.addEventListener("click", (e) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (e.target.id === "login-btn") {
        e.preventDefault();
        if (UI.login.id.value === user.id && UI.login.pw.value === user.password) {
            UI.profile.welcome.innerText = `${user.name}님 환영합니다!`;
            UI.profile.email.innerText = user.email;
            UI.profile.phone.innerText = user.phone;
            UI.login.view.classList.add("hidden");
            UI.profile.view.classList.remove("hidden");
        } else alert("정보 불일치");
    }

    if (e.target.id === "click") location.href = "./practice10-register.html";
    if (e.target.id === "logoutclick") location.reload();
    if (e.target.id === "drawclick" && confirm("탈퇴하시겠습니까?")) {
        localStorage.removeItem("user");
        location.reload();
    }
});