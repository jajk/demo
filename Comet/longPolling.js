/*
    Ҫ֧�ֳ���ѯ�������Ҫ��ȫ����һ������δ��Ӧ��������Ƕ�Ӧ���ӵĴ󼯺ϡ�
    �����ͨ������Transfer-Encoding:chunked��Connection:close��Ӧ��������Щ�������ӡ�	
*/
function longPoll(url, callback){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
		    callback(xhr.responseText);
			//������һ�������������ӷ����
			xhr.open("get", url, true);
			xhr.send(null);
		}
		xhr.open("POST", url, true);
		xhr.send(null);
	};
}