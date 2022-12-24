const envelope = document.querySelector('.envelope');
const body = document.querySelector('body');

envelope.addEventListener('click', (e) => {
    e.preventDefault();

    envelope.classList.add('hidden');
    setTimeout(() => {
        body.classList.add('message');
    }, 1000)
})