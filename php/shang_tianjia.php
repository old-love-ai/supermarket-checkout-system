<?php
session_start();
header('Content-type:text/html; charset=utf8');
//接受ajax数据
$aa=json_encode(@$_POST);//将接受的数据转为标准php的json
$bb=json_decode($aa);//将json转化为php标准类
//处理数据	
//打开数据库
$name=$bb->name;
$bian=$bb->bian;
$dan=$bb->dan;
$shuliang=$bb->shuliang;
$zhibao=$bb->zhibao;
$jinjia=$bb->jinjia;
$lirun=$bb->lirun;
$ab=$bb->ab;
$riqi='2020-06-01';

if($ab==1)
{
    $conn=new mysqli('localhost','root','Zhy0626@','zhouhangyong');
    if($conn->connect_error)
    {
        die($conn->connect_error);
    }
    $conn->query('SET NEMES utf8mb4');
    $str="INSERT INTO shangpin".
            "(商品名称,商品编号,商品单价,商品数量,生产日期,质保期,进价,利润) ".
            "VALUES ".
        "('$name','$bian','$dan','$shuliang','$riqi','$zhibao','$jinjia','$lirun')";
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