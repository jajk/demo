//轮询
setTimeout(function(){xhrRequest({"foo":"bar"})}, 2000);
function xhrRequest(data){
	var xhr = new XMLHttpRequest();
	//在发送请求的时候，处理的数据通过参数进行传递
	xhr.open("get", "http://localhost/foo.php", true);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			//处理服务器返回的更新
		}
	};
	xhr.send(null);
}