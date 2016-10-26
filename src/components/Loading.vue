<template>
  <div class="spin-loading" v-show="loading">
  </div>
</template>

<script type="text/ecmascript-6">
import Spinner from 'spin.js'

let spinner = new Spinner({
  lines: 10,
  length: 6,
  width: 8,
  radius: 10,
  color: '#f5a632'
})

export default {
  name: 'loading',
  props: {
    loading: {
      type: Boolean,
      required: true
    }
  },
  mounted: function () {
    this.$el.appendChild(spinner.spin().el)
  }
}
</script>
<style>
  .spin-loading{
    position: relative;
  }
</style>
