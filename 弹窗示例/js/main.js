$(function () {

    function gettime() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }
        var time = year + '-' + month + '-' + day;
        // var datetime = year + '年' + month + '月' + day + '日';
        $('#date').val(time);
        $("#datetime").html(time);
    }
    gettime();

    $(".reserve").click(function () {
        $reserve = $(this);
        var room = $reserve.parent().siblings()[0].innerText.substring(0,4);
        var d = dialog({
            title:'发起会议',
            url:'dialog.html',
            width:'600',
            height:'400',
            data:room,
            okValue: '保存',
            ok: function () {
                var data = this.returnValue,
                    start,end;
                switch (data.date_start){
                    case '9:00':
                        start = 1;
                        break;
                    case '10:00':
                        start = 2;
                        break;
                    case '11:00':
                        start = 3;
                        break;
                    case '13:00':
                        start = 4;
                        break;
                    case '14:00':
                        start = 5;
                        break;
                    case '15:00':
                        start = 6;
                        break;
                    case '16:00':
                        start = 7;
                        break;
                    case '17:00':
                        start = 8;
                        break;
                }
                switch (data.date_end){
                    case '10:00':
                        end = 1;
                        break;
                    case '11:00':
                        end = 2;
                        break;
                    case '12:00':
                        end = 3;
                        break;
                    case '14:00':
                        end = 4;
                        break;
                    case '15:00':
                        end = 5;
                        break;
                    case '16:00':
                        end = 6;
                        break;
                    case '17:00':
                        end = 7;
                        break;
                    case '18:00':
                        end = 8;
                        break;
                }
                $reserve.parent().siblings().removeClass('hasmeeting');
                for(var i = 1;i<=8;i++){
                    $($reserve.parent().siblings()[i]).html('');
                }
                for(var i = start;i<=end;i++){
                    $($reserve.parent().siblings()[i]).addClass('hasmeeting');
                    $($reserve.parent().siblings()[i]).html(data.name);
                }

            },
            cancelValue: '取消',
            cancel: function () {},
            onclose:function () {}
        });
        d.showModal();
    });

});