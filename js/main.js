$(document).ready(function () {

    /* depth2 */
    $(".depth2,.depth2_box").hide();
    $(".gnb > li").mouseenter(function () {
        $(".depth2_box").stop().fadeIn();
        $(this).find(".depth2").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(".depth2_box").stop().fadeOut();
        $(this).find(".depth2").stop().fadeOut();
    });

    /* search */
    $(".header_search").hide();
    $(".util > .btn_search_open").click(function () {
        $(".header_search").stop().slideDown();
    });
    $(".search_close > img, section, .btn_more_open").click(function () {
        $(".header_search").stop().slideUp();
    });

    /* header_more */
    $(".header_more").hide();

    /* more_search */
    $(".header_more_search").hide();
    $(".btn_more_open").click(function () {
        $(".header_more").fadeIn();
    });
    $(".btn_more_close, section").click(function () {
        $(".header_more").fadeOut();
    });

    $(".btn_more_search_open").click(function () {
        $(".header_more_search").fadeIn();
    });
    $(".btn_more_search_close, .btn_more_close, section").click(function () {
        $(".header_more_search").fadeOut();
    });

    /* go to */
    $(".btn_gotop").click(function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    $(".btn_gobottom").click(function () {
        window.scrollTo({ top: 5000, behavior: 'smooth' });
    });
    $(".btn_goinfo").click(function () {
        window.scrollTo({ top: 1600, behavior: 'smooth' });
    });




    /* model */
    const model_txt = new Swiper('.model_txt', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }
    });
    const model_img = new Swiper('.model_img', {
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "true",
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        }

    });
    model_txt.controller.control = model_img;
    model_img.controller.control = model_txt;

    /* experience */
    const ex = new Swiper('.ex', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 3.5,
        spaceBetween: 30,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            dragSize: 150,
            draggable: "boolean",
        },
    });






});