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


 function clock() {
     const now = new Date();
    // 숫자를 두 자리로 만들 때 사용
    const minute = String(now.getMinutes()).padStart(2, "0");

    // 요일 배열 제공 
    // 오늘 날짜 표시
    const weeks = ["일", "월", "화", "수", "목", "금", "토"];
    const week = weeks[now.getDay()];
    console.log(week)
    console.log(`
    ${now.getFullYear()}년 ${now.getMonth() + 1}월 ${now.getDate()}일`,
    );

    document.getElementById('date-display').innerText = week;

    // 현재 시간 표시
    document.getElementById('clock-display').innerText = now.toTimeString().split(' ')[0];

    // 올해 말 까지 남은 시간 (미정)
    document.getElementById('remain-display').innerText = `올해 남은 시간: ${d}일 ${h}시간 ${m}분 ${s}초`;

    //배경색 및 문구 3초 주기
    function rotateContent() {
    const container = document.getElementById('container');
    
    // 랜덤 파스텔톤 배경색 생성
    container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // 랜덤 문구 선택
    const randomIdx = Math.floor(Math.random() * quotes.length);
    document.getElementById('wise-en').innerText = quotes[randomIdx].en;
    document.getElementById('wise-ko').innerText = quotes[randomIdx].ko;
}
 }

updateClock();      // 실행 즉시 시간 표시
rotateContent();

setInterval(updateClock, 1000);   
setInterval(rotateContent, 3000);
