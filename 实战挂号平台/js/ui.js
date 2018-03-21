/*
* @Author: xiaofan
* @Date:   2018-03-20 16:14:13
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-03-21 17:17:37
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

// ui-tab

/**
*	@param {string} header tab组件 所有选项卡 item
*	@param {string} content tab组件 内容区域  item
	@param {string} focus_prefix 选项卡高亮样式前缀 可选
*/

$.fn.UiTab = function (header, content, focus_prefix) {
	var ui = $(this);
	var tabs = $(header, ui);
	var cons = $(content, ui);
	var focus_prefix = focus_prefix || '';

	tabs.on('click', function () {
		var index = $(this).index();

		tabs.removeClass(focus_prefix + 'item_focus').eq(index).addClass(focus_prefix + 'item_focus');
		cons.hide().eq(index).show();

		return false;
	})
}

// 页面脚本逻辑
$(function () {
	$('.ui-search').Uisearch();

	$('.content-tab').UiTab('.caption > .item', '.block > .item');
	$('.content-tab .block .item').UiTab('.block-caption > a', '.block-content > .block-wrap', 'block_');
})



























