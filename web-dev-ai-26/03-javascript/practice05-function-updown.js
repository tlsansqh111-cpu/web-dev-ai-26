// 1부터 100까지의 랜덤 숫자를 생성하고
   const ran =(Math.ceil(Math.random() * 100) + 1); 
   console.log(`${ran}`) //랜덤 숫자
   let count = 0;// 카운트 숫자 

   

//사용자가 정답을 맞출 때까지 숫자를 입력하게 하며
while (true) {
    let input = prompt("1~100 숫자 중 한개 입력")
    // null 취소 "null" -입력 값 문자- 따옴표 차이 발생
    if (input === null) {
        console.log("null");
        alert("종료합니다.")
        break;
        
    }
    //input === "" 확인만 누른 상태 || is NaN(input) (또는 숫자가 아닌 값)
    if (input === "" || isNaN(input)) {
        console.log(" 숫자가 아닙니다!");
        alert("숫자가 아닙니다.") //메세지 띄우기 코드 alert
        continue;
    }
    count++;
    //number x Number(N 대문자)O
    let usernumber = Number(input);

    if (usernumber === ran) {
        alert(`정답입니다.  ${count}만에 맞추셨습니다.` ) //메세지 띄우기 코드
        break;
        } else if (usernumber > ran) {
        console.log("Down.");
        alert("큽니다.")
    } else {
        console.log("Up.");
        alert("작습니다.")
    }
}
//구현 단계


//잘못 입력하였다면 "제대로 입력해주세요" 알림창으로 알려주고


// 입력한 숫자가 크면 "해당 숫자보다 작습니다", 작으면 "해당 숫자보다 
// 큽니다"를 알림창으로 알려주고

// 정답을 맞추면 시도 횟수와 함께 종료 메시지를 출력 (정답입니다! 몇 번
// 만에 맞추셨습니다)

// 힌트: 숫자가 아닌 값이면 'isNaN()'으로 체크할 수 있음
// 힌트: 입력창에서 취소를 누르면 'null'이 들어옴

// 일단 구현을 해봤다면 함수 분리

//일단 구현을 해봤다면 함수 분리
// getTarget : 맞춰야 하는 랜덤 숫자
// setInput : 사용자한테 입력 받은 값
// judge : 판단 결과
// showMessage : 메세지 표시
// play : 게임 진행