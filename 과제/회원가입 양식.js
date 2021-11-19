// 아이디
/* document.getElementById("id").addEventListener("focusout", function(){
    const regExp = /^[a-z]{1}[\w\d\-\_]{5,13}/;

    if(regExp.test(this.value)){
        this.style.backgroundColor = "springgreen";
    } else{
        this.style.backgroundColor = "red";
        this.style.color = "white";
    }
}); */

$("#id").on("blur", function(){
    const regExp = /^[a-z][a-zA-Z\d\-\_]{5,13}$/;

    if(regExp.test($(this).val())){
        $(this).css("backgroundColor", "springgreen");
    } else{
        $(this).css("backgroundColor", "red");
        $(this).css("color", "white");
    }
});


// 비밀번호
/* document.getElementById("pw2").addEventListener("keyup", function(){

    const pw = document.getElementById("pw");

    if(pw.value.trim().length == 0){
        this.value = "";
        alert("비밀번호를 입력해주세요.");
        pw.focus();
    }
    
    if(pw.value == this.value){
        document.getElementById("pwcorrect").style.color = "green";
        document.getElementById("pwcorrect").innerText = "비밀번호 일치";
    } else{
        
        document.getElementById("pwcorrect").style.color = "red";
        document.getElementById("pwcorrect").innerText = "비밀번호 불일치";
    }
}); */

$("#pw2").on("keyup", function(){
    const pw = $("#pw");

    if(pw.val().trim().length == 0){
        $(this).val('');
        alert("비밀번호를 입력해주세요.");
        pw.focus();
    }
    
    if(pw.val() == $(this).val()){
        $("#pwcorrect").css("color", "green").text("비밀번호 일치");
    } else{
        $("#pwcorrect").css("color", "red").text("비밀번호 불일치");
    }
});

// 이름
/* document.getElementById("name").addEventListener("change", function(){
    
    const reqExp2 = /^[가-힣]{2,5}$/;

    if(reqExp2.test(this.value)){
        document.getElementById("namecorrect").style.color = "green";
        document.getElementById("namecorrect").innerText = "정상입력";
    }else{
        document.getElementById("namecorrect").style.color = "red";
        document.getElementById("namecorrect").innerText = "한글만 입력하세요";
    }
}) */

$("#name").on("change", function(){
    const reqExp2 = /^[가-힣]{2,5}$/;
    if(reqExp2.test($(this).val())){
        $("#namecorrect").css("color", "green").text("정상입력");
    }else{
        $("#namecorrect").css("color", "red").text("한글만 입력하세요");
    }
});

// 회원가입 버튼 클릭 시
// 방법1
// function validate(){

//     const male = document.getElementById("male").checked;
//     const female = document.getElementById("female").checked;
//     const phone = document.getElementById("phone");

//     const reqExp3 = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/

//     if(!male && !female){
//         alert("성별을 선택해주세요.");
//         return false;
//     }
    
//     if(!reqExp3.test(phone.value)){
//         alert("전화번호의 형식이 올바르지 않습니다.");
//         return false;
//     }
// }

function validate() {
    const male = $("#male").prop("checked");
    const female = $("#female").prop("checked");
    const phone = $("#phone");

    const reqExp3 = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/

    if(!male && !female){
        alert("성별을 선택해주세요.");
        return false;
    }
    if(!reqExp3.test(phone.val())){
        alert("전화번호의 형식이 올바르지 않습니다.");
        return false;
    }
}


// 방법2
/* document.getElementById("signup").addEventListener("click", function(){validate2()});

function validate2(){
    const male = document.getElementById("male");
    const female = document.getElementById("female");
    const reg = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}/;
    const form = document.getElementById("form");

    // - 성별이 선택되지 않은 경우
    if (male.checked || female.checked) {
        // - 전화번호 형식이 올바르지 않을 경우 
        if (!reg.test(document.getElementById("phone").value)) {
            alert("전화번호의 형식이 올바르지 않습니다");
            form.setAttribute("onSubmit", "return false");
        } else
            form.setAttribute("onSubmit", "return true");
    } else {
        alert("성별을 선택해주세요.");
        form.setAttribute("onSubmit", "return false");
    }
} */
