function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunction1() {
  var x = document.getElementById("myInput1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunction2() {
  var x = document.getElementById("myInput2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

$(document).ready(function(){
    var check = false;
    
    $(".pass-change").click(function(){
        if( check == false) {
            check = true;
            $(this).text('Hủy');
        } else {
            check = false;
            $(this).text('Đổi mật khẩu');
        }
    });

    $('#recharge').click(function() {
        $('#md-recharge').show();
    });

    $('.js-modal-close').click(function() {
        $('#md-recharge').slideUp('4000');
    });

    $('#md-recharge').click(function() {
        $('#md-charge').slideUp();
    });

    $('.js-modal-close').click(function() {
        $('#box-chat').hide();
    });

    $('label.male').click(function() {
        $('label.male').toggleClass('active');
    });

    $('label.female').click(function() {
        $('label.female').toggleClass('active');
    });

    $('.navbar-mobi__close').click(function() {
        $('.navbar-mobi').hide();
        $('.nav__overlay').hide();
    });

    $('.nav__overlay').click(function() {
        $('.navbar-mobi').hide();
        $('.nav__overlay').hide();
    });

    $('.header-select__item:nth-child(2)').click(function() {
        $('#box-chat').toggle().animate({
            bottom: '0%',
            opacity: '1',
        }, 'slow');
    });

    $('.header-select__item:nth-child(4)').click(function() {
        $('.nav__overlay').show();

        $('.navbar-mobi').toggle().css('display', 'flex').animate({
            right: '0',
            opacity: '1',
        }, 'slow');
    });

    $('.navbar-mobi__close').click(function() {
        $('.navbar-mobi').hide();
        $('.nav__overlay').hide();
    });

// Thay đổi ảnh đại diện
    function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function(e) {
              $('#imagePreview').css('background-image', 'url('+e.target.result +')');
              $('#imagePreview').hide();
              $('#imagePreview').fadeIn(650);
          }
          reader.readAsDataURL(input.files[0]);
      }
    }
    $("#imageUpload").change(function() {
          readURL(this);
    });
});