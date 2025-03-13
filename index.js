const backToTopBtn = document.getElementById("backToTopBtn")

backToTopBtn.onclick = function() {
	window.scrollTo({ top: 0, behavior: "smooth"})
}