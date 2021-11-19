// 정규 표현식 맛보기
document.getElementById("btn1").addEventListener("click", () => {

    // 1. 정규 표현식 객체 생성
    const regExp1 = new RegExp("script");
    const regExp2 = /java/;

    console.log(regExp1.test("javascript 너무 어려워...."));    // t
    console.log(regExp1.test("CSS...."));   // f

    console.log(regExp2.exec("javascript 내일 끝"));    // java
    console.log(regExp2.exec("jQury 시작"));    // null
});


// 메타 문자 확인1
document.getElementById("btn2").addEventListener("click", () => {
    
    // a: 문자열 내에 a라는 문자가 있는지 검색
    const regExp1 = /a/;
    console.log(regExp1.test("apple")); //true
    console.log(regExp1.test("price")); //false

    // [abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
                // [] == 문자한개
    const regExp2 = /[abcd]/;

    console.log("/[abcd]/ : " + regExp2.test("qwerty"));    //false
    console.log("/[abcd]/ : " + regExp2.test("qwertyd"));    //true
    console.log("/[abcd]/ : " + regExp2.test("qwerty abcd"));    //true

    //  ^ (캐럿): 시작
    // ^group: 문자열이 "group"이라는 단어로 시작하는지 검색
    const regExp3 = /^group/;
    console.log("/^group/ : " + regExp3.test("group1"));    // true
    console.log("/^group/ : " + regExp3.test("2group"));    // false

    // $ (달러): 끝
    // script$ : 문자열이 "script"라는 단어로 끝나는지 검색
    const regExp4 = /script$/;
    console.log("/script$/ : " + regExp4.test("javascript"));   // true
    console.log("/script$/ : " + regExp4.test("script 언어란?"));   // false
})



// 문자열이 j 또는 a로 시작하고, t또는 x로 끝나는지 확인
document.getElementById("btn3").addEventListener("click", e => {
    // 화살표 함수는 this를 사용할 수 없다.
    //  -> e.target 활용

    // 확인버튼 이전 형제 요소 (input) 선택
    // console.log(e.target.previousElementSibling);
    const input = e.target.previousElementSibling;

    // input에 작성된 값
    console.log(input.value);

    // 문자열이 j 또는 a로 시작하고, t또는 x로 끝나는지 확인
    const regExp = /^[ja][\w\d\sㄱ-힣\_]*[tx]$/;    // jt, js, at, ax
    
    //  \w (word, 단어) : 아무 단어, 아무 글자(글자수 제한X, 단, 띄어쓰기, 한글, 특수 문자 X)
    //  \d (digit, 숫자) : 0~9 사이 숫자 중 하나
    //  \s (space, 공간) : 공백 문자(띄어쓰기, 엔터, tab 등등)
    //  * : 0개 이상 (없거나, 여러 개가 있을 수 있음)
    // ㄱ-힣 : 한글 모두(자음, 모음, 받침 관계없이 모두)
    // \_ : "_" 문자 자체를 나타내는 이스케이프 문자
    
    console.log(regExp.test(input.value));
});


