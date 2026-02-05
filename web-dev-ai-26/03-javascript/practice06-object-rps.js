 const randoms =  {
    0: "가위",
    1: "바위", 
    2: "보",
 };
 // 객체 오브젝트 3개 의 수로 Math.random 사용
const ran = randoms[Math.floor(Math.random() * 3)];

 console.log(` ${ran}`);

 while (true) {
    let input = prompt("가위/바위/보 중 하나를 입력")
    // null 취소 "null" -입력 값 문자- 따옴표 차이 발생
    if (input === null) {
        console.log("null");
        alert("종료합니다.")
        break;
    }
    let userinput = input;


    if (userinput === ran) {
        alert(`무승부.` ) //메세지 띄우기 코드
        } else if (
            (userinput === "가위" && ran ==="보" ) ||
            (userinput === "바위" && ran ==="가위" ) ||
            (userinput === "보" && ran ==="바위" )
        )  {
        console.log("승리.");
        alert("승리.")
        } else {
            console.log(패배)
    }
}
        