/**
 * Created by fan_lv on 2017-9-26 0026.
 */

<!--图表1黑臭水体 - 断面水质变化-->
var ec1 = echarts.init(document.getElementById('ec1'));
var option1 = {
    title: {
        text: '断面监测因子浓度变化趋势',
        textStyle: {
            color: '#3E464F',
            fontSize: 14,
            fontWeight: 500,
            fontFamily: 'PingFangSC-Regular',
            lineHeight: 14
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: data.legend,
        right: '6%',
        top: 'middle',
        backgroundColor: '#f5f5f5',
        orient: 'vertical',
        padding: 10,
        itemGap: 14
    },
    grid: {
        left: '3%',
        right: '24%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: data.x
    },
    yAxis: {
        type: 'value',
        name: '百分比',
        nameTextStyle: {
            fontSize: 12,
            color: '#2e464f',
            fontFamily: 'PingFangSC-Regular'
        },
        max: 100,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#F5F5F5', '#fff']
            }
        }
    },
    color: data.color,
    series: [
        {
            name: data.legend[0],
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: data.y[0]
        },
        {
            name: data.legend[1],
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: data.y[1]
        },
        {
            name: data.legend[2],
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: data.y[2]
        },
        {
            name: data.legend[3],
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: data.y[3]
        },
        {
            name: data.legend[4],
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: data.y[4]
        },
        {
            name: data.legend[5],
            type: 'line',
            showSymbol: false,
            smooth: true,
            data: data.y[5]
        }
    ]
};
ec1.setOption(option1);

<!--图表2黑臭水体 - 黑臭比例变化-->
var ec2 = echarts.init(document.getElementById('ec2'));
var option2 = {
    title: {
        text: '断面黑臭比例变化趋势',
        textStyle: {
            color: '#3E464F',
            fontSize: 14,
            fontWeight: 500,
            fontFamily: 'PingFangSC-Regular',
            lineHeight: 14
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: data2.x
    },
    yAxis: {
        type: 'value',
        name: '百分比',
        nameTextStyle: {
            fontSize: 12,
            color: '#2e464f',
            fontFamily: 'PingFangSC-Regular'
        },
        max: 100,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#F5F5F5', '#fff']
            }
        }
    },
    color: data.color,
    series: [
        {
            name: '断面黑臭比例变化趋势',
            type: 'line',
            areaStyle: {
                normal: {
                    color: '#9FD8FF'
                }
            },
            data: data2.y
        }
    ]
};
ec2.setOption(option2);

<!--图表3近岸海域 - 水质现状评价-水质达标率-->
var ec3 = echarts.init(document.getElementById('ec3'));
//获取饼图series中的data所需格式
var realData3 = [];
function realData_3(data) {
    for (var i = 0; i < data.value.length; i++) {
        realData3.push({
            value: data.value[i],
            name: data.legend[i].name
        })
    }
}
realData_3(data3);
var option3 = {
    title: {
        text: '水质达标率',
        textStyle: {
            color: '#3E464F',
            fontSize: 14,
            fontWeight: 500,
            fontFamily: 'PingFangSC-Regular',
            lineHeight: 14
        }
    },
    legend: {
        data: data3.legend,
        right: '6%',
        top: 'middle',
        orient: 'vertical',
        padding: 10,
        itemGap: 20,
        formatter: function (name) {
            for (var i = 0; i < realData3.length; i++) {
                if (realData3[i].name === name) {
                    return name + '    ' + realData3[i].value + '个'
                }
            }
        }
    },
    color: data3.color,
    series: [
        {
            name: '水质达标率',
            type: 'pie',
            radius: ['55%', '70%'],
            avoidLabelOverlap: false,
            clockwise: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 24,
                        fontWeight: 'normal'
                    },
                    formatter: '{d}' + '%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: realData3
        }
    ]
};
ec3.setOption(option3);


<!--图表4近岸海域 - 水质现状评价-海水类别构成-->
var ec4 = echarts.init(document.getElementById('ec4'));
var realData4 = [];
function realData_4(data) {
    var sum = 0, ave;
    for (var i = 0; i < data.value.length; i++) {
        sum += data.value[i];
    }
    for (var j = 0; j < data.value.length; j++) {
        ave = data.value[j] / sum * 100;
        realData4.push([ave]);
    }
}
realData_4(data4);
var labelOption = {
    normal: {
        show: true,
        position: 'bottom',
        distance: 0,
        align: 'center',
        verticalAlign: 'top',
        rotate: 0,
        formatter: '{a} {c}' + '%',
        fontSize: 12,
        color: '#424242'
    }
};
var barGap = '100%';
var option4 = {
    title: {
        text: '海水类别构成',
        textStyle: {
            color: '#3E464F',
            fontSize: 14,
            fontWeight: 500,
            fontFamily: 'PingFangSC-Regular',
            lineHeight: 14
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: data4.legend,
        right: '3%',
        top: 'top',
        backgroundColor: '#f5f5f5',
        orient: 'horizontal',
        padding: 10,
        itemGap: 14,
        formatter: function (name) {
            for (var i = 0; i < data4.legend.length; i++) {
                if (data4.legend[i] === name) {
                    return name + ':' + data4.value[i]
                }
            }
        }
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: []
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#F9F9FA', '#fff']
            }
        }
    },
    color: data4.color,
    series: [
        {
            name: data4.legend[0],
            type: 'bar',
            barGap: barGap,
            label: labelOption,
            data: realData4[0]
        },
        {
            name: data4.legend[1],
            type: 'bar',
            barGap: barGap,
            label: labelOption,
            data: realData4[1]
        },
        {
            name: data4.legend[2],
            type: 'bar',
            barGap: barGap,
            label: labelOption,
            data: realData4[2]
        },
        {
            name: data4.legend[3],
            type: 'bar',
            barGap: barGap,
            label: labelOption,
            data: realData4[3]
        },
        {
            name: data4.legend[4],
            type: 'bar',
            barGap: barGap,
            label: labelOption,
            data: realData4[4]
        }
    ]
};
ec4.setOption(option4);


