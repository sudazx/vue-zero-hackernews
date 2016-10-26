<template>
  <li class="h-item" @click="openUrl">
    <div class="h-item-score">{{ item.score }}</div>
    <div class="h-item-detail">
        <div class="h-item-detail-line">
          <span class="h-item-detail-info">{{ item.title }}</span>
          <span v-if="host">({{ host }})</span>
        </div>
        <div class="h-item-detail-line">
          <span>by {{ item.by }} at {{ formatTime }}</span>
          <span>|</span>
          <span>{{ comments }} comments</span>
        </div>
    </div>
  </li>
</template>

<script type="text/ecmascript-6">
import moment from 'moment'
export default{
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    openUrl: function () {
      if (this.item.url) {
        window.open(this.item.url)
      }
    }
  },
  computed: {
    host: function () {
      if (!this.item.url) {
        return null
      }
      let matches = this.item.url.match(/\/\/(.*?)\//)
      return matches ? matches[0].substring(2).replace(/\//, '') : this.item.url
    },
    formatTime: function () {
      return moment(this.item.time).format('HH:mm:ss')
    },
    comments: function () {
      let cts = this.item.kids || this.item.descendants || []
      return cts.length
    }
  }
}
</script>

<style>
  .h-item{
    padding: 4px;
    height: 50px;
    background-color: #ffffff;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 10px;
  }

  .h-item:hover{
    cursor: pointer;
  }

  .h-item-score{
    display: inline-block;
    width: 60px;
    text-align: center;
    height: 100%;
    color: #AF6609;
    font-size: 20px;
    vertical-align: middle;
    line-height: 1.5;
  }
  .h-item-detail{
    height: 100%;
    display: inline-block;
    color : #897f7f;
  }
  .h-item-detail-info{
    color: #333333;
  }
  .h-item-detail-line{
    margin: 4px;
  }

</style>
