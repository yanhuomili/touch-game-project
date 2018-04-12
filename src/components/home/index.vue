<template>
    <div class="homePage_wrap" @scroll="scorllHandle($event)">  
        <!--首页轮播-->
      <div class="top-carousel">
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                  <!-- Indicators -->
                  <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                  </ol>

                  <!-- Wrapper for slides -->
                  <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <router-link :to="'/games/btthk'">
                          <img src="../../../static/img/index/carousel_btthk.png" alt="">
                        </router-link>
                    </div>

                    <div class="item">
                        <router-link :to="'/games/fmj16'">
                          <img src="../../../static/img/index/carousel_fmj16.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link :to="'/games/fbt'">
                          <img src="../../../static/img/index/carousel_fbt.jpg" alt="">
                        </router-link>
                    </div>


                  </div>

                  <!-- Controls -->
                  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
      </div>
      <!--主显区域 游戏推荐-->
      <div class="best-game">
        <div class="bx container">
          <div class="row" style="margin-top: 0">
              <!--<h2 style="text-align:center;padding-top: 76px">做最好的游戏</h2>-->
              <h2 style="text-align:center;padding-top: 76px">{{$store.state.langPack.index.bestGameTitle}}</h2>
          </div>
          <!--<p style="text-align: center;margin-top: 28px">我们专注于游戏开发及运营多年，用心为玩家度身订造出最好玩的游戏。我们目标不止做A级游戏，而是做出S级精品游戏</p>-->
          <p style="text-align: center;margin-top: 28px">{{$store.state.langPack.index.bestGameInfo}}</p>
          <div class="row clearfix">
            <div class="list">
                    <!--游戏图标|下载数-->
                    <div class="game-icon" v-for="(v,i) in gamesData" :key="i" >
                      <div class="icon">
                          <router-link :to="'/games/'+  (v.gameKey || 'fbt')">
                          <img :src="v.imgURL" alt=""  style="border-radius:20px">
                          </router-link>
                      </div>
                      <div class="number">
                        <div>
                              <div class="count">
                                  <!--<span class="num">{{v.count}}</span>-->
                                  <span class="num" :ref="i"></span>
                                  <span class="unit">{{changeNum[i].unit}}</span>
                              </div>
                              <div class="type">{{$store.state.langPack.index.type}}</div>
                        </div>
                      </div>




                    </div>
                <!--</div>-->
            </div>

          </div>
        </div>
      </div>
      <!--游戏数据展示-->
      <div class="game-data">
          <div class="bx">
              <!--<div class="title">我们用数据说话</div>-->
              <div class="title">{{$store.state.langPack.index.dataTitle}}</div>
              <div class="list bx">
                <div class="item"  v-for="(v,i) in initData.userData" :key="i" :style="'background:'+v.bgColor">
                      <div class="icon">
                        <img src="../../../static/img/icon_1.png" alt="">
                      </div>
                      <div class="number">
                        <div>
                            <div class="count">
                                <span class="num">{{v.count}}</span>
                                <span class="unit">{{v.unit}}</span>
                            </div>
                            <div class="type">{{v.type[langIndex]}}</div>
                        </div>
                      </div>
                </div>
              </div>
          </div>
      </div>
      <!--用户评价-->
      <div class="user-comment">
              <div class="bx">
                  <!--<div class="title">来自用户的评价</div>-->
                  <div class="title">{{$store.state.langPack.index.userCommentTitle}}</div>
                  <div id="carousel-example-generic1" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                      <li data-target="#carousel-example-generic1" data-slide-to="0" class="active"></li>
                      <li data-target="#carousel-example-generic1" data-slide-to="1"></li>
                      <li data-target="#carousel-example-generic1" data-slide-to="2"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                      <div class="item active">
                        <div class="content">
                            <img src="../../../static/img/user-comment1.png" alt="...">
                            <img src="../../../static/img/user-comment1.png" alt="...">
                            <img src="../../../static/img/user-comment1.png" alt="...">
                        </div>
                      </div>
                      <div class="item">
                        <div class="content">
                            <img src="../../../static/img/user-comment1.png" alt="...">
                            <img src="../../../static/img/user-comment1.png" alt="...">
                            <img src="../../../static/img/user-comment1.png" alt="...">
                        </div>
                      </div>
                  </div>

                  <!-- Controls -->
                  <!--<a class="left carousel-control" href="#carousel-example-generic1" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#carousel-example-generic1" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>-->
              </div>
           </div>
    </div> 
    </div>
</template>

