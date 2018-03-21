/*
* @Author: xiaofan
* @Date:   2018-03-20 16:14:13
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-03-21 12:37:07
*/

// ui-search 定义
$.fn.Uisearch = function () {
	var ui = (this);

	$('.ui-search-selected', ui).on('click', function () {
		$('.ui-search-selected-list').show();

		return false;
	});

	$('.ui-search-selected-list a', ui).on('click', function () {
		$('.ui-search-selected').text($(this).text());
		$('.ui-search-selected-list').hide();

		return false;
	})
}

// 页面脚本逻辑
$(function () {
	$('.ui-search').Uisearch();
})



























