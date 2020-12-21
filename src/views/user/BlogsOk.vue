<template>
  <div class="BlogsOk">
     <blog-head></blog-head>
    <div class="content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
<!--          <span>《管理我的博客</span>-->
          <el-button style="float: left; padding: 3px 0" type="text" @click="toMyBlogsList"><<管理我的博客</el-button>
          <el-button style="float: right; padding: 3px 0" type="text" @click="lookBlogs(articleId)">查看博客>></el-button>
        </div>
        <div class="text item text_item">
          <div class="tit_abs">
            <div class="tit_abs_inn">
              <div class="title">{{title|titleFilter}}</div>
              <p class="abs">{{abs|contentFilter|absFilter}}</p>
            </div>
          </div>
          <div class="fx">
            <div>一键分享到：</div>
            <i class="icon_demo">
              <img src="/static/img/qq2.png">
            </i>
            <i class="icon_demo">
              <img src="/static/img/wechat.png">
            </i>
            <i class="icon_demo">
              <img src="/static/img/qzone.png">
            </i>
          </div>

        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import BlogHead from "../BlogHead";

  export default {
    name: "BlogsOk",
    data() {
      return {
        param:this.$route.params,
        query:this.$route.query,

        title:this.$route.params.title,
        abs:this.$route.params.content,

        articleId:this.$route.params.uuid,


      };
    },
    filters: {
      titleFilter: function (value) {
        let size=20;
        return value.length>size?value.substring(0,size)+"...":value;
      },
      contentFilter: function (value) {
        let s=value.replace(/<[^>]+>/g, "").replace("&nbsp;","");
        return s;
      },
      absFilter:function (value) {
        let size=100;
        return value.length>size?value.substring(0,size)+"...":value;
      },
    },
    components: {BlogHead},
    created() {
      this.init();
    },
    mounted() {},
    methods: {
      init(){
        console.log(this.param.uuid);
        if(typeof this.param.uuid ==='undefined'){
          this.$router.push({name:'MyBlogsList'});
        }
        // console.log(this.query);
      },
      lookBlogs(id){
        // window.open('/#/user/BlogsLook?articleId='+id,'_blank');
        this.$router.push({path:'/user/BlogsLook?articleId='+id});
      },
      toMyBlogsList(){
        this.$router.push({name:'MyBlogsList'});
      },
    }
  };
</script>

<style scoped>
.content{
  width: 200px;
  height: 200px;
  position:absolute;left:40%;transform:translateX(-50%);top:40%;transform:translateY(-50%)

}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
.text_item{
  display: flex;
  flex-direction:column;
  justify-content:center;
}
.look_article{
  display: flex;
  justify-content:center;
  margin-top: 3px;
}
.fx{
  margin-top: 3px;
  display: flex;
  justify-content:center;
  align-items:center;
}
.tit_abs{
 width: 100%;
  background-color: rgb(245,246,247);

}
.tit_abs_inn{
  width: 95%;
  margin:auto;
  margin-top: 5px;
}
.title{
  font-weight: bold;
  font-size: 18px;
  color: #3d3d3d;
}
.abs{
  font-size: 14px;
  color: #6b6b6b;
  /*margin-top: 5px;*/
  text-indent:29px;
}
.icon_demo{
  margin-right: 6px;
}
.icon_demo img{
  width: 30px;
  height: 30px;
}
</style>
