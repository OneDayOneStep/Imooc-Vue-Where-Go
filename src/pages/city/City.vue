<template>
    <div>
      <CityHeader />
      <CitySearch />
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'city',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch
  }
}
</script>
