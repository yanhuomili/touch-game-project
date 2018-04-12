<template>
	<article class="latest-info">
		<section class="info-header text-center d-flex flex-column justify-content-center">
			<h1>INFORMATION</h1>
			<p>了解我们的最新动向</p>
		</section>
		<section class="info-content">
			<div class="breadcrumb-wrap">
				<div class="breadcrumb-inner container">
					<nav aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item">
								<router-link to="/"><i class="fa fa-home" aria-hidden="true"></i>首页</router-link>
							</li>
							<!--<li class="breadcrumb-item"><router-link to="">资讯中心</router-link></li>-->
							<li class="breadcrumb-item active" aria-current="page">资讯中心</li>
						</ol>
					</nav>
				</div>
			</div>
			<div class="info-list-wrap">
				<div class="info-list-inner container">
					<div class="media list-item" v-for="item in 4">
						<div class="media-left">
							<router-link to="">
								<img class="media-object" src="../../../static/img/media.png" alt="">
							</router-link>
						</div>
						<div class="media-body d-flex flex-column">
							<h4 class="media-heading">touch compony 全球知名互联网公司，游戏开发，网站建设等技术一流</h4>
							<div class="time">2018-3-29</div>
							<p>
								TypeScript 是由微软开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。 TypeScript 是由微软开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。 TypeScript 是由微软开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。
							</p>
							<router-link to="/latestInfoDetail" class="more text-center">了解更多</router-link>
						</div>
					</div>
				</div>
			</div>
			<div class="loadmore">
				<p class="text-center"><i class="fa fa-spinner" aria-hidden="true"></i><span>加载更多</span></p>
			</div>
		</section>
	</article>
</template>

<script>
	export default {
		name: 'latest-info',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	.latest-info {
		.info-header {
			height: 350px;
			color: #fff;
			background: url(../../../static/img/bgc.png) no-repeat center center;
			background-size: 1920px 350px;
			h1 {
				margin-bottom: 20px;
				font-size: 32px;
			}
			p {
				font-size: 20px;
			}
		}
		.info-content {
			.breadcrumb-wrap {
				background: #eee;
				.breadcrumb {
					height: 60px;
					margin: 0;
					padding: 18px 0;
					font-size: 12px;
					i {
						margin-right: 5px;
					}
				}
			}
			.info-list-inner {
				padding: 0;
				color: #333;
				.list-item {
					padding: 50px 0;
					border-bottom: 1px solid #eee;
				}
				.media-left {
					margin-right: 40px;
				}
				.media-heading {
					font-size: 16px;
					line-height: 1.8;
				}
				.time {
					font-size: 10px;
					color: #999;
					margin: 15px 0;
				}
				p {
					color: #666;
					font-size: 12px;
					line-height: 1.8;
					letter-spacing: 2px;
				}
				.more {
					width: 120px;
					height: 45px;
					line-height: 45px;
					border: 2px solid #ff9b27;
					color: #ff9b27;
					border-radius: 0;
					background: #fff;
					font-size: 16px;
					margin-top: 30px;
				}
			}
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
	}
</style>