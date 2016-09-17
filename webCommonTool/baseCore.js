function singletonAccepter( args ){
    //判断Universe.instance是否已存在实例
    if(typeof singletonAccepter.instance === 'object'){
        return singletonAccepter.instance;
    }
    singletonAccepter.instance = this;
};
/*
	addHandler:为元素添加事件处理程序
	getEvent:返回event对象引用
	getTarget:返回目标元素
	preventDefault:取消事件默认行为
	removeHandler:移除之前添加的事件处理程序
	stopPropagation:阻止事件流（冒泡）
	getStyle:获取元素样式
	getElementDis:获取元素left、top偏移量
	getViewport:获取客户区大小
*/
singletonAccepter.prototype = {
    constructor: singletonAccepter,
	addHandler: function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type, handler);
		}else{
			element['on'+type] = handler;
		}
	},
	removeHandler: function(element, type, handler){
		if(element.removeEventListener){
			element.removeEventListener(type, handler, false);
		}else if(element.detachEvent){
			element.detachEvent('on'+type, handler);
		}else{
			element['on'+type] = null;
		}
	},
	getEvent: function(event){
		return event ? event : window.event;
	},
	getTarget: function(event){
		return event.target || event.srcElement;
	},
	preventDefault: function(){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;
		}
	},
	stopPropagation: function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	},
	getStyle: function(element){
		var style = null;
		if(document.defaultView){
			style = document.defaultView.getComputedStyle(element, null); //非IE
		}else{
			style = element.currentStyle; //IE
		}
		return style;	
	},
	getElementDis: function(element){
		var actualLeft = element.offsetLeft,
		    actualTop = element.offsetTop,
			current = element.offsetParent;
		while(current !== null){
			actualLeft += current.offsetLeft;
			actualTop += current.offsetTop;
			current = current.offsetParent;		
		}
		return {
			left: actualLeft,
			top: actualTop
		};
	}, 
	getViewport: function(){
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
};