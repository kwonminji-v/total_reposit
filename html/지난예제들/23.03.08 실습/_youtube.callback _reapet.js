// callback 지옥 예제
// ↓ 사용자의 백엔드 (서버) 에게서 데이터를 받아오는 클래스 작성해보기
class UserStorage {
    // UserStroage에는 총 2가지의 API가 있다고 가정해보기
    // 1. 사용자를 로그인 해보게하기 API
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'minji' && password === 'zzang') ||
                (id === 'corder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000); //2초 뒤에 코드 블럭이 진행됨.
    }
    // 2. 사용자의 데이터를 받아서사용자마다 가지고 있는 게스트이던 관리자던 알맞는 역할에 대한 정보들을 서버에서 다시 받아오는 API
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'minji') {
                onSuccess({ name: 'minji', role: 'admin' });
            } else {
                onError(new Error('no access')); //권한이 없음을 전달.
            }
        }, 1000);
    }
}

/* 1- 사용자에게 Id와 password를 입력을 받아온 후 서버에게 전송하여 서버에 로그인을 진행
   2- 로그인이 성공한다면, 로그인한 사용자의 Id를 받아온 후 roles를 요청해서 역할을 받아오기 */

const userStorage = new UserStorage(); //UserStorage를 이용해서 백엔드랑 소통하기
const id = prompt('enter your id');
const password = prompt('enter your password');


userStorage.loginUser(
    id, password, user => {
        userStorage.getRoles(user, (userWithRole) => {
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        }, error => { console.log(error) });
    }, error => {console.log(error)});