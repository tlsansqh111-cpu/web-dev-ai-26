 const randoms =  {
    0: "가위",
    1: "바위", 
    2: "보",
  };

  const player = {
    choice: "",
    setchoice() {
        this.choice = prompt("가위/바위/보 중 하나를 입력")
    },
    getchoice() {
        return this.choice
    },
  };
  
  const computer = {
    choice: 0,
    setchoice() {
        this.choice = Math.floor(Math.random() * 3);
    },
    getchoice() {
        return this.choice;
    },
  };

  const game = {

  win: 0,
  draw: 0,
  lose: 0,
  computer: 0,
  player: ""
  play() {
 // 객체 오브젝트 3개 의 수로 Math.random 사용

 while (true) {
    // const player = prompt("가위, 바위, 보 중 하나를 입력해주세요");
    // console.log(player);
    this.computer.choice = console.log(computer)
    this.computer = computer.getchoice();
    // const ran = randoms[Math.floor(Math.random() * 3)];
    console.log(` ${ran}`);
    count= 0;

    let input = prompt("가위/바위/보 중 하나를 입력")
    
    if (input === null) {
        console.log("null");
        alert(`종료합니다. ${this.win}승${this.draw}무${this.lose}패`)
        break;
    }

    this.player = input;
    this.computer = ran;

    if (this.player !=="가위" && this.player !=="바위" && this.player !=="보") {
        alert("가위, 바위 보 중에서만 입력해주세요.")
        continue
    }



    if (this.player === computer) {
        this.draw++;
        console.log("무승부")
        alert(`무승부. 플레이어: ${this.player} 컴퓨터: ${computer}`)
        
        // 승리 : 가위(0), > 보(2), 바위(1) > 가위(0) > 보(2) > 바위(1)
        } else if (
            (this.player === "가위" && computer === "보" ) ||
            (this.player === "바위" && computer === "가위" ) ||
            (this.player=== "보" && computer === "바위" )
        )  {
        this.win++;
        console.log("승리.");
        alert(`승리. 플레이어: ${this.player} 컴퓨터: ${computer}`)
        
        } else {
            this.lose++;
            console.log("패배")
            alert(`패배. 플레이어: ${this.player} 컴퓨터: ${computer}`)
            
     }
    }
   }
  }

  game.play();