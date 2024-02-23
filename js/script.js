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

let navLine = document.querySelector('.liaison__body hr.active');
let navItems = document.querySelectorAll('.liaison__body .menu__item');

navItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        switch(index) {
            case 0:
                navLine.style.left = `0%`;
                break;

            case 1:
                navLine.style.left = `14%`;
                break;

            case 2:
                navLine.style.left = `28%`;
                break;

            case 3:
                navLine.style.left = `45%`;
                break;

            case 4:
                navLine.style.left = `60%`;
                break;

            case 5:
                navLine.style.left = `70%`;
                break;

            case 6:
                navLine.style.left = `82%`;
                break;
        }
    });
});

let socialsBtn = document.querySelector('.block__bag');

socialsBtn.addEventListener('click', () => {
    document.querySelector('.networks__block').classList.toggle('active');
});