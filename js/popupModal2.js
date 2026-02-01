
const popup2 = document.getElementById('supplementPopup');
const popupBox2 = popup2.querySelector('.popup-box');
const openBtn2 = document.querySelectorAll('.js-open-popup');
const closeBtn2 = popup2.querySelector('.js-close-popup');

openBtn2.forEach(btn => {
    btn.addEventListener('click', () => {
        popup2.classList.remove('opacity-0', 'invisible');
        popup2.classList.add('opacity-100', 'visible');

        popupBox2.classList.remove('scale-95', 'opacity-0');
        popupBox2.classList.add('scale-100', 'opacity-100');

        document.body.classList.add('overflow-hidden');
    });
});

closeBtn2.addEventListener('click', closePopup);
popup2.addEventListener('click', (e) => {
    if (e.target === popup2) closePopup();
});

function closePopup() {
    popupBox2.classList.add('scale-95', 'opacity-0');
    popupBox2.classList.remove('scale-100', 'opacity-100');

    popup2.classList.add('opacity-0', 'invisible');
    popup2.classList.remove('opacity-100', 'visible');

    document.body.classList.remove('overflow-hidden');
}

