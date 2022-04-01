// JavaScript Document
/*首页部分事件响应*/

/*首页点击查看部分*/
$(document).ready(function(){
    $("#shouye").click(function(){
        $("#yuangong,#huiyuan,#shangpin").css("background","#CCFF99");
        $("#shouye").css("background","#FFFFFF");
        
        $("#ck_yuan,#ck_hui,#ck_shang").slideToggle();
        /*当点击首页的时候其他三个隐藏*/
        
        
        $("#tj_yuan,#xg_yuan,#sc_yuan").slideUp();
        
        
        $("#tj_hui,#xg_hui,#sc_hui").slideUp();
        
        
        $("#tj_shang,#xg_shang,#sc_shang").slideUp();
        
    });
});
/*首页点击查看部分*/








/*员工查看部分*/
$(document).ready(function(){
    $("#ck_yuan").click(function(){
        /*首页员工信息显示响应部分*/
        $("#ck_yuan").css("background","#FFFFFF");
        $("#ck_hui,#ck_shang").css("background","#CCFFCC");
        
        
        
        /*隐藏其他框*/
        $("#you_shou").css("display","block");
        $("#you_yuan").css("display","none");
        $("#you_hui_xiugai").css("display","none");
        $("#you_hui").css("display","none");
        $("#you_shangpin").css("display","none");
        $("#you_shang_tian").css("display","none");
        
        
        /*隐藏其他框*/
        
        
        /*清空原先的数据*/
        $("#you_ck_yuan_id").html(null);
        $("#you_ck_yuan_name").html(null);
        $("#you_ck_yuan_ID").html(null);
        $("#you_ck_yuan_sex").html(null);
        $("#you_ck_yuan_add").html(null);
        $("#you_ck_yuan_number").html(null);
        $("#you_ck_yuan_phone").html(null);
        $("#you_ck_yuan_zhi").html(null);
        $("#you_ck_yuan_quan").html(null);
        /*清空原先的数据*/
        
        
        /*清空标识部分并重新显示*/
        $(".bianhua_id").text(null);
        $(".bianhua_name").text(null);
        $(".bianhua_ID").text(null);
        $(".bianhua_num").text(null);
        $(".bianhua_sex").text(null);
        $(".bianhua_add").text(null);
        $(".bianhua_phone").text(null);
        $(".bianhua_1").text(null);
        $(".bianhua_2").text(null);
        
        $(".bianhua_id").text('id');
        $(".bianhua_name").text('姓名');
        $(".bianhua_ID").text('身份证号');
        $(".bianhua_num").text('员工编号');
        $(".bianhua_sex").text('性别');
        $(".bianhua_add").text('住址');
        $(".bianhua_phone").text('电话');
        $(".bianhua_1").text('职务');
        $(".bianhua_2").text('权限');
        /*清空标识部分并重新显示*/
        
        
        /*信息部分的显示*/
        
        $.ajax({
            type:"POST",
            data:{'aa':'1'},
            url:"php/guanli_ck.php",
            cache:false,
            error:function(error){alert(error);},
            success:function(data){
                var result=eval("("+data+")");
                for(var i=0;i<result.length;i++){
                    var id=result[i][0];
                    var name=result[i][1];
                    var ID=result[i][2];
                    var number=result[i][3];
                    var sex=result[i][5];
                    var add=result[i][6];
                    var phone=result[i][7];
                    var zhi=result[i][8];
                    var quan=result[i][9];
                    $("#you_ck_yuan_id").append('<li id="'+id+'" style="width: 30px;">'+id+'</li>');
                    $("#you_ck_yuan_name").append('<li id="n+'+id+'" style="width: 70px">'+name+'</li>');
                    $("#you_ck_yuan_ID").append('<li id="I+'+id+'" style="width: 140px">'+ID+'</li>');
                    $("#you_ck_yuan_number").append('<li id="m+'+id+'" style="width: 140px">'+number+'</li>');
                    $("#you_ck_yuan_sex").append('<li id="s+'+id+'" style="width: 50px">'+sex+'</li>');
                    $("#you_ck_yuan_add").append('<li id="a+'+id+'" style="width: 90px">'+add+'</li>');
                    $("#you_ck_yuan_phone").append('<li id="p+'+id+'" style="width: 90px">'+phone+'</li>');
                    $("#you_ck_yuan_zhi").append('<li id="z+'+id+'" style="width: 80px">'+zhi+'</li>');
                    $("#you_ck_yuan_quan").append('<li id="q+'+id+'" style="width: 80px">'+quan+'</li>');
                    
                }
                
                   
                
            }
        });
    });
    
});
/*员工查看部分*/




