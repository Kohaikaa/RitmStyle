$(document).ready(function () {
    const slider = tns({
        container: '.feedback__slider',
        items: 2,
        speed: 500,
        slideBy: 'page',
        controls: true,
        nav: true,
        mode: "carousel",
        axis: "horizontal"
    });
});