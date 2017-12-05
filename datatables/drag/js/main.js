/**
 * Created by fan_lv on 2017-11-7 0007.
 */


$('#demo').dataTable({
    ajax: {
        url: 'js/list.json',
        data: {},
        dataSrc: function (data) {
            return data.data
        }
    },
    columns: [
        {
            "title": "id",
            "data": "id",
            "render": function (value, state, data) {
                return '<span class="node" data-index="' + data.treeIndex + '" data-parentIndex="' + data.parentIndex + '" data-state="open">' + value + '</span>';
            }
        }, {
            "title": "name",
            "data": "name"
        }
    ],
    drawCallback: function () {

        /*$('tr').each(function () {
         $(this).attr('data-id', $(this).find('.node').attr('data-id'));
         $(this).attr('data-tt-id', $(this).find('.node').attr('data-tt-id'));
         $(this).attr('data-tt-parent-id', $(this).find('.node').attr('data-tt-parent-id'));
         });

         $('#demo').treetable({
         expandable: true //是否可展开收缩
         },true);

         // Highlight selected row
         $("#demo tbody").on("mousedown", "tr", function() {
         $(".selected").not(this).removeClass("selected");
         $(this).toggleClass("selected");
         });

         // Drag & Drop Example Code
         $("#demo .file, #demo .folder").draggable({
         helper: "clone",
         opacity: .75,
         refreshPositions: true, // Performance?
         revert: "invalid",
         revertDuration: 300,
         scroll: true
         });

         $("#demo .folder").each(function() {
         $(this).parents("#demo tr").droppable({
         accept: ".file, .folder",
         drop: function(e, ui) {
         var droppedEl = ui.draggable.parents("tr");
         $("#demo").treetable("move", droppedEl.data("ttId"), $(this).data("ttId"));
         var parentId = $(this).data('id');
         console.log(parentId);
         },
         hoverClass: "accept",
         over: function(e, ui) {
         var droppedEl = ui.draggable.parents("tr");
         if(this != droppedEl[0] && !$(this).is(".expanded")) {
         $("#demo").treetable("expandNode", $(this).data("ttId"));
         }
         }
         });
         });*/

        $('.node').each(function () {
            var indexArray = $(this).attr('data-index').split('-');
            var paddingLeft = 16 * indexArray.length;
            $(this).css('padding-left', paddingLeft + 'px');
        })
    }
});

//点击展开收缩节点
$('#demo').on('click', '.node', function () {
    var treeIndex = $(this).attr('data-index');
    var state = $(this).attr('data-state');

    $('.node').each(function () {
        if (state === "open" && $(this).attr('data-index').indexOf(treeIndex) == 0 && $(this).attr('data-index') != treeIndex) {
            $(this).attr('data-state', 'close');
            $(this).parents('tr').hide();
        }
        else if (state === "close" && $(this).attr('data-index').indexOf(treeIndex) == 0 && $(this).attr('data-index') != treeIndex) {
            $(this).attr('data-state', 'open');
            $(this).parents('tr').show();
        }
    });

    if (state === "open")
        $(this).attr('data-state', 'close');
    else
        $(this).attr('data-state', 'open');
});

