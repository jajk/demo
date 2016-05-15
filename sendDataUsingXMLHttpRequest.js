function xhrPost(url, params, callback){
	var req = new XMLHttpRequest();
	req.onerror = function(){
		setTimeout(function(){
			xhrPost(url, params, callback);
		},1000);
	};
	req.onreadystatechange = function(){
		if(req.readyState == 4){
			if(callback && typeof callback === 'function'){
				callback();
			}
		}
	};
	req.open('POST',url, true);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.setRequestHeader('Content-Length', params.length);
	req.send(params.join('&'));
};