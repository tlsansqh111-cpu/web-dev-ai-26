const quotes = [
  {
    en: "God doesn't require us to succeed: he only requires that you try.",
    ko: "신은 우리에게 성공을 요구하지 않는다. 우리가 노력할 것을 요구할 뿐이다.",
  },
  {
    en: "Hold faithfulness and sincerity as first principles.",
    ko: "충심과 성실을 첫 번째 원칙으로 삼아라.",
  },
  {
    en: "Only actions give life strength; only moderation gives it a charm.",
    ko: "행동만이 삶에 힘을 주고 절제만이 삶에 매력을 준다.",
  },
  {
    en: "No one has ever made a difference by being like everyone else.",
    ko: "그저 남들과 똑같이 살면서 차이를 만들어낸 사람은 없다.",
  },
];


function updateClock() {
    const now = new Date();
    
    // 날짜 표시
    const dayList = ['일', '월', '화', '수', '목', '금', '토'];
    const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} (${dayList[now.getDay()]})`;
    document.getElementById('date-display').innerText = dateStr;

    // 시계 표시
    document.getElementById('clock-display').innerText = now.toTimeString().split(' ')[0];

    // 남은 시간 계산 (올해 말까지)
    const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59);
    const diff = endOfYear - now;
    
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    
    document.getElementById('remain-display').innerText = `올해 남은 시간: ${d}일 ${h}시간 ${m}분 ${s}초`;
}

// 3. 배경색 및 문구 변경 함수 (3초 주기)
function rotateContent() {
    const container = document.getElementById('container');
    
    // 랜덤 파스텔톤 배경색 생성
    const r = Math.floor(Math.random() * 56 + 200); 
    const g = Math.floor(Math.random() * 56 + 200);
    const b = Math.floor(Math.random() * 56 + 200);
    container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // 랜덤 문구 선택
    const randomIdx = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-en').innerText = quotes[randomIdx].en;
    document.getElementById('quote-ko').innerText = quotes[randomIdx].ko;
}

// 4. 초기 실행 및 반복 설정
updateClock();      // 실행 즉시 시간 표시
rotateContent();    // 실행 즉시 첫 문구 표시

setInterval(updateClock, 1000);   // 1초마다 시계 갱신
setInterval(rotateContent, 3000); // 3초마다 배경/문구 갱신
