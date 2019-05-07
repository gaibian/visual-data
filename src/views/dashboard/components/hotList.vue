<template>
    <div class="hot-list-chart">
        <div class="title-box">
          <div class="title">HOT榜</div>
          <div class="rotate-box">
            <span class="rotate-item"></span>
            <span class="rotate-item"></span>
            <span class="rotate-item"></span>
            <span class="rotate-item"></span>
            <span class="rotate-item"></span>
            <span class="rotate-item"></span>
            <span class="rotate-item"></span>
            <span class="rotate-item"></span>
            <span class="rotate-item"></span>
          </div>
        </div>
        <div class="month-box">
          <div class="time">
            <span class="kuai"></span>
            2019年4月
          </div>
          <div class="count">出车次数 1023 次</div>
        </div>
        <!--榜单内容-->
        <div class="careful-context">
            <test-svg :icon-class="'yj'"></test-svg>
            <p>1.海曙区 出车次数614次</p>
            <p>2.江北区 出车次数258次</p>
            <p>3.鄞州区 出车次数210次</p>
            <p>4.镇海区 出车次数890次</p>
            <p>5.北仑区 出车次数786次</p>
        </div>
        <!--注意-->
        <h3 class="be-careful-title"><svg-icon :icon-class="'careful'" class="svg-careful-icon"></svg-icon>注意</h3>
        <div class="be-careful-text">该时段甲型H1N1流感多发,其中海曙区与江北区人数上升最为明显</div>
    </div>
</template>
<script>
export default {
    name:'hotListChart',
    data() {
        return {
          img:require('../../../icons/svg/yj.svg')
        }
    },
    mounted() {
          console.log(this.img)
    },  
}
</script>
<style lang="scss" scoped>

.be-careful-title{
    width:100%;
    position:relative;
    padding-left:3vh;
    box-sizing:border-box;
    font-size:1.7vh;
    color:#eaa551;
    font-weight:normal;
    .svg-careful-icon{
        position:absolute;
        top:50%;
        left:0;
        transform:translate(0,-50%);
    }
}
.careful-context{
    width:100%;
    margin:2vh 0;
    p{
        position:relative;
        width:100%;
        text-align:center;
        font-size:1.5vh;
        color:#02dde6;
    }
}
.be-careful-text{
    width:100%;
    font-size:1.5vh;
    color:#02dde6;
    line-height:2.5vh;
    text-align:justify;
}
.month-box{
    display:flex;
    font-size:1.5vh;
    margin-top:3vh;
    .time{
        position:relative;
        padding-left:3vh;
        box-sizing:border-box;
        color:#eaa551;
        .kuai{
        position:absolute;
        top:50%;
        left:0;
        transform:translate(0,-50%);
        width:2vh;
        height:1vh;
        display:inline-block;
        border-radius:0.3vh;
        background:#eaa551;
        }
    }
    .count{
        color:#029aff;
        margin-left:4vh;
    }
}
.hot-list-chart{
    width:100%;
    height:100%;
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
</style>