<template>
  <div>
    <HomeHeader />
    <HomeSwiper :SwiperList="SwiperList" />
    <HomeIcons  :iconsList="iconsList" />
    <Recommend  :RecommendList="recommendList" />
    <Weekend    :WeekendList="weekendList" />
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
import Axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      SwiperList: {},
      SwiperListH: 0,
      SwiperListW: 0,
      iconsList: [],
      recommendList: [],
      weekendList: [],
      lastChooseCity: this.ChooseCity
    }
  },
  computed: {
    ...mapState({
      ChooseCity: 'city'
    })
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    Recommend,
    Weekend
  },
  methods: {
    getHomeData () {
      Axios.get('/api/index.json?city=' + this.ChooseCity).then(this.getHomeDataSuccess)
    },
    getHomeDataSuccess (res) {
      var Res = res.data
      if (Res.ret && Res.data) {
        this.currentCity = Res.data.city
        this.SwiperList = Res.data.swiperList
        this.iconsList = Res.data.iconList
        this.recommendList = Res.data.recommendList
        this.weekendList = Res.data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeData()
  },
  activated () {
    if (this.lastChooseCity !== this.ChooseCity) {
      this.lastChooseCity = this.ChooseCity
      this.getHomeData()
    }
  }
}
</script>
