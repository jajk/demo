/*
    要支持长轮询，服务端要完全保持一个所有未响应请求和它们对应连接的大集合。
    服务端通过返回Transfer-Encoding:chunked或Connection:close响应来保持这些请求连接。	
*/
function longPoll(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
		    callback(xhr.responseText);
			//发送另一个请求，重新连接服务端
			xhr.open("get", url, true);
			xhr.send(null);
		}
		xhr.open("POST", url, true);
		xhr.send(null);
	};
}