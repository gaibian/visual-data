<template>
    <div class="abnormal-page">
        <!--轮播实现滚动-->
        <div class="carousel-box">
            <div class="carousel">
                <div class="car-item">
                    <div class="title">070 浙B3360X 30号车</div>
                    <ul>
                        <li>
                            <i></i>
                            上下担架车在位<span>异常</span>
                        </li>
                        <li>
                            <i></i>
                            上下担架车在位<span>异常</span>
                        </li>
                        <li>
                            <i></i>
                            上下担架车在位<span>异常</span>
                        </li>
                    </ul>
                </div>
                <div class="car-item">
                    <div class="title">070 浙B3360X 30号车</div>
                    <ul>
                        <li>
                            <i></i>
                            上下担架车在位<span>异常</span>
                        </li>
                        <li>
                            <i></i>
                            上下担架车在位<span>异常</span>
                        </li>
                        <li>
                            <i></i>
                            上下担架车在位<span>异常</span>
                        </li>
                    </ul>
                </div>
                <div class="car-item">
                    <div class="title">070 浙B3360X 30号车</div>
                    <ul>
                        <li>
                            <i></i>
                            上下担架车在位<span>异常</span>
                        </li>
                        <li>
                            <i></i>
                            上下担架车在位<span>异常</span>
                        </li>
                        <li>
                            <i></i>
                            上下担架车在位<span>异常</span>
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
        return {}
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
        padding:0 20px;
        box-sizing:border-box;
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
                    color:#fff;
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
                        color:#fff;
                        padding-left:16px;
                        box-sizing:border-box;
                        margin:12px 0;
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