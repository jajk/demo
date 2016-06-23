Array.prototype.map = function(callback, thisArg){
	var newArr = [];
	if(callback && Object.prototype.toString.call(callback) != "[object Function]"){
		throw new TypeError('callback is not a function');
	}
	for(var i = 0, len = this.length; i < len; i++){
		newArr[i] = callback.call(thisArg, this[i], i , this);
	};
	return newArr;
};
function fn(value, i , obj){
	return value*2;
}
var newarr = [1,2,3,4].map(fn);
