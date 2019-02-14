<template>
    <div class="header">
      <div class="header-left">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        {{ HomeHeader }}
      </div>
      <router-link to="/city">
        <div class="header-right">{{ this.CurrentCity }}
          <span class="iconfont">&#xe62d;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data: function () {
    return {
      HomeHeader: 'Where Go'
    }
  },
  computed: {
    // ...mapState(['city'])
    ...mapState({CurrentCity: 'city'})
  }
}
</script>

<style lang="scss" scoped>
  @import "~styles/sassreset.scss";
  .header{
    line-height: .86rem;
    height: .86rem;
    display: flex;
    background: $HeaderBgColor;
    .header-left{
      width: .64rem;
      float: left;
      text-align: center;
      .iconfont{
        color: #FFF;
      }
    }
    .header-input{
      flex: 1;
      background: #FFF;
      border: #FFF .1rem solid;
      margin: .11rem;
      height: .64rem;
      line-height: .44rem;
      color: #AAA;
      @include box-sizing;
      @include border-radius;
      .iconfont{
        color: #AAA;
        margin-right: .1rem;
      }
    }
    .header-right{
      min-width: 1.24rem;
      float: right;
      color: #FFF;
      text-align: center;
      .iconfont{
        color: #FFF;
        margin-right: .1rem;
      }
    }
  }
</style>
