Backbone.View.prototype.scrollToElement = function (selector, time, verticalOffset) {
    var time = typeof(time) != 'undefined' ? time : 500;
    var verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
    var element = $(selector);
    if (typeof(element.offset()) == 'undefined') {
        return;
    }
    var offset = element.offset();
    var offsetTop = offset.top + verticalOffset;


    $('#mainFeedTextsDiv').animate({ scrollTop: offsetTop }, time);
}