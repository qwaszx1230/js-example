var buttons = document.querySelectorAll('button')

//后腿
buttons[0].addEventListener('click',function(){
//	历史记录后退一步
	history.back()
	history.go(-1)
	history.go(-2)
	
})
//前进
buttons[1].addEventListener('click',function(){
//	历史记录前进一步
//	history.go()
    history.forward()
    
})
var btn = document.querySelector('.btn')
btn.addEventListener('click',function(){
	history.go(-2)
})