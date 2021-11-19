// 1단계
$("#btn1").on("click",function(){
    $("#div1").css("backgroundColor", $("#input1").val());
});

// 2단계
$("#btn2").on("click",function(){
    for(let i=1; i<=$(".area2").length; i++){
        $("#div2-"+i).css("backgroundColor", $("#input2-"+i).val());
    }
});

// 3단계
// $(function(){
//     for(let i=1; i<=$(".area3").length; i++){
//         $("#input3-"+i).on("input", function(){

//             $("#div3-"+i).css("backgroundColor", $("#input3-"+i).val()).css("transition-duration","1s");
//             $("#input3-"+i).css("border-color", $("#input3-"+i).val()).css("transition-duration","1s");
//         })
//     }
// });


$(".input3").on("input", function(){

    const input = $(".ipnut3");
    console.log($(input[0]).val());
    const area = $(".area3");

    for(let i=0; i < area.length; i++){
        // console.log( $(input[i]).val());
        $(area[i]).css("backgroundColor", $(input[i]).val());
        $(input[i]).css("border-color", $(input[i]).val());
    }

});



// js + jQuery
// $(".input3").on("input", function(){
//     this.previousElementSibling.style.backgroundColor = this.value;
    
//     // jQuery 버전
//     $(this).prev().css("backgroundColor",$(this).val() );
//     // $(this) : 입력 이벤트가 발생한 현재 요소를 jQuery 선택자로 선택
//     //  .prev() : 선택된 요소의 이전 요소를 jQuery 선택자로 선택
//     $(this).css("border-color", $(this).val());
// });