/*客户查看部分*/
$(document).ready(function(){
    $("#ck_hui").click(function(){
        $("#ck_hui").css("background","#FFFFFF");
        $("#ck_yuan,#ck_shang").css("background","#CCFFCC");
        
        
        /*隐藏其他框*/
        $("#you_shou").css("display","block");
        $("#you_yuan").css("display","none");
        $("#you_hui_xiugai").css("display","none");
        $("#you_hui").css("display","none");
        $("#you_shangpin").css("display","none");
        $("#you_shang_tian").css("display","none");
        /*隐藏其他框*/
        
        
        
        
        
        
        /*清空原先的数据*/
        $("#you_ck_yuan_id").html(null);
        $("#you_ck_yuan_name").html(null);
        $("#you_ck_yuan_ID").html(null);
        $("#you_ck_yuan_sex").html(null);
        $("#you_ck_yuan_add").html(null);
        $("#you_ck_yuan_number").html(null);
        $("#you_ck_yuan_phone").html(null);
        $("#you_ck_yuan_zhi").html(null);
        $("#you_ck_yuan_quan").html(null);
        
        /*清空原先的数据*/
        
        
         /*清空标识部分并重新显示*/
        $(".bianhua_id").text(null);
        $(".bianhua_name").text(null);
        $(".bianhua_ID").text(null);
        $(".bianhua_num").text(null);
        $(".bianhua_sex").text(null);
        $(".bianhua_add").text(null);
        $(".bianhua_phone").text(null);
        $(".bianhua_1").text(null);
        $(".bianhua_2").text(null);
        
        $(".bianhua_id").text('id');
        $(".bianhua_name").text('姓名');
        $(".bianhua_ID").text('身份证号');
        $(".bianhua_num").text('客户编号');
        $(".bianhua_sex").text('性别');
        $(".bianhua_add").text('住址');
        $(".bianhua_phone").text('电话');
        $(".bianhua_1").text('积分');
        $(".bianhua_2").text('客户类型');
        /*清空标识部分并重新显示*/
        
        $.ajax({
            type:"POST",
            data:{'aa':'2'},
            url:"php/guanli_ck.php",
            cache:false,
            error:function(error){alert(error);},
            success:function(data){
                var result=eval("("+data+")");
                for(var i=0;i<result.length;i++){
                    var id=result[i][0];
                    var name=result[i][1];
                    var ID=result[i][2];
                    var number=result[i][3];
                    var sex=result[i][4];
                    var add=result[i][5];
                    var phone=result[i][6];
                    var zhi=result[i][8];
                    var quan=result[i][9];
                    $("#you_ck_yuan_id").append('<li id="'+id+'" style="width: 30px;">'+id+'</li>');
                    $("#you_ck_yuan_name").append('<li id="n+'+id+'" style="width: 70px">'+name+'</li>');
                    $("#you_ck_yuan_ID").append('<li id="I+'+id+'" style="width: 140px">'+ID+'</li>');
                    $("#you_ck_yuan_number").append('<li id="m+'+id+'" style="width: 140px">'+number+'</li>');
                    $("#you_ck_yuan_sex").append('<li id="s+'+id+'" style="width: 50px">'+sex+'</li>');
                    $("#you_ck_yuan_add").append('<li id="a+'+id+'" style="width: 90px">'+add+'</li>');
                    $("#you_ck_yuan_phone").append('<li id="p+'+id+'" style="width: 90px">'+phone+'</li>');
                    $("#you_ck_yuan_zhi").append('<li id="z+'+id+'" style="width: 80px">'+zhi+'</li>');
                    $("#you_ck_yuan_quan").append('<li id="q+'+id+'" style="width: 80px">'+quan+'</li>');
                    
                }
                
                   
                
            }
        });
    });
});
/*客户查看部分*/





