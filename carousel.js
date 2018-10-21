const $carousel = $('#carousel');
const $imgs = $('#carousel img');
let indexCourant = 0;
const indexMax = $imgs.length;

$(document).ready(function() {
    majCarousel();

    $('#next').click(function(){
        next();
    });

    $('#previous').click(function(){
        previous();
    });

    setInterval(next, 3000);
});

function majCarousel()
{
    $imgs.css('display', 'none');
    $imgs.eq(indexCourant).fadeIn(300); // Bonus fondu
    $imgs.eq(indexCourant).css('display', 'block');
}

function next()
{
    indexCourant++;
    indexCourant %= indexMax;
    majCarousel();
}

function previous()
{
    indexCourant--;
    indexCourant %= indexMax;
    majCarousel();
}