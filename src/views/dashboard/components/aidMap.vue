<template>
    <div class="air-map">
        <div class="map-header" :style="headerStyle">
            <map-header @hotChange="handleHotChange"></map-header>
        </div>
        <div class="map" id="air-map"></div>
        <!--<div class="btn-box">
            <el-button type="primary" size="mini" @click="handleHotShow">打开热力图</el-button>
            <el-button type="primary" size="mini" @click="handleYI">移动车辆</el-button>
            <el-button size="mini" @click="handleHotHide">关闭热力图</el-button>
        </div>-->
    </div>
</template>
<script>
import heatmapData from '@/data/hotMap'
import mapHeader from './mapHeader'
export default {
    name: 'airMap',
    props:['switchFlag'],
    components:{
        mapHeader
    },
    data() {
        return {
            loca: null,
            heatmap: null,  //热力图
            layer: null,
            amap: null,
            headerStyle:{},
            markerArr: [],  //用来存储所有的车辆点 marker
            carData:[ //救护车位置的数据
                { 'name': '海曙区', 'center': [121.55,29.87] ,lineArr:[]},
                { 'name': '江东区', 'center': [121.57,29.87] ,lineArr:[]},
                { 'name': '江东区', 'center': [121.56,29.89] ,lineArr:[]},
                { 'name': '江东区', 'center': [121.54,29.67] ,lineArr:[]},
                { 'name': '江东区', 'center': [121.59,29.92] ,lineArr:[]},
                { 'name': '江东区', 'center': [121.62,29.93] ,lineArr:[]},
            ],
        }
    },
    created() {
 
    },
    mounted() {
        //创建可视化图层
        this.loca = Loca.create('air-map',{
            zoom:11,
            resizeEnable: false,
            center:[121.55,29.87],
            mapStyle: 'amap://styles/f18517cc1b61e250c2d887327b12d665',
            viewMode:'2d'
        })

        this.loca.on('mapload',() => {  //判断地图是否加载完成
            this.amap = this.loca.getMap();  //获取到高德地图
            var marker,polyline,passedPolyline
            //需要在地图上面添加蒙版
            for(let item of this.carData){
                item.lineArr.push(item.center)
                let marker = new AMap.Marker({
                    map: this.amap,
                    position: item.center,
                    icon: "https://webapi.amap.com/images/car.png",
                    offset: new AMap.Pixel(-26, -13),
                    autoRotation: true,
                    angle:-90,
                });
                // var polyline = new AMap.Polyline({
                //     map: this.amap,
                //     path: item.lineArr,
                //     showDir:true,
                //     strokeColor: "#28F",  //线颜色
                //     strokeWeight: 6,      //线宽
                // });
                // var passedPolyline = new AMap.Polyline({
                //     map: this.amap,
                //     strokeColor: "#AF5",  //线颜色
                //     strokeWeight: 6,      //线宽
                // });
                marker.on('moving', function (e) {
                    //passedPolyline.setPath(e.passedPath);
                });
                this.markerArr.push(marker);
            }
            this.amap.setFitView();
            for(let item of this.markerArr){
                item.hide()
            }
            //添加热力图的数据层
            if (!this.isSupportCanvas()) {
                console.warn('热力图仅对支持canvas的浏览器适用,您所使用的浏览器不能使用热力图功能,请换个浏览器试试~')
            }
            this.amap.plugin(["AMap.Heatmap"],() => {
                //初始化heatmap对象
                this.heatmap = new AMap.Heatmap(this.amap, {
                    radius: 25, //给定半径
                    opacity: [0, 0.8],
                    // gradient:{
                    //     0.2: 'blue',
                    //     0.65: 'rgb(117,211,248)',
                    //     0.7: 'rgb(0, 255, 0)',
                    //     0.9: '#ffea00',
                    //     1.0: 'red'
                    // }
                });
                //设置数据集：该数据为宁波部分“公园”数据
                this.heatmap.setDataSet({
                    data: heatmapData,
                    max: 100
                });
            });
        })
        
    },
    watch:{
        carData:{
            handler() {
                //对车辆的数据进行监控
            },
            deep:true
        },
        switchFlag() {
            if(this.switchFlag){
                this.headerStyle = {
                    opacity:1
                }
            }else{
                this.headerStyle = {
                    opacity:0
                }
            }
        }
    },
    methods:{
        handleHotChange(flag) {
            flag ? this.handleHotHide() : this.handleHotShow()
        },
        handleYI() {
            //车辆的实时定位 存入对应的数组
            function random(lower, upper) {
                return Math.floor(Math.random() * (upper - lower)) + lower;
            }
            for(let item of this.carData){
                if(item.lineArr.length >= 2){
                    item.lineArr.splice(0,1);
                }
                item.lineArr.push([item.lineArr[0][0] + (Math.random() / 100),item.lineArr[0][1] + (Math.random() / 100)])
            }
            //车辆进行移动
            for(let i = 0; i < this.markerArr.length;i++){
                for(let k = 0; k < this.carData.length;k++){
                    if(i == k) {
                        let line = this.carData[i].lineArr
                        let newArr = [].concat(line)
                        this.markerArr[i].moveTo(newArr,1000)
                    }
                }
            }
        },
        //急救车位置图层  车辆的实时定位 => 一般是在车辆静止的时候传GPS => 在移动的过程当中可能会发生GPS位置漂移
        airLocat() {
            this.layer = Loca.visualLayer({
                type: 'point',
                shape: 'image',  //这个属性决定了加载什么
                eventSupport: true,
                fitView: true,  //地图缩放和自适应
            });
            this.layer.addTo(this.loca)
            // 获取实时的数据
            function random(lower, upper) {
                return Math.floor(Math.random() * (upper - lower)) + lower;
            }
            this.layer.setData(this.carData, {
                type: 'json',
                lnglat: 'center'
            });
            this.layer.setOptions({
                source: function(res) {
                         var src = "https://webapi.amap.com/images/car.png"
                        return src;
                },
                style: {
                    size: 35
                }
            })
            // 模拟实时的定位数据
            setInterval(() => { 
                for(let i of this.carData) {
                    i.center = `121.5${random(1,9)},29.8${random(1,9)}`
                }
                this.layer.setData(this.carData, {
                    type: 'json',
                    lnglat: 'center'
                });
                this.layer.render()
            },2000)
            this.layer.render()  //渲染的数据
        },
        handleHotShow() {
            this.heatmap.show();
            for(let item of this.markerArr){
                item.hide()
            }
        },
        handleHotHide() {
            this.heatmap.hide();
            for(let item of this.markerArr){
                item.show()
            }
        },
        isSupportCanvas() {  //判断是否支持canvas
            var elem = document.createElement('canvas');
            return !!(elem.getContext && elem.getContext('2d'));
        }
    }   
}
</script>
<style lang="scss" scoped>
.air-map{
    position:relative;
    width:100vw;
    height:100vh;
    background:#021c2f;
    box-sizing:border-box;
}
#air-map{
    width:100%;
    height:100%;
    box-shadow:10px 10px 10px rgba(0,0,0,1);
}
.map-header{
    width:47vw;
    padding:8px 12px 0px 12px;
    box-sizing:border-box;
    position:absolute;
    top:52px;
    left:50%;
    transform:translate(-50%,0);
    background:rgba(5,27,74,0.8);
    box-shadow:inset 4px 4px 20px rgba(0,229,255,0.3), inset -4px -4px 20px rgba(0,229,255,0.3);
    z-index:999;
    transition:opacity 0.5s ease-in-out;
}
.bottom-map{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: radial-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
}
.btn-box{
    position:absolute;
    right:22vw;
    top:30px;
    z-index:100
}
.air-tabs-container{
    position:absolute;
    top:80px;
    left:50%;
    transform:translate(-50%,0);
    width:600px;
    height:44px;
    display:flex;
    padding:0 8px;
    box-sizing:border-box;
    background:rgba(10,26,41,1);
    align-items:center;
    //border-radius:4px;
    z-index:999;
    .tabs-item{
        flex:1;
        font-size:16px;
        color:#fff;
        text-align:center;
        cursor:pointer;
        .svg-icon{
            margin-right:1vh;
        }
    }
}

</style>