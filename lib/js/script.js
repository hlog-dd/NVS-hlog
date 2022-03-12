$(document).ready(function () {
    // Common begin
    $('.header-select__item:nth-child(2) .header-select__link').click(function () {
        $('.box-chat').toggleClass('active');
    });


    $('.overlay').click(function () {
        $('.overlay').removeClass('active');
        $('.modal-recharge').removeClass('active');
        $('.modal-rent').removeClass('active');
        $('.modal-donate').removeClass('active');

    })

    $('.subnav-item:first-child .subnav-link').click(function () {
        $('.overlay').toggleClass('active');
        $('.modal-recharge').toggleClass('active');
    });

    $('.js-modal-close').click(function () {
        $('.box-chat').removeClass('active');
        $('.modal-recharge').removeClass('active')
        $('.overlay').removeClass('active');
        $('.modal-rent').removeClass('active');
        $('.modal-donate').removeClass('active');

    })
    // End

    // Dashbroad
    $('#test1').click(function () {
        $('.footer').show();
    });

    $('.form-sex__label').click(function () {
        $('.form-sex__label').removeClass('check-sex');

        if ($('#male').prop('checked', true)) {
            $(this).toggleClass('check-sex');
        }
        else if ($('#female').prop('checked', true)) {
            $(this).toggleClass('check-sex');
        }
    });

    $('#test2').click(function () {
        $('.footer').show();
    })

    $('.cards-price__item').click(function () {
        $('.cards-price__item').removeClass('active');

        $(this).toggleClass('active');
    });

    $('li.time-item').click(function () {
        $('li.time-item').removeClass('active');

        $(this).toggleClass('active');
    });

    $('button.time-btn').click(function () {
        $(this).toggleClass('active-btn')
    })

    $('tbody.table__tbody > tr').click(function () {
        $('.table__tbody-child', this).toggleClass('exe2up');
        $('.table__tbody-text', this).toggleClass('messup');
        $('img.arrow-down', this).toggleClass('rotate');

    });

    $('.save-change').click(function () {
        // Ẩn trang điền thông tin
        $('#infomation').hide();

        // trang cmnd show lên
        $('#credit').show();

        // btn trở về show
        $('.save-btn__comeback').show();

        // Tạo màu cho số 2 và text
        $('.process-number').eq(1).addClass('active-process__number');
        $('.process-text').eq(1).addClass('active-process__text');

        // Đổi html của button
        $(this).html('<span>Tiếp theo: Chụp selfie</span> <img src="./img/dashboard/setting-info/arrow-right.svg" alt="" class="save-btn__img">');
    });

    $('.save-btn__comeback').click(function () {
        $('#infomation').show();
        $('#credit').hide();

        $('.process-number').eq(1).removeClass('active-process__number');
        $('.process-text').eq(1).removeClass('active-process__text');
        $('.save-btn').html('<span>Tiếp theo: Giấy tờ tùy thân</span> <img src="./img/dashboard/setting-info/arrow-right.svg" alt="" class="save-btn__img">');

        $('.save-btn__comeback').css('display', 'none');
    });
    // End

    // Details
    var check = false;

    $(".pass-change").click(function () {
        if (check == false) {
            check = true;
            $(this).text('Hủy');
        } else {
            check = false;
            $(this).text('Đổi mật khẩu');
        }
    });

    $('.form-sex__label').click(function () {
        $('.form-sex__label').removeClass('check-sex');

        if ($('#male').prop('checked', true)) {
            $(this).toggleClass('check-sex');
        }
        else if ($('#female').prop('checked', true)) {
            $(this).toggleClass('check-sex');
        }
    });

    $('#recharge').click(function () {
        $('#md-recharge').show();
    });

    $('.js-modal-close').click(function () {
        $('#md-recharge').slideUp('4000');
    });

    $('#md-recharge').click(function () {
        $('#md-charge').slideUp();
    });

    $('label.male').click(function () {
        $('label.male').toggleClass('active');
    });

    $('label.female').click(function () {
        $('label.female').toggleClass('active');
    });

    $('.navbar-mobi__close').click(function () {
        $('.navbar-mobi').hide();
        $('.nav__overlay').hide();
    });

    $('.nav__overlay').click(function () {
        $('.navbar-mobi').hide();
        $('.nav__overlay').hide();
    });

    $('.header-select__item:nth-child(4)').click(function () {
        $('.nav__overlay').show();

        $('.navbar-mobi').toggle().css('display', 'flex').animate({
            right: '0',
            opacity: '1',
        }, 'slow');
    });

    $('.navbar-mobi__close').click(function () {
        $('.navbar-mobi').hide();
        $('.nav__overlay').hide();
    });

    // Thay đổi ảnh đại diện
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                $('#imagePreview').hide();
                $('#imagePreview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imageUpload").change(function () {
        readURL(this);
    });

    // Rent 
    $('.rent').click(function() {
        $('.overlay').toggleClass('active');
        $('.modal-rent').toggleClass('active');
    })

    $('.donate').click(function() {
        $('.overlay').toggleClass('active');
        $('.modal-donate').toggleClass('active');
    })


    $(window).scroll(function () {
        // kiểm tra điều kiện > 300 thì mới addClass 
        if ($(window).scrollTop() > 50) {
            $('.header-wrap__mobi').addClass('active-header');
        }
        else {
            $('img.background-img__mobi').show();
            $('.header-wrap__mobi').removeClass('active-header');
        }
    });

    // BEGIN: Box Chat JS
    $('.message').click(function () {
        $('#box-chat').toggleClass('active');
    });
    // END 

    // BEGIN: Navbar mobi 
    $('.header-select__item:nth-child(4)').click(function () {
        $('.nav__overlay').show();

        $('.navbar-mobi').show().css('display', 'flex').animate({
            right: '0%',
            opacity: '1',
        }, '3000');
    });

    $('.navbar-mobi__close').click(function () {
        $('.navbar-mobi').hide().animate({
            right: '-100%',
            opacity: '0',
        }, 'slow');

        $('.nav__overlay').hide();
    });

    $('.nav__overlay').click(function () {
        $('.navbar-mobi').hide();
        $('.nav__overlay').hide();
    });
    // End

    $('#recharge').click(function () {
        $('#md-recharge').show();
    });

    $('.js-modal-close').click(function () {
        $('#md-recharge').slideUp('4000');
    });

    $('#md-recharge').click(function () {
        $('#md-charge').slideUp();
    });
});