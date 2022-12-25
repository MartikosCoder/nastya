const envelope = document.querySelector('.envelope');
const body = document.querySelector('body');
const overlay = document.querySelector('.redirect-overlay');
const full_text = document.querySelector('.full-text');

envelope.addEventListener('click', (e) => {
    e.preventDefault();

    envelope.classList.add('hidden');
    overlay.classList.add('active');
    setTimeout(() => {
        body.classList.add('message');
        overlay.classList.remove('active');
    }, 1000);

    setTimeout(() => {
        full_text.classList.add('active');
    }, 1500);
})