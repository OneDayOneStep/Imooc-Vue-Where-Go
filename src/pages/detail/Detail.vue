<template>
  <div>
    <Banner />
    <Header />
    <List :List="list" />
    <div class="content"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Header from './components/Header'
import List from './components/List'
export default {
  name: 'detail',
  data () {
    return {
      list: [{
        title: '成人票',
        list: [{
          title: '成人票A',
          list: [{title: '成人票A1'}]
        }, {
          title: '成人票B',
          list: [{title: '成人票B1'}]
        }, {
          title: '成人票C',
          list: [{title: '成人票C1'}]
        }]
      }, {
        title: '儿童票',
        list: [{
          title: '儿童票A',
          list: [{title: '儿童票A1'}]
        }, {
          title: '儿童票B',
          list: [{title: '儿童票B1'}]
        }, {
          title: '儿童票C',
          list: [{title: '儿童票C1'}]
        }]
      }, {
        title: '特惠票',
        list: [{
          title: '特惠票A',
          list: [{title: '特惠票A1'}]
        }, {
          title: '特惠票B',
          list: [{title: '特惠票B1'}]
        }, {
          title: '特惠票C',
          list: [{title: '特惠票C1'}]
        }]
      }, {
        title: '学生票',
        list: [{
          title: '学生票A',
          list: [{title: '学生票A1'}]
        }, {
          title: '学生票B',
          list: [{title: '学生票B1'}]
        }, {
          title: '学生票C',
          list: [{title: '学生票C1'}]
        }]
      }]
    }
  },
  components: {
    Banner,
    Header,
    List
  }
}
</script>

<style lang="scss" scoped>
  .content{
    height: 50rem;
  }
</style>
