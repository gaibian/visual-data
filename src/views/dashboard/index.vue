<template>
  <div class="dashboard-container">
    <!--标题-->
    <header-title></header-title>
    <!--内容区域 图表的展示-->
    <div class="content-box tl charts-border-box" ref="t1" :style="t1Style">
      <border-div></border-div>
      <div class="title-box">
        <span class="title">急救任务量</span>
        <!--<img src="../../assets/xie.png">-->
        <div class="img-box">
          <span v-for="(item,index) in 7" :key="index"></span>
        </div>
        <span class="content-time">
            <i></i>{{time}}
        </span>
      </div>
      <pie-charts :key="keyIndex"></pie-charts>
    </div>
    <div class="content-box tb charts-border-box" ref="tb" :style="tbStyle">
      <border-div></border-div>
      <div class="title-box">
        <span class="title">急救车异常情况一览表</span>
      </div>
      <car-abnormal></car-abnormal>
      <!--收起按钮-->
      <div class="switch-box" @click="handleSwitchClick">
          <div class="air-box">
            <svg-icon class="switch-icon" :icon-class="'switch-icon'"></svg-icon>
          </div>
      </div>
    </div>
    <div class="content-box rl charts-border-box" ref="r1" :style="r1Style">
      <border-div></border-div>
      <div class="title-box">
        <span class="title">急救准点率</span>
        <div class="img-box">
          <span v-for="(item,index) in 7" :key="index"></span>
        </div>
        <span class="content-time">
            <i></i>{{time}}
        </span>
      </div>
      <bar-data :key="keyIndex"></bar-data>
    </div>
    <div class="content-box rb charts-border-box" ref="rb" :style="r1Style">
      <border-div></border-div>
      <div class="title-box">
        <span class="title">急救节点平均时间</span>
        <div class="img-box left">
          <span v-for="(item,index) in 7" :key="index"></span>
        </div>
        <span class="content-time">
            <i></i>{{time}}
        </span>
      </div>
      <line-data :key="keyIndex"></line-data>
    </div>
    <aid-map :switchFlag="switchFlag"></aid-map>
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
      keyIndex:0,
      tbStyle:{},
      t1Style:{},
      r1Style:{},
      rbStyle:{},
      switchFlag:true,
    }
  },
  // watch:{
  //   time() {
  //     console.log('ssss')
  //     this.keyIndex ++
  //   }
  // },
  created() {
   
  },
  mounted() {
  },
  methods:{
    handleSwitchClick() {
      
      let contentBox = this.$refs.tb;
      let contentBox1 = this.$refs.t1;
      let contentBox2 = this.$refs.r1;
      let contentBox3 = this.$refs.rb;
      let windowHeight = document.body.clientHeight * 0.01;
      if(this.switchFlag) {
        this.tbStyle = {
          transform: `translate(${contentBox.offsetWidth + windowHeight + 2}px,0)`
        }
        this.t1Style = {
          transform: `translate(-${contentBox1.offsetWidth + windowHeight + 2}px,0)`
        }
        this.r1Style = {
          transform: `translate(0,${contentBox2.offsetHeight + windowHeight + 2}px)`
        }
        this.switchFlag = false;
      }else{
        this.tbStyle = this.t1Style = this.r1Style = {
          transform: `none`
        }
        this.switchFlag = true;
      }
      
    }
  },
  
  computed: {
    time() {
      return this.$store.state.dateTime
    }
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
.content-time{
    position:absolute;
    //margin-top:1vh;
    top:50%;
    transform:translate(0,-50%);
    right:0;
    font-size:14px;
    color:#EAA551;
    // padding-left:18px;
    // margin-left:6px;
    // i{
    //     display:block;
    //     width:9px;
    //     height:2px;
    //     background:#EAA551;
    //     position:absolute;
    //     top:50%;
    //     left:0;
    //     transform:translate(0,-50%);
    // }
}
.content-box{
  position:fixed;
  padding:1.5vh;
  box-sizing:border-box;
  transition:all 0.5s ease-in-out;
  z-index:9999;
  .switch-box{
      position:absolute;
      top:50%;
      left:-20px;
      transform:translate(0,-50%);
      width:20px;
      height:40px;
      overflow:hidden;
      cursor:pointer;
      .air-box{
          width:40px;
          height:100%;
          border-radius:50%;
          background:rgba(5,27,74,0.8);
          border:1px solid rgba(10,67,188,1);
          box-shadow:inset 4px 4px 20px rgba(0,229,255,0.3), inset -4px -4px 20px rgba(0,229,255,0.3);
          color:#00EDFD;
          .switch-icon{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
          }
      }
  }
  .title-box{
    position:relative;
    width:100%;
    line-height: 25px;
    .img-box{
      position:absolute;
      top:50%;
      height:16px;
      transform:translate(0,-50%);
      left:100px;
      &.left{
        left:150px;
      }
      span{
        display:inline-block;
        width:6px;
        height:16px;
        border-radius:14px;
        background:#0E2972;
        margin-right:6px;
        transform:skew(-30deg);
      }
    }
    
  }
  .title{
    margin:0;
    font-size:16px;
    background-image: -webkit-gradient(linear, 0 0, 0 bottom, from(rgba(228,192,114,1)), to(rgba(236,156,69,1)));
    background-image: -moz-gradient(linear, 0 0, 0 bottom, from(rgba(228,192,114,1)), to(rgba(236,156,69,1)));
    background-image: gradient(linear, 0 0, 0 bottom, from(rgba(228,192,114,1)), to(rgba(236,156,69,1)));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight:bold;
  }
  &.tl{
    width:25vw;
    height:60vh;
    top:4vh;
    left:1vh;
  }
  &.tb{
    width:25vw;
    height:60vh;
    top:4vh;
    right:1vh;
  }
  &.rl{
    width:49vw;
    height:34vh;
    bottom:1vh;
    left:1vh;
  }
  &.rb{
    width:49vw;
    height:34vh;
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
