<template>
		<article class="game_news">
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
															<router-link to="/game_details">游戏详情</router-link>
														</li>
														<li class="breadcrumb-item active" aria-current="page">英雄联盟lpl个位置选手资料,陨落的电竞选手该如何抉择</li>
												</ol>
										</nav>
								</div>
						</div>
				</section>
				<section class="detail">
						<div class="container">
								<h1 class="title">英雄联盟lpl个位置选手资料,陨落的电竞选手该如何抉择</h1>
								<p class="time">发布时间：<span>2018-3-30</span></p>
								<figure class="figure">
								  <img src="../../../static/img/detial.png" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure.">
								  <figcaption class="figure-caption">
								  		<p>
								  			JackeyLove虽然是首次登上LPL舞台，但他在过去几周的表现，已经证明了他并非菜鸟，他的KDA是4.9，
								  			场均参团率为65.3%，从数据上来看略微逊色于Smlz。而这也和他刚出道经验不足有关，JackeyLove对线时侵略性十足，
								  			因此常常容易成为gank目标，场均死亡为1.96次，在ADC选手中是比较高的。但他也收获了4个MVP，
								  			尤其在之前队伍劣势时多次挺身而出。
									  		IG是一支滚雪球能力很强的队伍，他们场均14.6击杀，排名联赛第一，他们的总击杀数高达485，
									  		也是遥遥领先于其他队伍，尤其在IG很多对局都是2-0完胜的情况下。而IG场均1条大龙也是排名联赛第一，
									  		基本上IG前期对线打出优势，中期顺利拿下大龙，然后一波直接推进取得胜利，没有给予对手反击机会，
									  		IG的对局很难看到第二条大龙刷新。
								  		</p>
								  		<p>
								  			IG和RW都是依靠中野带节奏的队伍，然后以下路为重心的队伍，因此下路对线更加讲究个人能力，
												  因此Smlz能否在线上压制JackeyLove，打出RW目前四保一体系的效果，成为这场比赛的焦点。
												  JackeyLove被誉为LPL的新天才少年，而Smlz则是成名已久，无论经验或者实力更胜一筹，
												  两人的相遇定然会产生
												  炽热的火花。俗话说初生牛犊不怕虎，JackeyLove与Smlz在面对对手时会采取哪些措施呢?
												  IG是一支滚雪球能力很强的队伍，他们场均14.6击杀，排名联赛第一，他们的总击杀数高达485，
									  		也是遥遥领先于其他队伍，尤其在IG很多对局都是2-0完胜的情况下。而IG场均1条大龙也是排名联赛第一，
									  		基本上IG前期对线打出优势，中期顺利拿下大龙，然后一波直接推进取得胜利，没有给予对手反击机会，
									  		IG的对局很难看到第二条大龙刷新。
								  		</p>
								  </figcaption>
									 </figcaption>
								</figure>
						</div>
				</section>
				<section class="back">
					<div class="container">
						<router-link to="/game_details">返回列表</router-link>
					</div>
				</section>
			
		</article>
</template>

<script>
	export default {
		name: 'latest-info-detail',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.game_news {
		.breadcrumb-wrap {
			height: 60px;
			background: #eee;
			.breadcrumb {
				padding: 18px 0;
				margin: 0;
				font-size: 12px;
				li[aria-current="page"] {
					max-width: 175px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				i {
					margin-right: 5px;
				}
			}
		}
		.detail{
			padding: 60px 0 50px;
			h1{
				text-align: center;
				font-size: 22px;
			}
			.time{
				text-align: center;
				margin: 20px 0;
				color: #999;
				font-size: 12px;
			}
			.figure-caption{
				p{
					font-size: 12px;
					line-height: 2;
					letter-spacing: 2px;
					text-indent: 2.5em;
					margin-top: 30px;
				}
			}
		}
		.back{
			border-top: 1px solid #eee;
			padding: 45px 0;
			a{
				display: block;
				width: 140px;
				height: 45px;
				line-height: 45px;
				text-align: center;
				border: 2px solid #ff9b27;
				color: #ff9b27;
				font-size: 16px;
				margin: 0 auto;
			}
		}
	}
</style>