<?php
session_start();
header('Content-type:text/html; charset=utf8');
//接受ajax数据
$aa=json_encode(@$_POST);//将接受的数据转为标准php的json
$bb=json_decode($aa);//将json转化为php标准类
if($bb->aa==1)
{
    //处理数据	
    //打开数据库
    $conn=new mysqli('localhost','root','Zhy0626@','zhouhangyong');
    if($conn->connect_error)
    {
        die($conn->connect_error);
    }
    $conn->query('SET NEMES utf8mb4');
    $result=$conn->query("select * from yuangong");
    //$conn->query()获取的是二进制
    //将查询的结果集封装到一个数组里
    $css=$result->fetch_all();
    //以json的格式发送ajax的success中由data接收
    echo json_encode($css);
    $conn->close();
}
if($bb->aa==2)
{
    //处理数据	
    //打开数据库
    $conn=new mysqli('localhost','root','Zhy0626@','zhouhangyong');
    if($conn->connect_error)
    {
        die($conn->connect_error);
    }
    $conn->query('SET NEMES utf8mb4');
    $result=$conn->query("select * from kehu");
    //$conn->query()获取的是二进制
    //将查询的结果集封装到一个数组里
    $css=$result->fetch_all();
    //以json的格式发送ajax的success中由data接收
    echo json_encode($css);
    $conn->close();
    
}
if($bb->aa==3)
{
    //处理数据	
    //打开数据库
    $conn=new mysqli('localhost','root','Zhy0626@','zhouhangyong');
    if($conn->connect_error)
    {
        die($conn->connect_error);
    }
    $conn->query('SET NEMES utf8mb4');
    $result=$conn->query("select * from shangpin");
    //$conn->query()获取的是二进制
    //将查询的结果集封装到一个数组里
    $css=$result->fetch_all();
    //以json的格式发送ajax的success中由data接收
    echo json_encode($css);
    $conn->close();
    
}

?>