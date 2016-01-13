
$('#username').blur(function() {
	var userid = $(this).val();
	$.ajax({
		url: '/admin/userAjax/'+userid,
		success: function(data) {
			if (data == 1) {
				$('#username').css('border-color', 'green');
			} else {
				$('#username').css('border-color', 'red');
			}
		}
	})
});

$('#login-form').on('submit',function(){
	$.ajax({
		url:'/admin/userLogin/',
		type:'post',
		data:{'username':$('#username').val(),'password':$('#password').val()},
		success:function(data){
			if(data==0){
				$('.errlogin').css('visibility','visible');
			}
		}
	});
});
