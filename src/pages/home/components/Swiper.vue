<template>
  <div class="wrapper" :style="gBottom">
    <swiper :options="swiperOption" ref="mySwiper" v-if="SwiperLength">
      <!-- slides -->
      <swiper-slide v-for="(img, index) of SwiperList.list" :key="'HomeSwiper_' + index">
        <img :src="img.imgUrl" class="SwiperImgs" ref="element" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      imgSrc: ['http://img1.qunarzz.com/piao/fusion/1811/7c/8e5c4ab8ee8b7402.jpg_750x200_dd7a38dd.jpg',
        'http://img1.qunarzz.com/piao/fusion/1812/d6/daa880b254940402.jpg_750x200_b114308a.jpg',
        'http://img1.qunarzz.com/piao/fusion/1811/31/da037478f37cf202.jpg_750x200_fe28d396.jpg'],
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      }
    }
  },
  props: {
    SwiperList: Object
  },
  computed: {
    gBottom () {
      return 'padding-bottom:' + this.SwiperList.height / this.SwiperList.width * 100 + '%'
    },
    SwiperLength () {
      return this.SwiperList.list !== undefined
    }
  }
}
</script>

<style lang="scss" scoped>
   /* /deep/ 解决 sass less 在 scped 属性下局部样式无法影响第三方组件问题 stylus 使用 >>> */
  .wrapper /deep/ .swiper-pagination-bullet-active{
    background: #FFF;
  }
  .wrapper{
    overflow: hidden;
    width: 100%;
    height: 0;
    background: #DDD;
    padding-bottom: 20%;
  }
  .SwiperImgs{
    width: 100%;
  }
</style>
