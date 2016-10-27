<template>
  <main class="hc">
    <div>
      <span class="logo">Zero</span>
    </div>
    <div class="route-links">
      <a @click="change(index)"
         v-for="(header, index) in headers"
         :class="{ active: header.active }">{{ header.name }}</a>
    </div>
    <div class="build-framework">
      <span>Built with Vue 2.0</span>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'pageHeader',
    data: function () {
      return {
        items: {
          array: ['top', 'new', 'show', 'ask', 'job'],
          activeIndex: 0
        }
      }
    },
    computed: {
      headers: function () {
        return this.items.array.map((arr, index) => ({
          name: arr,
          active: index === this.items.activeIndex
        }))
      }
    },
    methods: {
      change: function (index) {
        let type = this.items.array[index]
        this.items.activeIndex = index
        this.$emit('headerChange', type.toLowerCase())
      }
    }
  }
</script>

<style>

  .hc {
    background-color: #F5A623;
    padding: 4px 40px;
    position: fixed;
    width: auto;
    top: 0;
    left: 0;
    right: 0;
  }

  .hc div {
    display: inline-block;
    line-height: 50px;
    height: 50px;
    color: #ffffff;
  }

  .logo {
    border: 1px solid #ffffff;
    padding: 4px;
  }

  .route-links {
    margin-left: 40px;
  }

  .route-links a {
    margin: 0 20px;
    text-transform: uppercase;
  }

  .route-links a.active {
    border-bottom: 1px solid #ffffff;
  }

  .route-links a:hover {
    cursor: pointer;
  }

  .build-framework {
    float: right;
    margin-right: 40px;
  }

</style>
