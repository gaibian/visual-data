<template>
    <div class="map-header-container">
        <div class="header-top-box">
            <div class="location-box">
                <svg-icon :icon-class="'location'"></svg-icon>
                <div class="text">浙江省</div>
                <div class="text">宁波市</div>
                <div class="text ads-choice" @click="areaFlag = !areaFlag">
                    {{areaValue}}<svg-icon :icon-class="'down-icon'" style="margin-left:4px"></svg-icon>
                    <div class="ads-popup" v-show="areaFlag">
                        <ul>
                            <li v-for="(item,index) in areaOptions" :class="index == areaIndex ? 'active' : ''" :key="index" @click="handleAreaClick(item,index)">{{item.name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="choice-time-box">
                <svg-icon :icon-class="'time'" style="margin-right:4px;"></svg-icon>
                <span class="time-item" @click="timeFlag = true">{{time}}</span> 
            </div>
        </div>
        <!--时间控件-->
        <drag-time v-if="timeFlag" class="drag-time-box" @timeChange="handleTime" :time="time" @changeClose="timeFlag = false" @changeFinsh="handleFinsh"></drag-time>
        <div class="header-bottom-box">
            <div class="status-text-box">
                <div class="status-item"><svg-icon class="car-svg" :icon-class="'car_red'"></svg-icon>任务中车辆(30)</div>
                <div class="status-item"><svg-icon class="car-svg" :icon-class="'car_blue'"></svg-icon>途中待命(23)</div>
                <div class="status-item"><svg-icon class="car-svg" :icon-class="'car_green'"></svg-icon>站内待命(78)</div>
                <div class="status-item"><svg-icon class="car-svg" :icon-class="'car_black'"></svg-icon>未上班/下班(34)</div>
            </div>
            <div class="hot-btn" @click="handleSvg">
                <svg-icon :icon-class="svgFlag ? 'ThermodynamicChart_color' : 'ThermodynamicChart_nocolor'"></svg-icon>
            </div>
 
        </div>
    </div>
</template>
<script>
import dragTime from './dragTime'
export default {
    name: 'mapHeader',
    components: {
        dragTime
    },
    data() {
        return {
            per:10,
            svgFlag:false,
            timeFlag:false,
            areaValue:'海曙区',
            areaIndex:0,
            time:'2019-2-2 - 2019-4-8',
            areaFlag:false,
            areaOptions:[{
                name:'海曙区',
                center:[121.55,29.87]
            },{
                name:'江北区',
                center:[121.55,29.88]
            },{
                name:'鄞州区',
                center:[121.53,29.83]
            }]
        }
    },
    created() {
        // let date = new Date;
        // let year = date.getFullYear();
        // let endMonth = date.getMonth()+1;
        // let endDay = date.getDate();
        // this.time = `${year}-1-1 - ${year}-${endMonth}-${endDay}`
    },
    methods:{
        handleTime(text) {
            this.time = text
        },
        handleFinsh(data) {
            this.timeFlag = false;
        },
        handleAreaClick(item,index) {
            this.areaIndex = index;
            this.areaValue = item.name;
            //选中地图区域选中到对应的区

             this.$store.dispatch('setCenter',item.center)

        },
        handleSvg() {
            this.svgFlag = !this.svgFlag;
            this.$emit('hotChange',this.svgFlag)
        }
    }   
}
</script>
<style lang="scss" scoped>
.map-header-container{
    width:100%;
    .header-top-box{
        position:relative;
        width:100%;
        box-sizing:border-box;
        display:flex;
        font-size:14px;
        color:#fff;
        margin-bottom:12px;
        .location-box{
            flex:1;
            .text{
                display:inline-block;
                margin:0 4px;
            }
            .ads-choice{
                position:relative;
                display:inline-block;
                padding:4px 18px;
                border-radius:12px;
                background:#288FDC;
                cursor:pointer;
                color:#ccc;
                .ads-popup{
                    position:absolute;
                    top:40px;
                    left:0;
                    min-width:140px;
                    background:rgba(5, 27, 74, 0.9);
                    border:#0f4368 1px solid;
                    overflow:hidden;
                    z-index:9;
                    ul{
                        width:100%;
                        padding:0 12px;
                        margin:0;
                        box-sizing:border-box;
                        li{
                            width:100%;
                            color:#fff;
                            list-style:none;
                            border-bottom:#0f4368 1px solid;
                            padding:6px 0px;
                            &:last-child{
                                border-bottom:none;
                            }
                            &.active{
                                color:#00fbd1;
                            }
                        }
                    }
                }
            }
        }
        .choice-time-box{
            position:relative;
            flex:1;
            text-align:right;
            .time-item{
                display:inline-block;
                padding:4px 18px;
                border-radius:12px;
                background:#288FDC;
                cursor:pointer;
                color:#ccc;
            }
            
        }
    }
    .drag-time-box{
        width:100%;
        // position:absolute;
        // top:80px;
        // right:-12px;
        box-sizing:border-box;
        padding-top:6px;
    }
    .header-bottom-box{
        position:relative;
        width:100%;
        box-sizing:border-box;
        border-top:#216CFD 1px dashed;
        padding:8px 5vw 8px 0;
        margin-top:10px;
        .status-text-box{
            width:100%;
            display:flex;
            .status-item{
                position:relative;
                flex:1;
                font-size:12px;
                color:#fff;
                cursor:pointer;
                padding-left:30px;
                box-sizing:border-box;
            }
        }
        .hot-btn{
            position:absolute;
            top:50%;
            right:12px;
            transform:translate(0,-50%);
            width:24px;
            height:24px;
            font-size:22px;
            cursor:pointer;
        }
    }
}
.car-svg{
    position:absolute;
    top:50%;
    left:0;
    transform:translate(0,-50%) rotate(-90deg);
    font-size:25px;
}
</style>