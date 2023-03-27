/* promise는 자바스크립트 안에 내장되어 있는 오브젝트이다.
비 동기적인 것을 수행할 때 콜백함수 대신에 유용하게 쓸 수 있는 object이다. */

/* 1. state / 현재 상태에 대해서 이해하는 것이 중요
2. producing 하는 사람과 소비자의 입장을 이해하는 것이 중요 */

/* promise의 state(상태) : 오퍼레이션이 수행 중일 때는 pending 상태 / 다 끝나게 되면 fulfilled or 파일을 찾을 수 없거나 네트워크를 찾지 못하면 rejected 상태
producer vs consumer  */

//1. producer
const promise = new Promise((resolve, reject) => {
    // 무언가 무거운 활동을 함 (큰 데이터를 읽어오는 동안은 시간이 소요되는데 동기적으로 처리하게 되면 다음라인의 코드가 실행되지 않기 때문에 )
    // promise를 이용해서 비 동기적으로 처리함
    console.log('doing someting..');
    // promise를 만드는 순간 우리가 전달한 executer라는 콜백 함수가 바로 실행 => 
    // 만약 promise 안에 네트워크 통신하는 함수를 만들었다면 promise가 만들어진 순간 네트워크와 통신을 진행
    // but, 사용자가 요청했을 때만 네트워크 통신을 해야한다면 사용에 주의해야함 (통제해야 할때에는)
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    },2000)
});
// promise는 2초 동안 무언가를 하다 결국 일을 잘 마무리한 후 resolve 라는 콜백함수를 호출하며 ellie가 호출됨

//2. consumers: then, catch, finally
//위에서 만든 promise라는 변수를 이용해서 작성해본다.
promise.then((value) => { // promise에 then을 호출하게 되면 then은 결국 똑같은 promise를 리턴하기 때문에 그 리턴의 캐치를 다시 호출할 수 있음
    //value라는 파라미터는 promise가 정상적으로 잘 수행이 되어서 마지막으로 resolve에서 잘 전달된 ellie가 전달
    console.log(value);
} )
.catch(error => {
    console.log(error);
}) // ellie가 출력
.finally(() => {
    console.log('finally');
}) // 실패했을 때도 error 콜백 함수가 적용 된 후 finally가 출력됨 / 성공과 실패 전부 상관 없이 어떤 기능을 마지막으로 수행하고 싶을 때 finally 사용
// promise.then .catch 같이 적용됨 -> promise 체이닝

// 3. promise chanining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1),1000);
});

fetchNumber.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num-1),1000);
    });
});
.then(num => console.log(num));