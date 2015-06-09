//传入一个select元素的引用，返回一个选中选项应用的数组
function getSelectedOptions(selectBox) {
	var result = new Array();
	var option = null;
	for (var i = 0, len = selectBox.length; i < len; i++) {
		option = selectBox.options[i];
		if (option.selected) {
			result.push(option);
		}
	}
	return result;
}

//清除所有的项
function clearSelectBox(selectBox){
	for(var i=0,len=selectBox.options.length;i<len;i++){
		selectBox.remove(i);
	}
}