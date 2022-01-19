const logoImg = document.querySelector('.brand-container .logo-container .logo');
const brandNameSpan = document.querySelectorAll('.brand-container .brand span');
const internalLinks = document.querySelectorAll('.buttons-container .nav-buttons');

window.addEventListener('load', () => {
	
	const TL = gsap.timeline({paused: true});
	
	TL
	.staggerFrom(brandNameSpan, 1, {y: -50, opacity: 0, ease: "power2.out"}, 0.1)
	.staggerFrom(internalLinks, 1, {x: 200, opacity: 0, ease: "power2.out"}, 0.2, '-=1')
	.from(logoImg, 1, {x: -200, opacity: 0, ease: "power2.out"}, 0, '-=1');

	TL.play();
})
