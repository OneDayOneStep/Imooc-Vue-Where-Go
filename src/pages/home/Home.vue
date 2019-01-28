<template>
  <div :class="defaultTit">
    <HomeHeader />
    <HomeSwiper />
    <HomeIcons />
    <Recommend />
    <Weekend />
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
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
    HomeIcons,
    Recommend,
    Weekend
  }
}
</script>
