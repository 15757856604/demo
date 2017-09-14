/**
 * Created by fan_lv on 2017-9-7 0007.
 */
const searchUrl = 'http://222.85.138.91:9012/api/queryEs.do';


window.onload = function () {
    change();

    $('#search-box .inp').val('');
    $('#after-search .inp').val('');
    if ($('#search-box .inp').val() != '') {
        $('#search-box').hide();
        $('#after-search').show();
        search();
    }
};

function change() {
    var height = window.innerHeight;
    var afterSearch = document.getElementById('after-search');
    afterSearch.style.minHeight = height - 120 + 'px';
}

window.onresize = function () {
    change();
};

//搜索按钮点击事件
$('#search-box .search-icon').on('click', function () {
    var text = $(this).prev().val();
    if (text != '') {
        $('#after-search .inp').val(text);
        $('#search-box').hide();
        $('#after-search').show();
        search(text);
    }
});
//搜索按钮点击事件
$('#after-search .search-icon').on('click', function () {
    var text = $(this).prev().val();
    if (text == '') {
        $('#search-box .inp').val('');
        $('#search-box').show();
        $('#after-search').hide();
    }
    else {
        search(text);
    }
});

//筛选条件点击事件
$('.condition-item').on('click', function () {
    $(this).addClass('select').siblings().removeClass('select');
});

//扩展工具展开收缩
$('#open-extend').on('click', function () {
    $('#extend').animate({top: -28}, 500);
});
$('#close-extend').on('click', function () {
    $('#extend').animate({top: 0}, 500);
});

//回车搜索
$(document).on('keyup', '.inp', function (e) {
    var text = $(this).val();
    if (e.keyCode === 13) {
        if (text != '') {
            $('#after-search .inp').val(text);
            $('#search-box').hide();
            $('#after-search').show();
            search(text);
        }
        else {
            $('#search-box .inp').val('');
            $('#search-box').show();
            $('#after-search').hide();
        }
    }
});

function search(keyWord) {
    $.ajax({
        url: searchUrl,
        data: {
            keyWord: keyWord
        },
        success: function (data) {
            var txt = '';
            $('#result-num').html(data.total);
            for (var i = 0; i < data.resultList.length; i++) {
                txt += '<li class="item"><a class="item-title" href="javascript:void(0);" title="'
                    + data.resultList[i].title + '">' + data.resultList[i].title + '</a><p class="item-content" title="'
                    + data.resultList[i].content + '">' + data.resultList[i].content + '</p><a class="item-filename" href="http://222.85.138.91:9012/api/download?id='
                    + data.resultList[i].fileId + '" title="' + data.resultList[i].filename + '">' + data.resultList[i].filename + '</a><p class="item-keyword">'
                    + data.resultList[i].keyword + '</p></li>'
            }
            $('#items').html(txt);

            //超出三行省略号
            var content = document.getElementsByClassName('item-content');
            for (var j = 0; j < content.length; j++) {
                $clamp(content[j], {clamp: 4});
            }
        }
    })
}