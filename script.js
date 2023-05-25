$(document).ready(function(){
    $('.header__burger').click(function(){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $(".header__link").click(function(){
        if ($(window).width() < 767){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').removeClass('lock');
    }
    }); 
    $(".header__logo").click(function(){
        if ($(window).width() < 767){
        $('.header__menu').hide();
        $('.header__burger, .header__menu').removeClass('active');
        $('body').removeClass('lock');
    }
    });
    $(".header__burger, .header__link, .header__logo").click(function(){
        $('.header__menu').show(); 
    });
   
}); 


$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});

// popup

function openOrderPopup() {
    document.getElementById("order__popup").style.display = "flex";
}
function closeOrderPopup() {
    document.getElementById("order__popup").style.display = "none";
}

// lock body on scroll when popup is active

$(document).ready(function(){
    $('.order, .order__bread').click(function(){
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $('.btn__cancel').click(function(){
        $('body').removeClass('lock');
    });
});