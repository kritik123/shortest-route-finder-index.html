$('.slider-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.slider-2'
});

$('.slider-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.slider-1'
});

$('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 1000,
    dots: true,
    appendDots: $('.news-col'),
    dotsClass: 'slick-dots mt-30',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
            }
        }
    ]
});

$('.client-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    rows: 2,
    slidesPerRow: 1,
    speed: 3000,
    dots: true,
    appendDots: $('.clients-col'),
    dotsClass: 'slick-dots mt-30',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true
            }
        },
        {
            breakpoint: 630,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
});

$('.sliding-quotes').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.sliding-quote-logos'
});

$('.sliding-quote-logos').slick({
    arrows: false
})

$('.slide-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    lazyLoad: 'ondemand'
});

$('.photo-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    fade: true,
    cssEase: 'linear'
});

$('.jobs-slider').slick();


$(".dot_1").click(function(){
	$(".dot_3_div").show();
});

$(".dot_2").click(function(){	
	$(".dot_2_div").show();
});

$(".dot_3").click(function(){
	$(".dot_1_div").show();
});

$(".show_in_mobile").click(function(){
	$(".dot_1_div").hide();
	$(".dot_2_div").hide();
	$(".dot_3_div").hide();
});
