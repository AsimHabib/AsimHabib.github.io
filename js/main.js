$(".filter ul li").click(function() {
    $(this).addClass("active");
    $(this).siblings("li").removeClass("active");
});
$('.media ul li a').hover(
   function(){ $(this).toggleClass('animated swing') }
)
$("nav ul li a").hover(function(){
   $(this).children("span").toggleClass("active");
});