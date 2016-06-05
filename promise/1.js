var Promise = function () {
	this.thens = [];
};
Promise.prototype = {
	resolve: function () {
		var t,n;
		//t && (n = t.apply(null, arguments), n instanceof Promise && (n.thens = this.thens));
        	do{
		    	t = this.thens.shift();
			n = null;
			t && (n = t.apply(null, arguments));	
		}while( t && !(n instanceof Promise) );
		
		if(this.thens.length){
			n.thens = this.thens;
		};
	},
	then: function (n) {
		return this.thens.push(n), this;
	}
}
function f1() {
	var promise = new Promise();
	setTimeout(function () {
	   
		console.log(1);
		promise.resolve();
	}, 1500)

	return promise;
}

function f2() {
	var promise = new Promise();
	setTimeout(function () {
		console.log(2);
		promise.resolve();
	}, 1500);
	return promise;
}

function f3() {
	var promise = new Promise();
	setTimeout(function () {

		console.log(3);
		promise.resolve();
	}, 1500)

	return promise;
}

function f4() {
	console.log(4);
}

function f5() {
	console.log(5);
}

function f6() {
	var promise = new Promise();
	setTimeout(function () {

		console.log(6);
		promise.resolve();
	}, 1500)

	return promise;
}

function f7() {
	console.log(7);
}

var that = f1().then(f2).then(f3).then(f4).then(f5).then(f6).then(f7);
