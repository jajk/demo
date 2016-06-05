var map = function (arr, callback, pThis) {
    var len = arr.length;
    var rlt = new Array(len);
    for (var i = 0; i < len; i++) {
        if (i in arr) rlt[i] = callback.call(pThis, arr[i], i, arr); 
    }
    return rlt;
};
var FunctionH = {
    overload: function (dispatcher, func_maps) {
        if (!(dispatcher instanceof Function)) {
            func_maps = dispatcher;
            dispatcher = function (args) {
                var ret = [];
                return map(args, function (o) { return typeof o}).join();
            }
        } 

        return function () {
            var key = dispatcher([].slice.apply(arguments));
            for (var i in func_maps) {
                var pattern  = new RegExp("^" + i.replace("*", "[^,]*").replace("...", ".*") + "$");
                if (pattern.test(key)) {
                    return func_maps[i].apply(this, arguments);
                } 
            }
        }
    }
};
//测试代码
var Calculate = FunctionH.overload({
	'number,number': function () {
        return arguments[0] + arguments[1];
    },
    'number,number,number': function () {
        return arguments[0] * arguments[1] * arguments[2];
    }
});
console.log(Calculate(1,2,6));