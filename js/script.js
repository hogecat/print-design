$(function () {
    // ヘッダーのスクロール対応
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $(".header").addClass("is-active");
        } else {
            $(".header").removeClass("is-active");
        }
    });

    //ページトップへ戻る
    var $pageTop = $(".page-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $pageTop.fadeIn();
        } else {
            $pageTop.fadeOut();
        }
    });
    $pageTop.on("click", function () {
        $("body,html").animate(
            {
                scrollTop: 0,
            },
            300
        );
        return false;
    });

    // ハンバーガーメニュー
    var btnMenu = $(".js-btn-menu");
    var globalNav = $(".global-nav");

    btnMenu.on("click", function () {
        btnMenu.toggleClass("is-active");
        globalNav.toggleClass("is-show");
    });

});

// Swipperスクロール
const swiper = new Swiper(".js-swiper-container", {
    autoplay: {
        delay: 4000,
    },
    speed: 500,
    loop: true,
    effect: "fade",

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});



