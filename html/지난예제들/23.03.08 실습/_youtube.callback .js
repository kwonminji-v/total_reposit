'use strict'
/* 
Synchronous callback
모든 함수의 선언은 호이스팅이 진행되기 때문에 자바스크립트의 실행과 동시에 제일 상단에 위치하게 된다. 
*/

function printImmediately(print) {
    print();
}

// 이후는 순차적으로 출력이 진행되고, 
console.log('1');  //1번 동기
setTimeout(() => console.log('2'),1000); //브라우저에 요청 (1) 을 우선한다. 
console.log('3'); //2번 동기

printImmediately(()=>console.log('hello')); //3번 비 동기

//Asynchronous callback - 
// 함수가 동작할 때에는 선언 부분이 위의 예제처럼 맨 위로 올라가게 될 것이다.
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); //비 동기 브라우저에게 요청(2)