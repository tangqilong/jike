<?php
    $con = mysql_connect("localhost","root","");
    if (!$con) {
        die('error'.mysql_error());
    }else{
        mysql_select_db("PHPlesson");
        $newstitle = $_REQUEST['newstitle'];
        $newsimg = $_REQUEST['newsimg'];
        $newscontent = $_REQUEST['newscontent'];
        $addtime = $_REQUEST['addtime'];
        $sql = "INSERT INTO `news`(`newstitle`, `newsimg`, `newscontent`, `addtime`) VALUES ('".$newstitle."','".$newsimg."','".$newscontent."','".$addtime."')";
        mysql_query("set names 'utf8'");
        $result = mysql_query($sql);
        if (!$result) {
            die('Error'.mysql_error());
        }else{
            echo "success";
        }
    }
mysql_close($con);
?>