/* 
class : template
object : instance of a class
클래스가 도입되기 전에는 클래스를 정의하지 않고 바로 오브젝트를 만들 수 있었음


새로 추가된 클래스를 이용해서 템플릿을 만들어보자  */

//클래스를 선언해주어야 합니다.

class Person { //사람이라는 클래스를 만들고
    constructor(name,age) { //constructor 생성자를 이용해서 나중에 오브젝트를 만들 때 필요한 데이터를 전달
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        console.log(`${this.name} : hello!`); //클래스에 있는 this.name을 출력
    }
}

const ellie = new Person('ellie', 20); //새로운 오브젝트가 생성되었다.
console.log(ellie.name);
console.log(ellie.age);
ellie.speak(); //this라는 건 생성된 오브젝트.name으로 엘리가 출력됨

//2.Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;  
    }
    
    get age() {
        return this._age; 
    }

    set age(value) {
        // if(value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
 }

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    
    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

//상속 & 다양성 ! ! !
// 메소드는 draw, getArea 두개
// Rectangle이라는 클래스를 만들고 싶다면 동일하게 반복해서 하기 보다는
// extends라는 클래스를 이용해서 Shape를 연장하여, 아래와 같이 정의하면
// Shape에서 정의한 fields와 메소드가 자동적으로 rectangle에 포함이 된다.
class Rectangle extends Shape {}
class Triangle extends Shape{
    draw() {
        super.draw();
        console.log('★');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

/* 삼각형의 면적을 구하는 공식은 너비 x 높이 / 2인데, 현재 getArea에 정의된 수식은
   삼각형의 면적을 정확히 구하는 공식이 아니기 때문에 필요한 함수만 재 정의하여 
   삼각형에서는 너비x높이 후 2로 나누는 함수를 오버라이딩해서 추가로 작성 해줄 수 있다.
   
   삼각형을 그릴 때 색다르게 그려보고 싶어서 triangle에 draw를 오버라이딩 해서 다른 문구로 뜨게 할 수 있음
   재 정의된 것만 출력되는데 기존에 작성된 것도 같이 출력해주고 싶으면 부모의 메서드도 호출해주는
   super를 사용하여 두개를 모두 출력될 수 있게 작성해줄 수 있음*/

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw(); 
console.log(triangle.getArea());

