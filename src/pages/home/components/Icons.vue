<template>
  <swiper :options="swiperOption" ref="mySwiper" v-if="iconsLists.length > 0">
    <swiper-slide v-for="(icons, index) of iconsLists" :key="'Icons_' + index">
      <div class="icons">
        <div class="icon" v-for="(icon, index_) of icons" :key="'Icon_' + index_">
          <div class="iconImg"><img :src="icon.imgUrl" /></div>
          <div class="iconName">{{ icon.desc }}</div>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconSrc: [{
        name: '门票',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
      }, {
        name: '广州景点',
        src: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
      }, {
        name: '动植物园',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
      }, {
        name: '游乐园',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png'
      }, {
        name: '珠江夜游',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'
      }, {
        name: '泡温泉',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png'
      }, {
        name: '一日游',
        src: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
      }, {
        name: '展馆展览',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png'
      }, {
        name: '玩转长隆',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png'
      }, {
        name: '农家度假',
        src: 'http://img1.qunarzz.com/piao/fusion/1803/90/59a2f523ee2f9202.png'
      }],
      swiperOption: {
        loop: true
      }
    }
  },
  computed: {
    iconSrcList () {
      let [ResultData, ReturnData] = [this.iconSrc, []]
      for (let i = 0; i < ResultData.length; i++) {
        if (ReturnData[Math.floor(i / 8)] === undefined) {
          ReturnData[Math.floor(i / 8)] = []
        }
        ReturnData[Math.floor(i / 8)].push(ResultData[i])
      }
      return ReturnData
    },
    iconsLists () {
      let [ResultData, ReturnData] = [this.iconsList, []]
      for (let i = 0; i < ResultData.length; i++) {
        if (ReturnData[Math.floor(i / 8)] === undefined) {
          ReturnData[Math.floor(i / 8)] = []
        }
        ReturnData[Math.floor(i / 8)].push(ResultData[i])
      }
      return ReturnData
    }
  },
  props: {
    iconsList: Array
  }
}
</script>

<style lang="scss" scoped>
  @import "~styles/sassreset.scss";
  .swiper-container{
    margin: .15rem 0;
  }
  .icons{
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    .icon{
      float: left;
      width: 25%;
      padding-bottom: 25%;
      position: relative;
      .iconImg {
        position: absolute;
        top: 0;left: 0;
        right: 0; bottom: .44rem;
        @include box-sizing;
        padding: .1rem;
        img{
          height: 100%;
          display: block;
          margin: 0 auto;
        }
      }
      .iconName{
        position: absolute;
        bottom: 0;width: 100%;
        text-align: center;
        font-size: .2rem;
        line-height: .44rem;
      }
    }
  }
</style>
