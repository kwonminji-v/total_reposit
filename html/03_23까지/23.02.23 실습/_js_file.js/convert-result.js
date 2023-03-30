// 섭씨 온도 = (화씨온도 - 32)/1.8
// 섭씨 : celcius 화씨 : fahrenheit
let fah = parseFloat(prompt("변환할 화씨 온도"));
let cel;
cel = ((fah - 32) / 1.8).toFixed(1);
alert(`화씨 ${fah}도는 섭씨${cel}도 입니다.`);


const currentYear = 2023;
let birthYear;
let age;
birthYear = parseInt(prompt("태어난 연도를 입력하세요. (YYYY)", " "));
age = currentYear - birthYear + 1;
if (age < 20) {
    alert ("성인이 아닙니다.")
}
alert(`${currentYear}년 현재,${age}세 입니다.`);