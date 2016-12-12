//找到图片
var img = document.getElementById('tom')
//找到声音
var player = document.getElementById('player')
//页面的宽高
var w = document.documentElement.clientWidth
var h = document.documentElement.clientHeight
//当页面尺寸发生变化时  
window.onresize = function (){
	w = document.documentElement.clientWidth
	h = document.documentElement.clientHeight
}
//是否正在执行动画
var playing = false
//当被调用时执行动画
//参数1  执行的是哪个动画     参数2  总共多少张图    参数3  声音是什么时候开始的
 function play(name,total,startAt){
// 	如果动画正在执行  返回  不再往下执行
//  若没有动画的话 设置设置为正在动画 往下执行
 	if(playing) {
 	return
 	}else{
 		playing = true
 	}
 	var i = 0
// 	一个动画
 	animate()
	        
// 	定义动画   通过改变图片形成动画   播放声音
 	function animate(){
// 		判断一下什么时候结束
 		if(i<=total){
	// 		图片的链接   name =angry   src路径
	//      图片链接赋给图片
	 		var src = name + '/' + name + '_' + ( i < 10 ? '0' : '') + i + '.jpg'
	 		img.src = src
	 	 // 根据对应的进行音频的添加修饰
		      if (i == startAt) {
		        player.src = 'sounds/' + name + '.m4a';
		        player.play();
		      }
		      if (name == 'drink' && i == 10) { // drink 需要2个音频
		        player.src = 'sounds/pour.m4a';
		        player.play();
		      }
		      if (name == 'knockout' && i == 0) {
		        player.src = 'sounds/fall.m4a';
		        player.play();
		      }

	//      每隔多久执行动画   0.1s后执行这个动画
	        var timer = setTimeout(animate,100)
	        i++
	 	}else{
//	 		动画执行完了
	 		playing = false                                                            
	 	}
 	}
 }
 
 
 
// 点不同位置调不同动画
var body = document.querySelector('body')
body.addEventListener('click',function(e){
//	点击图片上的位置     X轴的位置 Y轴的位置

//  w 1366 -   360
//    327  -   
//	console.log(e.clientX / w * 120)
//	console.log(e.clientY / h * 240)
	action(e)
})
 
 function action(event) {
  // console.log(event);
  // 用 event.pageX 和 event.pageY 来表示鼠标相对于文档的位置
  // （注意此处文档的理解，文档的是我们的网页页面，它的大小与我们的屏幕，
  // 即显示器或者浏览器的大小没有关系，而是由设计者决定的，比如你的屏幕是
  // 1024*768或者浏览器窗口大小为500*500，但是文档的大小却可能是900*2000这么大），
  // 如果你有一个 500*500 的窗口并且你的鼠标在绝对中间，那么 pageX 和 pageY  的值都是 250，
  // 如果你向下滚动  500， 那么 pageY 将变成 750。
  // X除以360是因为显示器的屏幕大小是360的整倍数 如：1440 1920
  var x = event.pageX * 360 / w;
  var y = event.pageY * 640 / h;
  // alert('x:' + x + ',y:' + y)
  // 进行位置判断，执行对应的动画效果
  if (x > 140 && x < 225 && y > 400 && y < 450) {
    // 将参数对应的传到play函数中
    play('angry', 25, 0);
  }

  if (x > 119 && x < 245 && y > 465 && y < 565) {
    play('stomach', 33, 0);
  }

  if (x > 155 && x < 210 && y > 190 && y < 230) {
    play('knockout', 80, 13);
  }

  if (x > 137 && x < 235 && y > 250 && y < 280) {
    if (x < 185) {
      play('eat', 39, 0);
    } else {
      play('drink', 80, 30);
    }
  }

  if (x > 124 && x < 240 && y > 160 && y < 190) {
    play('cymbal', 12, 0);
  }

  if (x > 246 && x < 280 && y > 490 && y < 580) {
    play('fart', 27, 0);
  }

  if (x > 80 && x < 120 && y > 110 && y < 195) {
    play('scratch', 55, 15);
  }

  if (x > 240 && x < 290 && y > 110 && y < 200) {
    play('pie', 23, 12);
  }

  if (x > 125 && x < 175 && y > 570 && y < 620) {
    play('foot_right', 29, 0);
  }

  if (x > 180 && x < 230 && y > 570 && y < 620) {
    play('foot_left', 29, 0);
  }
}

 
//play('angry',25,0)
