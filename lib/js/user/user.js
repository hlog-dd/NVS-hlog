$(document).ready(function(){
     $('.header-select__item:nth-child(2)').click(function() {
         $('#box-chat').toggle().animate({
             bottom: '0%',
             opacity: '1',
         }, 'slow');
     });
 

     $('.js-modal-close').click(function() {
         $('#box-chat').hide();
     });

     $('.navbar-mobi__close').click(function() {
         $('.navbar-mobi').hide();
         $('.nav__overlay').hide();
     });

     $('.nav__overlay').click(function() {
         $('.navbar-mobi').hide();
         $('.nav__overlay').hide();
     });

     $('.header-select__item:nth-child(4)').click(function() {
         $('.nav__overlay').show();

         $('.navbar-mobi').toggle().css('display', 'flex').animate({
             right: '0%',
             opacity: '1',
         }, 'slow');
     });

 });