<!--图表5近岸海域 - 水质现状评价-富营养化状况-->
var ec5 = echarts.init(document.getElementById('ec5'));
//获取饼图series中的data所需格式
var realData5 = [];
function realData_5(data) {
    for (var i = 0; i < data.value.length; i++) {
        realData5.push({
            value: data.value[i],
            name: data.legend[i].name
        })
    }
}
realData_5(data5);
var option5 = {
    title: {
        text: '富营养化状况',
        textStyle: {
            color: '#3E464F',
            fontSize: 14,
            fontWeight: 500,
            fontFamily: 'PingFangSC-Regular',
            lineHeight: 14
        }
    },
    legend: {
        data: data5.legend,
        right: '6%',
        top: 'middle',
        orient: 'vertical',
        padding: 10,
        itemGap: 20,
        formatter: function (name) {
            for (var i = 0; i < realData5.length; i++) {
                if (realData5[i].name === name) {
                    return name + '    ' + realData5[i].value + '个'
                }
            }
        }
    },
    color: data5.color,
    series: [
        {
            name: '富营养化状况',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            clockwise: false,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    fontSize: 10,
                    fontFamily: 'PingFangSC-Regular',
                    align: 'center',
                    verticalAlign: 'middle',
                    formatter: function (data) {
                        return data.value === 0 ? '' : data.percent + '%';
                    }
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: realData5
        }
    ]
};
ec5.setOption(option5);


<!--图表6黑臭水体 - 水质现状评价-断面黑臭状况统计-->
var ec6 = echarts.init(document.getElementById('ec6'));
//获取饼图series中的data所需格式
var realData6 = [];
function realData_6(data) {
    for (var i = 0; i < data.value.length; i++) {
        realData6.push({
            value: data.value[i],
            name: data.legend[i].name
        })
    }
}
realData_6(data6);
var option6 = {
    title: {
        text: '断面黑臭状况统计',
        textStyle: {
            color: '#3E464F',
            fontSize: 14,
            fontWeight: 500,
            fontFamily: 'PingFangSC-Regular',
            lineHeight: 14
        }
    },
    legend: {
        data: data6.legend,
        right: '6%',
        top: 'middle',
        orient: 'horizontal',
        padding: 10,
        itemGap: 20,
        itemWidth: 0,
        formatter: function (name) {
            var sum = 0;
            for (var j = 0; j < data6.value.length; j++) {
                sum += data6.value[j];
            }
            for (var i = 0; i < realData6.length; i++) {
                if (realData6[i].name === name) {
                    if (name === '黑臭') {
                        return [
                            '{valueColor1|' + realData6[i].value + '个}',
                            '{text|' + name + '}',
                            '{percent|' + (realData6[i].value / sum * 100).toFixed(1) + '%}'
                        ].join('\n');
                    }
                    else {
                        return [
                            '{valueColor2|' + realData6[i].value + '个}',
                            '{text|' + name + '}',
                            '{percent|' + (realData6[i].value / sum * 100).toFixed(1) + '%}'
                        ].join('\n');
                    }
                }
            }
        },
        textStyle: {
            rich: {
                valueColor1: {
                    align: 'center',
                    verticalAlign: 'middle',
                    color: '#fff',
                    backgroundColor: {
                        image: 'circleGray.png'
                    },
                    width: 40,
                    height: 40,
                    borderRadius: 40
                },
                valueColor2: {
                    align: 'center',
                    verticalAlign: 'middle',
                    color: '#fff',
                    backgroundColor: {
                        image: 'circleBlue.png'
                    },
                    width: 40,
                    height: 40,
                    borderRadius: 40
                },
                text: {
                    align: 'center',
                    padding: [6, 0],
                    color: '#000'
                },
                percent: {
                    align: 'center',
                    color: 'rgba(0,0,0,0.7)'
                }
            }
        }
    },
    color: data6.color,
    series: [
        {
            name: '断面黑臭状况统计',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        color: '#212121',
                        fontFamily: 'PingFangSC-Light',
                        fontSize: 30,
                        fontWeight: 'normal'
                    },
                    formatter: '{c}' + '{text|个}',
                    rich: {
                        text: {
                            fontSize: 12,
                            verticalAlign: 'bottom',
                            fontFamily: 'PingFangSC-Regular'
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: realData6
        }
    ]
};
ec6.setOption(option6);


<!--图表7黑臭水体 - 水质现状评价-评价指标的断面超标率-->
var ec7 = echarts.init(document.getElementById('ec7'));
var option7 = {
    title: {
        text: '评价指标的断面超标率',
        textStyle: {
            color: '#3E464F',
            fontSize: 14,
            fontWeight: 500,
            fontFamily: 'PingFangSC-Regular',
            lineHeight: 14
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        show: false
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: data7.x
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#F9F9FA', '#fff']
            }
        }
    },
    color: data7.color,
    series: [
        {
            name: '评价指标的断面超标率',
            type: 'bar',
            barWidth: '40%',
            data: data7.y
        }
    ]
};
ec7.setOption(option7);
