
const trigger = document.querySelector('[data-cpr-trigger]');
const content = document.querySelector('[data-cpr-content]');
const icon = trigger.querySelector('svg');

trigger.addEventListener('click', () => {
    const open = content.classList.toggle('opacity-100');
    content.classList.toggle('max-h-[300px]');
    content.classList.toggle('mt-3');
    icon.classList.toggle('rotate-180');
    trigger.setAttribute('aria-expanded', open);
});

