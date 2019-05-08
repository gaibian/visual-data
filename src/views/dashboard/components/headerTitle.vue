<template>
    <div class="header-title-container">
        <div class="header-title">
            <span>宁波市急救中心智慧急救平台</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'headerTitle',
    data() {
        return {}
    },
    mounted() {
        
    },
    methods:{
        hArcTo() {

        }
    }
}
</script>
<style lang="scss" scoped>
.header-title-container{
    height: 43px;
    width: 100%;
    display: block;
    z-index: 2;
    position: absolute;
    .header-title{
    position: absolute;
    background-image: url(../../../assets/header.png);
    background-size: 100% 43px;
    height: 43px;
    width: 100%;
    background-repeat: no-repeat;
    display: block;
    span{
        position:fixed;
        width:100%;
        text-align:center;
        color:#02a9ff;
        line-height:40px;
        font-weight:bold;
    }
}
}

</style>