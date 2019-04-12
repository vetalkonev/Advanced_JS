$('.menu-toggle').click(function () {
    $(this).toggleClass('open');
    $('.header-menu').fadeToggle('slow');
    $('.menu-toggle .cross').toggle(100);
});