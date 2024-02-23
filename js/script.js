const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    let current = 0;
    let slides = slider.querySelectorAll('.slide');
    let slideWidth = parseInt(getComputedStyle(slides[0]).width) + parseInt(getComputedStyle(slides[0]).marginRight);

    slider.parentNode.querySelector('.next').addEventListener('click', () => {
        if (current < slides.length - slider.getAttribute('data-first'))
            current++;

        slides.forEach(slide => {
            slide.style.transform = `translate(-${current * slideWidth}px)`;
        });
    });

    slider.parentNode.querySelector('.prev').addEventListener('click', () => {
        if (current > 0)
            current--;

        slides.forEach(slide => {
            slide.style.transform = `translate(-${current * slideWidth}px)`;
        });
    });
});

let socialsBtn = document.querySelector('.block__bag');

// socialsBtn.addEventListener('click', )