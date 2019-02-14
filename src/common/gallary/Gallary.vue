<template>
    <div class="container" @click="CloseDetailImgs">
      <div class="wrapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide v-for="(img, index) in imgs" :key="'Gallary' + index">
            <img :src="img" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>
export default {
  name: 'gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    CloseDetailImgs () {
      this.$emit('CloseDetailImgs')
    }
  },
  props: {
    imgs: Array
  }
}
</script>

<style lang="scss" scoped>
  .container /deep/ .swiper-container{
    overflow: inherit;
  }
  .container{
    z-index: 500;
    position: fixed;
    left: 0;right: 0;
    top: 0;bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #000;
    .wrapper{
      .swiper-slide img{
        width: 100%;
      }
      .swiper-pagination{
        bottom: -.5rem;
        color: #FFF;
        /deep/ span{
          color: #FFF;
        }
      }
    }
  }
</style>
