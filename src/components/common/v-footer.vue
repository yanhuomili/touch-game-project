<template>
	  <div class="v-footer">
				<div class="footer-top">
						<div class="bx">
								<div class="f-col one">
										<dl>
												<dt><img src="../../../static/img/logo.png" alt=""></dt>
												<dd>{{$store.state.langPack.footer.tel}}：020-62362696</dd>
												<dd>{{$store.state.langPack.footer.email}}：1360518908@qq.com</dd>
												<dd>{{$store.state.langPack.footer.address}}：{{$store.state.langPack.footer.addressInfo}}</dd>
										</dl>
								</div>

								<div class="f-col">
										<dl>
												<!--<dt class="have-line">我们的游戏</dt>-->
												<dt class="have-line">{{$store.state.langPack.footer.games}}</dt>
												<dd><router-link to="/games/btthk">{{$store.state.langPack.footer.g1}}</router-link></dd>
												<dd><router-link to="/games/fmj16">{{$store.state.langPack.footer.g2}}</router-link></dd>
												<dd><router-link to="/games/fbt">{{$store.state.langPack.footer.g3}}</router-link></dd>
												<!--<dd><router-link to="">{{$store.state.langPack.footer.g4}}</router-link></dd>-->
										</dl>
								</div>
								<div class="f-col">
										<dl>
												<!--<dt class="have-line">关于我们</dt>-->
												<dt class="have-line">{{$store.state.langPack.footer.about}}</dt>
												<dd><router-link to="/about#step1">{{$store.state.langPack.footer.company}}</router-link></dd> 
												<dd><router-link to="/about">{{$store.state.langPack.footer.contact}}</router-link></dd>
												<dd><router-link to="/careers">{{$store.state.langPack.footer.careers}}</router-link></dd>
										</dl>
								</div>
						</div>
				</div>
				
				<div class="footer-bot">
						<div class="bx">
								<div>&copy; HALFBRICK HALFBRICK HALFBRICK HALFBRICK</div>
								<div class="f-right">
										<!--<div><router-link to="">隐私条款</router-link></div>-->
										<div><router-link to="">{{$store.state.langPack.footer.clause}}</router-link></div>
										<div>|</div>
										<!--<div><router-link to="">使用守则</router-link></div>-->
										<div><router-link to="">{{$store.state.langPack.footer.codeOfUse}}</router-link></div>
								</div>
						</div>
				</div>
				
	  </div>
</template>

<script>
export default {
  name: 'v-footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.v-footer{
	background: #141414;
	color: #999;
	font-size: 12px;
	a{
		color: #999;
	}
	.footer-top{
		padding: 70px 0 80px;
		dl{
			dt{
				font-size: 20px;
				color: #fff;
				padding-bottom: 20px;
				margin-bottom: 20px;
				border-bottom: 1px solid #999;
			}
			dd{
				margin-bottom: 15px;
			}
		}
		.f-col{
			dt{
				margin-bottom: 0;
				border: none;
			}
		}
		.f-col{
			dl{
				// width: 200px;
				margin-left: 80px;
				dt{
					font-size: 15px;
				}
			}
		}
	}

	.footer-top>div {
		display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
		.f-col {
			flex:1;
			flex-basis:25%;
		}
		.f-col.one {
			// flex:2;
			flex-basis:50%;
			img {
				width:auto;
				height:auto;
			}
		}
		// 小于820px换行，100%宽
		@media screen and (max-width:830px){
			flex-wrap:wrap;
			justify-content:center;
			text-align: center;
			.f-col {
				padding-top:14px;
				flex-basis:100%;
				dl {
					margin:0 auto;
				}
			}
		}
		.have-line {
			position: relative;
			
			&:after{
				content:'';
				display: block;
				height:1px;
				background-color: #2d2d2d;
				margin-top:12px;
				// position: absolute;
				// left:0;
				// bottom:8px;
			}
		}
	}
	// 底部
	.footer-bot{
		background: #000;
		width:100%;
		&>div.bx {
			padding:0 22px;
			height: 50px;
			display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
			justify-content:space-between;
			align-items:center;
			.f-right{
				display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
				div {
					margin:0 6px;
				}
			}
			@media screen and (max-width:768px){
				flex-wrap:wrap;
				padding:10px;
				&>div {
					margin:0 auto;
				}
			}
		}
	}
	
}
</style>
