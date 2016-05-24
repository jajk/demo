//继承
function SuperType(){
	this.name = 'Dorie';
};
SuperType.prototype.getSuperValue = function(){
	return this.name;
};
function SubType(){
	this.name = 'Monkey';
};
SubType.prototype = new SuperType();
var instance = new SubType();
console.log(instance.constructor);
console.log(instance.getSuperValue());

//组合继承：原型链和借用构造函数，缺点调用两次构造函数
function SuperType(name){
	this.name = name;
	this.colors = ["red", "blue", "green"];
};
SuperType.prototype.sayName = function(){
	console.log(this.name);
};
function SubType(name, age){
	SuperType.call(this, name);
	this.age = age;
};
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
	console.log(this.age);
};

