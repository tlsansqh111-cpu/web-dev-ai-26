//1. 1~x까지 랜덤
const x = 5;
const X = Math.ceil(Math.random() * x);
console.log(`정답은 ${X}입니다`); //랜덤값의 답

//무한 루프

let count = 0;
let count_2 = 0;
let count_3 = 0;

while (true) {
  count++;
  const a = prompt(`1부터 ${x}까지의 숫자를 입력해주세요`);
  console.log(`입력한 값은 ${a}입니다`);
  if (isnan(a)) {
    const a = prompt("숫자만 입력해주세요");
    count_2++;
  } else if (a === X.toString()) {
    count_3 = count - count_2;

    console.log(
      `성공!  잘못입력한 값 ${count_2}번과 ${count_3}번의 시도로 총 ${count}번의 입력끝에 성공하셨습니다`,
    );
}
}
