<template>
    <div class="abnormal-page">
        <!--轮播实现滚动-->
        <div class="carousel-box" ref="carousel" :style="carouselStyle">
            <div class="carousel" v-for="(item,index) in abnormalOptions" :key="index" ref="item">
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
        <div class="img-box">
            <img width="100%" src="../../../assets/shading.png">
        </div>
    </div>
</template>
<script>
export default {
    name: 'abnormal',
    data() {
        return {
            carouselStyle:{},
            moveTo:0,
            transformFlag:true,
            abnormalOptions:[{
                title:'070 浙B3360X 30号车',
                arr:['上下担架车在位','负压式骨折固定垫在位','急救舱中门开关 I/O','软担架在位']
            },{
                title:'032 浙B602DN 35号车',
                arr:['心电监护除颤仪在位','呼吸机在位','负压式骨折固定垫在位']
            },{
                title:'087 浙B1150QV 15号车',
                arr:['氧气瓶 1 余量 0-5V','病人保险带系未系 I/O']
            },{
                title:'087 浙B1150QV 15号车',
                arr:['氧气瓶 1 余量 0-5V','病人保险带系未系 I/O']
            },{
                title:'087 浙B1150QV 15号车',
                arr:['氧气瓶 1 余量 0-5V','病人保险带系未系 I/O']
            },{
                title:'087 浙B1150QV 15号车',
                arr:['氧气瓶 1 余量 0-5V','病人保险带系未系 I/O']
            }]
        }
    },
    mounted() {
        // 轮播
        let carousel = this.$refs.carousel;
        let that = this;
        //1.看第一个li的高度多少就滚动多少 => 滚动完之后需要把第一个li插到最后去 => 再判断第一个li的高度继续滚动
        setInterval(() => {
            this.moveTo = carousel.firstChild.offsetHeight;
            this.transformFlag = true;
            this.carouselStyle = {
                'transition': `all 2s linear`,
                'transform': `translate(0,-${this.moveTo + 12}px)`
            }
            function whichTransitionEvent(){
                var t,
                el = document.createElement('surface'),
                transitions = {
                    'transition':'transitionend',
                    'OTransition':'oTransitionEnd',
                    'MozTransition':'transitionend',
                    'WebkitTransition':'webkitTransitionEnd'
                }
                for(t in transitions){
                    if( el.style[t] !== undefined ){
                        return transitions[t];
                    }
                }
            }
            var transitionEvent = whichTransitionEvent();
            function handle() {
                if(that.transformFlag) {
                    console.log('css3运动结束');
                    let fitstDom = carousel.removeChild(carousel.firstChild);
                    carousel.lastChild.after(fitstDom)
                    that.carouselStyle = {
                        'transition': 'none',
                        'transform': `translate(0,0)`
                    }
                    carousel.removeEventListener(transitionEvent,handle);//销毁事件   
                }
                that.transformFlag = false;
            }
            transitionEvent && carousel.addEventListener(transitionEvent,handle);
        },5000)

        
        // setInterval(() => {
        //     this.move += 90;
        //     this.carouselStyle = {
        //         'transform': `translate(0,-${this.move}px)`
        //     }
        // },5000)
    },
}
</script>
<style lang="scss" scoped>
.abnormal-page{
    width:100%;
    height:92%;
    margin-top:10px;
    overflow:hidden;
    position: relative;
    .carousel-box{
        width:100%;
        padding:0 20px;
        box-sizing:border-box;
        .carousel{
            width:100%;
            margin-bottom:12px;
            .car-item{
                width:100%;
                background:rgba(7,25,60,1);
                border:1px solid rgba(0,108,255,1);
                padding:12px;
                box-sizing:border-box;
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
                        font-size:13px;
                        color:#eee;
                        padding-left:16px;
                        box-sizing:border-box;
                        margin:8px 0;
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
    .img-box{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding:0 20px;
        box-sizing:border-box;
        font-size:0;
    }
}
</style>