//添加hasclass
function addClass22(ele, cls) {　　
	if (ele.classList) {　　　　
		ele.classList.add(cls);　　
	} else {　　　　
		if (!hasClass(ele, cls)) ele.className += '' + cls;　　
	}
}