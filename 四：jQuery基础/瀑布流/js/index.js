/*
* @Author: xiaofan
* @Date:   2018-03-15 10:31:35
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-03-15 15:03:09
*/

// function waterfall(wrap, boxes) {
// 	var boxWidth = boxes[0].offsetWidth + 20;
// 	var windowWidth = document.documentElement.clientWidth;
// 	var colsNum = Math.floor(windowWidth / boxWidth);

// 	// 设置容器宽度
// 	wrap.style.width = colsNum * boxWidth + 'px';

// 	// 保存所有高度的数组
// 	var everyHeight = new Array();

// 	for (var i = 0; i < boxes.length; i++) {
// 		if (i < colsNum) {
// 			everyHeight[i] = boxes[i].offsetHeight + 20;
// 		} else {
// 			var minHeight = Math.min.apply(null, everyHeight);
// 			var minIndex = getIndex(minHeight, everyHeight);
// 			var leftVal = boxes[minIndex].offsetLeft - 10;
// 			boxes[i].style.position = 'absolute';
// 			boxes[i].style.top = minHeight + 'px';
// 			boxes[i].style.left = leftVal + 'px';
// 			everyHeight[minIndex] += boxes[i].offsetHeight + 20;
// 		}
// 	}
// }

var waterfall = function (wrap, boxes) {
	var boxWidth = boxes.eq(0).width() + 40;
	var windowWidth = $(window).width();
	var colsNum = Math.floor(windowWidth / boxWidth);

	wrap.width(boxWidth * colsNum);

	var everyHeight = new Array();

	for (var i = 0; i < boxes.length; i++) {
		if (i < colsNum) {
			everyHeight[i] = boxes.eq(i).height() + 40;
		} else{
			var minHeight = Math.min.apply(null, everyHeight);
			var minIndex = getIndex(minHeight, everyHeight);

			boxes.eq(i).css({
				'position': "absolute",
				'left': boxes.eq(minIndex).position().left,
				'top': minHeight
			});

			everyHeight[minIndex] += boxes.eq(i).height() + 40;
		}
	}
}

// 或许高度最小列的索引
function getIndex(minHeight, everyHeight) {
	for (index in everyHeight) {
		if (everyHeight[index] == minHeight) {
			return index;
		}
	}
}

// window.onload = function() {
// 	var wrap = document.getElementById('wrap');
// 	var boxes = wrap.getElementsByTagName('div');
// 	waterfall(wrap, boxes);
// }

$(document).ready(function(event){
	var wrap = $('#wrap');
	var boxes = $('#wrap').children('div');
	waterfall(wrap, boxes);
})






















