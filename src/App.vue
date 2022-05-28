<template>
  <div id="app">

    <HeaderComp :navItems="navItems" :socialItems="socialIcons"/>
    <MainComp />
    <FooterComp />
   
  </div>
</template>

<script>

//import component
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/mainComp.vue';
import FooterComp from './components/FooterComp.vue';
//import data
import { socialIcons, navItems } from './assets/data/archivio';

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    FooterComp
},

data(){
  return{
    socialIcons,
    navItems
  }
}
}
</script>

<style lang="scss">

@import './assets/style/vars.scss';
@import './assets/style/global.scss';
@import '~@fortawesome/fontawesome-free/css/all.min.css';



</style>