// 추가 메타 문자 확인
document.getElementById("btn4").addEventListener("click", () => {

    const regExp1 = /a*/;
    const regExp2 = /a+/;
    console.log("/a*/ : " + regExp1.test("bbbbb")); //t
    console.log("/a+/ : " + regExp2.test("bbbbb")); //f
    
    const regExp3 = /.b/;
    const regExp4 = /...b/;
    const regExp5 = /..b../;
    console.log("/.b/ : " + regExp3.test("ab"));    // true
    console.log("/.b/ : " + regExp3.test("aa"));    // false
    console.log("/.b/ : " + regExp3.test("aab"));   // true
    console.log("/.b/ : " + regExp3.test("aa b"));   // true
    
    console.log("/...b/ : " + regExp4.test("aab"));   // false (글자수 모자름)
    console.log("/...b/ : " + regExp4.test("123b"));   // true
    console.log("/...b/ : " + regExp4.test("document.getElementById('test-b')"));   // true
    console.log("/...b/ : " + regExp4.exec("document.getElementById('test-b')"));   // st-b
    
    console.log("/..b../ : " + regExp5.test("document.getElementById('test-b')"));   // true
    console.log("/..b../ : " + regExp5.exec("document.getElementById('test-b')"));   // t-b')

    // j로 시작하고 t로 끝나는 문자열(중간에 영어, 숫자, 한글, 특수문자, 띄어쓰기, 글자수 제한 X)
    const regExp6 = /^j.*t$/;

    console.log("/^j.*t$/ : " + regExp6.exec("jt"));
    console.log("/^j.*t$/ : " + regExp6.exec("javascript"));
    console.log("/^j.*t$/ : " + regExp6.exec("javascript javascript javascript"));

    // a{5} : a가 5개 == aaaaa
    // a{2,5} : a가 2개 이상, 5개 이하 == aa ~ aaaaa
    // a{2,} : a가 2개 이상
    // a{,5} : a가 5개 이하

    const regExp7 =/a{2,4}/g;

    console.log(regExp7.exec("a/aa/aaa/aaaa/aaaaa"));

    // string.replace("찾을 문자열","바꿀 문자열"): 문자열에 맨 처음 일치하는 문자를 바꿈
    // string.replaceAll("찾을 문자열","바꿀 문자열"): 문자열의 일치하는 모든 문자를 바꿈
    // -> 찾을 문자열 대신 정규표현식 사용 가능
        // --> 문자열에서 정규식과 일치하는 부분을 바꾸기
    console.log("a/aa/aaa/aaaa/aaaaa".replaceAll("a", "b"));
    console.log("a/aa/aaa/aaaa/aaaaa".replaceAll(regExp7, "b"));

    // 플래그 문자 g: 문자열 전체를 검색
    const regExp8 = /\-/g;  // 문자열 전체에서 "-"를 찾는 정규 표현식
    console.log("010-1234-1234".replace(regExp8, ""));

});

// 주민등록번호 검사
document.getElementById("btn5").addEventListener("click", function(){

    // 클릭한 버튼의 이전요소(input)에 작성된 값을 얻어와 iNum변수에 저장
    const iNum = this.previousElementSibling.value;
    // console.log(iNum);

    // 주민등록번호 확인용 정규 표현식
    // const regExp = /\d{6}\-\d{7}/;

    const regExp = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])-[1-4]\d{6}$/;
    // ^\d{2}: 시작은 아무 숫자 2개(년도)
    // 0[1-9] : 01 ~ 09 까지
    // 1[0-2] : 10~12 까지
    // | : 또는
    // () : 포획 괄호, 괄호 내부에 대응되는 부분을 찾아서 기억함.
    // (0[1-9]|1[0-2]) : 

    console.log(regExp.test(iNum));

});

document.getElementById("input1").addEventListener("keyup", function(){

    // 주민등록번호 검사 정규식
    const regExp = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])-[1-4]\d{6}$/;

    // 결과 출력용 span 태그
    const result = document.getElementById("result");

    if(regExp.test(this.value)){    // 유효한 형식
        result.classList.add("validation"); //클래스 추가
        // 요소.classList : 요소가 가지고 있는 class 이름 반환
        result.innerText = "유효한 형식의 주민등록 번호입니다.";
        result.classList.remove("invalidation");    //클래스 제거
    }else{  // 유효하지 않은 형식
        result.classList.add("invalidation");
        result.innerText = "유효하지 않은 주민등록 번호입니다.";
        result.classList.remove("validation");
    }
});


// flag 문자

// g : 문자열 전체를 검색(전역 비교)
// i : 대소문자를 가리지않고 비교
// m : 여러 줄의 검사를 수행

document.getElementById("btn6").addEventListener("click", function(){

    const regExp1 = /a\w+\s/g;
                // a(아무 문자 1개 이상)(띄어쓰기)
                // 'abc aaa apple ';
    const str = "abc aaa apple ";
    
    // string.match(정규식 객체): 문자열에서 정규식에 일치하는 모든 문자열을 배열로 반환
    console.log(str.match(regExp1));

    // i : 대소문자를 가리지 않고 비교
    // -> 기본적으로 정규 표현식은 대소문자를 구분한다.
    const regExp2 = new RegExp("java","i");
    const str2 = "java";
    const str3 = "Java";
    const str4 = "JAVA";

    console.log(regExp2.test(str2));
    console.log(regExp2.test(str3));
    console.log(regExp2.test(str4));

    // m: 여러 줄의 검사를 수행
    const regExp3 = /^j/gm;
    const str5 = "java \njavascript"

    console.log(str5.match(regExp3));
    console.log(str5.replaceAll(regExp3, "@"));
}); 

