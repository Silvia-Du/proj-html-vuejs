<template>
  <div id="app">

    <HeaderComp />
    <MainComp />
    <FooterComp />
   
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/mainComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
}
}
</script>

<style lang="scss">

@import './assets/style/vars.scss';
@import './assets/style/global.scss';
@import '~@fortawesome/fontawesome-free/css/all.min.css';



</style>
