/*
    类似于forever-frame技术，XHR流允许服务器连续地发送消息，无需每次响应后再去建立一个新请求
*/
function xhrStreaming(url, callback){
	var xhr = new XMLHttpRequest();
	var lastSize;
	xhr.open("post", url, true);
	xhr.onreadystatechange = function(){
		var newTextReceived;
		if(xhr.readyState > 2){
			//获取最新的响应正文
			newTextReceived = xhr.responseText.substring(lastSize);
			lastSize = xhr.responseText.length;
			callback(newTextReceived);
		}
		if(xhr.readyState ==4){
			//如果响应结束，马上创建一个新的请求
			xhrStreaming(url, callback);
		}
	};
	xhr.send(null);
}