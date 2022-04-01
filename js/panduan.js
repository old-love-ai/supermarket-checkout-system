// JavaScript Document
function geshi(){
    var pwd = $(".passd").val();
    var reg=/^(?=[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$@#!%*?&])[A-Za-z\d$@#!%*?&]{8,16}$/;
    //var reg=/^(?=.*[a-zA-Z])(?=.*[1-9])(?=.*[\W]).{6,}$/;
     //alert(reg.test(pwd));
    if(pwd=='')
    {
        $("#tishi").html("必填字段");
        $("#tishi").css("color","red"); 
    }
    else{
        if(reg.test(pwd)){
            $("#tishi").html("格式正确");
            $("#tishi").css("color","green"); 
        }
        else{
            $("#tishi").html("格式错误");
            $("#tishi").css("color","red");  
        }
    }       
}
function validate() {
    var pwd = $(".passd").val();
    var pwd1 = $(".passd1").val();
    //var text=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}$/;
     //alert(reg.test(pwd));
<!-- 对比两次输入的密码 -->
    if(pwd1=="")
    {
        $("#tishi1").html("必填字段");
        $("#tishi1").css("color","red");
    }
    else{
        if(pwd == pwd1)
        {
            $("#tishi1").html("两次密码相同");
            $("#tishi1").css("color","green"); 
        }
        else {
            $("#tishi1").html("两次密码不相同");
            $("#tishi1").css("color","red");  
        }  
    }
    
}
function sphone(){
    var phone=$("#phone").val();
    var phones=/^[0-9]{11}$/;
    if(phones.test(phone)){
        $("#phone1").html("格式正确");
        $("#phone1").css("color","green"); 
    }
    else{
        $("#phone1").html("格式错误");
        $("#phone1").css("color","red"); 
    }
                     
}
function semail() {
    //获取id对应的元素的值，去掉其左右的空格
    var email = $.trim($('#email').val());
    //验证邮箱格式的js正则表达式
    var isEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    //清空显示层中的数据    
    $("#emails").html("");
    if(email == ""){
        $("#emails").html("邮箱不能为空");
        $("#emails").css("color","red");
    }
    else if(!(isEmail.test(email))){
        $("#emails").html("邮箱格式不正确");
        $("#emails").css("color","red");
    }
    else{
        
        $("#emails").html("邮箱格式正确");
        $("#emails").css("color","green");
    }
}
$(document).ready(function(){
        $('input[name="number"]').blur(function(){
        var number=$(this).val();
        var num=/^[0-9]{11}$/;
        number.replace(/\s/g,'');//去空格
        if(number=='')
        {
            $('#numbertishi').text('必填字段');
            $('#numbertishi').css('color','red');
        }
        else
        {
            if(number.match(num))
            {
                
                var my_j={'number':number};
                $.ajax({
                    type:"POST",
					data:my_j,
					url:"php/number.php",
					cache:false,
					error:function(error){alert(error);},
                    success:function(data){
                        var jg=jQuery.parseJSON(data);
                        if(jg.jg==1)
                        {
                            $('#numbertishi').text('已存在');
                            $('#numbertishi').css('color','red');   
                        }
                        else
                        {
                            $('#numbertishi').text('可以使用');
                            $('#numbertishi').css('color','green');
                        }
                    }
                    
                });
                
            }
            else
            {
                $('#numbertishi').text('格式错误');
                $('#numbertishi').css('color','red'); 
            }
        }
    });           
});