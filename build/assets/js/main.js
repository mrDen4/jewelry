$(document).ready(function () {
    // Клик по кнопке "заказать"
    $('.shop .shop__list .item__btn').on('click', function () {
        $('.popup').toggleClass('popup--active');
        $('.bg').toggleClass('bg--active');
    });

    // Вывод товаров в виде popup окна
    $('.shop .shop__list .list__item .item__block').on('click', function() {
        $(this).closest('.list__item').addClass('list__item--active');
        $('.bg').toggleClass('bg--active');
    });

    $('.shop .shop__list .item__exit, .shop .shop__list .item__btn').on('click', function() {
        $(this).closest('.list__item').removeClass('list__item--active');
        $('.bg').toggleClass('bg--active');
    });

    $('.popup .form__exit').on('click', function () {
        $('.popup').toggleClass('popup--active');
        $('.bg').toggleClass('bg--active');
    });

    $('.bg').on('click', function () {
        $('.popup').removeClass('popup--active');
        $('.bg').removeClass('bg--active');
        $('.list__item').removeClass('list__item--active');
    });

    $(".header__menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });        
});