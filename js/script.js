// window.onload = function(){
//     alert("안녕");
// }

$(function(){//document를 먼저 렌더링 하고 나서 실행 하게 되는 메서드

    //슬라이드
    function slide(){
        $(".slide ul").animate({top:"-300px"},1000,function(){  //슬라이드 영역에 보여지는 top을 -300으로 변경, 1000밀리세컨초 동안
            $(".slide ul").append($(".slide ul li").first())    //그다음 실행되는 콜백함수로 첫번째 이미지를 마지막 이미지 뒤에 위치시킨다.
            $(".slide ul").css({top:0})
        })
    }
    
    setInterval(slide, 2000);
    

    //탭 메뉴
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on"); // 클래스 속성을 선택자에서 제거
        $(this).addClass("on");     //해당 선택자에 클래스 선택자속성을 할당

        var i = $(this).index();    //index() 함수는 해당하는 index를 찾는다
        
        console.log(i);
        
        $(".tabcon").hide();    
        $(".tabcon").eq(i).show();  //eq() if 조건 함수

        return false;   //해당하는 노드에 a태그가 존재하기에 링크를 차단한다.
    });

    //메뉴
    $("nav>ul>li").mouseenter(function(){   //마우스 호버 이벤트
        $(".sub").stop().slideDown(); //천천히 보여지는 함수 //stop() 함수를 이용해 실행 함수가 중첩되는 것을 방지
    });

    $("nav>ul>li").mouseleave(function(){   //마우스 아웃 이벤트
        $(".sub").stop().slideUp(); //stop() 함수를 이용해 실행 함수가 중첩되는 것을 방지
    });


    //키보드 이벤트 (선택사항)
    
    // 팝업
    $(".pp").click(function(){
        $(".popup").show();//display:block;
        return false; //링크 차단 a태그 클릭할 때 링크를 차단함
    });

    $("button").click(function(){
        $(".popup").hide(); //display:none;
    });
})