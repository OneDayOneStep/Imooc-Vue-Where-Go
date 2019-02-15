<template>
  <div>
    <div class="banner" @click="DetailImgs">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_600x330_b5e86902.jpg" />
      <div class="banner-info">
        <div class="banner-title">长隆野生动物世界(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont">&#xe633;</span>
          <span>108</span>
        </div>
      </div>
    </div>
    <Gallary :imgs="imgs" v-show="ShowGallary" @CloseDetailImgs="CloseDetailImgs" />
  </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
export default {
  name: 'detail-banner',
  components: {
    Gallary
  },
  data () {
    return {
      ShowGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1412/a7/2540d07d18ddb77e1dfca45023a6467c.water.jpg_r_800x800_d89b73a4.jpg',
        'http://img1.qunarzz.com/sight/p0/1412/6a/5714fc51ba54070d7dda8b4aeab36b7c.water.jpg_r_800x800_29c72c28.jpg',
        'http://img1.qunarzz.com/sight/p0/1507/55/e0f36c8f86c1d5914af0bcb1fbfc5bf1.water.jpg_r_800x800_a6b7692d.jpg',
        'http://img1.qunarzz.com/sight/p0/1507/f6/56e09203b0ebe7ef122f16cd0b4cc786.water.jpg_r_800x800_77b0d943.jpg'
      ]
    }
  },
  methods: {
    DetailImgs () {
      this.ShowGallary = true
    },
    CloseDetailImgs () {
      this.ShowGallary = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~styles/sassreset.scss";
  .banner{
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    position: relative;
    .banner-img{
      width: 100%;
    }
    .banner-info{
      display: flex;
      position: absolute;
      left: 0;right: 0;
      bottom: 0;
      line-height: .6rem;
      text-indent: .2rem;
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
      .banner-title{
        flex: 1;
        color: #FFF;
        font-weight: 600;
      }
      .banner-number{
        height: .4rem;
        text-indent: 0;
        padding: 0 .2rem;
        margin: .1rem .2rem 0 0;
        background: rgba(0, 0, 0, .6);
        line-height: .4rem;
        @include border-radius(.2rem);
        @include box-shadow(0 0 2px #666)
        span{
          color: #FFF;
        }
        .iconfont{
          color: #FFF;
        }
      }
    }
  }
</style>
