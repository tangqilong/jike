/**
 * Created by Administrator on 2015/11/24.
 */
$(document).ready(function(){
    $('#btn').click(function(e){
        e.preventDefault();
        $.ajax({
            url:'bootstrap.php',
            data:{
                username:$('#username').val(),
                password:$('$password').val()
            },
            dataType:'json',
            type:'post',
            success:function(d){
                alert(d.msg+","+ d.errorCode + "，正在跳转中...");
                window.location.href = d.address;
            },
            error:function(d){
                console.log("登录失败");
                window.location.href = "bootstrap.html";
            }
        });
    });
});