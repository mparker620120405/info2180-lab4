window.onload = function f1() {
	var x = document.querySelectorAll("#board > div");
	var count;
	for (count = 0; count < x.length; count++) {
		x[count].classList.add("square");
	}
}