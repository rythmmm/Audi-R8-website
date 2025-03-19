const hamburgerMenuText = document.getElementById("hamburgerMenuText")
const hamburgerMenu = document.getElementById("hamburgerMenu")
const menuNavItemContainer = document.getElementById("menuNavItemContainer")
const menuNavItems = document.querySelectorAll(".menuNavItem")

const menuNavItemsTexts = ["Models", "Innovation", "Careers", "Sustainability", "Audi in sport"]

document.getElementById("hamburgerBtn").addEventListener("click", () => {

if (hamburgerMenu.style.display === "none" || hamburgerMenu.style.display === "") {
	hamburgerMenu.style.display = "flex"
	hamburgerMenuText.style.display = "flex"
	hamburgerMenuText.textContent = "Menu"
	menuNavItems.forEach((item, index) => {
		item.textContent = menuNavItemsTexts[index]
	})
} else {
	hamburgerMenu.style.display = "none"
	hamburgerMenuText.style.display = "none"
}
})

const backToTopBtn = document.getElementById("backToTopBtn")

backToTopBtn.onclick = function() {
	window.scrollTo({ top: 0, behavior: "smooth"})
}