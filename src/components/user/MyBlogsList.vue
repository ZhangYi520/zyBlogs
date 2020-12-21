<template>
  <div class=''>
      <blog-head></blog-head>
      <div class="cont">
          <!-- BlogsUserLeft -->
          <blogs-user-left></blogs-user-left>
          
          <div class="blog_list">
              <div class="list_head">
                  <div class="bxx">
                      <el-checkbox v-model="checked">只看原创</el-checkbox>
                  </div>
                  <!-- <div class=""> -->
                      <ul class="list_head_type">
                          <li class="list_head_type_0">排序:</li>
                          <li class="list_head_type_1">默认</li>
                          <li class="list_head_type_1">按更新时间</li>
                          <li class="list_head_type_1">按访问量</li>
                      </ul>
                  <!-- </div> -->
              </div>
              <div class="article_list">
                <ul>
                    <li v-for="item in 5" :key="item">
                        <div class="article_list_one">
                            <div class="article_list_one_title">
                                <span class="yc">原创</span>
                                <span class="bt" @click="lookBlogs">标题</span>
                                </div>
                            <div class="article_list_one_zhaiyao" @click="lookBlogs">1、安装 npm i -S element-ui 百度出来的是npm i element-ui -S，这个会出错，-S换到i后面就好了。 2、在main.js中添加 import ElementUI from 'element-ui'; import 'e...</div>
                            <div class="article_list_one_caozuo">
                                <div class="caozuo_time">
                                    <span class="caozuo_num caozuo_time">2020-3-1 15:10:54</span>
                                    <span class="shuxian"></span>
                                    <span class="caozuo_num">阅读数
                                        <span class="num">999</span>
                                    </span>
                                    <span class="shuxian"></span>
                                    <span class="caozuo_num">评论数
                                        <span class="num">999</span>
                                    </span>
                                </div>
                                <div class="caozuo_edit">
                                    <span class="caozuo_num">置顶</span>
                                    <span class="shuxian"></span>
                                    <span class="caozuo_num">编辑</span>
                                    <span class="shuxian"></span>
                                    <span class="caozuo_num_del">删除</span>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
              </div>
              <div class="pageHepl">
                <el-button-group>
                    <el-button type="primary" icon="el-icon-arrow-left" size="mini">上一页</el-button>
                    <el-button size="mini" type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
              </div>
          </div>
          
      </div>
  </div>
</template>

<script>
import BlogHead from "../BlogHead";
import BlogsUserLeft from "./BlogsUserLeft";
export default {
  name: 'MyBlogsList',
  data(){
    return {
        checked:false,
    }
  },
  components: {BlogHead,BlogsUserLeft},
  created(){},
  mounted(){},
  methods: {
    //   查看博客
      lookBlogs(){
          window.open('/#/user/BlogsLook','_blank')
      },
  }
}
</script>
<style scoped>
.cont{
    margin: auto;
    margin-top: 1%;
    width: 90%;
    /* height: 3000px; */
    /* border: 1px solid black; */
    display: flex;
    /* justify-content:center ; */
    flex-direction:row;
    background-color: rgb(245,246,247)
}
.left{
    width: 25%;
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction:column;
    background-color: #ffffff;
}
.left div{
    width: 100%;
    margin-bottom: 1%;
    border: 1px solid blue;
}
.user_msg{
    height: 250px;
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

.blog_list{
    width: 74%;
    /* height: 100%; */
    border: 1px solid green;
    margin-left: 1%;
    display: flex;
    flex-direction:column;
    background-color: #ffffff;
}
.list_head{
    width: 100%;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content:space-between;
    align-items:center;
}
.bxx{
    margin-left: 3%;
}
.article_list{
    width: 100%;
    /* height: 100%; */
    border: 1px solid blue;
}
.list_head_type{
    display: flex;
    justify-content:space-between;
    margin-right: 5%;
    width: 30%;
}
.list_head_type li{
    list-style: none;
    /* margin-right: 3%; */
    font-size: 14px;
}
.list_head_type_0{
    color: #999;
}
.list_head_type_1:hover{
    color: rgb(202,12,22);
    cursor:pointer;
}
.article_list ul li{
    list-style: none;
    width: 100%;
    height: 120px;
    /* border: 1px solid black; */
    display: flex;
    align-items:center;
    justify-content:center;
}
.article_list ul li:hover{
    background-color: rgb(245,246,247);
}
.article_list_one{
    width: 95%;
    height: 90%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction:column;
}
.article_list_one_title{
    display: flex;
    align-items:center;
    width: 100%;
    height: 25%;
    font-size: 18px;
    color: #3d3d3d;
    font-weight:bold;
    /* flex-direction: */
}
.article_list_one_title .yc{
    /* width: 30px; */
    /* height: 30px; */
    background-color: rgb(249,236,236);
    font-size: 14px;
    margin-right: 1%;
    color: rgb(202,12,22);
}
.article_list_one_title .bt:hover{
    cursor:pointer;
    color: rgb(202,12,22);
}
.article_list_one_zhaiyao{
    display: flex;
    align-items:center;
    width: 100%;
    height: 50%;
    font-size: 14px;
    color: #6b6b6b;
}
.article_list_one_zhaiyao:hover{
    cursor:pointer;
}
.article_list_one_caozuo{
    width: 100%;
    height: 25%;
    display: flex;
    align-items:center;
    justify-content:space-between;
}
.shuxian{
    background-color: #e0e0e0;
    width: 1px;
    height: 12px;
    margin-top: 4px;
    margin-left: 8px;
    margin-right: 8px;
}
.caozuo_num{
    font-size: 14px;
    /* color: #999; */
}
.caozuo_num:hover{
    cursor:pointer;
}
.caozuo_num_del:hover{
    cursor:pointer;
}
.caozuo_time{
    color: #6b6b6b;
}
.num{
    color: #3399ea;
}
.caozuo_edit{
    color: rgb(121,165,229);
}
.caozuo_num_del{
    color: rgb(202,12,22);
}
.pageHepl{
    width: 100%;
    height: 55px;;
    display: flex;
    justify-content:center;
    align-items:center;
}
</style>
