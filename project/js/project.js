window.onload= function(){
	// 百分比数字随加载进度变化（0-100）；
	var precent = document.getElementById("precent");
	// 定义一个数字
	var num = 0;
	setInterval(function(){
		num++;
		/* 第一个页面向第二个页面过度 */
		if(num==100){
			setTimeout(function(){
				var first = document.getElementById("first");
				first.style.display = "none";
				var two = document.getElementById("two");
				two.style.display = "block";
			},30);
		}
		precent.innerHTML = num;
	},25);
	// 第二个页面
	var music = document.getElementById("music");
	var audio = document.getElementById("audio");
	// 计数
	var count = 0;
	music.onclick = function(){
		count++;
		// 如果为基数表示停止，偶数为旋转播放
		if(count%2 !=0){
			music.style.animation = "none";
			audio.pause();
		}else{
			music.style.animation = "rotate 5s linear infinite";
			audio.play();
		}
	}
}