<script>
import { index } from '../../assets/game_data'
import { games } from '../../assets/game_data'
  export default {
    data() {
      return {
         gamesData:[],
         initData:index,
         langIndex:Number(localStorage.getItem('currentLangIndex') || '2'), //语言类型index
         changeNum:[],
         timeID:''
      }
    },
    watch:{
       '$store.state.langPack':function(){
            this.langIndex = Number(localStorage.getItem('currentLangIndex'));
            // this.initData = {};
            // this.initData = index; //变动数据驱动type语言切换
       }
    },
    mounted() {
        let newArr = [];
        let _this = this;
        _this.changeNum.forEach((v,i)=>{
             newArr[i] = {count:Number(_this.changeNum[i].count)};
             _this.changeNum[i].count = 0; //置零
        })
        _this.timeID = setInterval(function(){
            _this.changeNum.forEach((v,i)=>{
                    if(_this.changeNum[i].count == newArr[i].count) return;
                    if(_this.changeNum[i].count < newArr[i].count){
                        _this.changeNum[i].count = _this.changeNum[i].count-0+272;
                        _this.$refs[i][0].innerHTML = _this.changeNum[i].count;

                    }else{
                        _this.changeNum[i].count = newArr[i].count;
                        _this.$refs[i][0].innerHTML = _this.changeNum[i].count;
                        if(i===newArr.lenght){
                            clearInterval(_this.timeID);
                        }
                    }
                })
            
        },10)
    },
    methods: {
        // numChange(num){
        //     num = Number(num);
        //     let time = 1000; //一秒内
        //     let init = 0;
            // function go(){
            //     setInterval(function(){

            //     },)
            // }
            // return ;
        // }
        scorllHandle(event){
            console.log(1234);

        }
    },
    created(){
        
        for(let key in games){
            let count = '';
            let unit = '';
            for(let i=0;i<games[key].downloads.length;i++){
                if(/\d/.test(games[key].downloads[i])){
                    count+=games[key].downloads[i];
                }else{
                    unit+=games[key].downloads[i];
                }
            }
            this.gamesData.push(games[key]);
            this.changeNum.push({
                count:count,
                unit:unit
            });
        }
    }
  }
</script>

<style lang="less" scoped>
  .homePage_wrap {
    max-width:1920px;
    margin:0 auto;
    // 轮播图
    background-color: #1f1737;
    .top-carousel {
       max-width:1980px;
       margin:0 auto;
    }
    // 游戏推荐
    .best-game {
      width: 100%;
      min-height: 798px;
      background: url("../../../static/img/background_1.png") repeat center;
      position: relative;
      font-family: 'Bahnschrift';

      .list {
          display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
          flex-wrap:wrap;
          padding:3%;
        .game-icon  {
                flex:0 0 33.3%;
                display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
                height:200px;
                .icon {
                  flex:1;
                  display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
                  align-items:center;
                  justify-content:flex-end;
                  padding:1%;
                  img {
                      width:150px;
                      height:auto;
                  }
                }
                .number {
                  flex:1;
                  display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
                  align-items:center;
                  padding:2%;
                  color:#404040;
                  &>div{
                      .count {
                          .num {
                              font-size:45px;
                              line-height: 50px;
                          }
                          .unit {
                              font-size:22px;
                          }
                      }
                  }

                }
                @media screen and (max-width:768px) {
                     flex:0 0 50%;
                }
                @media screen and (max-width:500px) {
                      height:140px;
                     flex:0 0 100%;
                    .icon {
                      img {
                          width:90px;
                          height:auto;
                      }
                    }
                    .number {
                        &>div{
                            .count {
                                .num {
                                    font-size:38px;
                                    line-height: 44px;
                                }
                                .unit {
                                    font-size:20px;
                                }
                            }
                        }

                    }
                }
            
        }

      }

    }
    // 游戏数据展示
    .game-data {
      width: 100%;
      min-height: 798px;
      font-family: 'Bahnschrift';
      background: url("../../../static/img/background_2.png") repeat center;
      padding-bottom:10%;
      .title {
        text-align: center;
        color:#fff;
        font-size:28px;
        padding-top:8%;
        padding-bottom:4%;
      }
      .list{
      display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
      flex-wrap:wrap;
        .item {
            flex:0 0 33.3%;
            background-color: pink;
            display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
            height:200px;
            background:#5abe99;
            .icon {
              flex:2;
              display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
              align-items:center;
              justify-content:flex-end;
              padding:1%;
              img {
                  width:auto;
                  height:auto;
              }
            }
            .number {
              flex:3;
              display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
              align-items:center;
              padding:2%;
              color:#fff;
              &>div{
                  .count {
                      .num {
                          font-size:46px;
                          line-height: 50px;
                      }
                      .unit {
                          font-size:22px;
                      }
                  }
              }

            }

            @media screen and (max-width:768px) {
                  flex:0 0 50%;
            }
            @media screen and (max-width:500px) {
                  height:140px;
                  flex:0 0 100%;
                .icon {
                  img {
                      width:90px;
                      height:auto;
                  }
                }
                .number {
                    &>div{
                        .count {
                            .num {
                                font-size:40px;
                                line-height: 44px;
                            }
                            .unit {
                                font-size:20px;
                            }
                        }
                    }

                }
            }


        }
      }

    }
    // 用户评价
    .user-comment {
      width: 100%;
      // height: 700px;
      font-family: 'Bahnschrift';
      background:#eeeeee;
      padding-bottom:2%;
        .title {
          text-align: center;
          color:#444444;
          font-size:28px;
          padding-top:5%;
          padding-bottom:4%;
        }
        .carousel-inner {
          width:100%;
          // height:442px;
            .content {
                display:flex;-webkit-display:flex;-moz-display:flex;-o-display:flex;
                &>img {
                    flex:1 0 33.3%;
                    margin:0.2%;
                }
            }
            @media screen and (max-width:768px) {
                .content {
                    &>img {
                        flex:1 0 100%;
                    }
                }
            }
        }

    }
  }
</style>
