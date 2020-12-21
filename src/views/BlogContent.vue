<template>
  <div>
    <blog-head></blog-head>
    <blog-left-type></blog-left-type>
    <div id="BlogContent">
      <div style="display: flex;">
        <div id="Carousel1">
          <el-carousel :interval="4000" type="card" height="220px">
            <el-carousel-item :key="0">
              <img src="../../static/img/2020-2-26_0.png" class="CarouselImg" />
            </el-carousel-item>
            <el-carousel-item :key="1">
              <img src="../../static/img/2020-2-26_1.png" class="CarouselImg" />
            </el-carousel-item>
            <el-carousel-item :key="2">
              <img src="../../static/img/2020-2-26_2.png" class="CarouselImg" />
            </el-carousel-item>
            <el-carousel-item :key="3">
              <img src="../../static/img/1001182.jpg" class="CarouselImg" />
            </el-carousel-item>
            <el-carousel-item :key="4">
              <img src="../../static/img/1001455.jpg" class="CarouselImg" />
            </el-carousel-item>
            <el-carousel-item :key="5">
              <img src="../../static/img/1001704.jpg" class="CarouselImg" />
            </el-carousel-item>
          </el-carousel>
        </div>

        <div id="Carousel2">
          <el-carousel height="250px">
            <el-carousel-item :key="0">
              <img src="../../static/img/2020-2-26_0.png" alt class="CarouselImg" />
            </el-carousel-item>
            <el-carousel-item :key="1">
              <img src="../../static/img/2020-2-26_1.png" alt class="CarouselImg" />
            </el-carousel-item>
            <el-carousel-item :key="2">
              <img src="../../static/img/2020-2-26_2.png" alt class="CarouselImg" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <div style="display: flex;" id="contentAll">
        <div id="contentAll_0">
           <!-- <div > -->
            <el-alert id="newMsg"
                title="你有一条新消息"
                type="success"
                effect="dark">
              </el-alert>
            <!-- </div> -->
            <!-- <div > -->
              <!-- 博客文章列表 -->
              <ul id="BlogList">
                 <li class="list_item" v-for="item in 5" :key="item">
                  <!-- 标题 -->
                    <div class="title">
                      <span class="tui">荐</span>
                      <span class="title_c">标题</span>
                      <!-- <div></div> -->
                    </div>

                    <!-- 摘要 -->
                    <div class="summary">
                      我是摘要哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
                    </div>

                    <!--创建人和点赞观看  -->
                    <dl class="list_userbar" style="display: flex;justify-content:space-between;">
                      <div style="display: flex;width:30%;">
                        <!-- <div>头像</div> -->
                        <img class="list_userbar_head" src="../../static/img/head.jpg" alt="">
                        <div class="nic" style="margin-left:5%;">毅大师</div>
                      </div>
                      
                      <div class="interactive">
                        <dt>
                          <i class="el-icon-thumb"></i>
                          <span>999</span>
                        </dt>
                        <dt>
                          <i class="el-icon-view"></i>
                          <span>999</span>
                        </dt>
                        <dt>
                          <i class="el-icon-chat-dot-round"></i>
                          <span>999</span>
                        </dt>
                      </div>
                    </dl>
                </li>
                <!-- <li class="list_item">

                </li>
                <li class="list_item">

                </li> -->
              </ul>
            <!-- </div> -->
        </div>
        <!-- 右侧每日推荐 -->
        <div id="recommend">
          <div class="recommend_title">
            <span class="recommend_title_icon"></span>
            <span>每日推荐</span>
          </div>

          <div class="recommend_list">
              <ul>
                <li class="recommend_list_one" v-for="item in 5" :key="item">
                  <img class="recommend_list_one_img" src="../../static/img/head.jpg" alt="">
                  <div class="recommend_list_one_title">标题哈哈哈哈哈标题哈哈哈哈啊哈哈哈哈哈哈或或或哈哈哈哈哈或或或</div>
                </li>
              </ul>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
