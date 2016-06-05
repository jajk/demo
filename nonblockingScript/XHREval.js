var xhr = new XMLHttpRequest();
xhr.open('get', 'file1.js', true);
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4){
		if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
			eval(xhr.responseText);
		}
	};
};
xhr.send(null);