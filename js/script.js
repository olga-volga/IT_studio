"use strict";

window.addEventListener('DOMContentLoaded', () => {

	// Header Mobile Menu

	const body = document.querySelector('body'),
		  headerMenu = document.querySelector('.header__menu'),
		  burgerBtn = document.querySelector('.header__burger');

	function openMenu() {
		burgerBtn.classList.toggle('active');
		headerMenu.classList.toggle('active');
		body.classList.toggle('lock');
	}

	function closeMenu() {
		burgerBtn.classList.remove('active');
		headerMenu.classList.remove('active');
		body.classList.remove('lock');
	}

	burgerBtn.addEventListener('click', openMenu);
	headerMenu.addEventListener('click', closeMenu);

});