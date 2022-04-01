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
$sex=$bb->sex;
$add=$bb->add;
$phone=$bb->phone;
$quan=$bb->quan;
$ab=$bb->ab;

if($ab==1)
{
    $conn=new mysqli('localhost','root','Zhy0626@','zhouhangyong');
    if($conn->connect_error)
    {
        die($conn->connect_error);
    }
    $conn->query('SET NEMES utf8mb4');
    $str="INSERT INTO kehu".
            "(姓名,身份证号,客户编号,性别,住址,电话,剩余金额,积分,客户类型) ".
            "VALUES ".
        "('$name','$ID','$number','$sex','$add','$phone',300,0,'$quan')";
    $rs=$conn->query($str);
    $tag=1;
    if(!$rs)
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