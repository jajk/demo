//zepto
!function(w){
	w.$ = w.zepto = function(selector){
		return w.zepto.init(selector);
	};
	w.zepto.Z = function(dom, selector){
		dom = dom || [];
		dom.__proto__ = arguments.callee.prototype;
		dom.selector = selector || '';
		return dom;
	};
	w.zepto.init = function(selector){
		var dom = document.querySelector(selector);
		return zepto.Z(dom, selector);
	};
	$.fn = {};
	zepto.Z.prototype = $.fn;
}(window);

//jQuery
!function(w){
	w.$ = w.jQuery = function(){
		return new w.$.fn.init();
	};
	$.fn = $.prototype = {
		init: function(){
			return this;
		}
	};
	$.fn.init.prototype = $.fn;
}(window);