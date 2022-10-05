$(document).ready(function () {
    $(".slider").slick({
        arrows: false,
        autoplay: true,
        speed: 1000,
    });
});

$(document).ready(function () {
    $(".list__houses").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        csssEase: "linear",
        responsive: [
            {
                breakpoint: 759,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});

$(document).ready(function () {
    $(".customer-content-list").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        csssEase: "ease-in",
        responsive: [
            {
                breakpoint: 759,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
});
