<template>
  <div class=''>
      <blog-head></blog-head>
      <div class="cont">
          <!-- BlogsUserLeft -->
          <blogs-user-left></blogs-user-left>
<!--        <el-button @click="show2 = !show2">Click Me</el-button>-->
<!--          <div class="blog_list">-->
        <transition name="el-zoom-in-top">
        <el-card class="box-card blog_list" v-show="show2">

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
                    <li v-for="item in list" :key="item.articleUuid">
                        <div class="article_list_one">
                            <div class="article_list_one_title">
                                <span class="yc">{{item.vocTypeName}}</span>
<!--                              <router-link :to="'/user/BlogsLook?id='+item.articleUuid" target="_blank" tag="div" class="router-link-active">-->
                                <span class="bt" @click="lookBlogs(item.articleUuid)" >{{item.title}}</span>
<!--                              </router-link>-->
<!---->
                                </div>
                            <div class="article_list_one_zhaiyao" @click="lookBlogs(item.articleUuid)">{{item.content|contentFilter|absFilter}}</div>
                            <div class="article_list_one_caozuo">
                                <div class="caozuo_time">
                                    <span class="caozuo_num caozuo_time">{{item.createTime|momentFilters}}</span>
                                    <span class="shuxian"></span>
                                    <span class="caozuo_num">阅读数
                                        <span class="num">{{item.readNum}}</span>
                                    </span>
                                    <span class="shuxian"></span>
                                    <span class="caozuo_num">评论数
                                        <span class="num">{{item.commentNum}}</span>
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
                  <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="total"
                    :current-page="page"
                    :page-size="pageSize"
                    @current-change="currentChange">
                  </el-pagination>
                </el-button-group>


              </div>




            </el-card>
        </transition>
<!--          </div>-->





      </div>
  </div>
</template>

<script>
import BlogHead from "../BlogHead";
import BlogsUserLeft from "./BlogsUserLeft";
import https from '@/api/https'
export default {
  name: 'MyBlogsList',
  data(){
    return {
        checked:false,

        list:[],//列表数据
        /**分页数据*/
        page:1,
        pageSize:10,
        total:0,

      show2: false,
    }
  },
  components: {BlogHead,BlogsUserLeft},
  created(){
    this.init();
  },
  mounted(){},
  filters: {
    contentFilter: function (value) {
      let s=value.replace(/<[^>]+>/g, "").replace("&nbsp;","");
      // s=s.substring(0,50)+"..."
      return s;
    },
    absFilter:function (value) {
      let size=130;
      return value.length>size?value.substring(0,size)+"...":value;
    },
    // createTimeFilter:function (value) {
    //   return this.$moment(a.createTime).format("YYYY-DD-MM HH:mm:ss");
    // },
  },
  methods: {
    init(){
      let queryParam={
        page:this.page,
        pageSize:this.pageSize
      }
      https.fetchGet('/spring-cloud-common/myBlogs/myBlogsList/getList',queryParam).then((res) => {
        if(res.success){
          let data=res.data
          console.log(data);
          this.list=data.list;
          this.total=data.total;
          this.show2=true;

        }else{
          this.show2=true;
        }

      }).catch(err=>{
        console.log(err)
      })

    },
    emoveTAG(str){
      let s=str.replace(/<[^>]+>/g, "").replace("&nbsp;","");
      s=s.substring(0,50)+"..."
      return s;
    },
    //   查看博客
      lookBlogs(id){
        window.open('/#/user/BlogsLook?articleId='+id,'_blank')
      },
    currentChange(page){
    this.page=page;
    this.init();
    },
  }
}
</script>
<style scoped>
  a{
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }
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
  /*.box-card{*/
  /*  margin-bottom: 10px;*/
  /*}*/
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
    /*border: 1px solid green;*/
    margin-left: 1%;
    display: flex;
    flex-direction:column;
    background-color: #ffffff;
}
.list_head{
    width: 100%;
    height: 50px;
    /*border: 1px solid black;*/
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
    /*border: 1px solid blue;*/
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
