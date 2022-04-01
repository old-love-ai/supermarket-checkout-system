<?php
session_start();
header('COntent-Type:text/html;charset=utf-8');
$number=$_POST['number'];
$number1='G'.$number;
$passd=$_POST['passd'];
if($number==null or $passd==null)
{
    echo '<script>window.location.href="denglu.html";alert("用户名或密码为空！");</script>';
	exit();
}
else
{
    $conn=new mysqli('localhost','root','Zhy0626@','zhouhangyong');
    if($conn->connect_error)
    {
        die($conn->connect_error);
    }
    $conn->query('SET NEMES utf8mb4');
    $str="select * from yuangong where 员工编号='$number1'";
    $rs=$conn->query($str);
    if($rs->num_rows>0)
    {
        while($row=$rs->fetch_assoc())
        {
            $usernumber=$row['员工编号'];
            $username=$row['姓名'];
            $userroot=$row['权限'];
            //echo $usernumber;
            if($passd==$row['密码'])
            {
                if($row['权限']=='管理员')
                {
                    $_SESSION['usernumber']=$usernumber;
                    $_SESSION['username']=$username;
                    $_SESSION['userroot']=$userroot;
                    echo '<script>window.location.href="guanli.php";alert("欢迎上班！");</script>';
                    exit();
                    
                }
                else
                {
                    if($row['权限']=='收银')
                    {
                        $_SESSION['usernumber']=$usernumber;
                        $_SESSION['username']=$username;
                        $_SESSION['userroot']=$userroot;
                        echo '<script>window.location.href="shouyin.php";alert("欢迎上班！");</script>';
                    }
                    else
                    {
                        echo '<script>window.location.href="denglu.html";alert("对不起！您没有权限请于管理员联系！");</script>';
                    }
                    
                }
            }
            else
            {
                echo '<script>window.location.href="denglu.html";alert("密码错误！");</script>';
            }
        }
        
    }
    
    
}

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