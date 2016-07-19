//获取元素样式
function getStyle(element){
	var style = null;
	if(document.defaultView){
		style = document.defaultView.getComputedStyle(element, null); //非IE
	}else{
		style = element.currentStyle; //IE
	}
	return style;	
}
//获取元素偏移量
function getElementLeft(element){
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;
    while(current !== null){
	    actualLeft += current.offsetLeft;
        current = current.offsetParent;		
	}
    return actualLeft;	
}
function getElementTop(element){
	var actualTop = element.offsetTop;
	var current = element.offsetParent;
	while(current !== null){
		actualTop += current.offsetTop;
		current = current.offsetParent;
	}
	return actualTop;
}
//获取客户区大小
function getViewport(){
	if(document.compatMode == "BackCompat"){
		return {
			width: document.body.clientWidth,
			height: document.body.clientHeight
		};
	}else{
		return {
			width: document.documentElement.clientWidth,
			height: document.documentElement.clientHeight
		};
	}
}
//获取元素大小

