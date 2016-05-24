//IE有一部分对象并不是原生JavaScript对象，
//例如，其BOM和DOM中的对象就是使用C++以COM（Component Object Model，组件对象模型）对象的形式实现的，
//而COM对象的垃圾收集机制采用的是引用计数策略。

//我们知道，Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组，
//除了IE下的节点集合（因为ie下的dom对象是以com对象的形式实现的，js对象与com对象不能进行转换）

//怪癖检测
function convertToArray(nodes){
	var array = null;
	try{
		array = Array.prototype.slice.call(nodes, 0);
	}catch(ex){
		array = new Array();
		for(var i = 0, len = nodes.length; i < len; i++){
			array.push(nodes[i]);
		}
		return array;
	}
}

