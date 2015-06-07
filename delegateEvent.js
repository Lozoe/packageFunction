var delegateEvent = function(target, event, fn) {
	addEvent(document, event, function(e) {
		if (e.target.nodeName == target.toUpperCase()) {
			fn.call(e.target);
		}
	});
};