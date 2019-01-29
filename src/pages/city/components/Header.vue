<template>
    <div class="header">
      <router-link to="/home">
        <div class="header-back">
          <span class="iconfont">&#xe624;</span>
        </div>
      </router-link>
      城市选择
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="scss" scoped>
  @import "~styles/sassreset.scss";
  .header{
    line-height: .86rem;
    height: .86rem;
    background: $HeaderBgColor;
    text-align: center;
    color: #FFF;
    padding-right: .5rem;
    .header-back{
      width: .64rem;
      text-align: center;
      float: left;
      .iconfont{
        color: #FFF;
      }
    }
  }
</style>
