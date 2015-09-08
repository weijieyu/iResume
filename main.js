//
$(function(){
	var isIE = function(ver){
    	var b = document.createElement('b')
		b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->'
		return b.getElementsByTagName('i').length === 1
	}
	if (isIE(6) || isIE(7) || isIE(8) || isIE(9)) {//不兼容css3的ie不往下执行
		return
	}

	setTimeout(function(){
		var content = '本人学识渊博、经验丰富、代码风骚、效率恐怖、html、css、js无不精通、深山苦练20余年、一天只睡4个小时、电话通知出BUG后秒登VPN，千里之外定位问题、瞬息之间修复上线。身体强壮、健步如飞、可连续编程100小时不休息、讨论技术方案5小时不喝水，上至带项目、出方案，下至盗账号、威胁PM，什么都能干。泡面矿泉水已备好，学校不支持编程已辍学、家人不支持编程已断绝关系、老婆不支持编程已离婚、小孩不支持编程已送孤儿院，备用电源百兆光纤永不断电断网，门口已埋地雷无人打扰。'
		var a = new smile()
		a.init(content)
	},10000)
	

	function smile() {

	}
	smile.prototype.init = function (content) {
		this.content = content
		this.alert()
		
		var firefox = navigator.userAgent.indexOf('Firefox') != -1;//兼容的禁止滚轮事件
		firefox ? window.addEventListener('DOMMouseScroll', MouseWheel, false) :
			(window.onmousewheel = MouseWheel);

		function MouseWheel(e) {
			e = e || window.event;

			if (e.stopPropagation) e.stopPropagation();
			else e.cancelBubble = true;

			if (e.preventDefault) e.preventDefault();
			else e.returnValue = false;

		}
	}
	smile.prototype.alert = function () {
		var This = this
		$('body').append($('<div id="alert"><p><span>X</span></p></div>'))
		$('#alert').css('top',$(document).scrollTop())
		setTimeout(function() { //给浏览器渲染个时间
			$('#alert p').attr('class', 'active')
		}, 20)
		$('#alert span').on('click', function() {//添加关闭
			$('#alert').remove()
		})
		setTimeout(function(){
			This.typer()
		},200)
	}
	smile.prototype.typer = function () {
		var This = this
		var i = 0
		this.timer = setInterval(function(){
			if (i == This.content.length) {
				clearInterval(This.timer)
				setTimeout(function(){
					This.explain()
				},1000)
			}
			$('#alert p')[0].innerHTML += This.content.charAt(i)
			i++
		},100)
	}
	smile.prototype.explain = function () {
		$('#alert p').html('').css('font-size','40px')
		$('#alert p')[0].innerHTML = '看简历辛苦了，希望这个老梗能轻松一下!'
		setTimeout(function(){
			$('#alert').remove()
			var firefox = navigator.userAgent.indexOf('Firefox') != -1;//兼容的恢复滚轮事件
			firefox ? window.removeEventListener('DOMMouseScroll', MouseWheel, false) :
				(window.onmousewheel = null);

			function MouseWheel(e) {
				e = e || window.event;

				if (e.stopPropagation) e.stopPropagation();
				else e.cancelBubble = true;

				if (e.preventDefault) e.preventDefault();
				else e.returnValue = false;

			}
		},3000)
	}
})
