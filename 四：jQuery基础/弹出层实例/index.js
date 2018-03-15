/*
* @Author: xiaofan
* @Date:   2018-03-14 15:57:11
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-03-14 22:00:12
*/
$(document).ready(function ($) {
	$('#loginLink').click(function () {
		// 获取HTML
		var loginHtml = $('#loginHtml').html();
		showLayer(loginHtml,400, 300,closeCallback);

		// 登录校验
		$('#loginSubmitBtn').click(function () {
			var username = $("input[name = 'username']").val();
			var password = $("input[name = 'password']").val();
			if (username == 'xiaofan' && password == 'xiaofan') {
				alert("登录成功");
			} else {
				$(".error-msg").html("账号或密码输入错误");
			}
		}) 
	})

	$('#regeLink').click(function () {
		// 获取HTML
		var regeHtml = $('#regeHtml').html();
		showLayer(regeHtml,400, 300, closeCallback);

		// 登录校验
		$('#regeSubmitBtn').click(function () {
			var password = $("input[name = 'password']").val();
			var repassword = $("input[name = 'repassword']").val();
			if (password === repassword) {
				alert("注册成功");
			} else {
				$(".error-msg").html("密码输入不一致");
			}
		})
	})

	function closeCallback() {
		$(".error-msg").html("");
	}

	// 打开弹出层
	function showLayer(html,width,height,closeCallback) {
		$('#layer-mask').show();
		$('#layer-pop').show();
		// jQuery动态设置样式
		$('#layer-pop').css({
			width:width,
			height:height
		})
		// 填充登录HTML
		$('#layer-content').html(html);
		$('#layer-close').click(function () {
			hideLayer();
			// 关闭回调函数
			closeCallback();
		})
	}

	// 关闭弹出层
	function hideLayer() {
		$('#layer-mask').hide();
		$('#layer-pop').hide();
	}
})



























