

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
 	 len = pics.length
 	 menu = byId("menu-content"),
 	 subMenu = byId("sub-menu"),
 	 innerBox = subMenu.getElementsByClassName("inner-box"),
 	 menuItems = menu.getElementsByClassName('menu-item');

// 滚动图片
slideImg();

function slideImg() {
	var main = byId("main");

	// 划过图片时清除滚动	
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

	// 导航菜单
	for (var m = 0; m < menuItems.length; m++) {
		menuItems[m].setAttribute("data-index", m);
		// 鼠标移动上面
		menuItems[m].onmouseover = function() {
			subMenu.className = "sub-menu";
			var idx = this.getAttribute("data-index");
			// 遍历每个子菜单， 先隐藏
			for (var j = 0; j < innerBox.length; j++) {
				innerBox[j].style.display = "none";
				menuItems[j].style.background = "none";
			}
			menuItems[idx].style.background = 'rgba(0,0,0,0.1)';
			innerBox[idx].style.display = "block";
		}
	}
	// 鼠标移出去
	menu.onmouseout = function() {
		subMenu.className = "sub-menu hide";
	}
	subMenu.onmouseover = function() {
		subMenu.className = "sub-menu";
	}
	subMenu.onmouseout = function(){
		subMenu.className = "sub-menu hide";
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





























