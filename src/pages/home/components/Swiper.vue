<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(img, index) of imgSrc" :key="'HomeSwiper_' + index">
        <img :src="img" class="SwiperImgs" />
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
        loop: true
      }
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
    padding-bottom: 26.7%;
    background: #DDD;
  }
  .SwiperImgs{
    width: 100%;
  }
</style>
