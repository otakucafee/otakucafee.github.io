window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	var navbar = document.getElementById("navbar");
	var sign = document.getElementById("btn-sign");
	var link = document.getElementById("link");
	var linkk = document.getElementById("link2");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		navbar.classList.add("shadow");
		navbar.classList.add("bg-white");
		navbar.classList.remove("mt-3");
		sign.classList.remove("bg-custom");
		sign.classList.add("bg-custom-sm");
		link.classList.remove("link-navbar");
		link.classList.add("link-navbar-sm");
		linkk.classList.remove("link-navbar2");
		linkk.classList.add("link-navbar-sm2");
	} else {
		navbar.classList.remove("shadow");
		navbar.classList.remove("bg-white");
		navbar.classList.add("mt-3");
		sign.classList.add("bg-custom");
		sign.classList.remove("bg-custom-sm");
		link.classList.add("link-navbar");
		link.classList.remove("link-navbar-sm");
		linkk.classList.add("link-navbar2");
		linkk.classList.remove("link-navbar-sm2");
	}
}