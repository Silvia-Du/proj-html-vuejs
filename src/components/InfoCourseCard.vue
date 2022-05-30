<template>
  <div class="info-course">
    <div class="container">
      <div class="row">
        <!-- Card -->
        <div v-for="(why, index) in whyCourses" :key="`why-${index}`"
        class="card col-12 col-md-6 d-flex flex-row py-5 mb-2">
          <div class="px-4">
            <i :class="`fa-solid ${why.icon}`"></i>
          </div>
          <div class="text-box">
            <p class="title">{{why.title}}</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, libero similique eum accusantium quae veritatis, beatae expedita neque saepe, a quod ex odio quibusdam voluptatem provident laborum suscipit. Quidem, laudantium.</p>
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


.card{
  border-left: 5px solid $darkYellow;
  &:hover{
    background-color: $darkYellow;
    box-shadow: inset 0 0 0 15px white;
    border: 0;
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
      font-size: 1.4rem;
       font-family: "Roboto Slab", serif;
    }

    & p:last-child{
      color: $textGray;
    }
    text-align: left;
  }
  i{
    font-size: 3rem;
    color: $darkYellow;
  }
}

</style>