const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 10) {
        document.write(`${arr[i]},`);
    }
}

// /* for 문 중첩하기
//    for 문 안에 또다른 for문을 사용하는 것을 "중첩한다"고 한다
//    ex) *가 30개 표시되는 줄을 5개 만들려면?
//        for(let k = 0; k<5; k++) {
//          for(let i = 0; i < 30; i++)
//          {
//             document.write('*');
//          }
//          document.write('<br>'); //줄바꿈을 의미
//        } 
       
//        1. 바깥쪽 for문을 실행 (k = 0)
//        2. 안쪽 for문을 실행해 30번 반복하고 빠져나온다.
//        3. <br> 태그를 추가해서 줄을 바꾸어 준다.
//        4. 바깥쪽 for문의 조건식이 false가 될 때까지 반복한다.*/