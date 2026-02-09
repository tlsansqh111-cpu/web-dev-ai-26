// 1 ~ 45 숫자 중 중복 없이 6개 + 보너스 1개
let lotto = [];

// includes를 사용해서 기존 배열에 없는 숫자만 push
while (lotto.length < 7) {
  const random = Math.floor(Math.random() * 45) + 1;
  if (!lotto.includes(random)) {
    lotto.push(random);
  }
}
const bonus = lotto[lotto.length - 1];
lotto = lotto.slice(0, 6);
console.log(`lotto : ${lotto}, bonus : ${bonus}`);

let counter = 0;

while (true) {
  // 내가 맞출 때까지!
  const my = [];
  while (my.length < 6) {
    const random = Math.floor(Math.random() * 45) + 1;
    if (!my.includes(random)) {
      my.push(random);
    }
  }
  console.log(my);
  break;
}

if (!my.includes(random)) {
  my.push(random);
}

let count = 0;
console.log(`로또번호 : ${lotto}`);
console.log(`내 번호 : ${my}`);

for(let num of lotto) {
  if(my.includes(num)) {
    count++;
    console.log(num);
  }
}
console.log(`일치 개수 : ${count}`);
//1등 당첨 : 6개 일치
if(count === 6) {
  console.log(` 1등 당첨! ${counter}번 만에 맞추셨네요! `);
  break;
} else if(count === 5 && my.includes(bonus)) {
  //2등 당첨 : 5개 일치 + 보너스
  console.log(
    `2등 당첨! ${counter}번 만에 맞추셨네요!`);
  break;
} else if(count === 5) {}
  //3등 당첨 : 5개 일치
  //4등 당첨 : 4개 일치
  //5등 당첨 : 3개 일치