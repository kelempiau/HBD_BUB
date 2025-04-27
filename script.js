window.onload = function() {
    setTimeout(() => {
        document.getElementById('popup').classList.add('show');
    }, 800);

    window.addEventListener('scroll', () => {
        const wish = document.getElementById('slideIn');
        const rect = wish.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            wish.classList.add('slide-in-active');
        }
    });
};

function closePopup() {
    document.getElementById('popup').classList.remove('show');
}

