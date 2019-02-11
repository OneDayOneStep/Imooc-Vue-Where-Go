<template>
  <div class="Search">
    <input type="text" placeholder="请输入城市名称" />
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>

<style lang="scss" scoped>
  @import "~styles/sassreset.scss";
  .Search{
    text-align: center;
    background: $HeaderBgColor;
    input{
      width: 100%;border:$HeaderBgColor .1rem solid;
      @include box-sizing;
      @include border-radius(.2rem);
      line-height: .5rem;
      text-align: center;
    }
  }
</style>
