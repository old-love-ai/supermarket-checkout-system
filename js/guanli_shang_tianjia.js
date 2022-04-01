// JavaScript Document
$(document).ready(function(){
    $("#tj_shang").click(function(){
        $("#tj_shang").css("background","#FFFFFF");
        $("#xg_shang,#sc_shang").css("background","#CCFFCC");
        
        
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
        $("#you_shang_tian").css("display","block");
        
        /*隐藏其他块*/
    });
});


$(document).ready(function(){
    $("#shangpin_tianjia").click(function(){
        var name=$("#tianjia_shang_name").val();
        //var bian=$("#tianjia_shang_bian").val();
        //var dan=$("#tianjia_shang_dan").val();
        //var shuliang=$("#tianjia_shang_shuliang").val();
        
        //var zhibao=$("#tianjia_shang_zhi").val();
        //var jinjia=$("#tianjia_shang_jinjia").val();
        //var lirun=jinjia*1-dan*1;
        if(name!=""){
            alert("添加成功！");
        }
        else{
            alert("添加失败");
        }
    });
});