<template>
  <div>
    <Banner />
    <Header />
    <div class="content"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Header from './components/Header'
export default {
  name: 'detail',
  components: {
    Banner,
    Header
  }
}
</script>

<style lang="scss" scoped>
  .content{
    height: 50rem;
  }
</style>
