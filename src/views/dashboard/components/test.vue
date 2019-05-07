<template>
    <div class="page">
        <div class="test">
            <canvas id="canvas" style="border:red 1px solid;margin:20px;"></canvas>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    name:'testChart',
    data() {
        return {
            
        }
    },
    mounted() {
        //canvas 是基于状态进行绘制的
        let canvas = document.getElementById('canvas')
        canvas.width = '500'
        canvas.height = '500'
        let context = canvas.getContext('2d')
        context.beginPath()
        context.moveTo(100,100)  //直线的起点
        context.lineTo(400,400)  //直线的末点
        context.lineTo(100,400)  //多次lineTo可以画出折线
        context.fillStyle = 'yellow'
        context.fill()
        context.closePath()  //如果是封闭的图形的话
        context.stroke()

        context.beginPath()  //开始重新的绘制
        context.moveTo(200,200)
        context.lineTo(100,500)
        context.lineWidth = 10
        context.strokeStyle = '#058'
        context.stroke()  //绘制

        // 可以通过函数封装的方式来进行
    }, 
}
</script>
<style lang="scss" scoped>
.page{
    width:100%;
    background:#031d2b;
    .test{
        font-size:2vh;
        color:#76c0ff
    }
}
#test-chart{
    width:100%;
    height:80vh;
    background:#031d2b;
}
</style>