<?php
header("Content-type: text/html; charset=utf-8");
$username = $_POST["username"];
$password = $_POST["password"];
if ($username == "admin" && $password == "123") {
	echo $username.'欢迎登陆:'.'<a href="admin.html">请点击跳转</a>';
}else{
	echo "请确认账户及密码";
}
?>