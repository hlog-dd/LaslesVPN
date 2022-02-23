// Counter Up JS
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

// Jquery custom
$(document).ready(function() {
    $(window).scroll(function(){
        if( $(window).scrollTop() > 100 ){
            $('.header').addClass('fixed-header animate__animated animate__fadeInDown');
        } else {
            $('.header').removeClass('fixed-header animate__animated animate__fadeInDown');
        }
        
        // Show btn comeback
        var btn = $('#comeback');

        $(window).scroll(function() {
            if ($(window).scrollTop() > 250) {
                btn.show().addClass('animate__animated animate__bounceInUp');
            } else {
                btn.hide().removeClass('animate__animated animate__bounceInUp');
            }
        });
        // End
    });

    $('.navigation__link').click(function() {
        $('.navigation__checkbox').prop("checked", !$(".navigation__checkbox").prop("checked"));
    });
});