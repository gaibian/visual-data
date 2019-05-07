<template>
    <div class="current-time-box"><svg-icon :icon-class="'timeIcon'"></svg-icon><span>{{myDate}}</span><span>{{week}}</span><span>{{hours}}</span></div>
</template>
<script>
export default {
    name:'currentTime',
    data() {
        return {
            myDate:'',
            week:'',
            hours:'',
        }
    },
    created() {
        setInterval(this.showTime,1000)
    },
    methods:{
        showTime() {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth()+1;
            let day = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let myddy = date.getDay();//获取存储当前日期
            let weekday = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
            this.week = weekday[myddy]
            // document.write("今天是：" + weekday[myddy]);
            if(day == 0){
                day == '日';
            }
            if(seconds < 10){
                seconds = `0${seconds}`
            }
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            if (hours < 10) {
                hours = `0${hours}`
            }
            // let time = `${year}年${month}月${day}日${hours}时${minutes}分${seconds}秒`
            let time = `${year}年${month}月${day}日`
            this.hours = `${hours}:${minutes}`
            this.myDate = time;
        }
    }    
}
</script>
<style lang="scss" scoped>
.current-time-box{
    //border-radius:2.5vw;
    //overflow:hidden;
    //background:rgba(3,55,83,0.8);
    box-sizing:border-box;
    color:#fff;
    font-size:0;
    span{
        font-size:14px;
        color:#fff;
    }
}
</style>