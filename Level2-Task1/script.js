(function(window,document,undefined) {
    const navBar = document.querySelector(".navBar");
    const hamburger = document.querySelector(".hamburger")
    const dots = document.querySelector(".dots");
    if(window.innerWidth < 600) {
        navBar.style.display = 'none';
        dots.style.display = 'flex';
        dots.textContent = '...';
    }
    dots.addEventListener('click', () => {
        if(hamburger.style.display == 'none'  || hamburger.style.display == '') {
            hamburger.style.display = 'block';
        } else {
            hamburger.style.display = 'none';
        }
    });
})(window,document)        