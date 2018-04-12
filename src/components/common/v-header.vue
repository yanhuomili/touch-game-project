<template>
  <div class="my-nav">
      <div class="bx">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">
								<img src="../../../static/img/logo.png" alt="">
							</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav items">
                <!--首页-->
                <li class="" index='0'><router-link to="/index"><i class="fa fa-home"></i> {{$store.state.langPack.header.home}}</router-link></li>
                <!--游戏-->
								<li class="" index='1'><router-link to="/games"><i class="fa fa-gamepad"></i> {{$store.state.langPack.header.games}}</router-link></li>
                <!--加入我们-->
								<li index='2'><router-link to="/careers"><i class="fa fa-flag"></i> {{$store.state.langPack.header.careers}}</router-link></li>
                <!--关于我们-->
								<li index='3'><router-link to="/about"><i class="fa fa-user"></i> {{$store.state.langPack.header.about}}</router-link></li>
              </ul>
              <!--<form class="navbar-form navbar-left">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Search">
                </div>
                <button type="submit" class="btn btn-default">Submit</button>
              </form>-->
              <ul class="nav navbar-nav navbar-right">
                <li>
										<ul class="link">
											<li>
												<router-link to=""><img src="../../../static/img/youtube.png"/></router-link>
											</li>
											<li>
												<a href="https://www.facebook.com/gameflask/" target="_blank" ><img src="../../../static/img/facebook.png"/></a>
											</li>
											<li>
												<router-link to=""><img src="../../../static/img/twitter.jpg"/></router-link>
											</li>
											<li>
												<router-link to=""><img src="../../../static/img/google.jpg"/></router-link>
											</li>
									</ul>
								</li>
                <li class="dropdown">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$store.state.langPack.header.language}} <span class="caret"></span></a>
                  <ul class="dropdown-menu">
                    <!--<li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>-->
                    <li><a href="#" @click="setLang('2')">{{$store.state.langPack.header.english}}</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#" @click="setLang('1')">{{$store.state.langPack.header.zh_hk}}</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#" @click="setLang('0')">{{$store.state.langPack.header.zh_cn}}</a></li>
                  </ul>
                </li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
      </div>


  </div>
</template>

<script>
export default {
  data () {
	    return {
			//   路由path与activeIndex映射
			  routeMap:{
				  '0':'/index',
				  '1':'/games',
				  '2':'/careers',
				  '3':'/about',
			  }
	    }
  },
  mounted(){
		this.chengePath();
  },
  methods:{

		//根据路由path改变activeIndex
		chengePath(){
			let path = this.$route.path;
			for(let key in this.routeMap){
				if(path.indexOf(this.routeMap[key])!=-1){
					this.setNavStyle(key)
				}
			}
		},
		setNavStyle(index){
			 if(!document.querySelectorAll('ul.navbar-nav.items>li')) return;
			 document.querySelectorAll('ul.navbar-nav.items>li').forEach(v=>{
				 	if(v.getAttribute('index')==index){
						 v.classList.add('active')
					 }else{
						 v.classList.remove('active')
					 }
			 })
		}
  },
  watch:{
	  '$route.path':'chengePath'
  },
  created(){
  }
}
</script>
<style lang="less">
  .my-nav {
    background-color: #363636;
    .navbar.navbar-default {
      background-color:#363636;
      border:none;
    }
    .navbar-default .navbar-nav>li>a {
        color: #fff;
    }
    .navbar-default .navbar-nav>li.active a {
        background-color: #fb9a37;
    }
    .navbar-default .navbar-nav>.open>a, .navbar-default .navbar-nav>.open>a:focus, .navbar-default .navbar-nav>.open>a:hover {
        color: #eee;
        background-color: transparent;
        background-color: rgba(255,255,255,.2);
        background-color: rgba(0,0,0,.1);
    }
    .navbar-default .navbar-nav>.active>a {
        color: #eee;
        // background-color: #456ea5;
    }
		.navbar {
			// min-height: 70px;
			margin-bottom: 0px;
		}
		.navbar-brand {
			font-size: 30px;
			// padding-right:50px;
			color:#eee;
			font-style:italic;
			&:hover {
				color:#eee;
			}
		}
		.navbar-right {
			// fackbook...外链
			ul.link {
				display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
				align-items:center;
				min-height: 50px;
				margin-right:16px;
				li {
					width:18px;
					margin:0 8px;
					img {
						display:block;
						width:auto;
						height:auto;
						margin:0 auto;
					}
				}
				// 中等屏幕时隐藏
				@media screen and (min-width:768px) and (max-width:992px){
					display:none;
				}
			}
		}
		// 适配pc端导航
		@media screen and (min-width:768px){
				#bs-example-navbar-collapse-1 {
					&>ul {
						&>li>a{
						// height:70px !important;
						// line-height:70px !important ;
						padding:25px 20px; 
						}
					}
				}
				.navbar-header>a {
					padding:22px 15px;
					height:70px;
					img {
							height:auto;
							
					}
				}
				ul.link {
					height:70px;
				}
		}
  }
</style>
