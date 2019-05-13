<template>
    <div class="drag-time-box">
        <div class="slider" ref="slider">
            <ul class="time-show" ref="ul">
                <li v-for="(item,index) in monthOptions" ref="li" :key="index">
                    {{item.name}}月
                    <!--<i></i>-->
                </li>
                <!--选中的线-->
                <div class="select-container">
                    <div class="select-box" ref="selectBox" :style="selectStyle">
                        <div class="line top"></div>
                        <div class="line bottom"></div>
                        <span v-for="(item,index) in 50" class="select-span" ref="selectSpan" :key="index"></span>
                    </div>
                </div>
                <div class="trunk" ref="trunk" :style="style">
                    <span class="dot">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                    <div class="time-value">{{month}}月{{day}}日</div>
                </div>
                <div class="trunk" ref="endTrunk" :style="endStyle">
                    <span class="dot">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                    <div class="time-value">{{endMonth}}月{{endDay}}日</div>
                </div>
            </ul>
            <div class="operate-box">
                <svg-icon class="operate-svg" @click.native="handleFinsh" :icon-class="'complete-gou'"></svg-icon>
                <svg-icon class="operate-svg" @click.native="handleClose" :icon-class="'close-icon'"></svg-icon>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'dragTime',
    props:['time'],
    data() {
        return {
            slider:null,        //滚动条DOM元素
            thunk:null,         //拖拽DOM元素
            per:this.value,     //当前值,
            moveWidth:0,
            month:1,
            day:1,
            maxWidth:0,
            minLeft:0,
            endMonth:0,
            endDay:0,
            endStyle: {
                left:'0px',
                zIndex:1
            },
            monthOptions:[],
            style:{
                left:'-9px',
                zIndex:1,
            },
            selectStyle:{  //控制选中进度条的起始日期和结束日期
                left:0,
                width:0
            }
        }
    },
    created() {
        // 获取每个月的天数
        let monthCount = 12;
        for(let i=1;i<=monthCount;i++){
            this.monthOptions.push({
                name:i,
                day:this.getCountDays(i)
            })
        }
        //拖动按钮的时候每个月之间的值 拖动的距离除以每个区间的平均距离
    },
    methods:{
        pTime() {
            let date = new Date;
            let year = date.getFullYear();
            let text = `${year}-${this.month}-${this.day} - ${year}-${this.endMonth}-${this.endDay}`
            this.$emit('timeChange',text) 
        },
        handleFinsh() {
            this.$emit('changeFinsh')
            let data = `${this.month}月${this.day}日 - ${this.endMonth}月${this.endDay}日`
            this.$store.dispatch('setTime',data)
        },
        handleClose() {
            this.$emit('changeClose')
        },
        handleSpanStyle() {  //选中进度条部分制作
            let selectSpan = this.$refs.selectSpan;
            let marginSpan = 6;  //每个色块之间的空隙
            selectSpan.forEach((item,index) => {
                if(index === 0){
                    item.style.left = `${(index * item.offsetWidth)}px`
                }else{
                    item.style.left = `${(index * item.offsetWidth) + (marginSpan * index)}px`
                }
            })
        },
        getCountDays(mon) {
            let curDate = new Date();
            curDate.setMonth(mon);
            curDate.setDate(0);
            return curDate.getDate();
        },
    },
    mounted() {
        //时间拖动的数值还是有点问题的
        this.handleSpanStyle();
        let ul = this.$refs.ul
        let li = this.$refs.li;
        this.slider = this.$refs.slider;
        this.selectBox = this.$refs.selectBox;
        this.thunk = this.$refs.trunk;
        this.endTrunk = this.$refs.endTrunk;
        let ulWidth = ul.offsetWidth;
        let _left = ulWidth / 12;  //每一段距离
        let btnLeft = 9;
        //初始化进度条月份的定位
        li.forEach((item,index) => {
            item.style.left = `${_left * index - (item.offsetWidth / 2)}px`
        })

        let startTime = this.time.substring(0,8)
        let endTime = this.time.substring(11,this.time.length)
        this.endMonth = endTime.split('-')[1];
        this.endDay = endTime.split('-')[2];
        this.month = startTime.split('-')[1];
        this.day = startTime.split('-')[2];
        let date = new Date;

        let endMonth = date.getMonth() + 1;
        let endDay = date.getDate();
    
        //设置默认结束值和最大日期
        this.monthOptions.forEach((item,index) => {
            if(item.name == this.endMonth) {
                let leftInit = ((this.month - 1) * _left) + (_left / (item.day)) * this.day;
                this.selectStyle.width = `${((this.endMonth - 1) * _left) + (_left / (item.day)) * this.endDay - leftInit}px`
                this.endStyle.left = `${((this.endMonth - 1) * _left) + (_left / (item.day)) * this.endDay - btnLeft}px`
                this.style.left = `${((this.month - 1) * _left) + (_left / (item.day)) * this.day - btnLeft}px`
                this.selectStyle.left = `${leftInit}px`
                // 默认的最大宽度值
                this.maxWidth = ((endMonth - 1) * _left) + ((_left / (item.day)) * (endDay - 1));
            }
        })

        
        this.thunk.onmousedown = (e) => {
            let disX = e.clientX;
            //需要先获取到left值
            let thunkLeft = parseInt(this.style.left);
            let moveWidth = parseInt(this.selectBox.style.left);
            let selectWidth = parseInt(this.selectStyle.width);

            document.onmousemove = (e) => {  //拖动节点
                let newWidth = e.clientX - disX + moveWidth;  //节点划过的距离 + 之前划过的距离 => 用这个值来判断当前的起始时间
                this.style.zIndex = 2;
                this.endStyle.zIndex = 1;
        
                if(e.clientX - disX + thunkLeft <= -9) {
                    console.warn('已经滑到顶了')
                }else{
                    if(newWidth > parseInt(this.endStyle.left) + btnLeft) {
                        console.warn('起始日期不能超过结束日期')
                    }else{
                        this.selectStyle.left = `${newWidth}px`
                        this.selectStyle.width = `${parseInt(this.endStyle.left) - newWidth +　btnLeft}px`
                        this.style.left = `${e.clientX - disX + thunkLeft}px`  //算距离的话需要在加上9
                        let calcWidth = newWidth
                        //计算到几月份了
                        this.monthOptions.forEach((item,index) => {
                            if(calcWidth > index * _left && calcWidth <= (index + 1) * _left) {
                                this.month = index + 1
                                let dayLeft = _left / item.day
                                for(let i=0;i<item.day;i++){
                                    if(calcWidth > (index * _left) + (i * dayLeft) && calcWidth <= (index * _left) + ((i + 1) * dayLeft) ) {
                                        this.day = i + 1
                                    }
                                }
                            }
                        })
                    }
                }
                this.pTime()
            }
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            }
            return false;
        }
        this.endTrunk.onmousedown = (e) => {
            let disX = e.clientX;
            let thunkLeft = parseInt(this.endStyle.left);
            let moveWidth = parseInt(this.selectBox.style.width);  //存在小数
            
            document.onmousemove = (e) => {
                this.style.zIndex = 1;
                this.endStyle.zIndex = 2;
                 if(e.clientX - disX + thunkLeft + btnLeft > this.maxWidth){
                    console.warn('不能选择未来的时间')
                }else{
                    let newWidth = parseInt(e.clientX - disX + moveWidth)
                    if(newWidth < 0) {
                        console.warn('结束日期不能大于起始日期')
                    }else{
                        this.selectStyle.width = `${newWidth}px`
                        this.endStyle.left = `${e.clientX - disX + thunkLeft}px`
                        let calcWidth = e.clientX - disX + thunkLeft + btnLeft
                        //计算到几月份了
                        this.monthOptions.forEach((item,index) => {
                            if(calcWidth > index * _left && calcWidth <= (index + 1) * _left) {
                                this.endMonth = index + 1
                                let dayLeft = _left / item.day
                                for(let i=0;i<item.day;i++){
                                    if(calcWidth > (index * _left) + (i * dayLeft) && calcWidth <= (index * _left) + ((i + 1) * dayLeft) ) {
                                        this.endDay = i + 1
                                    }
                                }
                            }
                        })
                    }
                    

                }
                this.pTime()
            }
            document.onmouseup = function(){
                document.onmousemove = document.onmouseup = null;
            }
            return false;
        }

    },
    computed: {

    },

}
</script>
<style lang="scss" scoped>
.drag-time-box{
    width:100%;
    color:#fff;
    //background:rgba(5, 27, 74, 0.8);
    padding:0px 12px 6px 12px;
    .slider{
        position:relative;
        width:100%;
        padding-right:3vw;
        box-sizing:border-box;
        .operate-box{
            position:absolute;
            top:50%;
            right:-14px;
            transform:translate(0,-50%);
            .operate-svg{
                cursor:pointer;
            }
        }
        .time-show{
            position:relative;
            left:50%;
            top:0;
            transform:translate(-50%,0);
            width:100%;  //这个宽度暂时先固定
            height:9px;
            border-radius:9px;
            background:rgba(32,110,178,0.7);
            .select-container{
                position:absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                overflow:hidden;
                .select-box{
                    position:absolute;
                    top:0;
                    //left:20px;  //起始日期控制的值
                    height:9px;
                    //width:100px; //结束日期控制的值
                    background:#206eb2;
                    font-size:0;
                    overflow:hidden;
                    .line{
                        position:absolute;
                        left:0;
                        width:100%;
                        height:1px;
                        background:#006cff;
                        &.top{
                            top:0;
                        }
                        &.bottom{
                            bottom:0
                        }
                    }
                    .select-span{
                        position:absolute;
                        top:0;
                        display:block;
                        width:6px;
                        height:10px;
                        background:#006cff;
                        //margin-right:10px;
                        transform:skew(-30deg);
                        // &:last-child{
                        //     margin-right:0;
                        // }
                    }
                }
            }
            li{
                position:absolute;
                top:16px;
                float:left;
                list-style:none;
                font-size:14px;
                color:#216CFD;
                font-weight:bold;
                z-index:100;
                i{
                    position:absolute;
                    left:0;
                    top:-11px;
                    display:block;
                    width:1px;
                    height:4px;
                    background:#216CFD;
                    //background:#fff;
                }
            }
        }
    }
}
.trunk{
    position:absolute;
    top:50%;
    transform:translate(0,-50%);
    width:21px;
    height:12px;
    border-radius:12px;
    border:rgba(204,204,204,1) 1px solid;
    background:rgba(170,170,170,0.9);
    cursor:pointer;
    z-index:99;
    .dot{
        position:absolute;
        top:50%;
        left:50%;
        height:2px;
        width:12px;
        transform:translate(-50%,-50%);
        z-index:99;
        font-size:0;
        i{
            display:inline-block;
            width:2px;
            height:2px;
            border-radius:50%;
            margin:0 1px;
            background:#006CFF;
        }
    }
    .time-value{
        width:80px;
        position:absolute;
        top:-24px;
        left:50%;
        font-weight:bold;
        text-align:center;
        transform:translate(-50%,0);
        font-size:14px;
        color:#216CFD;
    }
}
</style>
