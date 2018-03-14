/*
* @Author: xiaofan
* @Date:   2018-03-14 15:57:11
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-03-14 17:13:53
*/
$(document).ready(function ($) {
	$('#loginLink').click(function () {
		// $('#layer-mask').show();
		// $('#layer-pop').show();

		// $('#layer-close').click(function () {
		// 	$('#layer-mask').hide();
		// 	$('#layer-pop').hide();
		// })

		// 获取HTML
		var loginHtml = $('#loginHtml').html();

		showLayer(loginHtml);
	})

	// 打开弹出层
	function showLayer(html) {
		$('#layer-mask').show();
		$('#layer-pop').show();
		// 填充登录HTML
		$('#layer-content').html(html);
		$('#layer-close').click(function () {
			hideLayer();
		})
	}

	// 关闭弹出层
	function hideLayer() {
		$('#layer-mask').hide();
		$('#layer-pop').hide();
	}
})



























