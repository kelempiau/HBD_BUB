window.onload = function() {
    setTimeout(() => {
        document.getElementById('popup').classList.add('show');
    }, 800);

    // NONAKTIFKAN animasi slide
    // document.getElementById('slideIn').classList.add('slide-in-active');
};


function closePopup() {
    document.getElementById('popup').classList.remove('show');
}

