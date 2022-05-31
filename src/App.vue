<template>
  <div id="app">

    <HeaderComp :navItems="navItems" :socialItems="socialIcons" @clickedLink ="getClicked"/>
    <MainComp v-show="defaultComp === 'Main'"/>
    <MainAddCourse />
    <FooterComp />
   
  </div>
</template>

<script>

//import component
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';
//import data
import { socialIcons, navItems } from './assets/data/archivio';
import MainAddCourse from './components/MenuComp/MainAddCourse.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp,
    MainComp,
    MainAddCourse
},

data(){
  return{
    socialIcons,
    navItems,
    defaultComp: 'Main'
  }
},

methods: {
  getClicked(string){
    this.defaultComp = string
  }
},
}
</script>

<style lang="scss">

@import './assets/style/vars.scss';
@import './assets/style/global.scss';
@import '~@fortawesome/fontawesome-free/css/all.min.css';



</style>
