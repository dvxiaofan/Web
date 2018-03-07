/*
* @Author: xiaofan
* @Date:   2018-03-07 10:14:32
* @Last Modified by:   xiaofan
* @Last Modified time: 2018-03-07 11:38:31
*/

 // 封装 document.getElementById()方法
 function byId(id) {
 	return typeof(id) ===  "string"?document.getElementById(id):id;
 }

 // 全局变量
 var index = 0,
 	 timer = null,
 	 pics = byId("banner").getElementsByTagName('div'),
 	 dots = byId("dots").getElementsByTagName('span'),
 	 prev = byId("prev"),
 	 next = byId("next"),
 	 len = pics.length;

function slideImg() {
	var main = byId("main");

	// 划过图片时清除	
	main.onmouseover = function () {
		if (timer) clearInterval(timer);
	}

	// 鼠标离开图片开始轮播
	main.onmouseout = function () {
		timer = setInterval(function () {
			index ++;
			if (index >= len) index = 0;
			changeImg();
		},2000);
	}

	main.onmouseout();

	// 圆点绑定事件
	for (var d = 0; d < len; d++) {
		dots[d].id = d;
		dots[d].onclick = function(){
			index = this.id;
			changeImg();
		}
	}

	// 绑定按钮事件
	prev.onclick = function() {
		index--;
		if (index < 0) index = len-1;
		changeImg();
	}

	next.onclick = function() {
		index++;
		if (index >= len) index = 0;
		changeImg();
	}
}

// 轮播图片
function changeImg() {
	for (var i = 0; i < len; i++) {
		pics[i].style.display = "none";
		dots[i].className = "";
	}
	pics[index].style.display = "block";
	dots[index].className = "active";
}

// 划过图片
slideImg();




























