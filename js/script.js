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


	// Modal Email

	const emailBtn = document.querySelector('.submit__btn'),
		  modal = document.querySelector('.modal-email'),
		  close = document.querySelector('.modal-email__close');

	function showModal() {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modal.style.display = 'none';
		document.body.style.overflow = '';
	}

	emailBtn.addEventListener('click', showModal);
	close.addEventListener('click', closeModal);

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});

});