$(document).ready(function () {
    // Вывод меню
    $('.header__menu').on('click', function () {
        $('.header__menu-list').toggleClass('header__menu-list--active');
        $('.menu__img--open').toggleClass('menu__img--open--active');
        $('.menu__img--exit').toggleClass('menu__img--exit--active');
        $('.bg').toggleClass('bg--active');
    });
});