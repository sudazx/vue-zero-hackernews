<template>
  <p class="back-to-top" v-show="state" @click="backToTop">Top</p>
</template>

<script type="text/ecmascript-6">
  import { addHook, proxyTimerListen } from '../services/ScrollingService'
  import jquery from 'jquery'
  export default {
    name: 'backToTop',
    data: function () {
      return {
        state: false
      }
    },
    methods: {
      changeState: function (state) {
        if (this.state !== state) {
          this.state = state
        }
      },
      backToTop: function () {
        jquery('html,body').animate({scrollTop: 0}, 500)
      }
    },
    mounted: function () {
      let self = this
      addHook(proxyTimerListen(function () {
        let scrollTop = document.documentElement.scrollTop
        self.changeState(scrollTop > 50)
      }))
    }
  }
</script>

<style>
  .back-to-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    border-radius: 20px;
    height: 40px;
    width: 40px;
    text-align: center;
    line-height: 3;
    background-color: #38A7CC;
    font-size: 14px;
    color: #ffffff;
  }

  .back-to-top:hover {
    cursor: pointer;
  }

</style>
