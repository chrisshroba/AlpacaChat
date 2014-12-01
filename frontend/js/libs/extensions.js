Backbone.View.prototype.scrollToElement = function (selector, time, verticalOffset) {
    var time = typeof(time) != 'undefined' ? time : 200,
        verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0,
        element = $(selector),
        offset = element.offset(),
        offsetTop = offset.top + verticalOffset;

    $('html, body').animate({ scrollTop: offsetTop }, time);
}