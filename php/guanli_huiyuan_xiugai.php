<?php
session_start();
header('Content-type:text/html; charset=utf8');
//接受ajax数据
$aa=json_encode(@$_POST);//将接受的数据转为标准php的json
$bb=json_decode($aa);//将json转化为php标准类
//处理数据	
//打开数据库
$name=$bb->name;
$ID=$bb->ID;
$number=$bb->number;
$add=$bb->add;
$phone=$bb->phone;
$jifen=$bb->jifen;
$quan=$bb->quan;
$chaxun=$bb->chaxun;
if($bb->panduan==1)
{
    $conn=new mysqli('localhost','root','Zhy0626@','zhouhangyong');
    if($conn->connect_error)
    {
        die($conn->connect_error);
    }
    $conn->query('SET NEMES utf8mb4');
    $str="UPDATE kehu
    SET 姓名='$name',身份证号='$ID',客户编号='$number',住址='$add',电话号码='$phone',积分='$jifen',客户类型='$quan' 
    WHERE 客户编号='$chaxun'";
    $rs=$conn->query($str);
    $tag=1;
    if($rs)
    {
        $tag=0;
    }
    $conn->close();
    //返回ajax数据
    $cc=array('jg'=>$tag);//组织php数据
    $dd=json_encode($cc);//转化为json格式
    echo $dd;//发送json 
}


?>