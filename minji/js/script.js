//대상.addEventListener('click'-이벤트의 종류, function()-할일을 적는다) {
//이벤트가 발생했을 때, 일어날 함수를 작성
//}

var btn = document.getElementById('submit');

btn.addEventListener('click', function() {
    alert("반갑습니다.")
});





/* 
mouseover, mouserout, mouseenter, mouseleave, scroll, 
change, focus, blur(focus의 반대) keypress, kewDown keyup */

var container = document.querySelector('.container');
var i=0;
//마우스오버와 마우스 아웃 , 대상 내부에서 마우스가 머무를 시 계속 이벤트가 발생한다.
/* container.addEventListener('mouseover', function() {
    container.style.backgroundColor = "#ebebeb";
    console.log('mouseover', i++);
})
container.addEventListener('mouseout', function() {
    container.style.backgroundColor = "";
    console.log('mouseout')
}) */


/* mouseenter는 대상으로 마우스가 들어가서 이벤트가 발생하고, 그 위에서 움직이더라도
이벤트가 계속 발생하는 것은 아니다. */
container.addEventListener('mouseenter', function() {
    this.style.backgroundColor = "#ebebeb";
    //선택이 된 (container) 요소를 의미하는 this를 사용할수도 있음.
    console.log('mouseenter', i++);
})
container.addEventListener('mouseleave', function() {
    this.style.backgroundColor = "";
    console.log('mouseleave')
})

//css에서 호버시에는 마우스가 떠나면 다시 원상태로 돌아오는데 자바스크립트로 작성 시에는 다시 돌아오지 않는다.

//change를 사용해보자
var colorSelect = document.getElementById('color');

colorSelect.addEventListener('change',function(){
    // var target = document.querySelector('body');
    var target = document.body;
    //옵션의 값들인 실버,그린,라이트그레이가 변하면서 선택될 때마다 바디의 컬러가 변경되어야 함.
    var selectedValue = this.value;
    console.log(selectedValue)

    // " 안에 변경될 수 있도록 작성해주어야 함"
    target.style.backgroundColor = selectedValue;
}) 

var link = document.querySelectorAll('a');
//a태그 안에는 link의 요소가 유사배열로 저장이 된다.
//요소가 여러개있을 때에는, 대상에다 이벤트를 직접 선언하면 여러개의 코드가 작성되기 때문에 반복문으로 작성한다.
link.forEach(function(item, idx) {
    item.addEventListener('focus', function() {
        this.style.backgroundColor = "blue"
        item.style.color = '#fff';
    })
    item.addEventListener('blur', function() {
        this.style.backgroundColor = ""
        this.style.color = '';
    })
}) 
console.log(link);

//keypress(deplicated), keydown, keyup
//window에 어떤 이벤트가 일어났는지 확인하려면 반드시 function안에 매개변수 ev이던 event를 꼭 넣어주어야 어떤 키가 입력되었는지 확인할 수 있다. 
var i = 0;
window.addEventListener('keyup', function(event){
    var userkey = event.key;
    console.log(userkey, i++);
    if(userkey == 'ArrowLeft') {
        //슬라이드가 왼쪽으로 움직인다.
        this.alert('왼쪽')
    }else if(userkey=='ArrowRight'){
        this.alert('오른쪽');
    }
})