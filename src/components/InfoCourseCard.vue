<template>
  <div class="info-course">
    <div class="container">
      <div class="row">
        <!-- Card -->
        <div v-for="(why, index) in whyCourses" :key="`why-${index}`"
        class="_card col-12 col-md-6 mb-4">
          <div class="_box d-flex flex-row py-5 px-2">
            <div class="px-4">
              <i :class="`fa-solid ${why.icon}`"></i>
            </div>
            <div class="text-box">
              <p class="title">{{why.title}}</p>
              <p class="description">{{why.text}}</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>

import {whyCourses} from '../assets/data/dataMainComp';

export default {
  name: 'InfoCourseComp',

  data(){
    return{
      whyCourses
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars.scss';


._card {
  ._box{
    background-color: white;
    border-left: 5px solid $darkYellow;
    box-shadow: 0px 0px 10px $textGray;
    transition: all 1s;
    &:hover{
      background-color: $darkYellow;
      transform: scale(1.1);
    }
    &:hover .text-box .description{
      color: $textDarkColor;  
    }
    &:hover i{
      color: white;  
    }
  
    .text-box{
      & p:first-child{
        font-weight: 800;
        color: $titleColor;
        font-size: 1.5rem;
        font-family: "Roboto Slab", serif;
      }
  
      & p:last-child{
        color: $textDarkColor;
      }
      text-align: left;
    }
    i{
      font-size: 3rem;
      color: $darkYellow;
    }
  }
}

</style>