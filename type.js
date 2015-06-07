function type(obj) {
	var class2type = {};
	var toString = class2type.toString;
	var arry = "Boolean Number String Function Array Date RegExp Object Error".split(" ");
	arry.forEach(function(item, index) {
		class2type["[object " + item + "]"] = item.toLowerCase();
	});
	if (obj === null) {
		return obj + "";
	}
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[toString.call(obj)] || "object" :
		typeof obj;
}

/*function type(ele) {
	var r;
	if (ele === null) r = 'null';
	else if (ele instanceof Array) r = 'array';
	else if (ele === window) r = 'window';
	else if (ele instanceof Date) r = 'date';
	else if (ele instanceof RegExp) r = 'regExp';
	else if (ele instanceof Function) r = 'function';
	else if (ele instanceof Error) r = 'Error';
	else r = typeof ele;
	return r;
}*/