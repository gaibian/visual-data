<template>
    <div class="pie-chart-container">
        <div class="time-container">
          <div class="pie-time">
              <i></i>2019年5月
          </div>
          <div class="count-box">
              总出车次数 1000次
          </div>
        </div>
        <!--状态切换栏-->
        <div class="tabs-flex">
          <div class="item-flex">总览</div>
          <div class="item-flex">第一分中心</div>
          <div class="item-flex">第二分中心</div>
          <div class="item-flex">第三分中心</div>
        </div>
        <div id="pie-chart" style="margin-top:20px"></div>
    </div>
</template>
<script>
import Highcharts from 'highcharts'
export default {
    name:'pieChart',
    data() {
        return {
            myChart: null
        }
    },
    mounted() {
        var chart = Highcharts.chart('pie-chart', {
          chart: {
            type: 'pie',
            backgroundColor: 'rgba(0,0,0,0)',
            options3d: {
              enabled: true,
              alpha: 20,
              beta:0
            }
          },
          credits: { enabled: false}, //去掉图表的highcharts文字
          title: {
            text: null
          },
          tooltip: {
            //pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              dataLabels: {
                enabled: true,
                //format: '{point.name}'
                style:{
                  fontSize:'14px',
                  color:'#fff',
                  fontWeight:'normal',
                  textOutline:'rgba(0,0,0,0)'
                }
              }
            }
          },
          series: [{
            type: 'pie',
            name: '浏览器占比',
            data: [
              ['第一分中心<br>出车次数',300],
              ['中心<br>出车100次',100],
              ['第三分中心<br>出车350次',350],
              ['第二分中心<br>出车250次',250],
            ]
          }]
        });
    },   
}
</script>
<style lang="scss" scoped>
.pie-chart-container{
  position:relative;
    width:100%;
    color:#fff;
    padding:1.5vh;
    box-sizing:border-box;
    .time-container{
      width:100%;
      display:flex;
      .pie-time{
        position:relative;
        flex:1;
        font-size:14px;
        color:#eaa551;
        padding-left:20px;
        box-sizing:border-box;
        i{
          width:9px;
          height:4px;
          background:#eaa551;
          position:absolute;
          top:50%;
          left:0;
          transform:translate(0,-50%)
        }
      }
      .count-box{
        flex:1;
        text-align:right;
        color:#148ce5;
      }
    }
    .tabs-flex{
      width:100%;
      display:flex;
      margin-top:20px;
      border-bottom:#276a91 1px solid;
      box-sizing:border-box;
      padding:12px 0;
      .item-flex{
        flex:1;
        font-size:14px;
        text-align:center;
        color:#98bfe9;
        cursor:pointer;
      }
    }
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
#pie-chart{
    width:100%;
    height:20vh;
}
</style>