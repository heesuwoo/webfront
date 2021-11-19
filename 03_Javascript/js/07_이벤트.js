// 인라인 이벤트 모델
function test1(){
    alert("인라인 이벤트 모델방식 입니다.");
}

// 고전 이벤트 모델
const btn1 = document.getElementById("test2-1");

// 요소.이벤트리스너 == 이벤트 핸들러
btn1.onclick = function(){
    alert("고전 이벤트 모델 방식입니다.")
}

document.getElementById("test2-2").onclick = function(){

    // #test2-1 버튼 내용 변경
    document.getElementById("test2-1").innerText = "이벤트 제거됨"

    // #test2-1에 적용된 onclick 이벤트 리스너 제거
    document.getElementById("test2-1").onclick = null;
}

document.getElementById("test2-3").onclick = function(){

    const btn = document.getElementById("test2-1");    // #test2-1 요소 얻어오기

    btn.innerText = "이벤트 살아남";

    // #test2-1 버튼에 새롭게 이벤트 핸들러를 연결함.
    btn.onclick = function(){
        // alert("다시 이벤트가 작동됩니다.");

        document.getElementById("area1").innerHTML
         = "<button id='test2-4'>만들어진 버튼 </button>";
         
        //  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //  기존에 없던 요소를 먼저 추가한 후 이벤트 핸들러를 연결해줘야함!!!!!!!!!
        // 만들어진 버튼
        document.getElementById("test2-4").onclick = function(){
            alert("만들어진 버튼이 클릭되었습니다.");
        }
    }
}

// 만들어진 요소의 id를 변화시킬 변수
let count = 1;  // 전역변수

// #add-btn 클릭시 동작
document.getElementById("add-btn").onclick = function(){

    // #add-area에 요소 추가
    const addArea = document.getElementById("add-area");
    addArea.innerHTML += '<div>' +
                            '<div class="box" id="add-'+count+'"></div>' + 
                            '<input type="text" id="input-'+count+'">' + 
                            '<button id="btn-'+count+'">확인</button>' +
                        '</div>';

    for(let i=1; i<=count; i++){
        
        const btnId = "btn-" + i;   // 코드 복잡도를 낮추기 위해 문자열을 미리 변수에 저장
        const InputId = "input-" + i;
        const divId = "add-" + i;
                            
        // 생성된 확인 버튼에 click 시 동작 추가
        document.getElementById(btnId).onclick = function(){

            // 생성된 input 태그에 작성된 값 얻어오기
            const bgColor = document.getElementById(InputId).value;

            // 얻어온 값으로 생성된 div 배경색 변경하기
            document.getElementById(divId).style.backgroundColor = bgColor;
        }
    }

    count++;    // count 증가
}


let practiceCount = 1;

document.getElementById("add2").onclick = function(){

    document.getElementById("practice-area").innerHTML += 
    '<div>' + 
        '<input type="text" id="input2-'+practiceCount+'" size="10">' +
        '<button id="btn2-'+practiceCount+'">변경</button>' + 
    '</div>';
    
    for(let i=1; i <= practiceCount; i++){

        const practiceInputId = "input2-" + i;
        const practiceBtnId = "btn2-" + i;

        document.getElementById(practiceBtnId).onclick = function(){
            const btnColor = document.getElementById(practiceInputId).value;
            document.getElementById(practiceBtnId).style.backgroundColor = btnColor;
        }
    }
    practiceCount++;
}


// 이벤트 발생 객체
document.getElementById("test-btn").onclick = function(e){
    // 매개변수 e: 발생한 이벤트에 관련된 모든 정보를 가지고 있는 객체
    console.log(e);
    console.log(e.target);  // e.target: 이벤트가 발생한 요소
    
    // 1) 요소 직접 선택
    document.getElementById("test-btn").style.backgroundColor = "red"

    // 2) e.target 이용
    e.target.style.color = "white";

    // 3) this 참조 변수 == 현재 이벤트가 발생한 요소 == e.target
    this.style.fontSize = "30px";
}


// 고전 이벤트 모델의 문제점
document.getElementById("test-btn2").onclick = function(){
    alert("버튼이 클릭됨");
}

// test-btn2 버튼에 onclick에 대한 새로운 이벤트 핸들러 작성
document.getElementById("test-btn2").onclick = function(){
    this.style.backgroundColor = "yellow";

    // 고전 이벤트 모델은 리스너 1 == 핸들러 1
    //  -> 표준 이벤트 모델은 리스너 1 == 핸들러 N
}


// 표준 이벤트 모델
document.getElementById("standard-btn").addEventListener("click", function(){
    this.style.backgroundColor = "orange";
});

// 고전 이벤트 모델 단점 극복 확인
document.getElementById("standard-btn").addEventListener("click", function(){
    alert("단점 극복!");
});

// 요소에 다른 이벤트 리스너에 따른 동작 부여도 가능
// mouseenter: 마우스가 요소에 들어오는 행위
document.getElementById("standard-btn").addEventListener("mouseenter", function(e){
    e.target.style.color = "white";
});

// mouseleave: 마우스가 요소를 떠나는 행위
document.getElementById("standard-btn").addEventListener("mouseleave",function(){
    this.style.color="black";
});



// 채팅창 만들기

// 1. 입력 버튼이 클릭 되었을 때
document.getElementById("input-btn").addEventListener("click", inputChatting);

// 2. input 태그에서 엔터가 눌러졌을 때
// keyup: 키가 눌러졌다가 떼 졌을 때(키가 올라올 때)
document.getElementById("input-text").addEventListener("keydown", function(e){
    // e: 발생된 이벤트와 관련된 정보가 모두 담겨있음.
    // console.log(e.key);

    if(e.key == "Enter"){ // 엔터키 입력시
        inputChatting();    /* 함수를 호출하여 입력한 내용을 채팅창에 추가 */
    }
});

// 3. 1,2번의 공통 동작을 작성해둔 function 생성
function inputChatting(){
    // 1. #input-text에 작성된 값을 읽어

    // 1) input 요소 얻어오기
    const input = document.getElementById("input-text");

    // 입력된 값이 있을 때만 추가
    if(input.value.trim().length != 0){
        // string  좌우 공백 제거
        // 2) #chatting-window에 p태그 형식으로 추가
        document.getElementById("chatting-window").innerHTML +=
        '<p>' + input.value + '</p>';

        // (추가) 채팅창 제일 아래로 스크롤 옮기기
        // scrollHeight: 지정된 요소의 스크롤로 가려진 영역의 진짜 높이
        // scrollTop: 스크롤바의 수직 위치를 지정/얻어옴
        // console.log(document.getElementById("chatting-window").scrollHeight)
        document.getElementById("chatting-window").scrollTop
         = document.getElementById("chatting-window").scrollHeight;

        // 3) input 태그에 작성된 내용을 삭제
        input.value = "";

        // 4) input에 포커스 맞추기
        input.focus();
    }
}