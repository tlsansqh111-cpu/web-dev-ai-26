const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const clicker = document.querySelector('#click');
const reset = document.querySelector('#reset');
const countText = document.querySelector('#count');
const win = document.querySelector('#win');

// 이미지 배열
const images = [
    "./aseet/spy1.jpg",
    "./aseet/spy2.jpg",
    "./aseet/spy3.jpg"
];

let clickCount = 0;

// 클릭 이벤트
clicker.addEventListener('click', () => {
    clickCount++;
    countText.innerText = clickCount;
    
    // 랜덤 중복x 규칙
    const mg1 = Math.floor(Math.random() * images.length);
    const mg2 = Math.floor(Math.random() * images.length);
    const mg3 = Math.floor(Math.random() * images.length);

    // 변경 이미지
    img1.src = images[mg1]; // 로이드
    img2.src = images[mg2]; // 아냐
    img3.src = images[mg3]; // 요르

    

    //  이미지1,2랑 같고 그리고 이미지2와3이 같을때 승리
    if (mg1 === mg2 && mg2 === mg3) {
        win.innerText = "축하합니다! 다시 시작하려면 재시작 버튼을 눌러주세요!";
        win.style.display = "block"; 
        clicker.setAttribute("disabled", "disabled");
        
    }
});

//  리셋 
reset.addEventListener('click', () => {
    clickCount = 0;
    countText.innerText = clickCount;
    win.style.display = "none"; 
    location.reload()
    
});
