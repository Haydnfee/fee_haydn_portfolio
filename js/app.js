$(document).foundation()

    $(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('.home').css('background-position', x + 'px 0');
        }, 20);
    })

    $('.bannerTxtWrap').textillate({
        in: {
            effect: 'fadeIn',
            delayScale: 2,
            delay: 25,
            shuffle: true}

    });