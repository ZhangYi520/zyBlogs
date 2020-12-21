<template>
  <div class=''>
      <div class="left">
        <el-card class="box-card">
            <!-- 个人信息 -->
            <div class="user_msg">
                <div class="head_img">
                    <!-- <div > -->
                        <img class="head_img_tx" src="../../../static/img/head.jpg" alt="">
                    <!-- </div> -->
                    <div class="head_img_name">
                        <div class="nc">毅大师</div>
                        <div class="grzy">TA的个人主页></div>
                    </div>
                </div>
                <div class="count">
                    <div class="count_div">
                        <dl>
                            <dt>原创</dt>
                            <dt class="count_div_num">999</dt>
                        </dl>
                        <dl>
                            <dt>粉丝</dt>
                            <dt class="count_div_num">999</dt>
                        </dl>
                        <dl>
                            <dt>获赞</dt>
                            <dt class="count_div_num">999</dt>
                        </dl>
                        <dl>
                            <dt>评论</dt>
                            <dt class="count_div_num">999</dt>
                        </dl>
                        <dl>
                            <dt>访问</dt>
                            <dt class="count_div_num">999</dt>
                        </dl>
                    </div>
                </div>
                <div class="ranking">
                    <div class="ranking_div">
                        <div class="ranking_div_dl">
                            <div class="ranking_div_dt">等级:</div>
                            <div class="ranking_div_dd">999</div>
                        </div>
                        <div class="ranking_div_dl">
                            <div class="ranking_div_dt">周排名:</div>
                            <div class="ranking_div_dd">999+</div>
                        </div>
                        <div class="ranking_div_dl">
                            <div class="ranking_div_dt">积分:</div>
                            <div class="ranking_div_dd">999</div>
                        </div>
                        <div class="ranking_div_dl">
                            <div class="ranking_div_dt">总排名:</div>
                            <div class="ranking_div_dd">999+</div>
                        </div>
                    </div>
                </div>
                <!-- <div></div> -->
            </div>
<!--            &lt;!&ndash; 最新文章 &ndash;&gt;-->
<!--            <div class="new_article">2</div>-->
<!--            &lt;!&ndash; 分类 &ndash;&gt;-->
<!--            <div class="classify">3</div>-->
<!--            &lt;!&ndash; 归档 &ndash;&gt;-->
<!--            <div class="pigeonhole">4</div>-->


        </el-card>

        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>

        <el-card class="box-card">
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
          </div>
  </div>
</template>

<script>
export default {
  name: 'BlogsUserLeft',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped>
.left{
    width: 300px;
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction:column;
    /* background-color: #ffffff; */
}
/* .user_msg{

} */
.new_article{
    width: 100%;
    margin-bottom: 1%;
    /* border: 1px solid blue; */
    background-color: #ffffff;
}
.classify{
    width: 100%;
    margin-bottom: 1%;
    /* border: 1px solid blue; */
    background-color: #ffffff;
}
.pigeonhole{
    width: 100%;
    margin-bottom: 1%;
    /* border: 1px solid blue; */
    background-color: #ffffff;
}
.user_msg{
    height: 250px;
    width: 100%;
    display: flex;
    flex-direction:column;
      /* width: 100%; */
    margin-bottom: 1%;
    /* border: 1px solid blue; */
    background-color: #ffffff;
}
.head_img{
    width: 100%;
    height: 30%;
    display: flex;
    align-items:center;
    border-bottom:1px solid rgb(224,224,224);
}
.head_img_tx{
    width: 50px;
    height: 50px;
    margin-left: 8%;
}
.head_img_tx:hover{
    cursor:pointer;
}
.head_img_name{
    margin-left: 3%;
}
.head_img_name div{
    margin-top: 5%;
    font-size: 13px;
}
.nc:hover{
    cursor:pointer;
}
.grzy:hover{
    cursor:pointer;
}
.grzy{
    color: rgb(51,153,234);
}
.count{
    width: 100%;
    height: 30%;
    /* padding: 6px 10px; */
    display: flex;
    align-items:center;
    justify-content:center;
    border-bottom:1px solid rgb(224,224,224);
}

.count_div{
    width: 80%;
    height: 80%;
    display: flex;
    align-items:center;
    justify-content:space-between;
}
.count_div dl dt{
    font-size: 14px;
}
.count_div_num{
    font-weight: bold;
    margin-top: 3px;
}
.ranking{
    width: 100%;
    height: 30%;
    display: flex;
    align-items:center;
    justify-content:center;
}
.ranking_div{
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
}
.ranking_div .ranking_div_dl{
    width: 49%;
    height: 49%;
    /* border: 1px solid black; */
    display: flex;
}
.ranking_div_dt{
    width: 45%;
    display: flex;
    align-items:center;
    justify-content:center;
    font-size: 14px;
}
.ranking_div_dd{
    width: 65%;
     display: flex;
    align-items:center;
    /* justify-content:center; */
    margin-left: 1%;
    font-size: 14px;
    font-weight: bold;
}
.new_article{
    height: 250px;
}
.classify{
    height: 300px;
}
.pigeonhole{
    height: 350px;
}


</style>
