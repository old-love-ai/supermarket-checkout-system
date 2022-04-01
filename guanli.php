<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<title>无标题文档</title>
    <link rel="stylesheet" type="text/css" href="css/guanli.css">
    <script src="../js/jquery-3.5.1.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="js/guanli_shouye.js" type="text/javascript"></script>
    <script src="js/guanli_yuan.js" type="text/javascript"></script>
    <script src="js/guanli_huiyuan.js" type="text/javascript"></script>
    <script src="js/guanli_shang.js" type="text/javascript"></script>
    <script src="js/guanli_shang_tianjia.js" type="text/javascript"></script>
    <script src="js/guanli_huiyuan_tianjia.js" type="text/javascript"></script>
    <script>
        $(document).ready(function(e){
            $("#aa").bind("111",function(){
            /*首页员工信息自动响应显示响应部分*/
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
            $("#aa").trigger("111");
        });
    </script>
</head>
<body background="images/1.jpg">
    <h1>
		超市收银系统<sup>V2020</sup>
    </h1>
    <div class="kuang">
        <div id="zuo">
            <div id="shouye"  class="tongyi" style="cursor:pointer; background: #FFFFFF" onClick="shouye(a)">首&emsp;&emsp;页</div>
            
            
            <div id="ck_yuan" class="tongyi1" style="display: none;background: #FFFFFF">查看员工信息</div>
            <div id="ck_hui" class="tongyi1" style="display: none;">查看会员信息</div>
            <div id="ck_shang"class="tongyi1" style="display: none;">查看商品信息</div>
            
            
            <div id="yuangong" class="tongyi" style="cursor:pointer;">员工管理</div>
            
            
            <div id="tj_yuan" class="tongyi1" style="display: none;">添加员工信息</div>
            <div id="xg_yuan" class="tongyi1" style="display: none;">修改员工信息</div>
            <div id="sc_yuan" class="tongyi1" style="display: none;">删除员工信息</div>
            
            
            <div id="huiyuan" class="tongyi" style="cursor:pointer;">会员管理</div>
            
            
            <div id="tj_hui" class="tongyi1" style="display: none;">添加会员信息</div>
            <div id="xg_hui" class="tongyi1" style="display: none;">修改会员信息</div>
            <div id="sc_hui" class="tongyi1" style="display: none;">删除会员信息</div>
            
            
            <div id="shangpin" class="tongyi" style="cursor:pointer;">商品管理</div>
            
            
            <div id="tj_shang" class="tongyi1" style="display: none;">添加商品信息</div>
            <div id="xg_shang" class="tongyi1" style="display: none;">修改商品信息</div>
            <div id="sc_shang" class="tongyi1" style="display: none;">删除商品信息</div>
            
            
        </div>
        <div id="you">
            
           <!-- 首页部分事件响应-->
            <div id="you_shou" style="width:779px;height: 530px ">
                
                <div id="you_header" style="width: 779px">
                    
                    <div id="you_gongxiang" class="bianhua_id" style="width: 30px">id</div>
                    <div id="you_gongxiang" class="bianhua_name" style="width: 70px">姓名</div>
                    <div id="you_gongxiang" class="bianhua_ID" style="width: 140px">身份证号</div>
                    <div id="you_gongxiang" class="bianhua_num" style="width: 140px">员工编号</div>
                    <div id="you_gongxiang" class="bianhua_sex" style="width: 50px">性别</div>
                    <div id="you_gongxiang" class="bianhua_add" style="width: 90px">住址</div>
                    <div id="you_gongxiang" class="bianhua_phone" style="width: 90px">电话号码</div>
                    <div id="you_gongxiang" class="bianhua_1" style="width: 80px">职务</div>
                    <div id="you_gongxiang" class="bianhua_2" style="width: 80px;">权限</div>
                </div>

                <div id="you_ck_yuan">
                    
                    <div id="you_ck_yuan_id" style="float:left">
                    </div>
                    <div id="you_ck_yuan_name" style="float: left;">
                    </div>
                    <div id="you_ck_yuan_ID" style="float: left">
                    </div>
                    <div id="you_ck_yuan_number" style="float: left">
                    </div>
                    <div id="you_ck_yuan_sex" style="float: left">
                    </div>
                    <div id="you_ck_yuan_add" style="float: left">
                    </div>
                    <div id="you_ck_yuan_phone" style="float: left">
                    </div>
                    <div id="you_ck_yuan_zhi" style="float: left">
                    </div>
                    <div id="you_ck_yuan_quan" style="float: left">
                    </div>
                    

                </div>
                
            </div>
            <!-- 首页部分事件响应-->
            
            
            <!--员工部分事件响应-->
            <div id="you_yuan" style="display: none">
                
                <div id="you_yuan_tianjia" style="border: 0px solid #000; margin: 0 auto;margin-left: 240px">
                    
                    <div style="margin-top: 50px">
                        <span>姓&emsp;&emsp;名：</span><input type="text" id="you_yuan_name"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>身份证号：</span><input type="text" id="you_yuan_ID" >
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>密&emsp;&emsp;码：</span><input type="text" id="you_yuan_passd"/>
                    </div>
                    
                
                    <div style="margin-top: 20px">
                        <span>性&emsp;&emsp;别：</span>
                        男<input type="radio" name="you_yuan_sex" id="you_yuan_sex" class="sex" value="男" checked="checked">
                        女<input type="radio" name="you_yuan_sex" id="you_yuan_sex"  class="sex" value="女">
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>地&emsp;&emsp;址：</span><input type="text" id="you_yuan_add"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>电话号码：</span><input type="text" id="you_yuan_phone"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>职&emsp;&emsp;位：</span><input type="text" id="you_yuan_zhi"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>权&emsp;&emsp;限：</span><input type="text" id="you_yuan_quan"/>
                    </div>
                    
                    <button id="tianjia" style="width: 100px;height: 30px;background:#47ABA7;
                    border: 1px solid #eee;border-radius: 10px;margin-left: 50px; margin-top: 20px ">添加</button>
                    
                </div>
                <div id="you_yuan_xiu" style="border: 0px solid #000; margin: 0 auto;margin-left: 240px">
                    <div style="height: 40px;margin-top: 50px">
                        <span>身份证号：</span><input name="you_xiu_chaxun" id="you_xiu_chaxun" type="text"/>
                        <button id="you_xiu_cx">查询</button>
                    </div>
                     <div style="margin-top: 20px">
                        <span>姓&emsp;&emsp;名：</span><input type="text" id="you_xiu_name"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>身份证号：</span><input type="text" id="you_xiu_ID" >
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>密&emsp;&emsp;码：</span><input type="text" id="you_xiu_passd"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>地&emsp;&emsp;址：</span><input type="text" id="you_xiu_add"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>电话号码：</span><input type="text" id="you_xiu_phone"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>职&emsp;&emsp;位：</span><input type="text" id="you_xiu_zhi"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>权&emsp;&emsp;限：</span><input type="text" id="you_xiu_quan"/>
                    </div>
                    
                    <button id="you_yuan_xiugai" style="width: 100px;height: 30px;background:#47ABA7;
                    border: 1px solid #eee;border-radius: 10px;margin-left: 50px; margin-top: 20px ">修改</button>
                    <div id="tishi"></div>
                    
                    
                </div>
                
                <div id="you_yuan_shanchu" style="display: none" style="margin-left: 240px">
                    <div style="margin-left: 240px;margin-top: 180px">
                        <span>员工编号：</span><input id="you_yuan_shan"/>
                    </div>
                    
                    <button id="you_shan_sc" style="width: 100px;height: 30px;background:#47ABA7;
                    border: 1px solid #eee;border-radius: 10px;margin-left: 290px; margin-top: 20px ">删除</button>
                </div>
                
            <!--员工部分事件响应-->
            </div>
            <div id="you_hui" style="display: none">
                <div id="you_hui_tianjia" style="border: 0px solid #000; margin: 0 auto;margin-left: 240px">
                    <div style="margin-top: 50px">
                        <span>姓&emsp;&emsp;名：</span><input type="text" id="you_hui_name"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>身份证号：</span><input type="text" id="you_hui_ID" >
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>性&emsp;&emsp;别：</span>
                        男<input type="radio" name="you_hui_sex" id="you_hui_sex" class="sex" value="男" checked="checked">
                        女<input type="radio" name="you_hui_sex" id="you_hui_sex"  class="sex" value="女">
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>地&emsp;&emsp;址：</span><input type="text" id="you_hui_add"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>电话号码：</span><input type="text" id="you_hui_phone"/>
                    </div> 
                    <div style="margin-top: 20px">
                        <span>客户类型：</span><input type="text" id="you_hui_quan"/>
                    </div>
                    
                    <button id="hui_tianjia" style="width: 100px;height: 30px;background:#47ABA7;
                    border: 1px solid #eee;border-radius: 10px;margin-left: 50px; margin-top: 20px ">添加</button>
                    
                </div> 
                <div id="you_hui_xiugai" style="border: 0px solid #000; margin: 0 auto;margin-left: 240px">
                    <div style="height: 40px;margin-top: 40px">
                        <span>身份证号：</span><input name="hui_xiu_chaxun" id="hui_xiu_chaxun" type="text"/>
                        <button id="hui_xiu_cx">查询</button>
                    </div>
                     <div style="margin-top: 20px">
                        <span>姓&emsp;&emsp;名：</span><input type="text" id="hui_xiu_name"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>身份证号：</span><input type="text" id="hui_xiu_ID" >
                    </div>
                    
                    
                    
                    <div style="margin-top: 20px">
                        <span>地&emsp;&emsp;址：</span><input type="text" id="hui_xiu_add"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>电话号码：</span><input type="text" id="hui_xiu_phone"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>积&emsp;&emsp;分：</span><input type="text" id="hui_xiu_zhi"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>剩余金额：</span><input type="text" id="hui_xiu_passd"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>会员级别：</span><input type="text" id="hui_xiu_quan"/>
                    </div>
                    
                    <button id="you_tijiao_xiugai" style="width: 100px;height: 30px;background:#47ABA7;
                    border: 1px solid #eee;border-radius: 10px;margin-left: 50px; margin-top: 20px ">修改</button>
                    
                    
                </div>
                <div id="you_hui_shanchu" style="display: none;margin: 0 auto;margin-left: 240px;margin-top: 130px">
                    <div >
                        <span>电话号码：</span><input id="you_hui_shan1"/>
                    </div>
                    <div>
                        <button id="you_hui_sc" style="width: 100px;height: 30px;background:#47ABA7;
                    border: 1px solid #eee;border-radius: 10px;margin-left: 60px; margin-top: 20px ">删除</button>
                    </div>
                </div>
            </div>
            <div id="you_shangpin" style="display: none">
                <div id="you_shang_tian" style="border: 0px solid #000; margin: 0 auto;margin-left: 240px;margin-top: 80px">
                    <div style="margin-top: 20px">
                        <span>商品名称：</span>
                        <input id="tianjia_shang_name" type="text"/>
                    </div>
                    <div style="margin-top: 20px">
                        <span>商品编号：</span>
                        <input id="tianjia_shang_bian"/>
                    </div>
                    <div style="margin-top: 20px">
                        <span>商品单价：</span>
                        <input id="tianjia_shang_dan"/>
                    </div>
                    <div style="margin-top: 20px">
                        <span>商品数量：</span>
                        <input id="tianjia_shang_shuliang"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>商品质保：</span>
                        <input id="tianjia_shang_zhi"/>
                    </div>
                    <div style="margin-top: 20px">
                        <span>商品进价：</span>
                        <input id="tianjia_shang_jinjia"/>
                    </div>
                    <button id="shangpin_tianjia" style="width: 100px;height: 30px;background:#47ABA7;
                    border: 1px solid #eee;border-radius: 10px;margin-left: 50px; margin-top: 20px ">添加</button>
                </div>
            </div>
            
            
            
            
            <div id="you_shangpin_xiugai" style="display:none;border: 0px solid #000; margin: 0 auto;margin-left: 240px;margin-top: 80px">
                    <div style="margin-top: 20px">
                        <span>商品名称：</span>
                        <input id="xiu_shang_name" type="text"/>
                    </div>
                    <div style="margin-top: 20px">
                        <span>商品编号：</span>
                        <input id="xiu_shang_bian"/>
                    </div>
                    <div style="margin-top: 20px">
                        <span>商品单价：</span>
                        <input id="xiu_shang_dan"/>
                    </div>
                    <div style="margin-top: 20px">
                        <span>商品数量：</span>
                        <input id="xiu_shang_shuliang"/>
                    </div>
                    
                    <div style="margin-top: 20px">
                        <span>商品质保：</span>
                        <input id="xiu_shang_zhi"/>
                    </div>
                    <div style="margin-top: 20px">
                        <span>商品进价：</span>
                        <input id="xiu_shang_jinjia"/>
                    </div>
                    <button id="shangpin_xiugai" style="width: 100px;height: 30px;background:#47ABA7;
                    border: 1px solid #eee;border-radius: 10px;margin-left: 50px; margin-top: 20px ">修改</button>
                
            </div>
            <div id="you_shangpin_shanchu" style="display:none;border: 0px solid #000; margin: 0 auto;margin-left: 240px;margin-top: 140px">
                <div>
                    <span>商品编号：</span><input id="you_shang_bianhao1"/>
                </div>
               
                    <button id="you_shang_sc" style="width: 100px;height: 30px;background:#47ABA7;
                    border: 1px solid #eee;border-radius: 10px;margin-left: 50px; margin-top: 20px ">删除</button>
            </div>
            
    </div>
    <div id="aa" style="display:none"></div>
</body>
</html>
