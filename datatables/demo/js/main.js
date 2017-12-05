/**
 * Created by fan_lv on 2017-11-20 0020.
 */


var array = [{
    title:'time',
    data:'time'
}];
function calcCol(data) {
    var valueList = data.table[0].valueList;
    for (let i = 0; i < valueList.length; i++) {
        array.push({
            title: valueList[i].name,
            data: function (row, type, val, meta) {
                debugger;
                return row.valueList[i].value
            }
        })
    }
    return array;
}
$.ajax({
    url: 'js/list.json',
    data: {},
    success: function (data) {
        calcCol(data);
        $('#demo').dataTable({
            serverSide: false,
            ajax: {
                url: 'js/list.json',
                data: {},
                dataSrc: function (data) {
                    return data.table;
                }
            },
            columns: array
        });
    }
});
