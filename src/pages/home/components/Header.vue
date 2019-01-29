<template>
    <div class="header">
      <div class="header-left">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        {{ HomeHeader }}
      </div>
      <div class="header-right">{{ city }}
        <span class="iconfont">&#xe62d;</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data: function () {
    return {
      HomeHeader: 'Where Go'
    }
  },
  props: {
    city: String
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
      width: 1.24rem;
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
