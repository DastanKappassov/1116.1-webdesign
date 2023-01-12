$(function(){
    // NAV
    $('.nav>ul>li').mouseenter(function(){
        $(this).children('.subnav').stop(true).slideDown(100)
    })
    $('.nav>ul>li').mouseleave(function(){
        $(this).children('.subnav').stop(true).slideUp(100)
    })

    // SLIDER
    $('.slide:gt(0)').hide()
    setInterval(function(){
        $('.slide:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('.slides')
    }, 3000)

    // POPUP
    $('.notice>ul>li:first').click(function(){
        $('#popup').stop(true).fadeIn(200)
    })
    $('.btn').click(function(){
        $('#popup').stop(true).fadeOut(200)
    })
});