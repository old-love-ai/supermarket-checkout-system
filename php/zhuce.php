<?php
session_start();
$server='localhost';
$user='root';
$pass='Zhy0626@';
$db='qimo';
	header('COntent-Type:text/html;charset=utf-8');
	$conn=new mysqli($server,$user,$pass,$db);//连接数据库
	$conn->query('SET NAMES utf8mb4');//设置显示数据库中文
	if($conn->connect_error)//$conn->connect_error 存放连接错误信息，有值说明连接错误
	{
		die('数据库连接错误'.$conn->connect_error);
	}
	$sql="INSERT INTO zhuce (cname,ctou,cpassd,csex,cphone,cadd)
			VALUES ('$name','$tou', '$passd','$sex','$phone','$add')";
	mysqli_select_db( $conn, 'qimo' );
	if($conn->query($sql)==TRUE)
			{
				echo '<script>window.location.href="denglu.html";alert("数据写入成功！");</script>';
				exit();
			}
			else
			{
				echo "数据添加失败：".$conn->error;
			}
	$conn->close();	
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>
</body>
</html>