//添加hasclass
function removeClass33(ele, cls) {　　
	if (ele.classList) {　　　　
		ele.classList.remove(cls);　　
	} else {　　　　
		ele.className = ele.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');　　
	}
}