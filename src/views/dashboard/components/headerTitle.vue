<template>
    <div class="header-title-container">
        <canvas id="can" width="200" height="200"></canvas>
    </div>
</template>
<script>
export default {
    name: 'headerTitle',
    data() {
        return {}
    },
    mounted() {
        let canvas = document.getElementById('can')
        let _width = 1000;
        let _height = 500;
        // 需要动态的赋值宽度和高度
        canvas.width = _width;
        canvas.height = _height
        if(canvas.getContext) {
            let ctx = canvas.getContext('2d')
            // ctx.font = '48px 微软雅黑'
            // ctx.textBaseline = 'hanging'
            // ctx.fillStyle = 'red'
            // ctx.fillText('晓军', 130, 20)
        
            //绘画曲线
            ctx.beginPath()  //开始绘制
            ctx.moveTo(200,200)
            //ctx.lineTo(200,300)
            console.log(Math.PI * 20)  //圆周率 * 圆的直径 = 圆的周长
            //Math.PI 是指圆周率
            //绘制圆弧的方法 arc()  arcTo()
            ctx.arcTo(200,250,300,320,20)
            // 200 250 中转点
            // 300 320 结束点
            // 10 圆弧的半径

            ctx.strokeStyle = '#058'
            ctx.lineWidth = 2
            ctx.stroke()
            //ctx.closePath()

            //绘制圆角矩形
        }
    },
    methods:{
        hArcTo() {

        }
    }
}
</script>
<style lang="scss" scoped>
.header-title-container{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:500px;
    text-align:center;
    background:#fff;
    //color:#fff;
    z-index:99;
}
</style>