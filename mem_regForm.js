$().ready(function() {
    var passChk = false;
    $("#btnReg").on("click",function(ev){
        if(fn.temail.value=="") {
            alert("비밀번호는 반드시 입력해야 합니다.");
            fn.temail.focus();
            return;
        }
        if(fn.tname.value=="") {
            alert("이름은 반드시 입력해야 합니다.");
            fn.tname.focus();
            return;
        }
        if(fn.tpwd.value=="") {
            alert("비밀번호는 반드시 입력해야 합니다.");
            fn.tpwd.focus();
            return;
        }
        if(fn.tpwd2.value=="") {
            alert("확인을 위한 비밀번호도 반드시 입력해야 합니다.");
            fn.tpwd2.focus();
            return;
        }
        if($("input:checked").length==0) {
            alert("취미는 하나 이상을 선택하셔야 합니다.");
            return;
        }
        if(fn.taddr.value=="") {
            alert("거주지를 선택해 주세요.");
            return;
        }
        fn.method="get";
        fn.action = "memReg";
        fn.submit();
    });//e:$("form").on("submit")

    $("#pwd2").on("keypress",function(){
        passChk=false;
        if(fn.tpwd.value==fn.tpwd2.value) passChk=true;
        console.log(passChk);
    });//e:$("#pwd2").on("keypress")
});//e:$().ready()