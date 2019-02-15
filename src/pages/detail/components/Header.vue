<template>
  <div>
    <router-link to="/home" tag="div" class="header-abs" v-show="ShowAbs" :style="'opacity:' + Opacity">
        <span class="iconfont">&#xe624;</span>
    </router-link>
    <div class="header-fixed" v-show="!ShowAbs" :style="'opacity:' + Opacity">
      <router-link to="/home" tag="div" class="header-fixed-back">
          <span class="iconfont">&#xe624;</span>
      </router-link>
      热门景点
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailheader',
  data () {
    return {
      ShowAbs: true,
      Opacity: 1
    }
  },
  methods: {
    PageScroll () {
      let Scrolltop = document.documentElement.scrollTop
      if (Scrolltop < 50) {
        this.ShowAbs = true
        this.Opacity = (50 - Scrolltop) / 50
      } else {
        this.ShowAbs = false
        this.Opacity = (Scrolltop - 50) / 50
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.PageScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.PageScroll)
  }
}
</script>

<style lang="scss" scoped>
  @import "~styles/sassreset.scss";
  .header-fixed{
    position: fixed;
    top: 0;right: 0;left: 0;
    line-height: .86rem;
    height: .86rem;
    background: $HeaderBgColor;
    text-align: center;
    color: #FFF;
    padding-right: .5rem;
    z-index: 10;
    .header-fixed-back{
      width: .64rem;
      text-align: center;
      float: left;
      .iconfont{
        color: #FFF;
      }
    }
  }
  .header-abs{
    position: absolute;
    left: .2rem;
    top: .2rem;
    height: .8rem;
    width: .8rem;
    line-height: .8rem;
    text-align: center;
    padding-right: .1rem;
    background: rgba(0, 0, 0, .6);
    @include box-sizing(border-box)
    @include border-radius(50%);
    .iconfont{
      color: #FFF;
    }
  }
</style>
