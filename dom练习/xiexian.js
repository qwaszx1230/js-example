function xiexian(p1,p2,color,width){
//	var pStart = Math.min(p1.x,p2.x)
   if(p1.x == p2.x || p1.y == p2.y){
   	alert('nonono')
   }else{
   	  var div = document.createElement('div')
	 div.style.position = 'absolute'
	 div.style.left = Math.min(p1.x,p2.x) - width + 'px'
	 div.style.top = Math.min(p1.y,p2.y) - width/2 + 'px'
	 div.style.width = Math.sqrt(Math.pow((Math.max(p1.x,p2.x) - Math.min(p1.x,p2.x)),2)+Math.pow((Math.max(p1.y,p2.y) - Math.min(p1.y,p2.y)),2)) + 'px'
	 div.style.height = Math.max(p1.y,p2.y) - Math.min(p1.y,p2.y) + 'px'
	 div.style.borderTop = width + 'px  solid ' + color
	 div.style.transformOrigin = '0 0'
	 div.style.transform = 'rotate(' + Math.atan((Math.max(p1.y,p2.y) - Math.min(p1.y,p2.y)) / (Math.max(p1.x,p2.x) - Math.min(p1.x,p2.x))) / Math.PI * 180 + 'deg)' 
	 
	 document.body.appendChild(div)
   }
	
}


//function xiexian(p1,p2,color,width){
//	var pStart = (p2.x >= p1.x)? p1 : p2
//	var pEnd = pStart == p1? p2 : p1  
// 	  var div = document.createElement('div')
//	 div.style.position = 'absolute'
//	 div.style.left = pStart - width/2 + 'px'
//	 div.style.top = pStart - width/2 + 'px'
//	 div.style.width = clca(pStart,pEnd) + 'px'
//	 div.style.height = width + 'px'
//	 div.style.backgroundColor = color
//	 div.style.transformOrigin = 'left center'
//	 div.style.transform = 'rotate(' + calc(pStart,pEnd) + 'deg)'	 
//	 document.body.appendChild(div)
// }
//	
//}
////计算三角性的斜边
//function cala(p1,p2){
//	var x = p2.x - p1.x
//	var y = p2.y - p1.y
//	return Math.sqrt(x*x +y*y)
//}
////计算线与x轴的夹角
//function calc(p1,p2){
//	var y = p2.y - p1.y
//	var x = p2.x - p1.x
//	return (Math.atan(y/x) * 180 /Math.PI)
//}
