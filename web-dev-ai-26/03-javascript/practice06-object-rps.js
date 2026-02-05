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

    if (input === null) {
        console.log("null");
        alert("종료합니다.")
        break;
    }

   let player = input;
   let computer = ran;


    if (player === ran) {
        console.log("무승부")
        alert(`무승부.` ) //메세지 띄우기 코드
        break;
        } else if (
            (player === "가위" && computer ==="보" ) ||
            (player === "바위" && computer ==="가위" ) ||
            (player=== "보" && computer ==="바위" )
        )  {
        console.log("승리.");
        alert("승리.")
        break;
        } else {
            console.log("패배")
            alert("패배.")
            break;
    }
}
        