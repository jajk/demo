function callbackPolling(url, callback){
	//建立一个script元素，在这个元素中将加载服务器响应
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url + "callback=callbackPolling.callback";
	callbackPolling.callback = function(data){
		//发送一个新的请求等待服务器下次发送消息
		callbackPolling(url, callback);
		//调用回调函数
		callback(data);
	}
	//添加这个元素，开始执行这段脚本
	document.getElementsByTagName("head")[0].appendChild(script);
}