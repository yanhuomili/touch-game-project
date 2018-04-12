<template>
  <article class="careers">
      <!--海报-->
      <section class="banner container-fluid">
            <img src="../../../static/img/join-bg.jpg" alt="">
            <div class="title">
              <p class="p1">CAREERS</p>
              <p class="p2">追梦路上，有你同行</p>
            </div>
      </section>

    <!--招聘标题-->
    <section class="job">
      <div class="title text-center">
        <h3 class="text-center">最新招聘信息</h3>
      </div>
    </section>

    <div class="container">
      <!--招聘列表-->
      <div class="job-list" v-for="v in 5">
          <div class="j-header clearfix" @click="toggleShow($event)">
              <div class="pull-left job-name">
                  <p>美术指导</p>
                  <p>Art Director</p>
                  <p class="info">
                    <span class="s1">部门：设计部</span> 招聘人数：<span class="s2">1人</span></p>
              </div>
              <div class="pull-right arrow"><i class="glyphicon glyphicon-menu-down"></i></div>
          </div>
          <div class="content" style="display:none">
                <p>职位描述：</p>
                <ul>
                  <li>1、负责根据需求实现游戏的逻辑规则</li>
                  <li>2、负责与前端开发人员沟通，完成游戏逻辑与交互设计等工作</li>
                  <li>3、负责对项目存在的问题进行快速定位和优化</li>
                  <li>4、负责开发运营支撑工具</li>
                  <li>5、负责上级交办的其他相关工作</li>
                </ul>
                <p>岗位要求：</p>
                <ul>
                  <li>1、熟练掌握Javascript，熟悉ES6规范，熟悉Node.js标准库的使用，能完成相应的扩展开发；</li>
                  <li>2、对socket有一定的了解；</li>
                  <li>3、熟悉mysql数据库，Git管理代码的优先；</li>
                  <li>4、有良好的学习能力，有独立设计算法、解决程序问题的能力；</li>
                  <li>5、有良好的团队意识，善于与他人沟通合作，熟悉快速开发流程的优先考虑。</li>
                </ul>
          </div>
      </div>

    </div>
  </article>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: 0,
        invite:{
          first_card:{
            sketch:[],
            particulars:[]
          }
        }
      }
    },
    methods:{
        toggleShow(event){
            let currentTarget = event.currentTarget;
            $(currentTarget).next().slideToggle();
            
        }
    },
    mounted(){
        this.toggleShow();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .careers {
    .orange {
      color: #ff9d01;
    }
		// 海报
		.banner {
			padding:0;
			position: relative;
      background-color: #2b292a;
      img {
        display:block;
        margin:0 auto;
        max-width:1920px;
      }
			.title {
				position: absolute;
				text-align: center;
				top:50%;
				left:50%;
				transform:translate(-50%,-50%);
				color:#fff;
				font-size:38px;
				.p2 {
					font-size:24px;
				}
				@media screen and (max-width:767px){
					font-size:4vw;
					.p2 {
						font-size:3vw;
					}
				}
			 }
		}
    // 招聘标题
    .job {
      .title {
        padding: 75px 0 60px;
        border-bottom: 1px solid #eee;
        h3 {
          text-align: center;
          padding-bottom: 25px;
          font-size: 30px;
          position: relative;
          &:after {
            content: "";
            width: 80px;
            height: 3px;
            background: #ff9a24;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
      // 适配手机
      @media screen and (max-width:414px) {
        .title{
          padding: 25px 0 10px;
        }
        .title h3 {
          font-size:22px;
        }
      }
    }
    // 招聘列表
    .job-list {
          padding-bottom:22px;
          padding-top:10px;
          border-bottom:1px solid #e7e7e7;
        .j-header {
          color:#444444;
          cursor:pointer;
           .job-name {
              font-size:22px;
              p.info {
                font-size:15px;
                span.s1 {
                   padding-right:20px;
                }
                span.s2 {
                   color:#fb9934;
                }
              }
           }
           .arrow {
              font-size:30px;
              color:#696969;
           }
           
        }
        .content {
          overflow: hidden;
           p {
             margin-top:12px;
           }
        }
        // 适配手机
        @media screen and (max-width:414px) {
           .j-header .job-name {
              font-size:16px;
                p.info {
                  font-size:12px;
                }
            }
           .j-header .arrow {
              font-size:20px;
           }
        }
    }
    

  }
</style>
