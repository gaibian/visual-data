<template>
  <div class="dashboard-container">
    <!--标题-->
    <!--<header-title></header-title>-->
    <!--内容区域 图表的展示-->
    <div class="content-box tl charts-border-box">
      <border-div></border-div>
      <div class="title">急救任务量</div>
      <pie-charts></pie-charts>
    </div>
    <div class="content-box tb charts-border-box">
      <border-div></border-div>
      <div class="title">急救车异常情况一览表</div>
      <car-abnormal></car-abnormal>
    </div>
    <div class="content-box rl charts-border-box">
      <border-div></border-div>
      <div class="title">急救准点率</div>
      <bar-data></bar-data>
    </div>
    <div class="content-box rb charts-border-box">
      <border-div></border-div>
      <div class="title">急救节点平均时间</div>
      <line-data></line-data>
    </div>
    <aid-map></aid-map>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { dataLine, headerTitle, dataTime, aidMap, barData, lineData, borderDiv, pieCharts, carAbnormal } from './components'
export default {
  name: 'Dashboard',
  components:{
    dataTime,
    aidMap,
    borderDiv,
    barData,
    lineData,
    headerTitle,
    pieCharts,
    carAbnormal
  },
  data() {
    return {
    }
  },
  created() {

  },
  mounted() {
  },
  methods:{

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-title{
  position:fixed;
  top:12px;
  left:0;
  width:100%;
  height:500px;
  text-align:center;
  font-size:20px;
  color:#fff;
  z-index:999;
  background:#fff;
}
.marker-box{
  position:absolute;
  width:23vw;
  height:50%;
  &.pos1{
    top:0px;
    left:0px;
    background:linear-gradient(to right,#040c27 20%,rgba(0,0,0,0));
  }
  &.pos2{
    bottom:0px;
    left:0px;
    background:linear-gradient(to right,#040c27 20%,rgba(0,0,0,0));
  }
  &.pos3{
    top:0px;
    right:0px;
    background:linear-gradient(to left,#040c27 20%,rgba(0,0,0,0));
  }
  &.pos4{
    bottom:0px;
    right:0px;
    background:linear-gradient(to left,#040c27 20%,rgba(0,0,0,0));
  }
  &.pos5{
    width:100%;
    height:20vh;
    bottom:0px;
    right:0px;
    background:linear-gradient(to top,#040c27 20%,rgba(0,0,0,0));
  }
}
.content-box{
  position:fixed;
  padding:2vh;
  box-sizing:border-box;
  z-index:9999;
  .title{
    font-weight:bold;
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(228,192,114,1)), to(rgba(236,156,69,1)));
    background-image: -moz-gradient(linear, 0 0, 0 bottom, from(rgba(228,192,114,1)), to(rgba(236,156,69,1)));
    background-image: gradient(linear, 0 0, 0 bottom, from(rgba(228,192,114,1)), to(rgba(236,156,69,1)));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    //color:#fff;
  }
  &.tl{
    width:25vw;
    height:56vh;
    top:1vh;
    left:1vh;
  }
  &.tb{
    width:25vw;
    height:56vh;
    top:1vh;
    right:1vh;
  }
  &.rl{
    width:49vw;
    height:40vh;
    bottom:1vh;
    left:1vh;
  }
  &.rb{
    width:49vw;
    height:40vh;
    bottom:1vh;
    right:1vh;
  }

}
.load-page{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:#fff;
  z-index:111;
}
.flex-container-box{
  width:100%;
  display:flex;
  .flex-container-item{
    flex:1;
    margin:0 0.5vh;
  }
  .flex-center-item{
    flex:2
  }
}
.dashboard-container {
  width:100%;
  height:100%;
  background:#031d2b;
  box-sizing:border-box;
  overflow:hidden;
}

.top-echarts-container{
  width:100%;
  display:flex;
  margin-bottom:2vh;
  .flex-item{
    flex:2;
    height:56vh;
    margin-right:2vh;
    &:last-child{
      margin-right:0;
    }
  }
  .flex-item1{
    flex:6;
    margin-right:2vh;
  }
}
.mains-container{
  width:100%;
  height:60vh;
}
.top-banner-box{
  width:100%;
  height:8vh;
  padding:0 1vh;
  box-sizing:border-box;
  .banner-box{
    position:relative;
    width:100%;
    height:100%;
    align-items:center;
    .page-title{
      position:absolute;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
      font-size:20px;
      color:#fff;
    }
  }
}
.bottom-echarts-box{
  width:100%;
  height:30vh;
  display:flex;
  margin-top:1vh;
  box-sizing:border-box;
  .bottom-echarts-item{
    flex:1;
    margin:0 0.5vh;
  }
}

</style>
