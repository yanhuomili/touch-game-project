<template>
<div class="game-list">
      <!--海报-->
      <section class="banner container-fluid">
          <img src="../../../static/img/game-bg.jpg" alt="">
		  <div class="title">
			  <p class="p1">Games</p>
			  <p class="p2">做最出色的遊戲</p>
		  </div>
      </section>
	  <!--游戏列表-->
	<section class="list container-fluid" v-for="(v,i) in initData" :style="'background:url(../../../static/img/list_bg'+(i%2)+'.png) no-repeat center top'" :key="i">
		<div class="row bx">
			<div class="col-xs-12 col-sm-3 col-md-2  col-lg-2 ">
				<!--游戏图片-->
				<div class="picture">
					<router-link :to="'/games/'+v.gameKey">
					<!--css3类名 左移入-->
					<img class="ec-bounce-in-l" :src="v.imgURL" alt="" style="border-radius: 26px;width:100%">
					</router-link>
					<!--下载数 (移动端显示)-->
					<div class="count ec-bounce-in-r">
						<img src="../../../static/img/count_box.png" alt="">
						<div class="count-box">
							<!--下载次数-->
							<div class="num">{{v.downloads}}</div>
							<div class="fonts">下载次数</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xs-12 col-sm-6 col-md-8  col-lg-8 ">
					<!--游戏说明-->
					<div class="content">
						<router-link :to="'/games/'+v.gameKey">
							<!--<p class="title"> 鋤大D大亨-最刺激的策略棋牌遊戲</p>-->
							<p class="title"> {{ v.name[langIndex] }}-{{ v.subTitle[langIndex] }}</p>
						</router-link>
						<router-link :to="'/games/'+v.gameKey">
							<!--游戏简介-->
							<div class="info"  v-html="v.info[langIndex].substr(0,150)+'.......'" style="text-aligh:left;"> </div>
						</router-link>
						
						<div class="download">
							<a :href="v.appleURL" target="_blank">
								<!--<img class="ech-pulse-shrink" src="../../../static/img/app_store.png" alt="">-->
								<img v-if="v.appleURL" class="" src="../../../static/img/app_store.png" alt="">
							</a>
							<a :href="v.googleURL" target="_blank" style="margin-left:5px">
								<!--<img class="ech-pulse-shrink" src="../../../static/img/google_paly.png" alt="">-->
								<img v-if="v.googleURL" class="" src="../../../static/img/google_paly.png" alt="">
							</a>
						</div>
					</div>
			</div>
			<div class="col-xs-12 col-sm-3 col-md-2  col-lg-2 ">
				<!--下载数 （pc端显示）-->
					<div class="count  ec-bounce-in-r">
						<img src="../../../static/img/count_box.png" alt="">
						<div class="count-box">
							<div class="num">{{v.downloads}}</div>
							<div class="fonts">下载次数</div>
						</div>
					</div>
			</div>
		</div>
	</section>
		<div class="loadmore">
			<p class="text-center"><i class="fa fa-spinner" aria-hidden="true"></i><span>加载更多</span></p>
		</div>
</div>
</template>

<script>
import { games } from '../../assets/game_data'
export default {
	data() {
		return {
			initData:[],
			langIndex:Number(localStorage.getItem('currentLangIndex') || '2'), //语言类型index
		}
	},
	mounted(){
		setTimeout(function(){
			document.querySelectorAll(".latest-info img").forEach(v=>{
				v.classList.remove('ec-bounce-in-l');
			})
		},1100)
	},
	created(){
		for(let key in games){
			this.initData.push(games[key]); //获取游戏数据列表
		}
	},
    watch:{
       '$store.state.langPack':function(){
            this.langIndex = Number(localStorage.getItem('currentLangIndex'));
       }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.game-list {
    max-width:1920px;
    margin:0 auto;
		// 海报
		.banner {
			margin:0 auto;
			max-width:1920px;
			padding:0;
			position: relative;
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
		// 游戏列表
		.list {
			// background:url('../../../static/img/list_bg1.png') no-repeat;

			background-position:center;
			background-size:cover;
			// min-height:490px;
			min-height:25vw;
			padding-top:5%;
			padding-bottom:4%;
			@media screen and (min-width:1920px){
				min-height:490px;
			}
			@media screen and (max-width:992px){
				min-height:260px;
			}
			// 游戏图
			.picture {
				padding-top:10%;
				img {
					width:145px;
					float:right;
					// height:218px;
				}
				.count {
					display:none;
				}
			}
			// 游戏说明
			.content {
				padding-left: 30px;
				padding-right: 30px;
				.title {
					// height:50px;
					// line-height: 50px;
					margin-bottom:14px;
					padding-top:8px;
					font-size:20px;
				}
				.info {
					font-size:13px;
					color:#999999;
					min-height: 88px;
					padding-right:10%;
				}
				.download {
					width:300px;
					padding-top:10px;
					img {
						width:40%;
					}
				}
			}
			// 下载数量
			.count {
				position: relative;
				padding:2%;
				padding-top:0;
				width:125px;
				.count-box {
					position: absolute;
					left:50%;
					top:50%;
					transform: translate(-50%,-50%);
					text-align: center;
					.fonts {
						font-size:12px;
						color:#989898;
					}
					.num {
						font-size:26px;
						margin-top:10px;
						color:#353535;
					}
				}
			}
          // 适配手机
          @media screen and (max-width:767px){
			  padding-top:5%;
			  padding-bottom:10%;
			//   background:none !important;
			//   &:nth-of-type(2n+1) {
			// 	  background:#eff1f4 !important;
			//   } 
			//   &:nth-of-type(2n+0) {
			// 	  background-color: #fff !important;
			//   }
			  .picture {
				padding-top:0;
				text-align: center;
				display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
				justify-content:center;
				
				img {
					float:none;
					display:block;
					// width:110px !important;
					width:30vw !important;
					height:auto;
					margin:0 auto;
			  	}
				.count {
					display:inline-block;
					position: relative;
					padding:1%;
					padding-top:0;
					margin-left:3%;
					// width:95px;
					width:26vw;
					img {
						width:100%;
					}
					.count-box {
						position: absolute;
						left:50%;
						top:50%;
						transform: translate(-50%,-50%);
						text-align: center;
						.fonts {
							font-size:12px;
							color:#989898;
						}
						.num {
							font-size:20px;
							margin-top:10px;
							color:#353535;
						}
					}
				}
			  }
			  .content {
					text-align: center;
					padding:0px;
					.title {
						font-size:17px;
					}
					.info {
						padding-right:0;
						font-size:12px;
					}
					.download {
						width:100%;
						// padding:8px 0;
						img {
							width:40%;
							// @media screen and (max-width:414px){
							// 	width:40%;
							// }
						}
					}
			  }
			  .count {
				  display:none;
			  }
		  }

		}
		// 加载更多
		.loadmore {
			padding: 40px 0;
			p{
				display: block;
				width: 120px;
				margin: 0 auto;
				padding: 10px;
				cursor: pointer;
			}
			i {
				margin-right: 10px;
			}
		}

}
</style>