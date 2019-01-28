<template>
  <div>
    <div class="weekend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="(img, index) of imgList" :key="'imgList_' + index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="img.imgSrc" />
        </div>
        <div class="item-info">
          <p class="item-title">{{ img.name }}</p>
          <p class="item-desc">{{ img.info }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'weekend',
  data () {
    return {
      imgList: [
        {
          name: '长隆野生动物园',
          info: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？',
          imgSrc: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg'
        }, {
          name: '长隆马戏团',
          info: '南国滨海之城，避寒胜地，有暖暖的阳光，海风习习，吃着海鲜逛逛老街多惬意啊',
          imgSrc: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg'
        }, {
          name: '长隆欢乐世界',
          info: '自驾粤西，这里有最全最心仪的温泉池，环境优美，舒舒服服的泡个热汤，远离繁忙的工作',
          imgSrc: 'http://img1.qunarzz.com/sight/source/1602/9c/39c5ce9ff58609.jpg_r_640x214_efb90102.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~styles/sassreset.scss";
  .border-bottom::before{
    border-color: #DDD;
  }
  .weekend-title{
    line-height: .8rem;
    background: #EEE;
    text-indent: .3rem;
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
    img{
      width: 100%;
    }
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
      color: #41577d;
      line-height: .52rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: .2rem;
    }
  }
</style>
