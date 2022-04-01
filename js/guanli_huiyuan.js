// JavaScript Document
/*会员部分事件响应*/
$(document).ready(function(){
    $("#huiyuan").click(function(){
        $("#yuangong,#shouye,#shangpin").css("background","#CCFF99");
        $("#huiyuan").css("background","#FFFFFF");
        
        
        $("#sc_hui,#tj_hui,#xg_hui").css("background","#CCFFCC");
        
        
        
        
        $("#tj_hui,#xg_hui,#sc_hui").slideToggle();
        
        
        
        $("#ck_yuan,#ck_hui,#ck_shang").slideUp();
        
        
        
        $("#tj_shang,#xg_shang,#sc_shang").slideUp();
        
        
        
        $("#tj_yuan,#xg_yuan,#sc_yuan").slideUp();
    });
});



/*会员添加部分*/
$(document).ready(function(){
    $("#tj_hui").click(function(){
        $("#tj_hui").css("background","#FFFFFF");
        $("#xg_hui,#sc_hui").css("background","#CCFFCC");
        
        /*隐藏其他块*/
        $("#you_shou").css("display","none");
        $("#you_yuan").css("display","none");
        $("#you_yuan_tianjia").css("display","none");
        $("#you_yuan_xiu").css("display","none");
        $("#you_yuan_shanchu").css("display","none");
        $("#you_hui_xiugai").css("display","none");
        $("#you_hui").css("display","none");
        
        $("#you_hui").css("display","block");
        $("#you_hui_tianjia").css("display","block");
        $("#you_hui_shanchu").css("display","none");
        $("#you_shangpin").css("display","none");
        $("#you_shang_tian").css("display","none");
        /*隐藏其他块*/
        
    });
});
$(document).ready(function(){
    $("#hui_tianjia").click(function(){
        var name=$("#you_hui_name").val();
        var ID=$("#you_hui_ID").val();
        var lianjie='K'+ID;
        alert(lianjie);
        var sex=$("input[name='you_hui_sex']:checked").val();
        var add=$("#you_hui_add").val();
        var phone=$("#you_hui_phone").val();
        var quan=$("#you_hui_quan").val();
        $.ajax({
            type:"POST",
            data:{'name':name,
                  'ID':ID,
                  'number':lianjie,
                  'sex':sex,
                  'add':add,
                  'phone':phone,
                  'quan':quan,
                  'ab':'1'
            },
            url:"php/hui_tianjia.php",
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

/*会员添加部分*/



/*修改数据*/
$(document).ready(function(){
    $("#xg_hui").click(function(){
        $("#xg_hui").css("background","#FFFFFF");
        $("#tj_hui,#sc_hui").css("background","#CCFFCC");
        
        
         /*隐藏其他块*/
        $("#you_shou").css("display","none");
        $("#you_yuan").css("display","none");
        $("#you_yuan_tianjia").css("display","none");
        $("#you_yuan_xiu").css("display","none");
        $("#you_yuan_shanchu").css("display","none");
        
        $("#you_hui").css("display","block");
        $("#you_hui_tianjia").css("display","none");
        $("#you_hui_xiugai").css("display","block");
        $("#you_hui_shanchu").css("display","none");
        $("#you_shangpin").css("display","none");
        $("#you_shang_tian").css("display","none");
        /*隐藏其他块*/
    });
});




$(document).ready(function(){
    $("#hui_xiu_cx").click(function(){
        var number=$("#hui_xiu_chaxun").val();
        var lianjie='K'+number;
        alert(lianjie);
        $("#you_xiu_name").val(null);
        $("#hui_xiu_ID").val(null);
        $("#hui_xiu_passd").val(null);
        $("#hui_xiu_add").val(null);
        $("#hui_xiu_phone").val(null);
        $("#hui_xiu_zhi").val(null);
        $("#hui_xiu_quan").val(null); 
        $.ajax({
            type:"POST",
            data:{
                'number':lianjie,
                'panduan':'1'
                 },
            url:"php/guanli_huiyuan_cx.php",
            cache:false,
            error:function(error){alert(error);},
            success:function(data){
                var jg=jQuery.parseJSON(data);
                $("#hui_xiu_name").val(jg.jg['姓名']);
                $("#hui_xiu_ID").val(jg.jg['身份证号']);
                $("#hui_xiu_passd").val(jg.jg['剩余金额']);
                $("#hui_xiu_add").val(jg.jg['住址']);
                $("#hui_xiu_phone").val(jg.jg['电话']);
                $("#hui_xiu_zhi").val(jg.jg['积分']);
                $("#hui_xiu_quan").val(jg.jg['客户类型']);                  
            }
        });
    });
});


$(document).ready(function(){
    $("#you_tijiao_xiugai").click(function(){
        var name=$("#hui_xiu_name").val();
        var ID=$("#hui_xiu_ID").val();
        var add=$("#hui_xiu_add").val();
        alert(add);
        var phone=$("#hui_xiu_phone").val();
        var lianjie='K'+phone;
       
        var jifen=$("#hui_xiu_zhi").val();
        var quan=$("#hui_xiu_quan").val();
        alert(quan);
        var number=$("#hui_xiu_chaxun").val();
        var chaxun='K'+number;
        alert(chaxun);
        if(ID!=""){
            $.ajax({
                type:"POST",
                data:{
                    'chaxun':chaxun,
                    'name':name,
                    'ID':ID,
                    'number':lianjie,
                    'add':add,
                    'phone':phone,
                    'jifen':jifen,
                    'quan':quan,
                    'panduan':'1'
                     },
                url:"php/guanli_huiyuan_xiugai.php",
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


/*修改数据*/
$(document).ready(function(){
    $("#sc_hui").click(function(){
        $("#sc_hui").css("background","#FFFFFF");
        $("#tj_hui,#xg_hui").css("background","#CCFFCC");
        
        
        
         /*隐藏其他块*/
        $("#you_shou").css("display","none");
        $("#you_yuan").css("display","none");
        $("#you_yuan_tianjia").css("display","none");
        $("#you_yuan_xiu").css("display","none");
        $("#you_yuan_shanchu").css("display","none");
        
        $("#you_hui").css("display","block");
        $("#you_hui_tianjia").css("display","none");
        $("#you_hui_xiugai").css("display","none");
        $("#you_hui_shanchu").css("display","block");
        $("#you_shangpin").css("display","none");
        $("#you_shang_tian").css("display","none");
        /*隐藏其他块*/
    });
});

$(document).ready(function(){
    $("#you_hui_sc").click(function(){
        var number=$("#you_hui_shan1").val();
        var lianjie='K'+number;
        alert(lianjie);
        if(number!=""){
            $.ajax({
                type:"POST",
                data:{
                    'number':lianjie,
                    'panduan':'1'
                     },
                url:"php/guanli_huiyuan_shanchu.php",
                cache:false,
                error:function(error){alert(error);},
                success:function(data){
                    var jg=jQuery.parseJSON(data);
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
/*会员部分事件响应*/
