// show() : 요소에 display : none; 제거
$("#show-btn").on("click", function(){
    $("#img1").show(1000);  // 1000ms == 1초
});

// hide() : 요소에 display : none; 추가
// 너비, 높이를 점점 0으로, 투명도도 0으로 변경
$("#hide-btn").on("click", function(){
    $("#img1").hide(1000);
});

// fadeIn()
$("#fadeIn-btn").on("click", function(){
    $("#img2").fadeIn(1000);  // 1000ms == 1초
});

// fadeOut()
$("#fadeOut-btn").on("click", function(){
    $("#img2").fadeOut(1000);  // 1000ms == 1초
});

// slideDown()
$("#slideDown-btn").on("click", function(){
    $("#img3").slideDown(1000);  // 1000ms == 1초
});

// slideUp()
$("#slideUp-btn").on("click", function(){
    $("#img3").slideUp(1000);  // 1000ms == 1초
});


// 토글 스위치 동작
$("#toggle").on("click", function(){
    if( $("#img4").css("display") == "none"){   //#img4가 화면에 안보이는 상태
        // $("#img4").show(1000);
        // $("#img4").fadeIn(1000);  // 1000ms == 1초
        $("#img4").slideDown(1000);  // 1000ms == 1초
    }else{
        // $("#img4").hide(1000);
        // $("#img4").fadeOut(1000);  // 1000ms == 1초
        $("#img4").slideUp(1000);  // 1000ms == 1초
    }
});

// toggle() 메소드
$("#toggle2").on("click", function(){
    $("#img4").toggle(1000);  // 1000ms == 1초
});


// 아코디언 메뉴
$(".title").on("click", function(){
    const next = $(this).next() // 클릭한 title의 다음 요소(img.content)

    if(next.css("display") == "none"){  // 안보이는 상태일 경우
        
        $(this).siblings(".content").slideUp(500);  // 접어서 안보이게
        // -> 형제 요소 중 .content를 모두 닫아서 안보이게

        next.slideDown(500);    //펼쳐서 보이게
        // -> 한 요소에 이펙트 메소드가 중복 적용되는 경우
        //    마지막 이펙트만 적용된다.

    }else{  // 보이는 상태인 경우
        next.slideUp(500);  // 접어서 안보이게
    }
});