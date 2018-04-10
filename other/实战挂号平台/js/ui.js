/*
* @Author: xiaofan
* @Date:   2018-03-20 16:14:13
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-03-23 16:06:34
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

// 返回顶部
$.fn.UiBackTop = function () {
	var ui = $(this);
	var el = $('<a href="#" class="ui-backTop"></a>');
	ui.append(el);

	var winHeight = $(window).height();
	$(window).on('scroll', function () {
		var top = $(window).scrollTop();
		if (top > winHeight) {
			el.show();
		} else {
			el.hide();
		}
	});

	el.on('click', function () {
		$(window).scrollTop(0);
	})
}

// ui-slider操作

// 1，左右箭头需要能控制页面滚动
// 2，翻页的时候， 进度点要联动进行focus
// 3，翻到第三页的时候， 下一页要回到第一页， 翻到第一页的时候，同理

// 4，进度点， 点击的时候需要跳转的对应页面

// 5，没有（进度点点击、翻页操作）的时候需要自动滚动

// 6，滚动的过程中，屏蔽其他操作（翻页操作、进度点点击、自动滚动）

$.fn.UiSlider = function () {
	var ui = $(this);
	var wrap = $('.ui-slider-wrap');

	var btn_prev = $('.ui-slider-arrow .left', ui);
	var btn_next = $('.ui-slider-arrow .right', ui);

	var items = $('.ui-slider-wrap .item', ui);
	var tips = $('.ui-slider-process .item', ui);

	// 预定义
	var current = 0;
	var size = items.size();
	var width = items.eq(0).width();
	var enableAuto = true;

	// 设置自动感应， 如果鼠标在wrap上， 就不用自动滚动
	ui
	.on('mouseover',function () {
		enableAuto = false;
	})
	.on('mouseout',function () {
		enableAuto = true;
	})

	// 具体操作
	wrap
	.on('move_prev',function () {

		if (current == 0) {
			current = size;
		}

		current = current - 1;

		wrap.triggerHandler('move_to', current);
	})
	.on('move_next',function () {

		if (current >= size-1) {
			current = -1;
		}
		current = current + 1;

		wrap.triggerHandler('move_to', current);
	})
	.on('move_to',function (evt, index) {
		wrap.css('left', index*width*-1);
		tips.removeClass('item_focus').eq(index).addClass('item_focus');
	})
	.on('auto_move',function () {
		setInterval(function () {
			enableAuto && wrap.triggerHandler('move_next');	
		},2000);
	})
	.triggerHandler('auto_move');

	// 事件
	btn_prev.on('click', function () {
		wrap.triggerHandler('move_prev');
	})

	btn_next.on('click', function () {
		wrap.triggerHandler('move_next');
	})
	tips.on('click',function () {
		var index = $(this).index();
		wrap.triggerHandler('move_to', index);
	})
}

// 页面脚本逻辑
$(function () {
	$('.ui-search').Uisearch();

	$('.content-tab').UiTab('.caption > .item', '.block > .item');
	$('.content-tab .block .item').UiTab('.block-caption > a', '.block-content > .block-wrap', 'block_');

	$('body').UiBackTop();

	$('.ui-slider').UiSlider();
})



























