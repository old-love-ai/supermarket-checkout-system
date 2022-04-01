// JavaScript Document
/*员工部分事件响应*/
$(document).ready(function(){
    $("#yuangong").click(function(){
        $("#yuangong").css("background","#FFFFFF");
        $("#shouye,#huiyuan,#shangpin").css("background","#CCFF99");
        
        
        $("#sc_yuan,#tj_yuan,#xg_yuan").css("background","#CCFFCC");
        
        
        
        $("#tj_yuan,#xg_yuan,#sc_yuan").slideToggle();
        
        
        
        
        $("#ck_yuan,#ck_hui,#ck_shang").slideUp();
        
        
        $("#tj_hui,#xg_hui,#sc_hui").slideUp();
        
        
        $("#tj_shang,#xg_shang,#sc_shang").slideUp();
    });
});


/*添加员工部分事件响应*/
$(document).ready(function(){
    $("#tj_yuan").click(function(){
        $("#tj_yuan").css("background","#FFFFFF");
        $("#xg_yuan,#sc_yuan").css("background","#CCFFCC");
        
        
        /*隐藏其他框*/
        $("#you_shou").css("display","none");
        $("#you_yuan").css("display","block");
        $("#you_yuan_tianjia").css("display","block");
        $("#you_yuan_xiu").css("display","none");
        $("#you_yuan_shanchu").css("display","none");
        
        $("#you_hui_xiugai").css("display","none");
        $("#you_hui").css("display","none");
        $("#you_hui_shanchu").css("display","none");
        $("#you_shangpin").css("display","none");
        $("#you_shang_tian").css("display","none");
        /*隐藏其他框*/  
    });
});


/*连接后台*/
$(document).ready(function(){
    $("#tianjia").click(function(){
        var name=$("#you_yuan_name").val();
        var ID=$("#you_yuan_ID").val();
        var lianjie='G'+ID;
        alert(lianjie);
        var passd=$("#you_yuan_passd").val();
        var sex=$("input[name='you_yuan_sex']:checked").val();
        var add=$("#you_yuan_add").val();
        var phone=$("#you_yuan_phone").val();
        var zhi=$("#you_yuan_zhi").val();
        var quan=$("#you_yuan_quan").val();
        $.ajax({
            type:"POST",
            data:{'name':name,
                  'ID':ID,
                  'number':lianjie,
                  'passd':passd,
                  'sex':sex,
                  'add':add,
                  'phone':phone,
                  'zhi':zhi,
                  'quan':quan,
                  'ab':'1'
            },
            url:"php/guanli_yuan_tianjia.php",
            cache:false,
            error:function(error){alert(error);},
            success:function(data){
                var jg=jQuery.parseJSON(data);
                if(jg.jg==1){
                    alert("添加成功");
                }
                else{
                    alert(Error+jg.jg);
                }
                
            }
        });
    });
    
});


/*连接后台*/
/*添加员工部分事件响应*/


/*修改员工信息*/
$(document).ready(function(){
    $("#xg_yuan").click(function(){
        $("#xg_yuan").css("background","#FFFFFF");
        $("#tj_yuan,#sc_yuan").css("background","#CCFFCC");
        
        /*隐藏其他框*/
        $("#you_shou").css("display","none");
        $("#you_yuan").css("display","block");
        $("#you_yuan_tianjia").css("display","none");
        $("#you_yuan_xiu").css("display","block");
        $("#you_yuan_shanchu").css("display","none");
        
        $("#you_hui_xiugai").css("display","none");
        $("#you_hui").css("display","none");
        $("#you_hui_shanchu").css("display","none");
        $("#you_shangpin").css("display","none");
        $("#you_shang_tian").css("display","none");
        /*隐藏其他框*/  
    });
});


/*连接后台*/

