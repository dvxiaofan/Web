/*
* @Author: xiaofan
* @Date:   2018-03-14 15:57:11
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-03-14 16:43:33
*/
$(document).ready(function ($) {
	$('#loginLink').click(function () {
		$('#layer-mask').show();
		$('#layer-pop').show();

		$('#layer-close').click(function () {
			$('#layer-mask').hide();
			$('#layer-pop').hide();
		})
	})
})



























