$(document).ready(function () {
    // Вывод меню
    $('.list__item').on('click', function () {
        $('.popup').toggleClass('popup--active');
        $('.bg').toggleClass('bg--active');
    });

    $('.popup .form__exit').on('click', function () {
        $('.popup').toggleClass('popup--active');
        $('.bg').toggleClass('bg--active');
    });

    $('.bg').on('click', function () {
        $('.popup').toggleClass('popup--active');
        $('.bg').toggleClass('bg--active');
    });
});