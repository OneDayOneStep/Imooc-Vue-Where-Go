<template>
    <transition>
      <slot></slot>
    </transition>
</template>

<script>
export default {
  name: 'fade'
}
</script>

<style lang="scss" scoped>
  @import "~styles/sassreset.scss";
  .v-enter, .v-leave-to{
    opacity: 0
  }
  .v-enter-active, .v-leave-active{
    @include transition(opacity, .4s)
  }
</style>
