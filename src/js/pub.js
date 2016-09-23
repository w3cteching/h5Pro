//添加hasclass
function hasClass11qqqqqqqqqqqqqq(ele, cls) {　　
	if (!ele || !cls) return false;　　
	if (ele.classList) {　　　　
		return ele.classList.contains(cls);　　
	} else {　　　　
		return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));　　
	}
}