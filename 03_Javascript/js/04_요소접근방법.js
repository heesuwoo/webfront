// 1. id로 요소 접근하기
function accessId(){

    // id 속성값이 div1인 요소 얻어오기
    const div1 = document.getElementById("div1");

    // ** JS는 카멜 표기법을 사용

    // #div1의 배경색을 얻어와 bgColor 변수에 저장
    const bgColor = div1.style.backgroundColor

    // JS에서는 문자열 비교시에도 == 비교 연산자 사용
    if(bgColor == "red"){
        div1.style.backgroundColor ="orange";
    } else if(bgColor == "orange"){
        div1.style.backgroundColor ="yellow";
    } else{
        div1.style.backgroundColor ="red";
    }
}

// 2. class로 요소 접근하기
function accessClass(){

    // class 속성값으로 div2를 가지는 요소를 모두 얻어와 배열로 저장
    const arr = document.getElementsByClassName("div2");

    console.log(arr);   /* 배열인지 확인 */

    // 각 배열 요소(== div 요소)에 배경색 지정
    arr[0].style.backgroundColor = "pink";
    arr[1].style.backgroundColor = "skyblue";
    arr[2].style.backgroundColor = "#ccc";

    // 각 배열 요소에 h1 태그를 이용해 자신의 이름한글자씩 추가
    arr[0].innerHTML = "<h1>우</h1>";
    arr[1].innerHTML = "<h1>희</h1>";
    arr[2].innerHTML = "<h1>수</h1>";
}

// 3. Tag Name으로 접근하기
function accessTagName(){
    const arr = document.getElementsByTagName("li");

    for(let i=0; i<arr.length; i++){
        arr[i].style.backgroundColor = "rgb(130,220," + (i*50+50) + ")";
    }
}

// 4. Name으로 요소 접근하기
function accessName(){

    // #div4 얻어오기
    const div4 = document.getElementById("div4");

    // name 속성값이 hobby인 요소 모두 얻어오기
    const hobbyList = document.getElementsByName("hobby");
                                // -> JS제공 X, 브라우저 제공 함수 O
    console.log(hobbyList);

    // 체크내용 출력 전 #div4 내용 모두 삭제
    div4.innerHTML = "";

    let count = 0;  // 체크 개수 기록용 변수

    // 얻어온 checkbox 중 체크된 요소만 값 출력하기
    for(let i=0; i<hobbyList.length; i++){
        if(hobbyList[i].checked){
            // .checked : radio/checkbox 요소에 체크가 되어있으면 true

            div4.innerHTML += hobbyList[i].value + " ";
            // .value : input 요소에 값을 얻어온다.
            // += : 이전 내용에 새로운 내용을 누적

            count++;    // count 1 증가
        }
    }
    div4.innerHTML += "<br><br>선택한 취미 개수 : " + count;
}

// 5. CSS 선택자로 요소 접근하기
function accessCss(){

    // #div5 선택
    const el1 = document.querySelector("#div5");
    el1.style.backgroundColor = "orange";

    const el2 = document.querySelectorAll(".cls");

    // .cls 요소에 모두 글자색 파란색
    for(let i=0; i<el2.length; i++){
        el2[i].style.color = "blue";
    }

    const el3 = document.querySelector(".cls > span");
    el3.style.fontSize = "30px";
}

function testFn(){

    // #num1 input 요소에 작성된 값 얻어오기
    const num1 = document.getElementById("num1").value;

    // input에 작성된 값은 모두 문자열
    //  -> Number(숫자 문자열) -> 숫자 
    console.log(Number(num1) + 100);
}