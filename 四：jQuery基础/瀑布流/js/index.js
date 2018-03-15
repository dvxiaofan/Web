/*
* @Author: xiaofan
* @Date:   2018-03-15 10:31:35
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-03-15 17:31:16
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

var data = [
{
	"src" : "bg001.png",
	"title": "江南十八怪"
} ,{
	"src" : "bg002.png",
	"title": "江南十八怪"
},{
	"src" : "bg003.png",
	"title": "江南十八怪"
},{
	"src" : "bg004.png",
	"title": "江南十八怪"
},{
	"src" : "bg005.png",
	"title": "江南十八怪"
},{
	"src" : "bg006.png",
	"title": "江南十八怪"
},{
	"src" : "bg007.png",
	"title": "江南十八怪"
},{
	"src" : "bg008.png",
	"title": "江南十八怪"
},{
	"src" : "bg009.png",
	"title": "江南十八怪"
},{
	"src" : "bg010.png",
	"title": "江南十八怪"
},{
	"src" : "bg011.png",
	"title": "江南十八怪"
},{
	"src" : "bg012.png",
	"title": "江南十八怪"
},{
	"src" : "bg013.png",
	"title": "江南十八怪"
},{
	"src" : "bg014.png",
	"title": "江南十八怪"
},{
	"src" : "bg015.png",
	"title": "江南十八怪"
},{
	"src" : "bg016.png",
	"title": "江南十八怪"
},{
	"src" : "bg017.png",
	"title": "江南十八怪"
},{
	"src" : "bg018.png",
	"title": "江南十八怪"
}];

var waterfall = function (wrap, boxes) {
	var boxWidth = boxes.eq(0).width() + 40;
	var windowWidth = $(window).width();
	var colsNum = Math.floor(windowWidth / boxWidth);

	wrap.width(boxWidth * colsNum);

	// 定义一个数组并保存每一列高度
	var everyHeight = new Array();

	for (var i = 0; i < boxes.length; i++) {
		if (i < colsNum) {
			everyHeight[i] = boxes.eq(i).height() + 40;
		} else{
			var minHeight = Math.min.apply(null, everyHeight);
			var minIndex = getIndex(minHeight, everyHeight);

			setStyle(boxes.eq(i), minHeight, boxes.eq(minIndex).position().left, i)

			// boxes.eq(i).css({
			// 	'position': "absolute",
			// 	'left': boxes.eq(minIndex).position().left,
			// 	'top': minHeight,
			// 	'opacity': '0'
			// }).stop().animate({
			// 	'opacity' : '1'
			// }, 1000);

			everyHeight[minIndex] += boxes.eq(i).height() + 40;
		}

		boxes.eq(i).hover(function (event) {
			$(this).stop().animate({
				'opacity' : '0.5'
			}, 500);
		}, function (event) {
			$(this).stop().animate({
				'opacity' : '1'
			}, 500);
		})
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

function appendBox(wrap, boxes) {
	if (getCheck(wrap)) {
		for (i in data) {
			var innerStr = '<div><img src="../img/' + data[i].src + '"><a href="https://www.baidu.com/" target="_blank">' + data[i].title + '</a></div>';
			wrap.append(innerStr);
		} 
	} else {
		return false;
	}
	waterfall(wrap, wrap.children('div'));
}

// 设置追加盒子样式
var getStartNum = 0;
function setStyle(box, top, left, index) {
	if (getStartNum >= index) {
		return false;
	}
	box.css({
		'position': "absolute",
		'left': left,
		'top': top,
		'opacity': '0'
	}).stop().animate({
				'opacity' : '1'
	}, 1000);
	getStartNum = index;
}

// 数据请求检验
function getCheck(wrap) {
	var documentHeight = $(window).height();
	// 获取文档向上滚动的高度
	var scrollHeight = $(window).scrollTop();
	// 获取最后一个盒子所在列的总高度
	var boxes = wrap.children('div');
	var lastBoxTop = boxes.eq(boxes.length - 1).offset().top;
	var lastHeight = boxes.eq(boxes.length - 1).height() + 20;

	var lastColHeight = lastBoxTop + lastHeight;

	return documentHeight + scrollHeight >= lastColHeight ? true : false;
}

$(document).ready(function(event){
	var wrap = $('#wrap');
	var boxes = $('#wrap').children('div');
	waterfall(wrap, boxes);

	$(this).scroll(function (event) {
		appendBox(wrap, boxes);
	})
})






















