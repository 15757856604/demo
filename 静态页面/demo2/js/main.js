$('.table .process-complete').hover(function (e) {
    var x = e.pageX;
    var y = e.pageY;
    var text = $(this).width();
    $('.dialog-box').css({left: x, top: y, display: 'block'});
    $('.dialog-box .text').html('当前进度条宽度为：' + text + 'px');
}, function (e) {
    $('.dialog-box').css('display', 'none');
});