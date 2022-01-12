$(document).ready(function(){
    $(window).scroll(function(){
        // kiểm tra điều kiện > 300 thì mới addClass 
        if ( $(window).scrollTop() > 50 ){
            $('.header-wrap__mobi').addClass('active-header');
        }
        else{
            $('img.background-img__mobi').show();
            $('.header-wrap__mobi').removeClass('active-header');
        }
    }); 

    $(".donate").click(function(){
        $(".modal-dna").show();
        $("#donate").show();
    });

    // BEGIN: Box Chat JS
    $('.header-select__item:nth-child(2)').click(function() {
        $('#box-chat').show().animate({
            bottom: '0%',
            opacity: '1',
        }, 'slow');
    });

    $('.message').click(function() {
        $('#box-chat').show().animate({
            bottom: '0%',
            opacity: '1',
        }, 'slow');
    });

    $('.box-chat__close').click(function() {
        $('#box-chat').hide().animate({
            bottom: '-100%',
            opacity: '0',
        }, 'slow');
    });
    // END 

    // BEGIN: Navbar mobi 
    $('.header-select__item:nth-child(4)').click(function() {
        $('.nav__overlay').show();

        $('.navbar-mobi').show().css('display', 'flex').animate({
            right: '0%',
            opacity: '1',
        }, '3000');
    });

    $('.navbar-mobi__close').click(function() {
        $('.navbar-mobi').hide().animate({
            right: '-100%',
            opacity: '0',
        }, 'slow');

        $('.nav__overlay').hide();
    });

    $('.nav__overlay').click(function() {
        $('.navbar-mobi').hide();
        $('.nav__overlay').hide();
    });
    // End

    $('#recharge').click(function() {
        $('#md-recharge').show();
    });

    $('.js-modal-close').click(function() {
        $('#md-recharge').slideUp('4000');
    });

    $('#md-recharge').click(function() {
        $('#md-charge').slideUp();
    });



    

    $(".rent").click(function(){
        $(".modal-rnt").show();
        $("#rent").show();
    });

    $(".js-modal-close").click(function() {
        $("#donate").slideUp();
        $("#rent").slideUp();
    });

    $(".modal-dna").click(function() {
        $("#donate").slideUp();
    });

    $(".modal-recharge__money").click(function() {
        $("#md-recharge").slideUp();
    });

    $(".modal-rnt").click(function() {
        $("#rent").slideUp();
    });
});