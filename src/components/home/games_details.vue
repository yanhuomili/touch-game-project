<template>
		<article class="game-detail">
			<!--面包屑导航-->
				<section>
						<div class="breadcrumb-wrap">
								<div class="breadcrumb-inner container">
										<nav aria-label="breadcrumb">
												<ol class="breadcrumb">
														<li class="breadcrumb-item">
															<router-link to=""><i class="fa fa-home" aria-hidden="true"></i>首页</router-link>
														</li>
														<li class="breadcrumb-item">
															<router-link to="/games">游戏</router-link>
														</li>
														<li class="breadcrumb-item">
															<a>{{ initData.name[langIndex]}}</a>
														</li>
												</ol>
										</nav>
								</div>
						</div>
				</section>
				<!--画报-->
				<div class="poster bx">
					<div class="p-header">
						<!--游戏图标-->
						<!--<img data-v-3bdb96f7="" src="@/../static/img/games/fbts_icon.jpg" alt="" class="" style="border-radius: 26px;">-->
						<img class="ec-fade-in-b" :src="initData.imgURL" alt="" style="border-radius: 26px;">
						<!--<img class="ec-fade-in-b" src="@/../static/img/games/bjm_icon.jpg" alt="" style="border-radius: 26px;">-->
						<div class="p-title">
								<!--主标题-->
								<h2>{{ initData.name[langIndex]}}</h2>
								<!--副标题-->
								<p>{{ initData.subTitle[langIndex]}}</p>
						</div>
					</div>
					<div class="p-fonts">
						<!--游戏介绍-->
						<p v-html="initData.info[langIndex]">

						</p>
					</div>
					<div class="download">
						<a :href="initData.appleURL" target="_blank">
							<img v-if="initData.appleURL" class="ech-shake-time" src="../../../static/img/app_store.png" alt="">
						</a>
						<a :href="initData.googleURL" target="_blank" style="margin-left:10px">
							<img v-if="initData.googleURL" class="ech-shake-time" src="../../../static/img/google_paly.png" alt="">
						</a>
					</div>
					<!--嫦娥-->
					<img class="poster-img  ec-fade-in-r" src="../../../static/img/poster-img.png" alt="">
				</div>
				<!--游戏介绍-->
				<div class="game-about bx">
					<!--游戏资讯-->
					<div class="news" v-if="false">
						<div class="title">
							<div class="txt">游戏资讯</div>
							<!--游戏资讯-轮播控制-->
							<div class="ctrl">
								<span class="prov" href="#carousel-example-generic"  data-slide="prev"><i class="fa fa-angle-left"></i></span>
								<span class="next" href="#carousel-example-generic"  data-slide="next"><i class="fa fa-angle-right"></i></span>
							</div>
						</div>
						<!--游戏资讯-轮播-->
						<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner" role="listbox">
							<div class="item active">
								<div class="content">
									<div class="items" v-for=" v in 8">
										<div class="news-title"> <router-link to="/game_news">【公告】英雄联盟:职业选手被打哭集锦 faker 微笑的表情扎...  </router-link></div>
										<div class="news-date">2018-3-29</div> 
									</div>
								</div>
								<div class="content">
									<div class="items" v-for=" v in 8">
										<div class="news-title"> <router-link to="/game_news">【公告】英雄联盟:职业选手被打哭集锦 faker 微笑的表情扎...  </router-link></div>
										<div class="news-date">2018-3-29</div> 
									</div>
								</div>
							</div>

							</div>
						</div>

					</div>
					<!--游戏视频-->
					<div class="video" v-if="false">
						<div class="title">
							<div class="txt">游戏视频</div>
							<!--游戏视频-轮播控制-->
							<div class="ctrl">
								<span class="prov" href="#carousel-example-generic1"  data-slide="prev"><i class="fa fa-angle-left"></i></span>
								<span class="next" href="#carousel-example-generic1"  data-slide="next"><i class="fa fa-angle-right"></i></span>
							</div>
						</div>
						<!--游戏视频-轮播-->
						<div id="carousel-example-generic1" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner" role="listbox">
								<div class="item active" >
									<div class="content" >
										<div class="items"  style="padding:3px">
											<router-link to="/game_news">
												<img src="../../../static/img/video1.jpg" alt="" style="display:block;height:auto">
											</router-link>
										</div>
										<div class="items"  style="padding:3px">
											<router-link to="/game_news">
												<img src="../../../static/img/video1.jpg" alt="" style="display:block;height:auto">
											</router-link>
										</div>

									</div>

								</div>

								<div class="item">
										<div class="content">
											<div class="items"  style="padding:3px">
												<router-link to="/game_news">
													<img src="../../../static/img/video1.jpg" alt="" style="display:block;height:auto">
												</router-link>
											</div>
											<div class="items" style="padding:3px">
												<router-link to="/game_news">
													<img src="../../../static/img/video1.jpg" alt="" style="display:block;height:auto">
												</router-link>
											</div>

										</div>
								</div>
							</div>
						</div>

					</div>
					<!--游戏截图-->
					<div class="images">
						<div class="title">
							<div class="txt">游戏截图</div>
							<!--游戏截图-轮播控制-->
							<div class="ctrl">
								<span class="prov" href="#carousel-example-generic2"  data-slide="prev"><i class="fa fa-angle-left"></i></span>
								<span class="next" href="#carousel-example-generic2"  data-slide="next"><i class="fa fa-angle-right"></i></span>
							</div>
						</div>
						<!--游戏截图-轮播-->
						<div id="carousel-example-generic2" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner" role="listbox">
								<div class="item active">
										<div class="content">
											<div class="items">
												<img :src="'../../static/img/games/'+initData.gameKey+'_img_1.jpg'" alt="">
											</div>
											<div class="items">
												<img :src="'../../static/img/games/'+initData.gameKey+'_img_2.jpg'" alt="">
											</div>
											<div class="items">
												<img :src="'../../static/img/games/'+initData.gameKey+'_img_3.jpg'" alt="">
											</div>
										</div>
								</div>
								<div class="item">
										<div class="content">
											<div class="items">
												<img :src="'../../static/img/games/'+initData.gameKey+'_img_1.jpg'" alt="">
											</div>
											<div class="items">
												<img :src="'../../static/img/games/'+initData.gameKey+'_img_2.jpg'" alt="">
											</div>
											<div class="items">
												<img :src="'../../static/img/games/'+initData.gameKey+'_img_3.jpg'" alt="">
											</div>
										</div>
								</div>

							</div>
						</div>

					</div>
					<!--用户评价-->
					<div class="user-comment">
						<div class="title">
							<div class="txt">用户评价</div>
							<!--用户评价-轮播控制-->
							<div class="ctrl">
								<span class="prov" href="#carousel-example-generic3"  data-slide="prev"><i class="fa fa-angle-left"></i></span>
								<span class="next" href="#carousel-example-generic3"  data-slide="next"><i class="fa fa-angle-right"></i></span>
							</div>
						</div>
						<!--用户评价-轮播-->
						<div id="carousel-example-generic3" class="carousel slide" data-ride="carousel">
							<div class="carousel-inner" role="listbox">
								<div class="item active">
										<div class="content">
											<div class="items">
												<img src="../../../static/img/user-comment2.png" alt="">
											</div>
											<div class="items">
												<img src="../../../static/img/user-comment1.png" alt="">
											</div>
											<div class="items">
												<img src="../../../static/img/user-comment1.png" alt="">
											</div>
										</div>
								</div>
								<div class="item">
										<div class="content">
											<div class="items">
												<img src="../../../static/img/user-comment1.png" alt="">
											</div>
											<div class="items">
												<img src="../../../static/img/user-comment2.png" alt="">
											</div>
											<div class="items">
												<img src="../../../static/img/user-comment1.png" alt="">
											</div>
										</div>
								</div>

							</div>
						</div>

					</div>
				</div>


			
		</article>
