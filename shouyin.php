<?php
session_start();
header('Content-type:text/html; charset=utf8');
$usernumber=isset($_SESSION['usernumber'])?$_SESSION['usernumber']:null;
$username=$_SESSION['username'];
$userroot=$_SESSION['userroot'];
if($username==null or $usernumber==null  or $userroot==null)
{
    echo '<script>window.location.href="denglu.html";alert("请先登录！");</script>';
} 
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
    <link rel="stylesheet" type="text/css" href="css/shouyin.css">
    <script src="../js/jquery-3.5.1.min.js" type="text/javascript" charset="utf-8"></script>
    <script>
        $(document).ready(function(e) {
            //绑定事件
            $('#jisuan').click(function(){
                var number=$("#number").val();
                var shuliang=$("#num").val();
                var zongjia=$("#zongjia").text();
                var aa=zongjia+1;
                if(shuliang==""){
                    shuliang=1;
                }
                //调用ajax获取商品编号
                var my_json={'number':number};
                $.ajax({
                    type:"POST",
                    data:my_json,
                    url:"shouyin_ajax.php",
                    cache:false,
                    error:function(error){alert(error);},
                    success:function(data){
                        var jg=jQuery.parseJSON(data);
                        //$('#xianshi').text(jg.jg['商品名称']);
                        $("#xianshi").append('<li id="'+jg.jg['商品编号']+'">'+jg.jg['商品名称']+'</li>');
                        $("#jiage").append('<li id="n_'+jg.jg['商品编号']+'">'+jg.jg['商品单价']+'元</li>');
                        $("#geshu").append('<li id="s_'+jg.jg['商品编号']+'">'+shuliang+'</li>');
                        var danjia=jg.jg['商品单价'];
                        zongjia=zongjia*1+danjia*1*shuliang;
                        $("#zongjia").text(zongjia);
                    }
                
                });
               
                $("#number").val(null);
                $("#num").val(null);
            });
            
        });
        $(document).ready(function(e){
           $("#dayin").click(function(){
               var zongjia=$("#zongjia").text();
               if(zongjia!=0){
                   $(".xianshi_2").html($("#shouyin_zuo").html());
                   $(".kuang_2").css("display","block");
                   $(".kuang").css("display","none"); 
                   var huiyuan=$("#huiyuan").val();
                   if(huiyuan==""){
                       $("#shifu").text(zongjia);
                       $("#huode").text(0);
                       $("#jifen").text(0);
                   }
                   else{
                        var lianjie='k'+huiyuan;
                        $("#bianhao").text(lianjie);
                        var my_json={'number':lianjie};
                        $.ajax({
                            type:"POST",
                            data:my_json,
                            url:"jiezhang_ajax.php",
                            cache:false,
                            error:function(error){alert(error);},
                            success:function(data){
                                var jg=jQuery.parseJSON(data);
                                var aa=jg.jg['客户类型'];
                                var bb=jg.jg['积分'];
                                var jifen=bb*1+zongjia*1;
                                $("#huode").text(zongjia);
                                $("#jifen").text(jifen);
                                if(aa=='普通会员'){
                                    var shiji=zongjia*1*(0.9);
                                    $("#shifu").text(shiji);
                                }
                                else{
                                    if(aa=='超级会员'){
                                        shiji=zongjia*1*(0.75);
                                        $("#shifu").text(shiji); 
                                    }
                                    else{

                                    }
                                }
                            }  

                       });
                   }
                   
               }
               else{
                   if(zongjia==0){
                       $(".kuang_2").css("display","none");
                   }
                   
               }
               
               
           }); 
        });
        $(document).ready(function(e){
           $("#queren").click(function(){
               var huiyuan=$("#huiyuan").val();
               var lianjie='k'+huiyuan;
               alert(lianjie);
               $(".kuang_3").css("display","block");
               $(".kuang_2").css("display","none");
               if(huiyuan==""){
                   $("#wancheng").text("结算成功！");
               }
               else{
                   var jifen=$("#jifen").text();
                   $.ajax({
                       type:"POST",
                       data:{
                           'number':lianjie,
                           'jifen':jifen
                       },
                       url:"wancheng_ajax.php",
                       cache:false,
                       error:function(error){alert(error);},
                       success:function(data){
                           var jg=jQuery.parseJSON(data);
                           if(jg.jg==1){
                              $("#wancheng").text("结算成功！"); 
                           }
                           else{
                             $("#wancheng").text("结算失败！");  
                           }
                       }
                   });
               }
           });
        });
        $(document).ready(function(e){
           $("#fanhui").click(function(){
               window.location.href="shouyin.php";
           });
        });
        
    </script>
</head>

<body background="images/1.jpg">
    <h1>
		超市收银系统<sup>V2020</sup>
    </h1>
    <div class="kuang">
        <div id="shouyin_you" style="width: 300px;margin-top: 100px; border: 0px ">
            <div id="jianju">
                <label style="font-size: 15px">
                    商品编号：
                </label>
                <input name="number" id="number" placeholder="请输入商品编号" style="margin-bottom: 20px;  "/>
            </div >
            <div id="jianju">
                <lable>
                    商品数量：
                </lable>
                <input name="num" id="num" placeholder="请输入商品数量" style="margin-bottom: 20px;"/>
            </div id="jianju">
            <div>
                <lable>
                    会员编号：
                </lable>
                <input name="huiyuan" id="huiyuan" placeholder="请输入会员号" style="margin-bottom: 20px;"/>
            </div>
            <button id="jisuan" style="margin-left: 50px;" >输入</button>
            <button id="dayin" style="margin-left: 20px;">打印</button>
        </div>
        <div id="shouyin_zuo" style="float: left;margin-top: 20px ">
            <div id="bian" style="border-top: 1px dashed #7C7A7A;border-bottom: 1px dashed #7C7A7A;float: left;margin-top: 10px" >
                <div class="mingcheng" >
                    <div class="shangpin" style="display:inline ;">商品名称</div>
                    <div class="shangpin" style="display:inline ;margin-left: 20px">商品价格</div>
                    <div class="shangpin" style="display:inline ;margin-left: 20px;">商品数量</div>
                </div>
                <div id="xianshi" style="border: 0px"> 
                </div>
                <div id="jiage" style="margin-left: 17px; border:0px;"> 
                </div>
                <div id="geshu" style="margin-left: 17px;border:0px;"> 
                </div>
            </div>
            
            <div id="zongji" class="shangpin" style="margin-top: 19px;">
                总&emsp;&emsp;计:<span id="zongjia">0</span>元
            </div>
            
        </div>
        
    </div>
    <div class="kuang_2">
        <div>
            会员编号:<span id="bianhao"></span>
        </div>
        <div class="xianshi_2"></div>
        <div id="dazhe">实付金额:<span id="shifu"></span>元</div>
        <div id="huodejifen" style="font-size: 16px">获得积分:<span id="huode"></span></div>
        <div id="jifen_xian" style="font-size: 16px">积&emsp;&emsp;分:<span id="jifen"></span></div>
        <div>
            <button id="queren" style="margin-left:160px ;margin-bottom: 20px">确认结账</button>
        </div>
        
    </div>
    <div class="kuang_3">
        <div style="margin-top: 150px">
            <div id="wancheng" style="font-size: 16px;margin-left: 100px;margin-top: 150px;"></div>
            <button id="fanhui" style="margin-top:5px;margin-left: 200px">返回</button>
        </div>
        
    </div>
</body>
</html>