/*
//工厂模式
function createPerson(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		console.log(this.name);
	};
	return o;
}
var person = createPerson('Monkey', 100, 'Software Engineer');
//构造函数模式
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = function(){
		console.log(this.name);
	};
}
var person = new Person();
//构造函数优化
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	this.sayName = sayName;
}
function sayName(){
	console.log(this.name);
}
//原型模式
function Person(){}
Person.prototype.name = 'Monkey';
Person.prototype.age = 29;
//原型模式重点：实例中的指针仅指向原型，而不指向构造函数
function Person(){};
Person.prototype = {
	constructor: Person,
	sayName: function(){
		console.log('I am sayName');
	}
};
var person = new Person();
Person.prototype = {
	constructor: Person,
	sayName: function(){
		console.log('I am liu');
	}
};
var person1 = new Person();
person.sayName();
person1.sayName();
//原型问题：引用类型，修改导致全部修改
//例如1：
function Person(){};
Person.prototype = {
	constructor: Person,
	friends: ['one','two']
};
var person1 = new Person();
var person2 = new Person();
//person1.friends.push('three');
person1.friends = ['uuu'];
console.log(person2.friends);
//例如2：
function Person(){};
Person.prototype = {
	constructor: Person,
	friends: function(){
		console.log(1);
	}
};
var person1 = new Person();
var person2 = new Person();
person1.friends.x = 11;
console.log(person2.friends.x);
//动态原型模式
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;
	if(typeof this.sayName != 'function'){
		Person.prototype.sayName = function(){};
	}
}
var person = new Person();
//寄生构造函数模式
function Person(name, age, job){
	var o = new Object();
	o.name = name;
	o.age = age;
	o.job = job;
	o.sayName = function(){
		console.log(this.name);
	};
	return o;
}
var person = new Person('M', 100, 'Software Engineer');
*/