//同级节点拖动排序
$('#demo tbody').sortable({
    revert: false,
    start: function (event, ui) {
        var treeIndex = $(ui.item[0]).find('.node').attr('data-index');
        //当有子节点时加入拖动序列
        $('.node').each(function () {
            if ($(this).attr('data-index').indexOf(treeIndex) === 0 && $(this).attr('data-index') !== treeIndex) {
                ui.item.push($(this).parents('tr')[0]);
                ui.helper.push($(this).parents('tr')[0]);
            }
        });
    },
    stop: function (event, ui) {
        //当为根节点时，拖动取消
        if ($(ui.item[0]).find('.node').attr('data-index') === '0') {
            return false;
        }

        if ($(ui.item[0]).prev().length > 0) {
            var index = $(ui.item[0]).find('.node').attr('data-index');
            var prevIndex = $(ui.item[0]).prev().find('.node').attr('data-index'); //需判断是否存在该节点 todo
            var lastIndex = $(ui.item[ui.item.length - 1]).find('.node').attr('data-index');
            var nextIndex = $(ui.item[ui.item.length - 1]).next().find('.node').attr('data-index'); //需判断是否存在该节点 todo
            var indexArray = index.split('-');
            var prevIndexArray = prevIndex.split('-');//需判断是否存在该节点 todo
            var lastIndexArray = lastIndex.split('-');
            var nextIndexArray = nextIndex ? nextIndex.split('-') : [];//需判断是否存在该节点 todo
            //拖动元素的父亲节点index
            // var parentIndex = $(ui.item[0]).find('.node').attr('data-parentIndex');
            var parentIndex = findParent(indexArray, 0, indexArray.length - 1);

            var equative = [], // 拖动完成后同级节点数组
                equativeChild = []; // 拖动完成后子节点数组

            if (indexArray.length < prevIndexArray.length - 1 || indexArray.length > prevIndexArray.length + 1 || (lastIndexArray.length === nextIndexArray.length && lastIndexArray.length !== indexArray.length) || (indexArray.length !== prevIndexArray.length && indexArray.length !== nextIndexArray.length) || (nextIndexArray.length > 0 && nextIndexArray.length !== indexArray.length)) {
                return false;
            }
            for (var i = 0; i < indexArray.length - 1; i++) {
                //跨大节点拖动时返回false
                if (indexArray[i] !== prevIndexArray[i]) {
                    return false;
                }
            }

            //拖动完成后给拖动的节点及同级节点重新排序赋值
            $('.node').each(function () {
                var thisIndex = $(this).attr('data-index');
                if (thisIndex.indexOf(parentIndex) === 0 && thisIndex.split('-').length === (parentIndex.split('-').length + 1)) {
                    equative.push($(this));
                }
            });

            for (var j = 0; j < equative.length; j++) {
                var thisIndex = equative[j].attr('data-index');
                var thisIndexArray = thisIndex.split('-');
                var equativeChilds = [];
                $('.node').each(function () {
                    var nowIndex = $(this).attr('data-index');
                    if (nowIndex.indexOf(thisIndex) === 0 && nowIndex.split('-').length > thisIndexArray.length) {
                        equativeChilds.push($(this));
                    }
                });
                equativeChild.push(equativeChilds);
            }

            for (var k = 0; k < equative.length; k++) {
                var thisIndex = equative[k].attr('data-index');
                var thisIndexArray = thisIndex.split('-');
                thisIndexArray[thisIndexArray.length - 1] = k;
                equative[k].attr('data-index', thisIndexArray.join('-'));
            }

            for (var l = 0; l < equativeChild.length; l++) {
                var array = equativeChild[l];
                // 所有子节点根据重新排序的顺序赋值
                var parentAlterIndex = $(array[0]).parents('tr').prev().find('.node').attr('data-index');
                for (var m = 0; m < array.length; m++) {
                    var newIndex = changeStr($(array[m]).attr('data-index').split('-'), 0, parentAlterIndex.split('-').length, parentAlterIndex.split('-'));
                    $(array[m]).attr('data-index', newIndex);
                }
            }
        }
        else {
            return false;
        }
    }
});

function changeStr(allstr, start, end, str) { //allstr:原始字符串数组，start,开始位置,end：结束位  置,str：要改变的字符串数组
    for (var i = start; i < end; i++) {
        allstr[i] = str[i];
    }
    return allstr.join('-');
}

function findParent(str, start, end) { //str-节点index，start,开始位置,end：结束位
    var a = [];
    for (var i = start; i < end; i++) {
        a.push(str[i]);
    }
    return a.join('-')
}