<template>
  <div :class="defaultTit">
    <HomeHeader />
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
export default {
  name: 'Home',
  data: function () {
    return {
      msg: 'This is My First Vue Project',
      defaultTit: 'DefaultTit'
    }
  },
  components: {
    HomeHeader
  }
}
</script>

<style lang="scss" scoped>
</style>
