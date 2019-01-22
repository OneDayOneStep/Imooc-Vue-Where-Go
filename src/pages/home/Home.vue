<template>
  <div :class="defaultTit">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      msg: 'This is My First Vue Project',
      defaultTit: 'DefaultTit'
    }
  }
}
</script>

<style scoped>
  .DefaultTit *{
    font-size:20px;text-align:center;
  }
</style>
