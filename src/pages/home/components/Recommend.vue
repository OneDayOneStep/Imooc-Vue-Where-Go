<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link tag="li"
                   class="item border-bottom"
                   v-for="(img, index) of RecommendList"
                   :key="'imgList_' + index"
                   :to="'/detail/' + img.id"
      >
        <img class="item-img" :src="img.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{ img.title }}</p>
          <p class="item-desc">{{ img.desc }}</p>
          <button type="button" class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data () {
    return {
      imgList: [
        {
          name: '长隆野生动物园',
          info: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？',
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_250x250_86778c54.jpg'
        }, {
          name: '长隆马戏团',
          info: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊',
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201405/27/ef08b0cb4a5afb2f570e5c4dff5f743e.jpg_250x250_2e9029da.jpg'
        }, {
          name: '长隆欢乐世界',
          info: '自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作',
          imgSrc: 'http://img1.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_250x250_d4ca7f0a.jpg'
        }, {
          name: '长隆野生动物园',
          info: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？',
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201403/07/30b534b0de51ccac2906bcb6ba159988.jpg_250x250_86778c54.jpg'
        }, {
          name: '长隆马戏团',
          info: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊',
          imgSrc: 'http://img1.qunarzz.com/sight/p0/201405/27/ef08b0cb4a5afb2f570e5c4dff5f743e.jpg_250x250_2e9029da.jpg'
        }, {
          name: '长隆欢乐世界',
          info: '自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作',
          imgSrc: 'http://img1.qunarzz.com/sight/p0/1707/88/889ae02b07140066a3.img.jpg_250x250_d4ca7f0a.jpg'
        }
      ]
    }
  },
  props: {
    RecommendList: Array
  }
}
</script>

<style lang="scss" scoped>
  @import "~styles/sassreset.scss";
  .border-bottom::before{
    border-color: #DDD;
  }
  .recommend-title{
    line-height: .8rem;
    background: #EEE;
    text-indent: .3rem;
  }
  .item{
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    .item-img{
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info{
      flex: 1;
      padding: .1rem;
      min-width: 0;
      .item-title{
        line-height: .54rem;
        font-size: .32rem;
      }
      .item-desc{
        color: #BBB;
        line-height: .52rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .item-button{
        background: #FF9300;
        color: #FFF;
        padding: .06rem .2rem;
        @include border-radius;
        border: #FF9300 0 solid;
        margin-top: .08rem;
      }
    }
  }
</style>
