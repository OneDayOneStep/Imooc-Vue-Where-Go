<template>
  <div class='Search'>
    <input type='text' placeholder='请输入城市名称' v-model='SearchData' />
    <div class='SearchContent'>
      <div v-for="(city, index) of Citys" v-show="city.indexOf(SearchData) >= 0 && SearchData !== ''" :key="'city_' + index" @click="ChangeCurrentCity(city)">{{ city }}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'search',
  data () {
    return {
      SearchData: '',
      Citys: ['广州', '日本', '上海', '北京', '美国', '韩国', '广东']
    }
  },
  methods: {
    ChangeCurrentCity (e) {
      this.MutationsChangeCity(e)
      this.$router.push('/home')
    },
    ...mapMutations({
      MutationsChangeCity: 'ChangeCurrentCity'
    })
  }
}
</script>

<style lang='scss' scoped>
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
  .SearchContent{
    position: absolute;
    left: 0;
    right: 0;
    background: #FFF;
    z-index: 5;
    @include box-shadow(0 1px 2px #888);
    div{
      line-height: .6rem;
      border-bottom: #EEE 1px solid;
      color: #666;
    }
  }
</style>
