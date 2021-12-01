const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {
        slide.classList.add('active');
        onClearActivateClasses()

        slide.classList.add('active')
    })
}

const onClearActivateClasses = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
};

const onslidesPlugin = (activeSlide = 0) => {
    const slides = document.querySelectorAll('.slide');
    slides[activeSlide].classList.add('active');
};

onslidesPlugin(4);