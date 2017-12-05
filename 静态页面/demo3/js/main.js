window.onload = function () {
    // 计算尺寸
    var calcSize = function () {
        var width = document.documentElement.clientWidth;
        var height = document.documentElement.clientHeight;
        document.body.style.width = width + 'px';  //body大小
        document.body.style.height = height + 'px';
        // document.body.style.background = 'url("../images/bg.png") no-repeat center / 100% 100%'; //body 背景
        document.getElementById('content').style.height = height - 128 + 'px'; // content 高度
        document.getElementsByClassName('content-middle')[0].style.height = height - 128 + 'px'; // content-middle 高度
        var contentItems = document.getElementsByClassName('content-item');  // 四个边角div的高度
        for (var i = 0; i < contentItems.length; i++) {
            contentItems[i].style.height = (height - 128) / 2 - 8 + 'px';
        }
        var contentEcItems = document.getElementsByClassName('content-echarts');  // 图表区域的高度
        for (var j = 0; j < contentEcItems.length; j++) {
            contentEcItems[j].style.height = (height - 128) / 2 - 48 - 8 + 'px';
        }
        var contentEcItemsHastitle = document.getElementsByClassName('content-echarts-hastitle');  // 图表区域的高度
        for (var k = 0; k < contentEcItemsHastitle.length; k++) {
            contentEcItemsHastitle[k].style.height = (height - 128) / 2 - 88 - 8 + 'px';
        }
    };
    calcSize();

    //图表
    //地图(排污费征收统计)
    var map = function () {
        var idItem = echarts.init(document.getElementById('map'));
        var data1 = [{name: '站点1', value: [85.77, 42.59]}];
        var data2 = [{name: '站点2', value: [84.77, 45.59]}];
        var data3 = [{name: '站点3', value: [84.17, 44.39]}];
        var data4 = [{name: '站点4', value: [83.37, 40.9]}];
        var data5 = [{name: '站点5', value: [88.2, 43.5]}];
        var data6 = [{name: '站点6', value: [86.67, 44.19]}];
        var option = {
            legend: {
                orient: 'vertical',
                x: '6%',
                y: '6%',
                textStyle: {
                    color: '#4BDEFE'
                },
                padding: 10,
                backgroundColor: 'rgba(2, 150, 197, 0.3)',
                borderColor: '#1FCDFF',
                borderWidth: 1,
                shadowColor: '#1FCDFF',
                shadowBlur: 10,
                data: ['优', '良', '轻度', '中度', '重度', '严重']
            },
            geo: {
                type: 'map',
                map: '新疆',
                roam: true,
                selectedMode: 'single',
                itemStyle: {
                    normal: {
                        areaColor: '#0F3F6C',
                        borderColor: '#2678B6',
                        shadowColor: '#2678B6',
                        shadowBlur: 6
                    },
                    emphasis: {
                        areaColor: '#0F3F6C',
                        borderColor: '#2678B6',
                        opacity: '0.8',
                        shadowColor: '#2678B6',
                        shadowBlur: 6
                    }
                },
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: '#1FCDFF'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#1FCDFF'
                        }
                    }
                }
            },
            series: [
                {
                    name: '优',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    symbolSize: 10,
                    symbol: 'circle',
                    rippleEffect: {
                        period: 4,
                        scale: 3.5,
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            formatter: '{b}',
                            position: 'right'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#8EE900'
                        }
                    },
                    data: data1
                }, {
                    name: '良',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    symbolSize: 10,
                    symbol: 'circle',
                    rippleEffect: {
                        period: 4,
                        scale: 3.5,
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            formatter: '{b}',
                            position: 'right'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FFFC00'
                        }
                    },
                    data: data2
                }, {
                    name: '轻度',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    symbolSize: 10,
                    symbol: 'circle',
                    rippleEffect: {
                        period: 4,
                        scale: 3.5,
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            formatter: '{b}',
                            position: 'right'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FFB000'
                        }
                    },
                    data: data3
                }, {
                    name: '中度',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    symbolSize: 10,
                    symbol: 'circle',
                    rippleEffect: {
                        period: 4,
                        scale: 3.5,
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            formatter: '{b}',
                            position: 'right'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#FD0001'
                        }
                    },
                    data: data4
                }, {
                    name: '重度',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    symbolSize: 10,
                    symbol: 'circle',
                    rippleEffect: {
                        period: 4,
                        scale: 3.5,
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            formatter: '{b}',
                            position: 'right'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#920057'
                        }
                    },
                    data: data5
                }, {
                    name: '严重',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    symbolSize: 10,
                    symbol: 'circle',
                    rippleEffect: {
                        period: 4,
                        scale: 3.5,
                        brushType: 'stroke'
                    },
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true,
                            formatter: '{b}',
                            position: 'right'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#45002B'
                        }
                    },
                    data: data6
                }]
        };
        idItem.setOption(option);
        idItem.resize();
    };
    //行政处罚统计图
    var administrativePenalty = function () {
        var idItem = echarts.init(document.getElementById('administrative-penalty'));
        var option = {
            //提示框组件
            tooltip: {
                //触发类型
                trigger: 'axis',
                //指示器
                axisPointer: {
                    type: 'shadow'
                },
                //提示悬浮文字
                formatter: "{a} <br/>{b} : {c}"
            },
            grid: {
                left: '9%',
                right: '8%',
                bottom: '5%',
                top: '2%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    color: '#fff'
                },
                axisTick: {
                    show: true,
                    inside: true
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    color: '#fff'
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    show: false
                },
                inverse: 'true', //排序
                data: ['阿克苏', '库尔勒', '喀什', '阿图什', '和田', '哈密市']
            },
            series: [{
                name: '统计图',
                type: 'bar',
                barWidth: '30%',
                itemStyle: {
                    normal: {
                        color: '#20D16D',
                        barBorderRadius: 500,
                    }
                },
                data: [42, 36, 35, 28, 21, 20]
            }]
        };
        idItem.setOption(option);
        idItem.resize();
    };

    //建设项目数据
    var constructionProject = function () {
        var idItem = echarts.init(document.getElementById('construction-project'));
        var option = {
            // backgroundColor: 'rgba(255,255,255,0.5)',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            series: [
                {
                    name: '访问来源',
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
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 335, name: '直接访问'},
                        {value: 310, name: '邮件营销'},
                        {value: 234, name: '联盟广告'},
                        {value: 135, name: '视频广告'},
                        {value: 1548, name: '搜索引擎'}
                    ]
                }
            ]
        };
        idItem.setOption(option);
        idItem.resize();
    };
    //机动车尾气数据
    var carOffgas = function () {
        var idItem = echarts.init(document.getElementById('car-offgas'));
        var xAxisData = [];
        var data1 = [];
        var data2 = [];
        for (var i = 0; i < 100; i++) {
            xAxisData.push('类目' + i);
            data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
            data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
        }
        var option = {
            // backgroundColor: 'rgba(255,255,255,0.5)',
            title: {
                text: '柱状图动画延迟'
            },
            legend: {
                data: ['bar', 'bar2'],
                align: 'left'
            },
            toolbox: {
                // y: 'bottom',
                feature: {
                    magicType: {
                        type: ['stack', 'tiled']
                    },
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {},
            xAxis: {
                data: xAxisData,
                silent: false,
                splitLine: {
                    show: false
                }
            },
            yAxis: {},
            series: [{
                name: 'bar',
                type: 'bar',
                data: data1,
                animationDelay: function (idx) {
                    return idx * 10;
                }
            }, {
                name: 'bar2',
                type: 'bar',
                data: data2,
                animationDelay: function (idx) {
                    return idx * 10 + 100;
                }
            }],
            animationEasing: 'elasticOut',
            animationDelayUpdate: function (idx) {
                return idx * 5;
            }
        };
        idItem.setOption(option);
        idItem.resize();
    };
    //排污费征收统计
    var pollutionDischargeFee = function () {
        var idItem = echarts.init(document.getElementById('pollution-discharge-fee'));
        var data = [
            [[28604, 77, 17096869, 'Australia', 1990], [31163, 77.4, 27662440, 'Canada', 1990], [1516, 68, 1154605773, 'China', 1990], [13670, 74.7, 10582082, 'Cuba', 1990], [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990], [31476, 75.4, 78958237, 'Germany', 1990], [28666, 78.1, 254830, 'Iceland', 1990], [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990], [2076, 67.9, 20194354, 'North Korea', 1990], [12087, 72, 42972254, 'South Korea', 1990], [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990], [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990], [10670, 67.3, 53994605, 'Turkey', 1990], [26424, 75.7, 57110117, 'United Kingdom', 1990], [37062, 75.4, 252847810, 'United States', 1990]],
            [[44056, 81.8, 23968973, 'Australia', 2015], [43294, 81.7, 35939927, 'Canada', 2015], [13334, 76.9, 1376048943, 'China', 2015], [21291, 78.5, 11389562, 'Cuba', 2015], [38923, 80.8, 5503457, 'Finland', 2015], [37599, 81.9, 64395345, 'France', 2015], [44053, 81.1, 80688545, 'Germany', 2015], [42182, 82.8, 329425, 'Iceland', 2015], [5903, 66.8, 1311050527, 'India', 2015], [36162, 83.5, 126573481, 'Japan', 2015], [1390, 71.4, 25155317, 'North Korea', 2015], [34644, 80.7, 50293439, 'South Korea', 2015], [34186, 80.6, 4528526, 'New Zealand', 2015], [64304, 81.6, 5210967, 'Norway', 2015], [24787, 77.3, 38611794, 'Poland', 2015], [23038, 73.13, 143456918, 'Russia', 2015], [19360, 76.5, 78665830, 'Turkey', 2015], [38225, 81.4, 64715810, 'United Kingdom', 2015], [53354, 79.1, 321773631, 'United States', 2015]]
        ];
        var option = {
            // backgroundColor: 'rgba(255,255,255,0.5)',
            title: {
                text: '1990 与 2015 年各国家人均寿命与 GDP'
            },
            legend: {
                right: 10,
                data: ['1990', '2015']
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: [{
                name: '1990',
                data: data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(251, 118, 123)'
                        }, {
                            offset: 1,
                            color: 'rgb(204, 46, 72)'
                        }])
                    }
                }
            }, {
                name: '2015',
                data: data[1],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        }, {
                            offset: 1,
                            color: 'rgb(25, 183, 207)'
                        }])
                    }
                }
            }]
        };
        idItem.setOption(option);
        idItem.resize();
    };
    //排污许可发证放统计
    var permitIssuingPermits = function () {
        var idItem = echarts.init(document.getElementById('permit-issuing-permits'));
        var option = {
            // backgroundColor: 'rgba(255,255,255,0.5)',
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        idItem.setOption(option);
        idItem.resize();
    };
    //企业信用数据
    var businessStanding = function () {
        var idItem = echarts.init(document.getElementById('business-standing'));
        var option = {
            // backgroundColor: 'rgba(255,255,255,0.5)',
            title: {
                text: '漏斗图',
                subtext: '纯属虚构'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    dataView: {readOnly: false},
                    restore: {},
                    saveAsImage: {}
                }
            },
            legend: {
                data: ['展现', '点击', '访问', '咨询', '订单']
            },
            calculable: true,
            series: [
                {
                    name: '漏斗图',
                    type: 'funnel',
                    left: '10%',
                    top: 60,
                    //x2: 80,
                    bottom: 60,
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        },
                        emphasis: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },
                    data: [
                        {value: 60, name: '访问'},
                        {value: 40, name: '咨询'},
                        {value: 20, name: '订单'},
                        {value: 80, name: '点击'},
                        {value: 100, name: '展现'}
                    ]
                }
            ]
        };
        idItem.setOption(option);
        idItem.resize();
    };
    //环境信访数据
    var environmentalLetterVisits = function () {
        var idItem = echarts.init(document.getElementById('environmental-letter-visits'));
        var dataBJ = [
            [55, 9, 56, 0.46, 18, 6, 1],
            [25, 11, 21, 0.65, 34, 9, 2],
            [56, 7, 63, 0.3, 14, 5, 3],
            [33, 7, 29, 0.33, 16, 6, 4],
            [42, 24, 44, 0.76, 40, 16, 5],
            [82, 58, 90, 1.77, 68, 33, 6],
            [74, 49, 77, 1.46, 48, 27, 7],
            [78, 55, 80, 1.29, 59, 29, 8],
            [267, 216, 280, 4.8, 108, 64, 9],
            [185, 127, 216, 2.52, 61, 27, 10],
            [39, 19, 38, 0.57, 31, 15, 11],
            [41, 11, 40, 0.43, 21, 7, 12],
            [64, 38, 74, 1.04, 46, 22, 13],
            [108, 79, 120, 1.7, 75, 41, 14],
            [108, 63, 116, 1.48, 44, 26, 15],
            [33, 6, 29, 0.34, 13, 5, 16],
            [94, 66, 110, 1.54, 62, 31, 17],
            [186, 142, 192, 3.88, 93, 79, 18],
            [57, 31, 54, 0.96, 32, 14, 19],
            [22, 8, 17, 0.48, 23, 10, 20],
            [39, 15, 36, 0.61, 29, 13, 21],
            [94, 69, 114, 2.08, 73, 39, 22],
            [99, 73, 110, 2.43, 76, 48, 23],
            [31, 12, 30, 0.5, 32, 16, 24],
            [42, 27, 43, 1, 53, 22, 25],
            [154, 117, 157, 3.05, 92, 58, 26],
            [234, 185, 230, 4.09, 123, 69, 27],
            [160, 120, 186, 2.77, 91, 50, 28],
            [134, 96, 165, 2.76, 83, 41, 29],
            [52, 24, 60, 1.03, 50, 21, 30],
            [46, 5, 49, 0.28, 10, 6, 31]
        ];
        var dataGZ = [
            [26, 37, 27, 1.163, 27, 13, 1],
            [85, 62, 71, 1.195, 60, 8, 2],
            [78, 38, 74, 1.363, 37, 7, 3],
            [21, 21, 36, 0.634, 40, 9, 4],
            [41, 42, 46, 0.915, 81, 13, 5],
            [56, 52, 69, 1.067, 92, 16, 6],
            [64, 30, 28, 0.924, 51, 2, 7],
            [55, 48, 74, 1.236, 75, 26, 8],
            [76, 85, 113, 1.237, 114, 27, 9],
            [91, 81, 104, 1.041, 56, 40, 10],
            [84, 39, 60, 0.964, 25, 11, 11],
            [64, 51, 101, 0.862, 58, 23, 12],
            [70, 69, 120, 1.198, 65, 36, 13],
            [77, 105, 178, 2.549, 64, 16, 14],
            [109, 68, 87, 0.996, 74, 29, 15],
            [73, 68, 97, 0.905, 51, 34, 16],
            [54, 27, 47, 0.592, 53, 12, 17],
            [51, 61, 97, 0.811, 65, 19, 18],
            [91, 71, 121, 1.374, 43, 18, 19],
            [73, 102, 182, 2.787, 44, 19, 20],
            [73, 50, 76, 0.717, 31, 20, 21],
            [84, 94, 140, 2.238, 68, 18, 22],
            [93, 77, 104, 1.165, 53, 7, 23],
            [99, 130, 227, 3.97, 55, 15, 24],
            [146, 84, 139, 1.094, 40, 17, 25],
            [113, 108, 137, 1.481, 48, 15, 26],
            [81, 48, 62, 1.619, 26, 3, 27],
            [56, 48, 68, 1.336, 37, 9, 28],
            [82, 92, 174, 3.29, 0, 13, 29],
            [106, 116, 188, 3.628, 101, 16, 30],
            [118, 50, 0, 1.383, 76, 11, 31]
        ];
        var dataSH = [
            [91, 45, 125, 0.82, 34, 23, 1],
            [65, 27, 78, 0.86, 45, 29, 2],
            [83, 60, 84, 1.09, 73, 27, 3],
            [109, 81, 121, 1.28, 68, 51, 4],
            [106, 77, 114, 1.07, 55, 51, 5],
            [109, 81, 121, 1.28, 68, 51, 6],
            [106, 77, 114, 1.07, 55, 51, 7],
            [89, 65, 78, 0.86, 51, 26, 8],
            [53, 33, 47, 0.64, 50, 17, 9],
            [80, 55, 80, 1.01, 75, 24, 10],
            [117, 81, 124, 1.03, 45, 24, 11],
            [99, 71, 142, 1.1, 62, 42, 12],
            [95, 69, 130, 1.28, 74, 50, 13],
            [116, 87, 131, 1.47, 84, 40, 14],
            [108, 80, 121, 1.3, 85, 37, 15],
            [134, 83, 167, 1.16, 57, 43, 16],
            [79, 43, 107, 1.05, 59, 37, 17],
            [71, 46, 89, 0.86, 64, 25, 18],
            [97, 71, 113, 1.17, 88, 31, 19],
            [84, 57, 91, 0.85, 55, 31, 20],
            [87, 63, 101, 0.9, 56, 41, 21],
            [104, 77, 119, 1.09, 73, 48, 22],
            [87, 62, 100, 1, 72, 28, 23],
            [168, 128, 172, 1.49, 97, 56, 24],
            [65, 45, 51, 0.74, 39, 17, 25],
            [39, 24, 38, 0.61, 47, 17, 26],
            [39, 24, 39, 0.59, 50, 19, 27],
            [93, 68, 96, 1.05, 79, 29, 28],
            [188, 143, 197, 1.66, 99, 51, 29],
            [174, 131, 174, 1.55, 108, 50, 30],
            [187, 143, 201, 1.39, 89, 53, 31]
        ];
        var lineStyle = {
            normal: {
                width: 1,
                opacity: 0.5
            }
        };
        var option = {
            // backgroundColor: 'rgba(255,255,255,0.5)',
            title: {
                text: 'AQI - 雷达图',
                left: 'center',
                textStyle: {
                    color: '#eee'
                }
            },
            legend: {
                bottom: 5,
                data: ['北京', '上海', '广州'],
                itemGap: 20,
                textStyle: {
                    color: '#fff',
                    fontSize: 14
                },
                selectedMode: 'single'
            },
            // visualMap: {
            //     show: true,
            //     min: 0,
            //     max: 20,
            //     dimension: 6,
            //     inRange: {
            //         colorLightness: [0.5, 0.8]
            //     }
            // },
            radar: {
                indicator: [
                    {name: 'AQI', max: 300},
                    {name: 'PM2.5', max: 250},
                    {name: 'PM10', max: 300},
                    {name: 'CO', max: 5},
                    {name: 'NO2', max: 200},
                    {name: 'SO2', max: 100}
                ],
                shape: 'circle',
                splitNumber: 5,
                name: {
                    textStyle: {
                        color: 'rgb(238, 197, 102)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            'rgba(238, 197, 102, 0.1)', 'rgba(238, 197, 102, 0.2)',
                            'rgba(238, 197, 102, 0.4)', 'rgba(238, 197, 102, 0.6)',
                            'rgba(238, 197, 102, 0.8)', 'rgba(238, 197, 102, 1)'
                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(238, 197, 102, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: '北京',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataBJ,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#F9713C'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.1
                        }
                    }
                },
                {
                    name: '上海',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataSH,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: '#B3E4A1'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.05
                        }
                    }
                },
                {
                    name: '广州',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataGZ,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: 'rgb(238, 197, 102)'
                        }
                    },
                    areaStyle: {
                        normal: {
                            opacity: 0.05
                        }
                    }
                }
            ]
        };
        idItem.setOption(option);
        idItem.resize();
    };

    //默认加载的图表
    var defEcharts = function () {
        map();
        administrativePenalty();
        $('.open-dialog').each(function () {
            var name = $(this).attr('data-id');
            if (name === '建设项目数据') {
                constructionProject();
            } else if (name === '机动车尾气数据') {
                carOffgas();
            } else if (name === '排污费征收统计') {
                pollutionDischargeFee();
            } else if (name === '排污许可发证放统计') {
                permitIssuingPermits();
            } else if (name === '企业信用数据') {
                businessStanding();
            } else {
                environmentalLetterVisits();
            }
        });
    };
    defEcharts();

    //改变窗口大小之后500ms刷新表格
    var tout;
    window.onresize = function () {
        if (tout) {
            clearTimeout(tout);
        }
        tout = setTimeout(function () {
            tout = null;
            calcSize();
            defEcharts();
        }, 500);
    };

    //动态切换内容
    var index = 0;
    var isEmpty = function () {
        var dataIdArray = [];
        $('.open-dialog').each(function () {
            dataIdArray.push($(this).attr('data-id'));
        });
        $('.dialog-item').each(function () {
            var $this = $(this);
            $this.removeClass('disable');
            for (var i = 0; i < dataIdArray.length; i++) {
                if (dataIdArray[i] === $this.html()) {
                    $this.addClass('disable');
                }
            }
        });
    };
    var openDialog = function () {
        $('.dialog-box').show().animate({'opacity': 1}, 600);
        $('.dialog-content').animate({'top': '50%'}, 600);
        isEmpty();
    };
    var closeDialog = function () {
        $('.dialog-content').animate({'top': '-50%'}, 600);
        $('.dialog-box').animate({'opacity': 0}, 600, function () {
            $(this).hide();
        });
    };
    $(document).on('click', '.open-dialog', function () {
        var $thisId = $(this).attr('data-id');
        for (var i = 0; i < $('.open-dialog').length; i++) {
            if ($($('.open-dialog')[i]).attr('data-id') == $thisId) {
                index = i;
            }
        }
        openDialog();
    });
    $('.dialog-box').on('click', function () {
        closeDialog();
    });
    $('.dialog-content').on('click', function (e) {
        e.stopPropagation();
    });
    var innerHtml = function (html, fun) {
        $('.open-dialog').eq(index).parent().html(html);
        calcSize();
        fun();
    };
    $('.dialog-item').on('click', function () {
        if ($(this).hasClass('disable')) {
            return;
        }
        var name = $(this).html();
        var html = '';
        var fun = '';
        if (name === '建设项目数据') {
            html += '<div class="content-title open-dialog" data-id="' + name + '">'
                + name + '<span class="content-title-right">(2014-08-12至2015-08-12)</span></div>' +
                '<div class="content-echarts" id="construction-project"></div>';
            fun = constructionProject;
        } else if (name === '机动车尾气数据') {
            html += '<div class="content-title open-dialog" data-id="' + name + '">'
                + name + '</div><div class="content-tab"><ul class="tab-items">'
                + '<li class="tab-item selected">水质级别构成</li><li class="tab-item">超标污染物</li></ul>'
                + '</div><div class="content-echarts content-echarts-hastitle" id="car-offgas"></div>';
            fun = carOffgas;
        } else if (name === '排污费征收统计') {
            html += '<div class="content-title open-dialog" data-id="' + name + '">'
                + name + '</div><div class="content-echarts" id="pollution-discharge-fee"></div>';
            fun = pollutionDischargeFee;
        } else if (name === '排污许可发证放统计') {
            html += '<div class="content-title open-dialog" data-id="' + name + '">'
                + name + '</div><div class="content-echarts" id="permit-issuing-permits"></div>';
            fun = permitIssuingPermits;
        } else if (name === '企业信用数据') {
            html += '<div class="content-title open-dialog" data-id="' + name + '">'
                + name + '</div><div class="content-echarts" id="business-standing"></div>';
            fun = businessStanding;
        } else {
            html += '<div class="content-title open-dialog" data-id="' + name + '">'
                + name + '</div><div class="content-echarts" id="environmental-letter-visits"></div>';
            fun = environmentalLetterVisits;
        }
        closeDialog();
        innerHtml(html, fun);
    });
};

