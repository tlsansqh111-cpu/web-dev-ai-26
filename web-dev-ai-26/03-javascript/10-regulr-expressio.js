console.log(`^ 테스트 : `, /^H/.test("Hello,World"));
console.log(`$ 테스트 : `, /^d$/.test("Hello,World"));
console.log(`. 테스트 : `, /H.llo/.test("H$ello"));
console.log(`* 테스트 : `, /abc*d/.test("abd"));
console.log(`+ 테스트 : `, /abc+d/.test("abccd"));
console.log(`? 테스트 : `, /abc?d/.test("abcd"));
console.log(`{2,4} 테스트 : `, /a{2,4}$/.test("aaa"));
// a-z : 알파벳 소문자, A-Z : 알파벳 대문자
// 0~9 : 숫자, 가~힣 : 한글, !-~ : 특수문자 + 알파벳 소문자 + 대문자 + 숫자
console.log(`[] 테스트 : `, /a{2,8}$/.test("abABC012"));
// dog 또는 cat이 포함되어 있는지
console.log(`( | ) 테스트 : `, /a{dog|cat}/.test("cat"));
console.log(`\d 테스트 : `, /^\d+$/.test("12345"));
console.log(`\D 테스트 : `, /^\D+$/.test("hello"));
console.log(`\w 테스트 : `, /^\w+$/.test("abcde_12345"));
console.log(`\W 테스트 : `, /^\W+$/.test("!@#"));

console.log(`\s 테스트 : `, /\s+/.test("abcde 12345"));
console.log(`\S 테스트 : `, /^\S+$/.test("!@ #"));

// 2. match / replace / split
const test = "apple banana kiwi orange";
console.log("match", test.match(/kiwi/)[0]);
console.log("replace", test.replace(/a/g, "c"));
console.log("split", "010=1234=5678".split(/-/));

// 3. 주민등록번호 정규표현식
const input = document.querySelector("#input");
const result = document.querySelector("#result");
input.addEventListener("input", (e) => {
    // 000000-0000000
    const regExp = /^\d{6}-\d{7}$/;
    if(regExp.test(e.target.value)) {
        result.textContenr = "OK!";
        result.style.color = "green";
      } else {
        result.textContent = "NO!";
        result.style.color = "red";
      }  
    console.log(e.target.value);
})





