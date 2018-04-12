<template>
<article class="about" id="step1">
      <!--海报-->
      <section class="banner container-fluid">
            <img src="../../../static/img/about-bg.jpg" alt="">
            <div class="title">
              <p class="p1">COMPANY</p>
              <p class="p2">把你的梦想带入生活</p>
            </div>
      </section>
      <!--列表介绍-->
      <section class="info-list">
          <div class="container-fluid">
            <div class="item  bx">
                  <div class="font">
                    <div>
                      <div class="title">我们是一家全球化多元化的综合新型公司 </div>
                      <p>你想到的，你想不到的；你知道的，你不知道的，我们都在做。 </p>
                      <p>我们永远站在科技的尖端，做着普罗大众无法理解的事业。我们绝对不以第二阿里巴巴为目标，我们要创造全新的巅峰。</p>
                    </div>
                  </div>
                  <div class="img">
                      <img src="../../../static/img/about-list1.png" alt="">
                  </div>
            </div>
          </div>
          <div class="container-fluid" style="background:#fff;">
            <div class="item  bx">
                  <div class="img">
                      <img src="../../../static/img/about-list2.png" alt="">
                  </div>
                  <div class="font">
                    <div>
                      <div class="title">公司主要业务板块 </div>
                      <p>手游项目（繁中、英文市场），专注于全方位的休闲类棋牌类游戏，棋牌+RPG+养成+经营，值得你拥有。 </p>
                      <p> 互联网项目，专注打造、经营全球新兴业务网站。</p>
                      <p> 软件开发项目，专注打造、经营全球新兴业务软件。</p>
                    </div>
                  </div>
            </div>
          </div>
          <div class="container-fluid">
            <div class="item  bx">
                  <div class="font">
                    <div>
                      <div class="title">公司经营理念 </div>
                      <p>我们放眼全球，以港台、欧美为主市场，立足于广州，开拓全世界。  </p>
                      <p>我们是一个充满活力及热情的公司，秉持着人性化的管理，重视人才培养，注重团队合作精神！</p>
                      <p>我们追求工作效率，注重项目的合理安排，不提倡不建议增加额外工作时间。不加班才是我们的常态！</p>
                    </div>
                  </div>
                  <div class="img">
                      <img src="../../../static/img/about-list3.png" alt="">
                  </div>
            </div>
          </div>
      </section>
      <!--办公环境-->
      <section class="office">
          <div class="title">办公环境</div>
          <div class="photo"><img src="../../../static/img/office.png" alt=""></div>
      </section>
   <!--地址-->
    <div class="address clearfix ">
        <div class="map" style="font-size:25px;text-align:center">
            使用指定地圖 API
            <div class="address-info bx">
                  <div class="txt-box">
                    <h2>聯絡我們</h2>
                    <p><i class="fa fa-phone"></i> 電話號碼：020-52888585</p>
                    <p><i class="fa fa-envelope email"></i> 電郵地址：admin@touch.com</p>
                    <p><i class="fa fa-map-marker"></i> 公司地址：廣東省廣州市天河區津濱騰越大廈</p>
                  </div>
            </div>
        </div>
    </div>
</article>

</template>

<script>
  export default {
    name: 'join-us',
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .about {
    max-width:1920px;
    margin:0 auto;
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
    // 详情列表
    .info-list {
      &>.container-fluid {
         background-color: #f6f6f6;
      }
      .item {
          display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
          box-sizing: border-box;
          min-height:600px;
          align-items:center;
          .font { 
            height:100%;
            padding:25px;
            color:#6d6d6d;
            .title {
              font-size:20px;
              padding-bottom:22px;
              color:#474747;
              font-weight:700;
              &:after {
                 display:block;
                 content:'';
                 height:3px;
                 width:70px;
                 background-color: #ff9c26;
                 margin-top:12px;
              }

            }

          }
          .img {
            padding:5%;
            padding-left:0;
          }
          &>div {
            flex:1;
          }
          // 适配ipad
          @media screen and (min-width:500px) and (max-width:992px){
              min-height:300px;
          }
          // 适配手机
          @media screen and (max-width:500px){
              min-height:400px;
              flex-wrap:wrap;
              &>div {
                flex-basis:100%;
                width:100%;
              }
              .img {
                padding:0 12% 5%;
              }
              .font {
                padding:5%;
                font-size:12px;
                .title {
                  font-size:17px;
                }
              }
          }
      }
    }
    // 办公环境
    .office {
            .title {
              margin:0 auto;
              text-align: center;
              max-width:414px;
              font-size:20px;
              font-weight:700;
              height:110px;
              line-height: 110px;
              // padding-bottom:22px;
              color:#474747;
              &:after {
                 margin:0 auto;
                 display:block;
                 content:'';
                 height:3px;
                 width:70px;
                 background-color: #ff9c26;
                 margin-top:-28px;
              }

            }
            .photo {
              margin-bottom:20px;
            }
    }

    .address {
      background-color: #aaa;
      position: relative;
      .map {
        height:510px;
        background-color: yellow;
        width:100%;
          .address-info {
            text-align: left;
            z-index:9999;
            overflow: hidden;
              .txt-box {
                max-width:370px;
                height:315px;
                background-color: #ffffff;
                margin-top:50px;
                padding:44px;
                // padding-top:28px;
                h2 {
                  font-size:22px;
                  height:60px;
                  line-height: 60px;
                  margin-bottom:14px;
                  &:after {
                    content:'';
                    display:block;
                    height:3px;
                    width:50px;
                    background-color: #ff9b25;
                  }
                }
                p {
                  font-size:13px;
                  height:30px;
                  line-height: 30px;
                  color:#989898;
                  i.email {
                    margin-right:2px;
                  }
                  i {
                    color:#ff9b25;
                    margin-right:5px;
                  }
                }
              }
          }
      }
    }
  }
</style>
