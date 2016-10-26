<template>
  <ul class="h-list">
    <HackerItem v-for="item in items" :item="item"></HackerItem>
  </ul>
</template>

<script type="text/ecmascript-6">
import HackerItem from './HackerItem'

export default {
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {
    HackerItem
  }
}
</script>

<style>

  .h-list{
    padding: 4px 10px;
    width: 80%;
    margin: 20px auto;
    border-radius: 6px;
  }

</style>
