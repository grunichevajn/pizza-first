$('.js-navigation-page').on('click', function(ev) {
    var dataAttr = ev.currentTarget.getAttribute('data-page')
    var pages = $('.page');
    pages.removeClass('page-show');
    pages.each(function(index, elm) {
        var $el = $(elm);
        var dataAtt = $el.attr('data-page')
        if (dataAtt === dataAttr) {
            $el.addClass('page-show')
        }
    })
});