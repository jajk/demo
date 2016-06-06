/*
    Comet最初是从永久帧技术演化过来的，就是打开一个隐藏的iframe，请求一个
	基于HTTP1.1块编码的文档。块编码是为增量读取超大型文档而设计的，所以你
	可以把它看做一个不断增加内容的文档。
*/
function foreverFrame(url, callback){
	var iframe = body.appendChild(document.createElement("iframe"));
	iframe.style.display = "none";
	iframe.src = url + "?callback=parent.foreverFrame.callback";
	this.callback = callback;
}
//服务器会发送一系列信息到iframe中，如
<script>parent.foreverFrame.callback("the first message");</script>
<script>parent.foreverFrame.callback("the second message");</script>