$(document).ready(function(){
    $("#you_xiu_cx").click(function(){
        var number=$("#you_xiu_chaxun").val();
        var lianjie='G'+number;
        $("#you_xiu_name").val(null);
                $("#you_xiu_ID").val(null);
                $("#you_xiu_passd").val(null);
                $("#you_xiu_add").val(null);
                $("#you_xiu_phone").val(null);
                $("#you_xiu_zhi").val(null);
                $("#you_xiu_quan").val(null); 
        $.ajax({
            type:"POST",
            data:{
                'number':lianjie,
                'panduan':'1'
                 },
            url:"php/guanli_yuan_cha.php",
            cache:false,
            error:function(error){alert(error);},
            success:function(data){
                var jg=jQuery.parseJSON(data);
                $("#you_xiu_name").val(jg.jg['姓名']);
                $("#you_xiu_ID").val(jg.jg['身份证号']);
                $("#you_xiu_passd").val(jg.jg['密码']);
                $("#you_xiu_add").val(jg.jg['住址']);
                $("#you_xiu_phone").val(jg.jg['电话号码']);
                $("#you_xiu_zhi").val(jg.jg['职务']);
                $("#you_xiu_quan").val(jg.jg['权限']);                  
            }
        });
    });
});


$(document).ready(function(){
    $("#you_yuan_xiugai").click(function(){
        var name=$("#you_xiu_name").val();
        var ID=$("#you_xiu_ID").val();
        var passd=$("#you_xiu_passd").val();
        var add=$("#you_xiu_add").val();
        var phone=$("#you_xiu_phone").val();
        var zhi=$("#you_xiu_zhi").val();
        var quan=$("#you_xiu_quan").val();
        var number=$("#you_xiu_chaxun").val();
        var chaxun='G'+number;
        if(ID!=""){
            $.ajax({
                type:"POST",
                data:{
                    'chaxun':chaxun,
                    'name':name,
                    'ID':ID,
                    'number':chaxun,
                    'passd':passd,
                    'add':add,
                    'phone':phone,
                    'zhi':zhi,
                    'quan':quan,
                    'panduan':'1'
                     },
                url:"php/guanli_yuan_xiu.php",
                cache:false,
                error:function(error){alert(error);},
                success:function(data){
                    var jg=jQuery.parseJSON(data);
                    alert(jg.jg);
                    if(jg.jg==0){
                        alert('修改成功');
                    }
                    else{
                       alert('修改失败');
                    }
                    
                }
            });
        }
        
    });
});


/*连接后台*/

/*修改员工信息*/


/*删除信息*/
$(document).ready(function(){
    $("#sc_yuan").click(function(){
        $("#sc_yuan").css("background","#FFFFFF");
        $("#tj_yuan,#xg_yuan").css("background","#CCFFCC");
        
        
        /*隐藏其他框*/
        $("#you_shou").css("display","none");
        $("#you_yuan").css("display","block");
        $("#you_yuan_tianjia").css("display","none");
        $("#you_yuan_xiu").css("display","none");
        $("#you_yuan_shanchu").css("display","block");
        
        $("#you_hui_xiugai").css("display","none");
        $("#you_hui").css("display","none");
        $("#you_hui_shanchu").css("display","none");
        $("#you_shangpin").css("display","none");
        $("#you_shang_tian").css("display","none");
        /*隐藏其他框*/
    });
});
$(document).ready(function(){
    $("#you_shan_sc").click(function(){
        var number=$("#you_yuan_shan").val();
        var lianjie='G'+number;
        if(number!=""){
            $.ajax({
                type:"POST",
                data:{
                    'number':lianjie,
                    'panduan':'1'
                     },
                url:"php/guanli_yuan_shanchu.php",
                cache:false,
                error:function(error){alert(error);},
                success:function(data){
                    var jg=jQuery.parseJSON(data);
                    alert(jg.jg);
                    if(jg.jg==0){
                        alert('修改成功');
                    }
                    else{
                        alert('修改失败');
                    }
                    
                }
            });
            
        }
    });
});




/*删除信息*/



/*员工部分事件响应*/