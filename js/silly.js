var SILLY = (function(module) {
	module.DoIT = function(resultObject) {
		resultObject.prepend('Hello Michael. Today is: ' +Date() + '<br>');
	};
return module;
}(SILLY || {}));