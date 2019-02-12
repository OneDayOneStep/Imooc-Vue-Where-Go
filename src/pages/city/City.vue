<template>
    <div>
      <CityHeader />
      <CitySearch />
      <CityList />
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
export default {
  name: 'city',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    CityList: CityList
  }
}
</script>
