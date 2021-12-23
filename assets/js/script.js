$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu,.header').toggleClass('active');
    $('.body').toggleClass('lock');
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

$(document).ready(function() {
  $('.spoiler__minisubtitle').click(function(event) {
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