import BlogHead from "./BlogHead";
import BlogLeftType from "./BlogLeftType";

export default {
  name: "BlogContent",
  data() {
    return {};
  },
  components: { BlogHead, BlogLeftType },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
#BlogContent {
  height: 3000px;
  width: 75%;
  /* position: fixed; */
  border: 1px solid black;
  list-style: none;
  margin-left: 18%;
  margin-top: 1%;
  -webkit-box-shadow: #666 0px 0px 10px;
  -moz-box-shadow: #666 0px 0px 10px;
  box-shadow: #666 0px 0px 10px;
  background: rgb(245,246,247);
}

#Carousel1 {
  height: 250px;
  width: 69%;
  border: 1px solid red;
  background-color: rgb(245,246,247);
}

#contentAll{
 width: 100%;
 height: 100%;
 /* background-color: blue; */
 margin-top: 1%;
}
#contentAll_0{
  width: 69%;
  /* background-color:brown; */
}
#newMsg{
  width: 100%;
  height: 30px;
  /* background-color: aqua; */
  /* border: 1px solid blue; */
  margin-bottom: 1%;
}
#recommend{
  width: 29%;
  margin-left: 2%;
  /* background-color: coral; */
  border: 1px solid blue;
}
#Carousel2 {
  height: 250px;
  width: 29%;
  border: 1px solid blue;
  margin-left: 2%;
}
#BlogList {
  height: 100%;
  width: 100%;
  border: 1px solid green;
  /* height: 30px; */
  /* background-color: aqua; */
  /* margin-top: 1%; */
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.CarouselImg {
  width: 100%;
  height: 100%;
}

.list_item{
  /* background: #99a9bf; */
  list-style: none;
  border: 1px solid black;
  /* width: 100%; */
  height: 100px;
  margin-bottom: 1%;
  position: relative;
  padding-left: 3%;
  padding-top: 1%;
}
.title{
  font-size: 20px;
  font-weight: 600;
}
.tui{
  display: inline-block;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: 1px solid #ca0c16;
    font-size: 14px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-weight: 500;
    text-align: center;
    color: #ca0c16;
    line-height: 24px;
    /* margin-right: 2px; */
    /* margin-top: 3px; */
}
.title_c:hover{
  color: rgb(202,12,22);
  cursor: pointer;
}
.summary{
  color: #8a8a8a;
  font-size: 15px;
  height: 30%;
  line-height: 200%;
}
.list_userbar{
  margin: 0;
}
.nic:hover{
  cursor: pointer;
  color: rgb(21,125,207);
}
.list_userbar_head:hover{
  cursor: pointer;
}
.list_userbar dt{
  margin: 0;
}
.list_userbar dt dd{
  margin: 0;
}
.list_userbar_head{
  border-radius:50%;
  height: 25px;
  width: 25px;
}
.interactive{
display: flex;
/* margin-right: 5%; */
width: 40%;
justify-content:flex-end;
}
.interactive dt{
  margin-right: 7%;
  font-size: 13px;
}
.interactive dt:hover{
  color: rgb(21,125,207);
  cursor: pointer;
}
.recommend_title{
  margin-top: 3%;
  margin-left: 3%;
  font-size: 20px;
  /* font-weight: 600; */
  margin-bottom: 2%;
}
.recommend_title .recommend_title_icon{
  display: block;
     float: left;
    width: 5px;
    height: 25px;
    background: #cf2730;
    overflow: hidden;
    margin-right: 5px;
}
.recommend_list_one{
  width: 100%;
  height: 50px;
  list-style: none;
  display: flex;
  margin-bottom: 2%;
  margin-left: 2%;
}
.recommend_list_one_img{
  width: 20%;
  height: 90%;
}
.recommend_list_one_title{
  font-size: 14px;
  font-weight: bold;
  color: #3d3d3d;
  line-height: 150%;
}
</style>
