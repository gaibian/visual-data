<template>
    <div class="line-echarts-box" id="line-echarts-box">
    </div>
</template>
<script>
import Highcharts from 'highcharts'
export default {
    name:'lineData',
    data() {
        return {
            myChart: null
        }
    },
    mounted() {
        var chart = Highcharts.chart('line-echarts-box', {
	chart: {
		type: 'line',
        backgroundColor: 'rgba(0,0,0,0)',
	},
	title: {
		text: null
	},
	subtitle: {
		text: null
	},
    legend: {  //图例
        align:'left',
        itemMarginTop: 0,
        verticalAlign:'top',
        // y:-38,
         x:100,
        itemStyle: {
            color: '#fff',
            fontWeight:'normal'
        }
    },
	xAxis: {
		categories: ['中心','分中心','第二医院','李惠利医院','鄞州人民医院','李惠利东部医院','第九医院','宁波大学附属医院','妇儿医院北部院区'],
        labels:{
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
            style:{
                color: '#76C0FF'
            }
        }
	},
	yAxis: {
		title: {
			text: '分钟'
		},
        labels:{
            style:{
                color: '#76C0FF'
            }
        }
	},
	plotOptions: {
		line: {
			dataLabels: {
				// 开启数据标签
				enabled: true,
                style:{
                    textOutline:'rgba(0,0,0,0)',
                    color:'#fff',
                    fontWeight:'normal'
                }          
			},
			// 关闭鼠标跟踪，对应的提示框、点击事件会失效
			enableMouseTracking: false
		}
	},
	series: [{
		name: '出车时间',
		data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
	}, {
		name: '到达时间',
		data: [3.3, 4.2, 5.7, 8.5, 11.9, 15.5, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	},{
		name: '现场救治时间',
		data: [0.6, 4.4, 5.9, 10.5, 17.9, 16.5, 17.0, 19.6, 19.2, 27.3, 7.6, 9.8]
	},{
		name: '送院路途时间',
		data: [3.9, 2.2, 6.7, 5.5, 45.9, 23.2, 19.0, 18.6, 15.2, 19.3, 7.6, 6.8]
	},{
		name: '院内院前交接时间',
		data: [3.9, 5.2, 7.7, 9.5, 15.9, 15.2, 19.0, 16.6, 20.2, 11.3, 8.6, 6.8]
	},{
		name: '回站时间',
		data: [4.9, 8.2, 7.7, 14.5, 14.9, 19.2, 17.0, 20.6, 35.2, 8.3, 7.6, 9.8]
    }
	]
});


    },  
}
</script>
<style lang="scss" scoped>
.line-echarts-box{
    width:100%;
    height:90%;
}
</style>