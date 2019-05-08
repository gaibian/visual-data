<template>
    <div class="pie-chart-container">
        <div class="count-box">
            总出车次数 1000次
        </div>
        <!--状态切换栏-->
        <div class="tabs-flex">
          <div class="item-flex" v-for="(item,index) in tabOptions" :class="tabIndex === index ? 'active' : ''" :key="index" @click="handleTabClick(item,index)">
            <span>{{item.name}}</span>
          </div>
          <div class="x-line"></div>
          <div class="line-box">
            <span class="line"></span>
          </div>
        </div>
        <div id="pie-chart"></div>
    </div>
</template>
<script>
import Highcharts from 'highcharts'
// require('highcharts/modules/variable-pie')(Highcharts);
export default {
    name:'pieChart',
    data() {
        return {
          tabIndex:0,
          tabOptions:[{
            name:'总览',
          },{
            name:'第一分中心',
          },{
            name:'第二分中心',
          },{
            name:'第三分中心',
          }]
        }
    },
    methods:{
      handleTabClick(item,index) {
        this.tabIndex = index
      }
    },
    mounted() {
        var chart = Highcharts.chart('pie-chart', {
          chart: {
            type: 'variablepie',
            backgroundColor: 'rgba(0,0,0,0)',
            spacing:[0,0,0,0],
            margin:0,
            options3d: {
              enabled: true,
              alpha: 0,
              beta:0
            }
          },
          credits: { enabled: false}, //去掉图表的highcharts文字
          title: {
            text: null
          },
          subTitle: {
            text: null
          },
          tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
            '出车次数: <b>{point.y}</b><br/>'
          },
          colors:['#006cff','#009c4d','#eaa550'],
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              depth: 35,
              center:['50%','50%'],
              dataLabels: {
                enabled: true,
                formatter: function() {
    　　　　　　　　if(this.point.name == '李惠利医院'){
                      return `<span style="color:#006cff">${this.point.name}<br>出车${this.point.y}</span>`
    　　　　　　　　}else if(this.point.name == '鄞州人民医院'){
                      return `<span style="color:#009c4d">${this.point.name}<br>出车${this.point.y}</span>`
    　　　　　　　　}else if(this.point.name == '李惠利东部医院'){
                      return `<span style="color:#eaa550">${this.point.name}<br>出车${this.point.y}</span>`
    　　　　　　　　} 
  　　　　　　　　},
                style:{
                  fontSize:'12px',
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
            minPointSize: 10,
            innerSize: '20%',
            zMin: 0,
            name: 'countries',
            data: [
              {
                name:'李惠利医院',
                y: 500,
              },{
                name:'鄞州人民医院',
                y: 500
              },
              {
                name:'李惠利东部医院',
                y: 200
              }
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
    height:100%;
    color:#fff;
    box-sizing:border-box;
    .count-box{
      width:100%;
      font-size:16px;
      color:#148ce5;
      margin-top:20px;
      font-weight:bold;
    }
    .tabs-flex{
      position:relative;
      width:100%;
      display:flex;
      margin-top:20px;
      //border-bottom:#276a91 1px solid;
      box-sizing:border-box;
      .x-line{
        position:absolute;
        top:0;
        left:0;
        width:1px;
        height:100%;
        background:rgba(0,202,252,1);
        transform:skew(20deg);
      }
      .line-box{
        position:absolute;
        bottom:0px;
        left:5px;
        width:100%;
        height:1px;
        font-size:0;
        box-sizing:border-box;
        z-index:2;
        .line{
          display:inline-block;
          width:100%;
          height:1px;
          background:rgba(0,202,252,1);
        }
      }
      .item-flex{
        position:relative;
        flex:3;
        font-size:12px;
        text-align:center;
        color:#98bfe9;
        cursor:pointer;
        padding:6px 0;
        box-sizing:border-box;
        border:1px solid rgba(0,0,0,0);
        transform:skew(20deg);
        z-index:3;
        &:first-child{
          flex:2;
        }
        span{
          display:inline-block;
          transform:skew(-20deg);
        }
        &.active{
          background:rgba(5,61,89,1);
          border:1px solid rgba(0,202,252,1);
          box-shadow:inset 0px 0px 10px 0px rgba(0,237,253,0.45);
        }
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
    position:absolute;
    top:15%;
    left:0;
    width:100%;
    height:60%;
}
</style>