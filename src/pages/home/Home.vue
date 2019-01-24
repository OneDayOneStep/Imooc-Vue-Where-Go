<template>
  <div :class="defaultTit">
    <HomeHeader />
    <HomeSwiper />
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  data: function () {
    return {
      msg: 'This is My First Vue Project',
      defaultTit: 'DefaultTit'
    }
  },
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="scss" scoped>
</style>
