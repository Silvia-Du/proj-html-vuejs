<template>
  <div id="app">

    <HeaderComp />
   
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp
}
}
</script>

<style lang="scss">

@import './assets/style/vars.scss';
@import './assets/style/global.scss';
@import '~@fortawesome/fontawesome-free/css/all.min.css';



</style>
