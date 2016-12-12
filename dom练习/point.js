
//返回一个x参数1  Y参数2
//p.x   p.y调用
function point(xValue,yValue){
	var obj = {
		x:xValue,
		y:yValue
	}
	return obj
}
//在页面中显示一个点    
//参数1 X到页面的左距离  
//参数2 Y到页面的顶距离 
//参数3 颜色  
//参数4半径
//将参数1 2 合并了
function showPoint(p,color,radius){
	var div = document.createElement('div')
	div.style.position = 'absolute'
	div.style.left = p.x - radius + 'px'    //p是参数  与point 没关系
	div.style.top = p.y - radius + 'px'
	div.style.width = 2*radius + 'px'
	div.style.height = 2*radius + 'px'
	div.style.borderRadius = '50%'
	div.style.backgroundColor = color
	document.body.appendChild(div)
}
showPoint(300,300, 'red',20)
showPoint(300,300, 'red',30)

//在页面中显示一个点    
//参数1 X到页面的左距离  
//参数2 Y到页面的顶距离 
//参数3 颜色  
//参数4半径
//function showPoint(x,y,color,radius){
//	var div = document.createElement('div')
//	div.style.position = 'absolute'
//	div.style.left = x - radius + 'px'    //p是参数  与point 没关系
//	div.style.top = y - radius + 'px'
//	div.style.width = 2*radius + 'px'
//	div.style.height = 2*radius + 'px'
//	div.style.borderRadius = '50%'
//	div.style.backgroundColor = color
//	document.body.appendChild(div)
//}
//showPoint(300,300, 'red',20)
//showPoint(100,100, 'red',10)