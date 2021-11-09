// scroll header
window.addEventListener('scroll', function(){
    var headerBlock = document.querySelector('header'),
    headerUp = window.pageYOffset || document.documentElement.scrollTop;

    if(headerUp >= 10){
        headerBlock.classList.add('header_scroll');
    } else if(headerUp < 10){
        headerBlock.classList.remove('header_scroll');
    }

});

// slider portfolio
$('.block__portfolio').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        320: {
            items:1
        },
        769:{
            items:1
        },
        900:{
            items:2
        },
        1500:{
            items:3
        },
        1920: {
            items:4
        }
    }
})


// Тип Image - галерея картинок
$(document).ready(function() {
  $('.image-link').magnificPopup({
  type: 'image',
  gallery:{
    enabled:true
  }
});
});

// =============== show more
// Polyfill for IE11 missing NodeList.forEach 

if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
    }
};
};

var parentReview = document.querySelector('.block__review');
if(parentReview){
   var childrenReview = parentReview.querySelectorAll('.review__item'),
   btnClick = document.querySelector('.btn__review');

   for(var i = 3; i < childrenReview.length; i++){
      childrenReview[i].style.display = "none";
  }

      btnClick.addEventListener('click', function(){
         for(var i = 3; i < childrenReview.length; i++){

            if(childrenReview[i].style.display == "none"){
              childrenReview[i].style.display = "block";
              this.innerHTML = 'Показати менше';
          } else {
           childrenReview[i].style.display = "none";
           this.innerHTML = 'Показати більше';
                }

        }

    });
 
};

// reviwe video
$('.popup-youtube').magnificPopup({ 
    type: 'iframe',
    mainClass: 'mfp-fade',
    preloader: true,
 });

// jquery validator popup
$(function () {
    $('.cunsult').submit(function (e) {;
        $('div.'+$(this).find('button[type="submit"]').attr("rel")).fadeIn(500);
        $('.popup__successful').css('display', 'flex').show();
        $(this).trigger( 'reset' );
        e.preventDefault()
    }); 
    $('button.close').click(function () {
        $('.popup__successful').hide();
        return false;
    });
    $('.btn__close').click(function () {
        $('.popup__successful').hide();
        return false;
    });
});



