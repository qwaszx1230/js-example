//function juxing(x,y,width,height,color){
//	var div = document.createElement('div')
//	div.style.position = 'absolute'
//	div.style.top = x + 'px'
//	div.style.left = y + 'px'	
//	div.style.border = '1px solid ' + color
//	div.style.width = width + 'px'
//	div.style.height = height + 'px'
//	document.body.appendChild(div)
//}
//function juxingq(x,y,m,n,color){
//	var div = document.createElement('div')
//	div.style.position = 'absolute'
//	div.style.top = x + 'px'
//	div.style.left = y + 'px'	
//	div.style.border = '1px solid ' + color
//	div.style.width = m - x + 'px'
//	div.style.height = n - y + 'px'
//	document.body.appendChild(div)
//}


function juxing(p1,p2,color,width){
//	var pStart = Math.min(p1.x,p2.x)
   if(p1.x == p2.x || p1.y == p2.y){
   	alert('nonono')
   }else{
   	  var div = document.createElement('div')
	 div.style.position = 'absolute'
	 div.style.left = Math.min(p1.x,p2.x) - width/2 + 'px'
	 div.style.top = Math.min(p1.y,p2.y) - width/2 + 'px'
	 div.style.width = Math.max(p1.x,p2.x) - Math.min(p1.x,p2.x) - width + 'px'
	 div.style.height = Math.max(p1.y,p2.y) - Math.min(p1.y,p2.y) - width + 'px'
	 div.style.border = width + 'px  solid ' + color
	 document.body.appendChild(div)
   }
	
}




	
