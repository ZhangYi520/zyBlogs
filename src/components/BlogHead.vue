<template>
  <div>
    <div id="BlogHead">
      <div class="top-head" style="display: flex;">
        <!-- 我是头部文件的显示的内容，随着下边文件内容的增多，我是不会变得，我就固定在这个位置了 -->
        <div id="logo" style="display: flex;width:20%;justify-content: center;align-items: center;">
          <img src="../../static/img/logo.png" alt style="width:18%;" />
        </div>

        <div style="display: flex;width:25%;">
          <ul id="ul1" style="display: flex;width:100%;">
            <li @click="toHomePage">首页</li>
            <li>博客</li>
            <li>论坛</li>
            <li>问答</li>
            <li>资源</li>
          </ul>
        </div>
        <div style="width:30%;display: flex;">
          <!-- <input type="text" style="width:100%;height:50%;background-color:rgb(245,246,247);" /> -->
          <el-input
            style="width:100%;height:50%;background-color:rgb(245,246,247);"
            placeholder="输入文章"
          ></el-input>
          <!-- <span style="z-index:10;">123</span> -->
        </div>
        <div style="display: flex;width:25%;">
          <ul id="ul2">
            <li class="ul2_write_blogs" @click="toMyBlogsWrite">
              <img src="../../static/img/csdn-write.png" alt="">
              <span>写博客</span>
            
            </li>
            <li class="ul2_user" 
                @mouseover="mouseOver"
                @mouseleave="mouseLeave"
               >
               <!--  
                 @mouseover="mouseOver"
                @mouseleave="mouseLeave"
                 -->
              <!-- <div>登录</div> -->
              <img
                @mouseover="mouseOver"
                @mouseleave="mouseLeave"
                class="ul2_user_img"
                src="../../static/img/head.jpg"
                alt
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ul2_user_controller" 
          v-show="ul2UserControllerShow"
         >
      <!-- @mouseover="mouseOver"
                @mouseleave="mouseLeave" -->
      <ul  @mouseover="userControllerOver"
          @mouseleave="userControllerLeave">
        <li>
          <i class="el-icon-folder"></i>&nbsp;&nbsp;我的关注
        </li>
        <li>
          <i class="el-icon-star-off"></i>&nbsp;&nbsp;我的收藏
        </li>
        <li>
          <i class="el-icon-user"></i>&nbsp;&nbsp;个人中心
        </li>
        <li style="border-bottom:1px solid rgb(224,224,224);">
          <i class="el-icon-setting"></i>&nbsp;&nbsp;账号设置
        </li>
        <li @click="toMyBlogsList">
          <i class="el-icon-folder-opened" ></i>&nbsp;&nbsp;我的博客
        </li>
        <li>
          <i class="el-icon-suitcase"></i>&nbsp;&nbsp;管理博客
        </li>
        <li>
          <i class="el-icon-position"></i>&nbsp;&nbsp;我的学院
        </li>
        <li style="border-bottom:1px solid rgb(224,224,224);">
          <i class="el-icon-download"></i>&nbsp;&nbsp;我的下载
        </li>
        <li>
          <i class="el-icon-coin"></i>&nbsp;&nbsp;我的C币
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogHead",
  data() {
    return {
      ul2UserControllerMouse: false,//是否移入头像
      ul2UserMouse:false,//是否移入操作列表
      ul2UserControllerShow:false,//操作列表是否显示
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    // 移入
    mouseOver() {
      this.ul2UserControllerMouse=true;
      this.ul2UserControllerShow=true;
    },
    // 移出
    mouseLeave() {
      this.ul2UserControllerMouse=false;
      this.ul2UserControllerShow=false;
    },
    userControllerOver(){
     this.ul2UserMouse=true;
     this.ul2UserControllerShow=true;
    },
    userControllerLeave(){
      this.ul2UserMouse=false;
      this.ul2UserControllerShow=false;
    },
    // 我的博客
    toMyBlogsList(){
      // alert(1);
      // this.$router.push({ path:'/user/MyBlogsList'})
      window.open('/#/user/MyBlogsList','_blank')
    },
    // 首页
    toHomePage(){
      this.$router.push({ path:'/'})
    },
    // 写博客
    toMyBlogsWrite(){
      window.open('/#/user/MyBlogsWrite','_blank')
    }
  }
};
</script>
<style>
#BlogHead {
  height: 60px;
}

.top-head {
  position: fixed;
  width: 100%;
  height: auto;
  background: #ffffff;
  overflow-y: auto;
  min-height: 60px;
  line-height: 60px;
  margin-top: 0;
  /* margin-bottom: 60px; */
  -webkit-box-shadow: #666 0px 0px 10px;
  -moz-box-shadow: #666 0px 0px 10px;
  box-shadow: #666 0px 0px 10px;
  background: #ffffff;
  z-index: 10;
}
.container {
  padding-top: 60px;
}
ul {
  margin: 0;
  padding: 0;
}
.top-head #ul1 li {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 20%;
  height: 100%;
  text-align: center;
  line-height: 60px;
  color: #000000;
}
#ul1 li:hover{
  color: rgb(34, 36, 41);
  background-color: rgb(240, 241, 242);
  cursor: pointer;
}
#ul2{
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 10%;
  /* padding-right: 5px; */
}
.ul2_write_blogs{
  /* display: block;  */
  list-style: none;
  color: rgb(217, 46, 46);
  width: 28%;
  text-align: center;
  display: flex;
  /* background-color: rgb(255, 242, 240); */
}
.ul2_write_blogs img{
  /* float: left; */
  width: 20px;
  height: 20px;
  display: flex;
  /* width: 20%; */
  justify-content: center;
  align-items: center;
  /* width: 70%; */
  margin-top: 20px;
  margin-right: 3px;
}
.ul2_write_blogs:hover{
  background-color: rgb(255, 242, 240);
  cursor: pointer;
}

.ul2_user {
  height: 100%;
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
.ul2_user_img {
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  width: 70%;
}
.ul2_user:hover{
  cursor: pointer;
}
.ul2_user_controller {
  display: flex;
  position: fixed;
  background-color: #ffffff;
  /* position: absolute; */
  width: 10%;
  height: 380px;
  margin-left: 87%;
  /* margin-top: 5%; */
  z-index: 10;
  /* justify-content:flex-end; */
  /* display:none; */
}
.ul2_user_controller ul {
  width: 100%;
}
.ul2_user_controller ul li {
  width: 100%;
  height: 40px;
  /* margin-top: 5%; */
  text-align: center;
  line-height: 250%;
  font-size: 90%;
  color: #413e3e;
  list-style: none;
}
.ul2_user_controller ul li:hover{
  cursor: pointer;
  background-color: rgb(240,241,242);
}
</style>
