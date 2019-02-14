<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="areaTitle">当前城市</div>
        <div class="buts-list">
          <div class="buts-wrapper">
            <div class="buts">{{ this.CurrentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="areaTitle">热门城市</div>
        <div class="buts-list">
          <div class="buts-wrapper">
            <div class="buts" @click="ChangeCurrentCity('广州')">广州</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div v-for="(l, index) of cityList" :key="'l_' + index" :ref="'l_' + l.title">
          <div class="areaTitle">{{ l.title }}</div>
          <div class="other-list" v-for="(li, index) of l.list" :key="'li_' + index" @click="ChangeCurrentCity(li)">{{ li }}</div>
        </div>
      </div>
    </div>
    <Alphabet :Alphabets="Alphabets" @word="scrollWithWord" />
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Alphabet from './Alphabet'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'list',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
    scrollWithWord (e) {
      let ele = this.$refs['l_' + e][0]
      this.scroll.scrollToElement(ele)
    },
    ChangeCurrentCity (e) {
      this.MutationsChangeCity(e)
      this.$router.push('/home')
    },
    ...mapMutations({
      MutationsChangeCity: 'ChangeCurrentCity'
    })
  },
  components: {
    Alphabet: Alphabet
  },
  data () {
    return {
      cityList: [
        {
          title: 'A',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }, {
          title: 'B',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }, {
          title: 'C',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }, {
          title: 'D',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }, {
          title: 'E',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }, {
          title: 'F',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }, {
          title: 'G',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }, {
          title: 'H',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }, {
          title: 'I',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }, {
          title: 'J',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }, {
          title: 'K',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }, {
          title: 'L',
          list: ['韩国', '美国', '日本', '俄罗斯']
        }
      ]
    }
  },
  computed: {
    ...mapState({
      CurrentCity: 'city'
    }),
    Alphabets () {
      var Alist = []
      this.cityList.forEach(function (e) {
        Alist.push(e.title)
      })
      return Alist
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~styles/sassreset.scss";
  .list{
    position: absolute;
    top: 1.58rem;left: 0;right: 0;bottom: 0;
    overflow: hidden;
    .areaTitle{
      line-height: .5rem;
      background: #EEE;
      padding-left: .2rem;
      color: #666;
      border-bottom: #C5C5C5 .01rem solid;
      border-top: #D5D5D5 .01rem solid;
    }
    .buts-list{
      padding: .1rem;
      overflow: hidden;
      .buts-wrapper{
        width: 33.33%;
        float: left;
        .buts{
          margin: .1rem;
          text-align: center;
          border: .02rem #BBB solid;
          @include border-radius;
          color: #666;
          line-height: .5rem;
        }
      }
    }
    .other-list{
      line-height: .6rem;
      text-indent: .2rem;
      .o-list{
        border-bottom: #D5D5D5 .01rem solid;
        color: #666;
      }
    }
  }
</style>
