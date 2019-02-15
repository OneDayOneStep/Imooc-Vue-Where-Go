<template>
    <div>
      <div v-for="(it, index) of List" :key="'List_' + index">
        <div class="List-Title">
          <div class="List-Title-Icon"></div>
          {{ it.title }}
        </div>
        <div v-if="it.list" class="inList">
          <detail-list :List="it.list"></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    List: Array
  }
}
</script>

<style lang="scss" scoped>
  .List-Title{
    height: .8rem;
    line-height: .8rem;
    font-size: .32rem;
    border-bottom: #E5E5E5 .01rem solid;
    .List-Title-Icon{
      display: inline-block;
      width: .36rem;
      height: .36rem;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
      margin:.1rem 0 0 .3rem;
      background-size: .4rem 3rem;
      position: relative;
      top: .07rem;
    }
  }
  .inList{
    padding-left: .5rem;
  }
</style>