</template>

<script>
import { games } from '../../assets/game_data'
export default {
	data() {
		return {
			initData:null, //当前游戏内容数据
			langIndex:Number(localStorage.getItem('currentLangIndex') || '2'), //语言类型index
			gameKey:''
		}
	},
	mounted(){
		setTimeout(function(){
			document.querySelectorAll('.p-header img').forEach(v=>{
				v.classList.remove('ec-fade-in-b');
			})
		},1500)
	},
	created(){
		//获取游戏键
		this.gameKey = this.$route.path.split('/')[2];
		// 根据游戏键拿取页面数据
		this.initData = games[this.gameKey] ;
	},
    watch:{
       '$store.state.langPack':function(){
            this.langIndex = Number(localStorage.getItem('currentLangIndex'));
			// console.log(typeof this.langIndex);
            // this.initData = {};
            // this.initData = details[this.gameKey]; //变动数据驱动type语言切换
       }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.game-detail {
		background-color: #312366;
		.breadcrumb-wrap {
			height: 60px;
			background: #3d306f;
			.breadcrumb {
				background: #3d306f;
				padding: 22px 0;
				margin: 0;
				font-size: 12px;
				li[aria-current="page"] {
					max-width: 175px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					color:#ddd;
				}
				i {
					margin-right: 5px;
				}
				a {
					color:#ddd;
				}
			}
		}
		// 游戏画报
		.poster {
			box-sizing: border-box;
			// max-width:1180px;
			// height:820px;
			margin:0 auto;
			padding:3% 0;
			position: relative;
			.p-header {
				display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
				align-items:center;
				min-height:220px;
				padding:34px 0;
				img{
					width:150px;
					height:auto;
				}
				.p-title {
					display: inline-block;
					padding-left:22px;
					color:#fff;
					h2 {
						font-size:26px;
						font-weight:700;
						line-height:40px;
						// vertical-align: middle;
						

					}
					p {
						font-size:18px;
						// line-height:30px;
					}
				}
			}
			.p-fonts {
				height:290px;
				padding:40px;
				padding-right:50%;
				background-color: rgba(255,255,255,.1);
				color:#ddd;
				line-height: 24px;;
				p {
					font-size:13px;
				}
			}
			.download {
				height:152px;
				display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
				align-items:center;
				img {
					width:162px;
				}
			}
			
			.poster-img{
				display:block;
				width:50%;
				height:auto;
				position: absolute;
				right:-45px;
				bottom:28px;
			}
			// 适配ipad
			@media screen and (max-width:768px) {
				.p-header {
					justify-content:center;
				}
				.p-fonts {
					padding:5%;
					height:auto;
					line-height: 16px;;
				}
				.poster-img {
					display:none;
				}
				.download {
					justify-content:center;
				}
			}
			// 适配手机
			@media screen and (max-width:555px) {
				.p-header {
					padding:4%;
					img {
						display:block;
						width:44%;
						height:auto;
						// width:100%;
					}
					.p-title {
						padding:1% 5%;
						h2 {
							font-size:5.5vw;
						}
						p {
							width:100%;
							font-size:3.5vw;
						}
					}
				}
				.p-fonts {
					p{
						font-size:12px;
					}
				}
				.download {
					height:100px;
					img {
						width:136px;
					}
				}
			}
		}
		// 游戏介绍
		.game-about {
			padding:3%;
			margin:0 auto;
			font-size:25px;
			background-color: #473883;
			@media screen and (max-width:500px) {
				.title {
					font-size:5vw !important;
				}
			}
			// 游戏资讯
			.news {
				.title {
					display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
					justify-content: space-between;
					border-bottom:1px solid rgba(255,255,255,.2);
					.txt {
						display:inline-block;
						height:64px;
						line-height: 64px;
						border-bottom:2px solid #fff;
						color:#fff;

					}
					.ctrl {
						display:inline-block;
						display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
						justify-content: space-between;
						align-items:center;
						span {
							// display: inline-block;
							height:26px;
							width:26px;
							line-height: 26px;
							text-align:center;
							border-radius:13px;
							border:1px solid #eee;
							color:#fff;
							font-size:15px;
							margin:0 8px;
							cursor:pointer;
						}
						span.prov {
							
						}
						span.next {
							background-color: rgba(255,255,255,.4);
							// border-color:rgba(255,255,255,.4);
							border:none;
						}
					}
				}
				.content {
					padding:12px 0px;
					display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
					flex-wrap:wrap;
					justify-content: space-between; //从左右开始铺满
					.items {
						flex:1 0 48%;
						font-size:12px;
						height:34px;
						line-height: 34px;
						color:#fff;
						display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
						justify-content:space-between;
						.news-title {
							// flex-basis:75%;
							// padding-right:2%;
							flex:3;
							overflow: hidden;
							text-overflow:ellipsis;
							white-space: nowrap;
						}
						.news-date {
							flex:1;
							// flex:0 0 20%;
							text-align:center;
						}
						
					}
				}
				// 适配手机
				@media screen and (max-width:992px) {
					.content {
						.items {
							flex-basis:auto;
						}
					}
				}

			}
			// 游戏视频
			.video {
				.title {
					display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
					justify-content: space-between;
					border-bottom:1px solid rgba(255,255,255,.2);
					.txt {
						display:inline-block;
						height:64px;
						line-height: 64px;
						border-bottom:2px solid #fff;
						color:#fff;

					}
					.ctrl {
						display:inline-block;
						display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
						justify-content: space-between;
						align-items:center;
						span {
							// display: inline-block;
							height:26px;
							width:26px;
							line-height: 26px;
							text-align:center;
							border-radius:13px;
							border:1px solid #eee;
							color:#fff;
							font-size:15px;
							margin:0 8px;
							cursor:pointer;
						}
						span.prov {
							
						}
						span.next {
							background-color: rgba(255,255,255,.4);
							// border-color:rgba(255,255,255,.4);
							border:none;
						}
					}
				}
				.content {
					padding:12px 0px;
					display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
					flex-wrap:wrap;
					justify-content: space-between; //从左右开始铺满
					.items {
						flex:1 0 48%;
						font-size:12px;
						height:34px;
						line-height: 34px;
						color:#fff;
						span {
							padding-right:10%;
							float:right;
						}
					}
				}
				@media screen and (min-width:1180px) { //PC端1180px以上
					.content {
						height:333px;
					}
				}
				//PC端1180px以下
				@media screen and (max-width:1180px) {
					.content {
						height:30vw;
					}
				}
				// 适配手机
				@media screen and (max-width:555px) {
					.content {
						height:124vw;
						.items {
							flex-basis:100%;
						}
					}
				}
			}
			// 游戏截图
			.images {
				.title {
					display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
					justify-content: space-between;
					border-bottom:1px solid rgba(255,255,255,.2);
					.txt {
						display:inline-block;
						height:64px;
						line-height: 64px;
						border-bottom:2px solid #fff;
						color:#fff;

					}
					.ctrl {
						display:inline-block;
						display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
						justify-content: space-between;
						align-items:center;
						span {
							// display: inline-block;
							height:26px;
							width:26px;
							line-height: 26px;
							text-align:center;
							border-radius:13px;
							border:1px solid #eee;
							color:#fff;
							font-size:15px;
							margin:0 8px;
							cursor:pointer;
						}
						span.prov {
							
						}
						span.next {
							background-color: rgba(255,255,255,.4);
							// border-color:rgba(255,255,255,.4);
							border:none;
						}
					}
				}
				.content {
					padding:12px 0px;
					display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
					flex-wrap:wrap;
					justify-content: space-between; //从左右开始铺满
					.items {
						flex-basis:32%;
						// height:660px;
						background-color: rgba(255,255,255,.3);
						border:1px solid #eee;

					}
				}
				// 适配手机
				@media screen and (max-width:1180px) {
					.content {
						.items {
							img {
								width:29vw;
								height:52vw;
							}
						}
					}
				}
			}
			// 用户评论
			.user-comment {
				.title {
					display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
					justify-content: space-between;
					border-bottom:1px solid rgba(255,255,255,.2);
					.txt {
						display:inline-block;
						height:64px;
						line-height: 64px;
						border-bottom:2px solid #fff;
						color:#fff;

					}
					.ctrl {
						display:inline-block;
						display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
						justify-content: space-between;
						align-items:center;
						span {
							// display: inline-block;
							height:26px;
							width:26px;
							line-height: 26px;
							text-align:center;
							border-radius:13px;
							border:1px solid #eee;
							color:#fff;
							font-size:15px;
							margin:0 8px;
							cursor:pointer;
						}
						span.prov {
							
						}
						span.next {
							background-color: rgba(255,255,255,.4);
							// border-color:rgba(255,255,255,.4);
							border:none;
						}
					}
				}
				.content {
					padding:12px 0px;
					display: flex; display: -webkit-flex;display: -ms-flex;display: -o-flex;
					flex-wrap:wrap;
					justify-content: space-between; //从左右开始铺满
					.items {
						flex-basis:32%;
						// height:450px;
						// background-color: rgba(255,255,255,.3);
						// border:1px solid #eee;
					}
				}
								// 适配手机
				@media screen and (max-width:1180px) {
					.content {
						.items {
							img {
								width:29vw;
								height:38vw;
							}
						}
					}
				}
			}
		}
		a {
			color:#eee;
			&:hover {
				color:#fff;
			}
		}
	}
</style>