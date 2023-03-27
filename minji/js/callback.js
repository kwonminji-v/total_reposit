'user strict';

/* 자바 스크립트는 동기적 언어
   호이스팅이 된 이후부터 코드가 작성한 순서대로 하나씩 동기적으로 실행된다는 의미
   호이스팅 : var 변수와 fuction declaration 함수 선언들이 자동적으로 제일 위로 올라가는 것 */
   // 비동기적 : 언제 코드가 실행될지 예측할 수 없는 것
   console.log('1');
   // 브라우저에서 제공되는 API로 지정한 시간이 지나면 전달한 함수(콜백함수)를 호출해 줌
   setTimeout(() => console.log('2'), 1000)  //ms 1000ms = 1초 / 나중에 다시 불러줘 하는 함수를 콜백함수! 
   console.log('3');

/* 자바스크립트 엔진은 코드를 제일 위에서부터 밑으로 실행 
   콘솔1을 만난 순간 1을 출력 -> 두번째 콘솔2는 setTimeout으로 브라우저에게 요청이 필요하다(브라우저에게 1초 뒤에 함수를 실행요청)
   이후 응답을 기다리지 않고 바로 콘솔 3을 먼저 실행한 후 , 1초 뒤에 콘솔 2를 실행한다. */


/* Synchronous callback : 동기적 실행  */
function printImmediately(print) {
    print();
}

printImmediately(() => console.log('hello'));


/* Asynchronous callback : 비동기적 실행  */
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'),2000);

/* 자바 스크립트의 엔진은 해당 함수가 실행되면 호이스팅으로 인해 자동으로 함수의 선언을 최상단으로 올려주고,

function printImmediately(print) {
    print();
}

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

console.log('1'); // 1. 동기
setTimeout(() => console.log('2'), 1000) //2.비동기 -> 브라우저에게 요청 필요
console.log('3'); // 3. 동기

printImmediately(() => console.log('hello')); //동기
printWithDelay(() => console.log('async callback'),2000); //비동기 -> 브라우저에게 요청 */

//callback example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'ellie' && password === 'dream') || 
                (id === 'minzi'&& password ==='academy') 
                ) {
                onSuccess(id);
                } else {
                onError(new Error('not found'));
                }
        }, 2000);
    }



    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name : 'ellie', role: 'admin'});
            }else {
                onError(new Error('no access'));
            }
        },3000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password, (user) => {
    userStorage.getRoles(user, (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
    }, error => {
        console.log(error);
    }
    )
}, errer => {console.log(error)});