<template>
    <div class="map-container">
        <div class="hot-map" id="hot-map"></div>
        <div class="color-block-box">
            <p class="item-box">
                <span class="color-block color1"></span>
                < 100
            </p>
            <p class="item-box">
                <span class="color-block color2"></span>
                100 - 150
            </p>
            <p class="item-box">
                <span class="color-block color3"></span>
                150 - 250
            </p>
            <p class="item-box">
                <span class="color-block color4"></span>
                250 - 300
            </p>
            <p class="item-box">
                <span class="color-block color5"></span>
                300 - 350
            </p>
        </div>
    </div>
</template>
<script>
import heatmapData from '@/utils/mapData'
export default {
    name:'hotMap',
    data() {
        return {
            map: null
        }
    },
    mounted() {
        console.log(Loca)
        
         this.map = Loca.create('hot-map', {
            features: ['bg', 'road'],
            mapStyle: 'amap://styles/grey',
            center: [116.397475, 39.908668],
            pitch: 50,
            zoom: 10,
            viewMode: '2D'
            // Loca 自 1.2.0 起 viewMode 模式默认为 3D，如需 2D 模式，请显示配置。
            // viewMode: '3D'
        });
        var layer = Loca.visualLayer({
            container: this.map,
            type: 'heatmap',
            // 基本热力图
            shape: 'normal'
        });
        var list = [];
        var i = -1, length = heatmapData.length;
        while (++i < length) {
            var item = heatmapData[i];
            list.push({
                coordinate: [item.lng, item.lat],
                count: item.count
            })
        }

        layer.setData(list, {
            lnglat: 'coordinate',
            value: 'count'
        });

        layer.setOptions({
            style: {
                radius: 30,
                color: {
                    0.2: '#2c7bb6',
                    0.3: '#abd9e9',
                    0.7: '#ffffbf',
                    0.9: '#fde468',
                    1.0: '#d7191c'
                }
            }
        });
        layer.render();
    },   
}
</script>
<style lang="scss" scoped>
.map-container{
    position:relative;
    width:100%;
    height:100%;
    .color-block-box{
        position:absolute;
        right:2vh;
        bottom:2vh;
        .item-box{
            position:relative;
            font-size:1.5vh;
            color:#fff;
            padding-left:2vh;
            box-sizing:border-box;
            margin:0.5vh 0;
            .color-block{
                position:absolute;
                left:0;
                top:50%;
                transform:translate(0,-50%);
                width:1vh;
                height:1vh;
                &.color1{
                    background:#01a2e6;
                }
                &.color2{
                    background:#009c4d;
                }
                &.color3{
                    background:#ffee00;
                }
                &.color4{
                    background:#ff9423;
                }
                &.color5{
                    background:#d73147;
                }
            }
        }
    }
}
.hot-map{
    width:100%;
    height:100%;
    color:#fff
}
</style>