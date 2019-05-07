<template>
    <div class="pie-chart-container">
        <div class="pie-title">
          <i></i>急救车各种状态饼状图
        </div>
        <div id="pie-two-chart"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    name:'pieTwoChart',
    data() {
        return {
            myChart: null
        }
    },
    mounted() {
        this.myChart = echarts.init(document.getElementById('pie-two-chart'));
        let e = document.body.offsetHeight
        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                //x: 'left',
                top:'middle',
                left:'right',
                itemGap:10,
                textStyle:{
                    fontSize: e / 100 * 1.5,
                    color:['#d73147','#009c4d','#01a2e6','#333333','#cccccc']
                },
                data:['任务中25台','站内待命20台','途中待命15台','未上班下班3台','离线1台']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    center:['32%','50%'],
                    avoidLabelOverlap: false,
                    color:['#d73147','#009c4d','#01a2e6','#333333','#cccccc'],
                    label: {
                        show: true,
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: false,
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
                    data:[
                        {value:335, name:'任务中25台'},
                        {value:310, name:'站内待命20台'},
                        {value:234, name:'途中待命15台'},
                        {value:135, name:'未上班下班3台'},
                        {value:1548, name:'离线1台'}
                    ]
                }
            ]
        };
        this.myChart.setOption(option)
    },   
}
</script>
<style lang="scss" scoped>
.pie-chart-container{
    width:100%;
    color:#fff;
    padding:1.5vh;
    box-sizing:border-box;
    .title-box{
        position:relative;
        width:100%;
        height:auto;
        .title{
          font-size:2vh;
          font-weight:bold;
          background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(228, 192, 114, 1)), to(rgba(236, 156, 69, 1)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .rotate-box{
          position:absolute;
          top:50%;
          left:4vh;
          transform:translate(0,-50%);
          width:auto;
          font-size:0;
          margin-left:4vh;
          &.left1{
            left:10vh;
          }
          &.left2{
            left:6vh;
          }
          .rotate-item{
            display:inline-block;
            margin:0 0.6vh;
            width:0.5vh;
            height:2vh;
            transform:rotate(25deg);
            background:#0e2972;
            border-radius:2vh;
          }
        }
      }
}
.pie-title{
  width:100%;
  position:relative;
  height:auto;
  font-size:1.5vh;
  color:#eaa551;
  padding-left:2vh;
  box-sizing:border-box;
  margin-top:2vh;
  i{
    position:absolute;
    top:50%;
    left:0;
    transform:translate(0,-50%);
    display:block;
    width:1vh;
    height:0.5vh;
    border-radius:0.1vh;
    background:#eaa551;
  }
}
#pie-two-chart{
    width:100%;
    height:20vh;
}
</style>