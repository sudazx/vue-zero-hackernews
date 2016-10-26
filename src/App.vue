<template>
  <div>
    <PageHeader @headerChange="headerChange"></PageHeader>
    <div class="list-wrapper">
      <HackerList :items="items"></HackerList>
    </div>
    <Loading :loading="loading"></Loading>
    <BackToTop></BackToTop>
  </div>
</template>

<script  type="text/ecmascript-6">
import PageHeader from './components/PageHeader'
import HackerList from './components/HackerList'
import DataService from './services/DataService'
import Loading from './components/Loading'
import BackToTop from './components/BackToTop'
import { reachBottomListening } from './services/ScrollingService'

export default {
  name: 'app',
  data: function () {
    return {
      items: [],
      pageSize: 10,
      type: 'top',
      loading: false
    }
  },
  methods: {
    loadData: function (start) {
      this.loading = true
      start = start || 0
      DataService.getHackers(this.type, start, this.pageSize).then(data => {
        this.items = data
        this.loading = false
      })
    },
    loadMore: function () {
      if (this.loading) {
        return void 0
      }
      const start = this.items.length
      this.loading = true
      DataService.getHackers(this.type, start, this.pageSize).then(data => {
        this.items = this.items.concat(data)
        this.loading = false
      })
    },
    headerChange: function (type) {
      if (this.type !== type) {
        this.type = type
        this.items = []
        this.loadData()
      }
    }
  },
  created: function () {
    this.loadData()
  },
  components: {
    PageHeader,
    HackerList,
    Loading,
    BackToTop
  },
  mounted: function () {
    reachBottomListening(this.loadMore)
  }
}
</script>

<style>

  html,body{
    padding: 0;
    margin: 0;
    height: 100%;
  }

  body{
    background-color: #f1f4f6;
  }

  *::selection{
    background:none;
  }

  ul,li{
    list-style: none;
  }

  .list-wrapper{
    padding-top: 50px;
  }

</style>
