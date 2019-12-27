function savePaw() {
	if (!$("#saveid").prop("checked")) {
		$.cookie('manager', '', {
			expires : -1
		});
		$("#username").val('');
	}
}


function saveCookie() {
	if ($("#saveid").prop("checked")) {
		$.cookie('manager', $("#username").val(), {
			expires : 7
		});
	}
}

$(function () {
	//登录界面
	//管理员帐号验证
	$('#username').validatebox({
		required : true,
		missingMessage : '请输入登录帐号',
		invalidMessage : '管理员帐号不得为空',
	});
	
	//管理员密码验证
	$('#password').validatebox({
		required : true,
		validType : 'length[1,30]',
		missingMessage : '请输入登录密码',
		invalidMessage : '密码长度1-30',
	});
	
	//加载时判断验证
	// if (!$('#username').validatebox('isValid')) {
	// 	$('#username').focus();
	// } else if (!$('#password').validatebox('isValid')) {
	// 	$('#password').focus();
	// }
	
	
	//单击登录
	$('#loginBtn').click(function () {
		// if (!$('#username').validatebox('isValid')) {
		// 	$('#username').focus();
		// } else if (!$('#password').validatebox('isValid')) {
		// 	$('#password').focus();
		// } else {
		// 	var csrf = $('input[name="csrfmiddlewaretoken"]').val();
alert('开始登录')
			$.ajax({
				url : 'login',
				type : 'post',
				data : {
					// "username" : $('#username').val(),
					// "password" : $('#password').val(),
					// "csrfmiddlewaretoken": csrf
				},
				dataType: "json",
				beforeSend : function () {
					$.messager.progress({
						text : '正在登录中...',
					});
				},
				success : function (data, response, status) {
					$.messager.progress('close');
					if (data.success) {
						alert('登录成功');
						// saveCookie();
						// location.href = 'index';
					} else {
						$.messager.alert('登录失败！', data.msg, 'warning', function () {
							$('#password').select();
						});
					}
				}
			});
		// }
	});
	
});







