"use strict";

/**
 * Light and Dark Mode
 */

const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | String} */ isDark = window.matchMedia("(prefers-color-scheme:light)")
	.matches;

//  console.log(window.matchMedia("(prefers-color-scheme:dark)"));
//  console.log(isDark);

if (sessionStorage.getItem("theme")) {
	$HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
	$HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {
	$HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
	sessionStorage.setItem("theme", $HTML.dataset.theme);
			if (sessionStorage.getItem("theme") === "dark") {
		document.body.classList.add('dark');
		document.body.classList.remove('light');
		} else {
		document.body.classList.remove('dark');
		document.body.classList.add('light');
		}

}

$themeBtn.addEventListener("click", changeTheme);

/**
 * Tab
 */

const /**{NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /**{NodeElement} */[lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let /**{NodeElement} */[lastActiveTabBtn] = $tabBtn;

console.log(sessionStorage.getItem("theme"))

	if (sessionStorage.getItem("theme") == "dark")  {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
} else {
  document.body.classList.remove('dark');
  document.body.classList.add('light');
}

// console.log([lastActiveTab])
// console.log([lastActiveTabBtn])

$tabBtn.forEach(item => {
	// console.log(lastActiveTab.classList);
	// console.log(lastActiveTabBtn.classList);
	// const/**{NodeElement} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`)
	// console.log($tabContent)
	item.addEventListener("click", function () {
		lastActiveTab.classList.remove("active");
		lastActiveTabBtn.classList.remove("active");
		const/**{NodeElement} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`)
		$tabContent.classList.add("active");
		this.classList.add("active");

		lastActiveTab = $tabContent;
		lastActiveTabBtn = this;
	})
})

/**
 * Scroll Reveal Animation
 */
function revealOnScroll() {
	const elements = document.querySelectorAll('.scroll-reveal');
	const windowHeight = window.innerHeight;

	elements.forEach(element => {
		const elementTop = element.getBoundingClientRect().top;
		const elementVisible = 150;

		if (elementTop < windowHeight - elementVisible) {
			element.classList.add('revealed');
		}
	});
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);