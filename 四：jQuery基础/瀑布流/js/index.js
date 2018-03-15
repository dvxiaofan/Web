/*
* @Author: xiaofan
* @Date:   2018-03-15 10:31:35
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-03-15 11:53:23
*/

function waterfall(wrap, boxes) {
	var boxWidth = boxes[0].offsetWidth + 20;
	var windowWidth = document.documentElement.clientWidth;
	var colsNum = Math.floor(windowWidth / boxWidth);

	// 设置容器宽度
	wrap.style.width = colsNum * boxWidth + 'px';

	// 保存所有高度的数组
	var everyHeight = new Array();

	for (var i = 0; i < boxes.length; i++) {
		if (i < colsNum) {
			everyHeight[i] = boxes[i].offsetHeight + 20;
		} else {
			var minHeight = Math.min.apply(null, everyHeight);
			var minIndex = getIndex(minHeight, everyHeight);
			var leftVal = boxes[minIndex].offsetLeft - 10;
			boxes[i].style.position = 'absolute';
			boxes[i].style.top = minHeight + 'px';
			boxes[i].style.left = leftVal + 'px';
			everyHeight[minIndex] += boxes[i].offsetHeight + 20;
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

window.onload = function() {
	var wrap = document.getElementById('wrap');
	var boxes = wrap.getElementsByTagName('div');
	waterfall(wrap, boxes);
}






















