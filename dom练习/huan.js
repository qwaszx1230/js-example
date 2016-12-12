function huan(x,y,color,width,radius){
	var div = document.createElement('div')
	div.style.position = 'absolute'
	div.style.width = 2*radius + 'px'
	div.style.height = 2*radius + 'px'
	div.style.top = y - radius - width + 'px'
	div.style.left = x - radius - width  + 'px'
//	div.style.boxSizing = 'content-box'
	div.style.border = width + 'px' + ' solid ' + color
	div.style.borderRadius = '50%'	
	document.body.appendChild(div)
}

