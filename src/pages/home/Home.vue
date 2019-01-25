<template>
  <div :class="defaultTit">
    <HomeHeader />
    <HomeSwiper />
    <HomeIcons />
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
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
    HomeSwiper,
    HomeIcons
  }
}
</script>
