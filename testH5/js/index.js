//滑动效果
//调用
turning();

//
count();

//
load();

//
playing();

//选项卡效果调用
banner();










//翻页效果
function turning(){
	var content= document.querySelector(".content");//	获取元素
	//	定义变量
	var startY,endY,value,height,index;
	//	手指放上时     添加事件监听方法
	content.addEventListener('touchstart',function(e){
		//阻止默认事件的触发
		e.preventDefault()
		startY=e.touches[0].pageY;
//		console.log(startY)
	},false)
	
	//	手指移动时
	content.addEventListener('touchmove',function(e){
		endY=e.touches[0].pageY;
		value=startY-endY;
		height=content.offsetHeight;
		var str=e.target.id.slice(4)==""?"1":e.target.id.slice(4);
		index=parseInt(str);
		console.log(e);
	},false)
		
	//	手指离开时
	content.addEventListener('touchend',function(e){
		
		if(value>0){
		//	向下翻页
		if(index==3){
			return ;
		}
			content.style.transform="translateY(-"+height*index+"px)"
		}else if(value<0){
			console.log(index);
			
//			
//			index  juli  page   height
//			2             1
//			3             2
//			4             3
			if(index==1){
				return;
			}
			var hi=height-height*(index-1);
			content.style.transform="translateY("+hi+"px)"
			
		}
	},false)
}


//加载效果
	function count(){
		var load=document.getElementById("load");
		var arr=[".","..","..."];
		var num=0;
		console.log(load);
		setInterval(function(){
			if(num>=3){
				num=0;
			}
//			console.log(arr[num]);
			load.innerHTML=arr[num];
			num++;
		},1000)
	}
//加载页消失，第一页出现
	function load(){
		var cent=document.getElementById("cent");
		var bg=document.getElementById("bg");
		var content=document.getElementById("content");
		var music=document.getElementById("music");		
		var num=0;
		var time=setInterval(function(){
			num++;
			if(num>=100){
				bg.style.display="none";
				content.style.display="block";
				music.style.display="block";
				clearInterval(time);
			}
			cent.innerHTML=num;
//			console.log(cent);
		},30)
	}
	

//音乐播放停止效果
	function playing(){
		var music1=document.getElementById("music1");
		var media=document.getElementById("media")
		var boolean=true;
		music1.onclick=function(){
//			音乐暂停,图标停止旋转
			if(boolean){
				music1.style.animation="none";
				media.pause();
				boolean=false;
//			音乐播放,图标开始旋转
			}else{
				music1.style.animation="tubiao 3s linear infinite";
				media.play();
				boolean=true;
			}
		}
		
}
	
//选项卡效果
function banner(){
	var bg = document.getElementById("page2");
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	console.log(img1);
	img1.ontouchend = function(e){
		e.preventDefault();
		bg.style.backgroundImage = "url(img/p3/p3-1.png)";
		console.log(img1);
		img1.className = "cur";
		img2.className="";
		img3.className = "";		
	}
	img2.ontouchend=function(e){
		e.preventDefault();
		bg.style.backgroundImage = "url(img/p3/p3-3.png)";
		img1.className = "";
		img2.className="cur";
		img3.className = "";
	}
	img3.ontouchend=function(e){
		e.preventDefault();
		img1.className = "";
		img2.className = "";
		img3.className = "cur";
		bg.style.backgroundImage="url(img/p3/p3-2.png)";
	}
}
