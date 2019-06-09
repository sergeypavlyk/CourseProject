
$(document).ready(function() {



var header = document.querySelector('header');
window.addEventListener('scroll', function() {
    var scroll = this.scrollY;
    if(scroll > 500) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
});

$('.nav-link').on('click', function(){
    $(this).toggleClass('active');
    $(this).parent().siblings().children().removeClass('active');
});

$(window).scroll(function() {
    var height = $(window).scrollTop();              
    $(".content h1").css("opacity", (150 - height) / 100); 
});
$(window).scroll(function() {
    var height = $(window).scrollTop();              
    $(".content span").css("opacity", (300 - height) / 100); 
});
$(window).scroll(function() {
    var height = $(window).scrollTop();              
    $(".content .download").css("opacity", (450 - height) / 100); 
});




});