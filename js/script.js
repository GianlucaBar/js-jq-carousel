$('.arrow.right').click( function(){
    var currentActive = $('.slider .active');
    currentActive.removeClass('active');

    var nextActive;
    if (currentActive.hasClass('last')){

        nextActive = $('.slider .first');
        nextActive.addClass('active');

    } else{

        nextActive = currentActive.next();
        nextActive.addClass('active');

    }
   
})

$('.arrow.left').click( function(){
    var currentActive = $('.slider .active');
    currentActive.removeClass('active');

    var prevActive;
    if (currentActive.hasClass('first')){

        prevActive = $('.slider .last');
        prevActive.addClass('active');

    } else{

        prevActive = currentActive.prev();
        prevActive.addClass('active');

    }
   
})