/*商品查看部分*/
$(document).ready(function(){
    $("#ck_shang").click(function(){
        $("#ck_shang").css("background","#FFFFFF");
        $("#ck_yuan,#ck_hui").css("background","#CCFFCC");
        
        
        /*隐藏其他框*/
        $("#you_shou").css("display","block");
        $("#you_yuan").css("display","none");
        $("#you_hui_xiugai").css("display","none");
        $("#you_hui").css("display","none");
        $("#you_shangpin").css("display","none");
        $("#you_shang_tian").css("display","none");
        /*隐藏其他框*/
        
        
        
        
        /*清空原先的数据*/
        $("#you_ck_yuan_id").html(null);
        $("#you_ck_yuan_name").html(null);
        $("#you_ck_yuan_ID").html(null);
        $("#you_ck_yuan_sex").html(null);
        $("#you_ck_yuan_add").html(null);
        $("#you_ck_yuan_number").html(null);
        $("#you_ck_yuan_phone").html(null);
        $("#you_ck_yuan_zhi").html(null);
        $("#you_ck_yuan_quan").html(null);
        
        /*清空原先的数据*/
        
        
        /*清空标识部分并重新显示*/
        $(".bianhua_id").text(null);
        $(".bianhua_name").text(null);
        $(".bianhua_ID").text(null);
        $(".bianhua_num").text(null);
        $(".bianhua_sex").text(null);
        $(".bianhua_add").text(null);
        $(".bianhua_phone").text(null);
        $(".bianhua_1").text(null);
        $(".bianhua_2").text(null);
        
        $(".bianhua_id").text('id');
        $(".bianhua_name").text('名称');
        $(".bianhua_ID").text('商品编号');
        $(".bianhua_num").text('商品单价');
        $(".bianhua_sex").text('数量');
        $(".bianhua_add").text('生产日期');
        $(".bianhua_phone").text('保质期');
        $(".bianhua_1").text('进价');
        $(".bianhua_2").text('利润');
        /*清空标识部分并重新显示*/
        
        
        
        $.ajax({
            type:"POST",
            data:{'aa':'3'},
            url:"php/guanli_ck.php",
            cache:false,
            error:function(error){alert(error);},
            success:function(data){
                var result=eval("("+data+")");
                for(var i=0;i<result.length;i++){
                    var id=result[i][0];
                    var name=result[i][1];
                    var ID=result[i][2];
                    var number=result[i][3];
                    var sex=result[i][4];
                    var add=result[i][5];
                    var phone=result[i][6];
                    var zhi=result[i][7];
                    var quan=result[i][8];
                    $("#you_ck_yuan_id").append('<li id="'+id+'" style="width: 30px;">'+id+'</li>');
                    $("#you_ck_yuan_name").append('<li id="n+'+id+'" style="width: 70px">'+name+'</li>');
                    $("#you_ck_yuan_ID").append('<li id="I+'+id+'" style="width: 140px">'+ID+'</li>');
                    $("#you_ck_yuan_number").append('<li id="m+'+id+'" style="width: 140px">'+number+'</li>');
                    $("#you_ck_yuan_sex").append('<li id="s+'+id+'" style="width: 50px">'+sex+'</li>');
                    $("#you_ck_yuan_add").append('<li id="a+'+id+'" style="width: 90px">'+add+'</li>');
                    $("#you_ck_yuan_phone").append('<li id="p+'+id+'" style="width: 90px">'+phone+'</li>');
                    $("#you_ck_yuan_zhi").append('<li id="z+'+id+'" style="width: 80px">'+zhi+'</li>');
                    $("#you_ck_yuan_quan").append('<li id="q+'+id+'" style="width: 80px">'+quan+'</li>');
                    
                }
                
                   
                
            }
        });
    });
});
/*商品查看部分*/
/*首页部分事件响应*/
