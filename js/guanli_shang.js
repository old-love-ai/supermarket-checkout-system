// JavaScript Document
/*商品部分事件响应*/
$(document).ready(function(){
    $("#shangpin").click(function(){
        $("#yuangong,#shouye,#huiyuan").css("background","#CCFF99");
        $("#shangpin").css("background","#FFFFFF");
        
        $("#sc_shang,#tj_shang,#xg_shang").css("background","#CCFFCC");
        
        
        
        $("#tj_shang,#xg_shang,#sc_shang").slideToggle();
        
        
        $("#ck_yuan,#ck_hui,#ck_shang").slideUp();
        
        
        
        $("#tj_yuan,#xg_yuan,#sc_yuan").slideUp();
        
        
        $("#tj_hui,#xg_hui,#sc_hui").slideUp();
        
    });
});


$(document).ready(function(){
    $("#xg_shang").click(function(){
        $("#xg_shang").css("background","#FFFFFF");
        $("#tj_shang,#sc_shang").css("background","#CCFFCC");
        
        
        /*隐藏其他块*/
        $("#you_shou").css("display","none");
        $("#you_yuan").css("display","none");
        $("#you_yuan_tianjia").css("display","none");
        $("#you_yuan_xiu").css("display","none");
        $("#you_yuan_shanchu").css("display","none");
        $("#you_hui_xiugai").css("display","none");
        $("#you_hui").css("display","none");
        
        $("#you_hui").css("display","block");
        $("#you_hui_tianjia").css("display","none");
        $("#you_hui_shanchu").css("display","none");
        $("#you_shangpin").css("display","block");
        $("#you_shang_tian").css("display","none");
        $("#you_shangpin_xiugai").css("display","block");
        
        /*隐藏其他块*/
        
        
        
    });
});


$(document).ready(function(){
    $("#shangpin_xiugai").click(function(){
        var name=$("#xiu_shang_name").val();
        if(name!=""){
            alert('修改成功');
        }
        else{
            alert('修改失败');
        }
    });
});





$(document).ready(function(){
    $("#sc_shang").click(function(){
        $("#sc_shang").css("background","#FFFFFF");
        $("#tj_shang,#xg_shang").css("background","#CCFFCC");
        
        /*隐藏其他块*/
        $("#you_shou").css("display","none");
        $("#you_yuan").css("display","none");
        $("#you_yuan_tianjia").css("display","none");
        $("#you_yuan_xiu").css("display","none");
        $("#you_yuan_shanchu").css("display","none");
        $("#you_hui_xiugai").css("display","none");
        $("#you_hui").css("display","none");
        
        $("#you_hui").css("display","block");
        $("#you_hui_tianjia").css("display","none");
        $("#you_hui_shanchu").css("display","none");
        $("#you_shangpin").css("display","block");
        $("#you_shang_tian").css("display","none");
        $("#you_shangpin_xiugai").css("display","none");
        $("#you_shangpin_shanchu").css("display","block");
        
        /*隐藏其他块*/
        
        
        
    });
});


$(document).ready(function(){
    $("#you_shang_sc").click(function(){
        var name=$("#you_shang_bianhao1").val();
        if(name!=""){
            alert('修改成功');
        }
        else{
            alert('修改失败');
        }
    });
});
/*商品部分事件响应*/
