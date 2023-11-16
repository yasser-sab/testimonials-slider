const sliders = document.querySelectorAll('.slide'),
		lefts = document.querySelectorAll('#left'),
		rights = document.querySelectorAll('#right'),
		activeClass = 'active';

var count = 0,
	sliderLength = sliders.length;

lefts.forEach(left => {
	left.addEventListener('click',()=>{
	console.log("wfs");
	if(count > 0) {
		let slide = sliders[--count];

		sliders.forEach(slide => {
			slide.classList.remove(activeClass);
		});
		slide.classList.toggle(activeClass);
	}
});
});

rights.forEach(right => {
right.addEventListener('click',()=>{
	if(count < sliderLength - 1) {
		let slide = sliders[++count];

		sliders.forEach(slide => {
			slide.classList.remove(activeClass);
		});
		slide.classList.toggle(activeClass);
		
	}
});
});

