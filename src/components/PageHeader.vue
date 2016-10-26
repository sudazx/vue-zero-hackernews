<template>
  <main class="hc">
    <div>
      <span class="logo">Zero</span>
    </div>
    <div class="route-links">
      <a @click="change">Top</a>
      <a @click="change">New</a>
      <a @click="change">Show</a>
      <a @click="change">Ask</a>
      <a @click="change">Job</a>
    </div>
    <div class="build-framework">
      <span>Built with Vue 2.0</span>
    </div>
  </main>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pageHeader',
  methods: {
    change: function (event) {
      let type = event.target.innerHTML.toLowerCase()
      this.$emit('headerChange', type)
    }
  }
}
</script>

<style>

  .hc{
    background-color: #F5A623;
    padding: 4px 40px;
    position: fixed;
    width: auto;
    top: 0;
    left: 0;
    right: 0;
  }

  .hc div{
    display: inline-block;
    line-height: 50px;
    height: 50px;
    color: #ffffff;
  }

  .logo{
    border: 1px solid #ffffff;
    padding: 4px;
  }

  .route-links{
    margin-left: 40px;
  }

  .route-links a{
    margin: 0 20px;
  }

  .route-links a:hover{
    cursor: pointer;
  }

  .build-framework{
    float: right;
    margin-right: 40px;
  }

</style>
