$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header').toggleClass('active');
        $('.body').toggleClass('lock');
    });
});

$(document).ready(function() {
  $('.spoiler__minisubtitle').click(function(event) {
  if($('.spoiler').hasClass('open')){
    $('.spoiler__minisubtitle').not($(this)).removeClass('active');
    $('.spoiler__text').not($(this).next()).slideUP(300);
  }
  $(this).toggleClass("active").next().slideToggle(300);
});
});



$(document).ready(function() {
  $('.diet-compo__slider').slick({
    arrows:false,
    dots:true,
    centerMode: false
  });
});

$(document).ready(function() {
  $('.diets__slider').slick({
    arrows:false,
    dots:true,
    centerMode: true
  });
});

