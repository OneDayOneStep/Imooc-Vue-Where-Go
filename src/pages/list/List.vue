<template>
  <div :class="defaultTit">{{ msg }}</div>
</template>

<script>
export default {
  name: 'List',
  data: function () {
    return {
      msg: 'List Page',
      defaultTit: 'DefaultTit'
    }
  }
}
</script>

<style scoped>
  .DefaultTit{
    font-size:20px;text-align:center;
  }
</style>
