/*
	addHandler:为元素添加事件处理程序
	getEvent:返回event对象引用
	getTarget:返回目标元素
	preventDefault:取消事件默认行为
	removeHandler:移除之前添加的事件处理程序
	stopPropagation:阻止事件流（冒泡）
*/
var EventUtil = {
	addHandler: function(element, type, handler){
		if(element.addEventListener){
			element.addEventListener(type, handler, false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type, handler);
		}else{
			element['on'+type] = handler;
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
	removeHandler: function(element, type, handler){
		if(element.removeEventListener){
			element.removeEventListener(type, handler, false);
		}else if(element.detachEvent){
			element.detachEvent('on'+type, handler);
		}else{
			element['on'+type] = null;
		}
	},
	stopPropagation: function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	}
};