<template>
<div class="bar-page">
    <div class="bar-charts-box" id="bar-charts-box">
    </div>
    <div class="time">
        <i></i>2019年5月
    </div>
</div>
</template>
<script>
import echarts from 'echarts'
import Highcharts from 'highcharts'
export default {
    name:'barData',
    data() {
        return {
            myChart:null,
        }
    },
    mounted() {
        var colorArr = ['#FD6F78', '#FBD064', '#BDDB5E'];
        function SetEveryOnePointColor(chart) {            
            //获得第一个序列的所有数据点
            var pointsList = chart.series[0].points;
            //遍历设置每一个数据点颜色
            for (var i = 0; i < pointsList.length; i++) {
                chart.series[0].points[i].update({
                    color: {
                        linearGradient: { x1: 0, y1: 1, x2: 0, y2: 0 }, //横向渐变效果 如果将x2和y2值交换将会变成纵向渐变效果
                        stops: [
                                    [0, Highcharts.Color(colorArr[i]).setOpacity(1).get('rgba')],
                                    [1, 'rgb(255, 255, 255)']
                                ]  
                    }
                });
            }
        }
        var chart = Highcharts.chart('bar-charts-box',{
        chart: {
            type: 'column', //表示柱状图
            marginTop: 60,
            backgroundColor: 'rgba(0,0,0,0)',
            options3d: {
                enabled: true,
                alpha: 0,
                beta: 0,
                depth: 35,
                viewDistance: 25,      // 视图距离，它对于计算角度影响在柱图和散列图非常重要。此值不能用于3D的饼图
                frame: {                // Frame框架，3D图包含柱的面板，我们以X ,Y，Z的坐标系来理解，X轴与 Z轴所形成
                    // 的面为bottom，Y轴与Z轴所形成的面为side，X轴与Y轴所形成的面为back，bottom、
                    // side、back的属性一样，其中size为感官理解的厚度，color为面板颜色
                    bottom: {
                        size: 10
                    },
                    side: {
                        size: 1,
                        color: 'transparent'
                    },
                    back: {
                        size: 1,
                        color: 'rgba(0,0,0,0)'
                    }
                }
            },
        },
        plotOptions: {
            column: {
                depth: 25,
                groupPadding:0.1,
                pointWidth: 10
            }
        },
        legend: {  //图例
            align:'left',
            itemMarginTop: 0,
            verticalAlign:'top',
            y:-38,
            x:100,
            itemStyle: {
                color: '#fff'
            }
        },
        xAxis: {
            //categories: Highcharts.getOptions().lang.shortMonths,
            categories:['中心','分中心','第二医院','李惠利医院','鄞州人民医院','李惠利东部医院','第九医院','宁波大学附属医院','妇儿医院北部院区'],
            labels: {
                style: {
                    color: '#76C0FF'
                },
                formatter() {
                        //获取到刻度值
                    var labelVal = this.value;
                        //实际返回的刻度值
                    var reallyVal = labelVal;
                        //判断刻度值的长度
                    if(labelVal.length > 3){
                        //截取刻度值
                        reallyVal = labelVal.substr(0,3)+"<br/>"+labelVal.substring(3,labelVal.length-1);
                    }
                    return reallyVal
                },
                lineColor: '#223b61',
                tickColor: '#223b61',
            }
        },
        yAxis: {
            title: {
                text: null
            },
            labels: {
                style: {
                    color: '#76C0FF'
                },
                lineColor: '#223b61',
                tickColor: '#223b61',
            },
        },
        // scrollbar: {
        //     enabled: true
        // },
        series: [{
            name: '出车准点率',
            data: [20,98,78,86,65,90,76,78,12]
        },{
            name: '到达准点率',
            data: [20,90,78,90,56,78,5,39,98]
        }]
},(chart) => {
    SetEveryOnePointColor(chart);
});
        // this.myChart = echarts.init(document.getElementById('bar-charts-box'));
        // var xData = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        // var days = [''];

        // var data = [[0,0,5],[0,1,11],[0,2,3],[6,3,1],[6,4,2],[6,5,2],[6,6,6]];
        // let option = {
        //     legend: {  //状态栏文字样式
        //         top:16,
        //         itemGap:20,
        //         left:120,
        //         textStyle: {
        //             color:'#76c0ff',
        //             fontSize: 14
        //         }
        //     },
        //     tooltip: {},
        //     textStyle:{ //全局的文字样式
        //         color: '#76c0ff',
        //         fontSize: 14,
        //     },
        //     grid3D:{  //图形网格模块 => 没有中间的刻度线
        //         boxWidth: 360,
        //         boxDepth: 20,
        //         splitLine: {
        //             show: false
        //         },
        //         light: {
        //             main: {
        //                 intensity: 1.2,
        //                 shadow: true
        //             },
        //             ambient: {
        //                 intensity: 0.3
        //             }
        //         },
        //         viewControl:{
        //             alpha: 0,
        //             beta: 0,
        //             zoomSensitivity:0,
        //         }
        //     },
        //     visualMap: {
        //         show:false,
        //         max: 15,
        //         inRange: {
        //             color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        //         }
        //     },
        //     dataset: {
        //         source: [
        //             ['product', '出车准点率', '到达准点率'],
        //             ['中心', 43.3, 85.8, 93.7],
        //             ['分中心', 83.1, 73.4, 55.1],
        //             ['站点', 83.1, 23.4, 78.1],
        //         ]
        //     },
        //     zAxis3D: {
        //         type: 'value',
        //         show: false,
                
        //     },
        //     xAxis3D: {
        //         name:'x',
        //         nameGap: 1,
        //         type: 'category',
        //         data: xData
        //     },
        //     yAxis3D: {
        //         name:'',
        //         type: 'category',
        //         data: days
        //     },
        //     series:[{
        //         type: 'bar3D',
        //         data: data.map(function (item) {
        //             console.log(item)
        //             return {
        //                 value: [item[1], item[0], item[2]],
        //             }
        //         }),
        //         itemStyle: {
        //             normal: {
        //                 color: 'red'
        //             }
        //         },
        //         shading: 'lambert',
        //         label: {
        //             textStyle: {
        //                 fontSize: 16,
        //                 borderWidth: 1
        //             }
        //         },

        //         emphasis: {
        //             label: {
        //                 textStyle: {
        //                     fontSize: 20,
        //                 }
        //             },
        //         }
        //     }]
        // };
        // this.myChart.setOption(option)
    }, 
}
</script>
<style lang="scss" scoped>
.bar-charts-box{
    position:relative;
    width:100%;
    height:90%;
}
.bar-page{
    position:relative;
    width:100%;
    height:100%;
}
.time{
    position:absolute;
    top:20px;
    left:16px;
    font-size:14px;
    color:#EAA551;
    padding-left:18px;
    i{
        display:block;
        width:9px;
        height:4px;
        background:#EAA551;
        position:absolute;
        top:50%;
        left:0;
        transform:translate(0,-50%);
    }
}
</style>