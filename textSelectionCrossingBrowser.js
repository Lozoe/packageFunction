// textBox要操作的文本框  startIndex要选择文本中第一个字符的索引  stopIndex要选择文本中最后一个字符的索引
function selectText(textBox, startIndex, stopIndex) {
	if (textBox.setSelectionRange) {
		textBox.setSelectionRange(startIndex, stopIndex);
	} else if (textBox.createTextRange) {
		var range = textBox.createTextRange();
		range.collapse(true);
		range.moveStart("character", startIndex);
		range.moveEnd("character", stopIndex - startIndex);
		range.select();
	}
	textBox.focus();
}