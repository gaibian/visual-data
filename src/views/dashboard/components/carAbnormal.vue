<template>
    <div class="abnormal-page">
        <!--轮播实现滚动-->
        <div class="carousel-box">
            <div class="carousel" v-for="(item,index) in abnormalOptions" :key="index">
                <div class="car-item">
                    <div class="title">{{item.title}}</div>
                    <ul>
                        <li v-for="(item1,index1) in item.arr" :key="index1">
                            <i></i>
                            {{item1}}<span>异常</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'abnormal',
    data() {
        return {
            abnormalOptions:[{
                title:'070 浙B3360X 30号车',
                arr:['上下担架车在位','负压式骨折固定垫在位','急救舱中门开关 I/O','软担架在位']
            },{
                title:'032 浙B602DN 35号车',
                arr:['心电监护除颤仪在位','呼吸机在位','负压式骨折固定垫在位']
            },{
                title:'087 浙B1150QV 15号车',
                arr:['氧气瓶 1 余量 0-5V','病人保险带系未系 I/O']
            }]
        }
    }
}
</script>
<style lang="scss" scoped>
.abnormal-page{
    width:100%;
    height:100%;
    overflow:hidden;
    .carousel-box{
        width:100%;
        height:100%;
        padding:0 20px;
        box-sizing:border-box;
        overflow:hidden;
        .carousel{
            width:100%;
            .car-item{
                width:100%;
                background:rgba(7,25,60,1);
                border:1px solid rgba(0,108,255,1);
                padding:12px;
                box-sizing:border-box;
                margin-top:12px;
                .title{
                    width:100%;
                    font-size:16px;
                    color:#eee;
                }
                ul{
                    width:100%;
                    margin:0;
                    padding:0;
                    margin-top:12px;
                    li{
                        position:relative;
                        width:100%;
                        list-style:none;
                        font-size:14px;
                        color:#eee;
                        padding-left:16px;
                        box-sizing:border-box;
                        margin:12px 0;
                        &:last-child{
                            margin-bottom:0;
                        }
                        span{
                            color:#D81E06;
                            margin-left:12px;
                        }
                        i{
                            display:block;
                            position:absolute;
                            top:50%;
                            left:0;
                            transform:translate(0,-50%);
                            width:5px;
                            height:5px;
                            border-radius:50%;
                            background:#D81E06;
                        }
                    }
                }
            }
        }
    }
}
</style>