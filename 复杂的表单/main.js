$('.add').on('click', function () {
    var text = '';
    text = text
        + '<div class="form-item-height-box-content">'
        + '<div class="form-item-height-box-content-text form-item-content-1-4"></div>'
        + '<div class="form-item-height-box-content-text form-item-content-1-4"></div>'
        + '<div class="form-item-height-box-content-text form-item-content-1-4"></div>'
        + '<div class="form-item-height-box-content-text form-item-content-1-4"></div>'
        + '</div>';
    $(this).parent().before(text);
    console.log(text);
});

$('.del').on('click', function () {
    if ($('.form-item-height-box-content').length > 1) {
        $('.form-item-height-box-content').eq($('.form-item-height-box-content').length - 1).remove();
    }
});