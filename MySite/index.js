window.addEventListener('load', function () {
    const element = document.querySelector('.sportman');
    const elementNav = document.querySelector('.navigator');
    element.classList.add('animate-on-load');
    element.classList.remove('sportman');

});
window.addEventListener('load', function () {
    const elementNav = document.querySelector('.nav-start');
    elementNav.classList.add('navigation');
    elementNav.classList.remove('nav-start');
});
window.addEventListener('load', function () {
    const elementText = document.querySelector('.text_start');
    elementText.classList.add('text_wrapper');
    elementText.classList.remove('text_start');
});