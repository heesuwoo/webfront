// Date 확인
document.getElementById("btn1").addEventListener("click", function(){
    
    const date1 = new Date();   // 현재 시간
    
    // GMT
    const date2 = new Date("Mon Nov 08 2021 16:32:55");   // 현재 시간
    
    // UTC
    // -> 월 표현법이 1~12가 아닌 0~11로 표현
    const date3 = new Date(2021, 10, 8, 9, 0, 0);   // 현재 시간
                        // 년, 월, 일, 시, 분,초

    console.log(date1);
    console.log(date2);
    console.log(date3);

    // Date 객체에서 년, 월, 일, 시, 분, 초, 요일 얻어오기
    console.log("년도: ", date1.getFullYear());
    console.log("월: ", (date1.getMonth()+1));
    console.log("일: ", date1.getDate());
    console.log("시: ", date1.getHours());
    console.log("분: ", date1.getMinutes());
    console.log("초: ", date1.getSeconds());

    const arr = ["일", "월", "화", "수", "목", "금", "토" ];

    // 일요일 == 0 ~ 토요일 == 6
    console.log("요일: ", arr[date1.getDay()]);
});

document.getElementById("btn2").addEventListener("click", function(){
    window.setTimeout(function(){
        alert("setTimeout 확인!");
    }, 3000);   // 3초
});

document.getElementById("btn3").addEventListener("click", function(){
    window.setTimeout(function(){
        alert("이동합니다!");
        location.href = "https://iei.or.kr/main/main.kh;"
    }, 3000);   // 3초
});

// setInterval 확인
document.getElementById("btn4").addEventListener("click", function(){
    // 1초마다 반복수행
    window.setInterval(function(){
        console.log("감기조심")
    }, 1000);   // 1초
});

// setInterval 문제 해결 방법 1
document.getElementById("btn5").addEventListener("click",function(){

    let count = 1;
    setInterval(function(){
        console.log(count++);
    }, 500);

    // 이벤트가 발생한 요소를 비활성화
    this.setAttribute("disabled", true);
});

// setInterval 문제 해결 방법 2
let flag = true;

document.getElementById("btn6").addEventListener("click",function(e){

    if(flag){
        flag = false;

        let count = 1;
        setInterval(function(){
            console.log(this);
            // this.innerText = count++;
            // **일반적인 함수 내에서 this는 window 객체와 묶인다.
            
            e.target.innerText = count++;
    
        }, 500);    // 0.5s
    }
});

// 시계 만들기
setInterval(function(){

    // 시계가 출력될 요소 선택
    const clock = document.getElementById("clock");

    // 현재 시간
    const now = new Date();

    // 현재 시간을 시:분:초 형태로 가공
    const text = addZero(now.getHours()) + ":"
                + addZero(now.getMinutes()) + ":"
                + addZero(now.getSeconds());

    clock.innerText = text;
}, 1000);

// 시계에 출력되는 숫자가 한 자리인 경우 앞에 0 붙이는 함수
function addZero(time){

    if(Number(time) < 10){  // 한 자리의 경우
        return "0" + time;
    }else{
        return time;
    }
}

// clearInterval 확인

// * setInterval 저장용 전역 변수
let interval;

// 시작 버튼
document.getElementById("test-btn1").addEventListener("click", function(){
    
    interval = setInterval(function(){

        const random = Math.floor(Math.random() * 26 + 1);  //1~26
        document.getElementById("test").innerText = addZero(random);

    }, 50);  // 0.05
});


// 종료 버튼
document.getElementById("test-btn2").addEventListener("click", function(){
    
    window.clearInterval(interval);
});

console.log(location.href); // location.href를 getter로 사용 시 == 현재 주소 얻어옴
