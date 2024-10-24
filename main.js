document.addEventListener('DOMContentLoaded', () => {
	const faqContainer = document.querySelector('.faq-content');
	
	faqContainer.addEventListener('click', (e) => {
		const groupHeader = e.target.closest('.faq-group-header');

		if (!groupHeader) return;

		const group = groupHeader.parentElement;
		const groupBody = group.querySelector('.faq-group-body');
		const icon = groupHeader.querySelector('i');

		// Toggle icons
		icon.classList.toggle('fa-plus');
		icon.classList.toggle('fa-minus');

		// Toggle visibility of body
		groupBody.classList.toggle('open');

		// Close other open FAQ groups
		const otherGroups = faqContainer.querySelectorAll('.faq-group');

		otherGroups.forEach((otherGroup) => {
			if (otherGroup !== group) {
				const otherGroupBody = otherGroup.querySelector('.faq-group-body');
				const otherIcon = otherGroup.querySelector('.faq-group-header i')

				otherGroupBody.classList.remove('open');
				otherIcon.classList.remove('fa-minus');
				otherIcon.classList.add('fa-plus');
			}
		});
	});
});

// Make the Hamburger Button Interactive
document.addEventListener('DOMContentLoaded', () => {
	const hamburgerBtn = document.querySelector('.hamburger-button');

	hamburgerBtn.addEventListener('click', () => {
		const mobileMenu = document.querySelector('.mobile-menu');
		mobileMenu.classList.toggle('active');

		// if (hamburgerBtn) {
		// 	hamburgerBtn.innerHTML = `<div style="font-size: 50px"> &times; </div>`
		// }else {
		// 	hamburgerBtn.innerHTML = `
		// 		<div class="hamburger-line"></div>
		// 		<div class="hamburger-line"></div>
		// 		<div class="hamburger-line"></div>
		// 	`
		// }

	});
});