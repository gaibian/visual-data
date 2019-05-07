<template>
    <div class="map-header-container">
        <div class="header-top-box">
            <div class="location-box">
                <svg-icon :icon-class="'location'"></svg-icon>
                <span>浙江省</span>
                <span>宁波市</span>
                <span class="ads-choice">江北区<svg-icon :icon-class="'down-icon'" style="margin-left:4px"></svg-icon></span>
            </div>
            <div class="choice-time-box">
                <svg-icon :icon-class="'time'" style="margin-right:4px;"></svg-icon>
                <span class="time-item">2019-05-01</span> -
                <span class="time-item">2019-05-30</span>
            </div>
        </div>
        <div class="header-bottom-box">
            <div class="status-text-box">
                <div class="status-item">任务中车辆</div>
                <div class="status-item">途中待命</div>
                <div class="status-item">站内待命</div>
                <div class="status-item">未上班/下班</div>
            </div>
            <div class="hot-btn"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'mapHeader',
    data() {
        return {}
    }   
}
</script>
<style lang="scss" scoped>
.map-header-container{
    width:100%;
    .header-top-box{
        position:relative;
        width:100%;
        border-bottom:#216CFD 1px dashed;
        box-sizing:border-box;
        padding-bottom:8px;
        display:flex;
        font-size:14px;
        color:#fff;
        .location-box{
            flex:1;
            span{
                margin:0 4px;
            }
            .ads-choice{
                display:inline-block;
                padding:4px 18px;
                border-radius:12px;
                background:#288FDC;
                cursor:pointer;
                color:#ccc;
            }
        }
        .choice-time-box{
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
    .header-bottom-box{
        position:relative;
        width:100%;
        box-sizing:border-box;
        padding-right:5vw;
        margin-top:8px;
        .status-text-box{
            width:100%;
            display:flex;
            .status-item{
                flex:1;
                font-size:14px;
                color:#fff;
                cursor:pointer;
            }
        }
        .hot-btn{
            position:absolute;
            top:50%;
            right:12px;
            transform:translate(0,-50%);
            width:24px;
            height:24px;
            cursor:pointer;
            background:url('../../../assets/hotBtn.png');
            background-size:contain;
        }
    }
}
</style>