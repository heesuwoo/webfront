// 객체 확인하기
document.getElementById("btn1").addEventListener("click", function(){

    // 변수명과 객체 key는 서로 다르것이기 때문에 중복돼도 문제가 없다!
    const brand = "투썸";

    // {} (객체 리터럴 표기법)을 이용한 객체 생성
    const product = {
        // 속성
        pName : "텀블러",
        brand : "스타벅스",
        color : ["white", "black", "silver"],
        amount : 100,

        // 기능(메소드)
        mix : function(add){ alert(add + "를 자동으로 섞어줍니다"); },
        information : function(){
            console.log("brand: " + brand); // 투썸
            console.log("this.brand: " + this.brand);   // 스타벅스
            // * 메소드에서 동일 객체 내부의 다른 속성을 참조하려면
            // this.속성명 을 작성해야 한다.
        }
    };

    const div1 = document.getElementById("div1");

    div1.innerHTML = "";

    // 자바스크립트 객체 내 값 얻어오는 방법
    div1.innerHTML += "product.pName : " + product.pName + "<br>";
    div1.innerHTML += "product['pName'] : " + product['pName'] + "<br>";

    div1.innerHTML += "product.brand : " + product.brand + "<br>";
    div1.innerHTML += "product['brand'] : " + product['brand'] + "<br>";

    div1.innerHTML += "product.amount : " + product.amount + "<br>";
    div1.innerHTML += "product['amount'] : " + product['amount'] + "<br>";
    
    // 배열을 출력할 경우 자동으로 toString()이 호출된다.
    div1.innerHTML += "product.color : " + product.color + "<br>";
    div1.innerHTML += "product['color'] : " + product['color'] + "<br>";

    // 특정 인덱스 요소만 얻어오기
    div1.innerHTML += "product.color[1] : " + product.color[1] + "<br>";
    div1.innerHTML += "product['color'][1] : " + product['color'][1] + "<br>";

    // 향상된 for문 (for of)을 이용한 출력
    // for(하나씩 꺼내서 저장할 변수 of 배열/컬렉션 명){}
    for(let c of product.color){
        div1.innerHTML += c + " ";
    }
    div1.innerHTML += "<br>";
    
    // 메소드 호출
    product.mix("커피");

    // 변수명과 key값 중복 확인
    product.information();
});


//////////////////////////////////////////////////////////////////////////////

// 생성자 함수

// 1. 생성자 함수 정의
// ** 생성자 함수의 함수명은 반드시 대문자로 시작!
function Student(name, age, java, db, html, css){
    
    // 매개변수로 전달받은 값을 생성되는 객체의 속성에 대입하기
    // ** this == 생성되는 객체
    // this.name == 생성되는 객체의 name 속성(없으면 생성)
    this.name = name;
    this.age = age;
    this.java = java;
    this.db = db;
    this.html = html;
    this.css = css;

    // 기능(메소드)
    // 평균 점수 반환(소수점 둘째 자리까지 표시)
    this.getAvg = function(){

        // 현재 객체가 가지고 있는 속성의 값
        //  ** this == 현재 객체
        const sum = Number(this.java) + Number(this.db) + Number(this.html) + Number(this.css);
        const avg = sum/4;

        // 숫자.toFixed(자릿수): 소수점 자리수를 지정하는 함수
        //                       지정된 자릿수 밑에서 반올림 처리
        return avg.toFixed(1);

        // Math.round(81.875 * 100)
        // Math.round(8187.5)
        // 8188 / 100
        // 81.88

        // return Math.round(avg * 100)/100;
    }
}

document.getElementById("btn2").addEventListener("click", function(){

    // Student 생성자 함수를 이용하여 객체 생성
    // * 생성자 함수는 new 연산자와 함께 사용되어야 한다.
    const std1 = new Student("김철수", 23, 97.5, 95.5, 63.5, 71);
    const std2 = new Student("김미영", 28, 59, 60.5, 73, 87);

    // [만약 생성자 함수가 없을 경우]
    // -> 객체 생성 시 마다 중복되는 코드를 계속 작성해야만 한다.(문제점) 
    /*const std1 = {
        name : "김철수",
        age : 23,
        java : 97.5,
        db : 95.5,
        html : 63.5,
        css: 71,
        getAvg : function(){
            const sum = this.java + this.db + this.html + this.css;
            const avg = sum/4;
            return avg.toFixed(2);
        }
    };*/

    console.log(std1);
    console.log(std2);

    console.log(std1.name + "의 평균 점수: "+ std1.getAvg()); 
    console.log(std2.name + "의 평균 점수: "+ std2.getAvg());
});