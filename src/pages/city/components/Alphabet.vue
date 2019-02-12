<template>
  <ul id="Alphabets" ref="RightListBox">
    <li v-for="(al, index) of Alphabets" :key="'al_' + index" ref="RightList"
        @touchstart="TouchStart"
        @touchmove="TouchMove"
        @touchend="TouchEnd"
        @click="getWord">{{ al }}</li>
  </ul>
</template>

<script>
export default {
  name: 'alphabet',
  props: {
    Alphabets: Array
  },
  data () {
    return {
      TouchStatus: false,
      AY: 0,
      oneHeight: 0,
      TopHeight: 0,
      Touching: false
    }
  },
  mounted () {
    this.AY = this.$refs.RightList[0].offsetTop
    this.oneHeight = this.$refs.RightList[0].offsetHeight
    this.TopHeight = this.$refs.RightListBox.parentNode.offsetTop
  },
  methods: {
    getWord (e) {
      this.$emit('word', e.target.innerHTML)
    },
    TouchStart () {
      this.TouchStatus = true
    },
    TouchMove (e) {
      if (this.TouchStatus) {
        if (this.Touching) {
          clearTimeout(this.Touching)
        }
        this.Touching = setTimeout(() => {
          let TouchY = e.touches[0].clientY
          let WhichWord = Math.floor((TouchY - this.TopHeight - this.AY) / this.oneHeight)
          if (WhichWord < 0) {
            WhichWord = 0
          } else if (WhichWord > this.Alphabets.length - 1) {
            WhichWord = this.Alphabets.length - 1
          }
          this.$emit('word', this.Alphabets[WhichWord])
        }, 20)
      }
    },
    TouchEnd () {
      this.TouchStatus = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~styles/sassreset.scss";
  #Alphabets{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li{
      text-align: center;
      line-height: .44rem;
      color: $HeaderBgColor;
      font-size: .2rem;
    }
  }
</style>
