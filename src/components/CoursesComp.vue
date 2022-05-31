<template>
  <div :class="{'bg-color': type === 'New Courses'}"
  class="courses pt-5 pb-5 text-center">
    <h2 class="mt-4 mb-5 bigger">{{type}}</h2>
    <div class="container">
      <!-- card new course -->
     <CourseCard v-show="type === 'New Courses'" :cardsList="newCourses"/>
     <InfoCourseCard v-show="type === 'Why my Courses?'"/>
      <ReviewsComp v-show="type === 'What Students Say'"/>
    </div>
    <button v-show="type === 'New Courses'" type="button" class="btn btn-primary rounded-pill my-5 position-relative">
    <div class="overlay position-absolute"></div>
    Load More
    </button>
  </div>
</template>

<script>
import CourseCard from './CourseCard.vue';
import InfoCourseCard from './InfoCourseCard.vue';
import ReviewsComp from './ReviewsComp.vue';
import { newCourses } from '../assets/data/dataMainComp';

export default {
    name: "CoursesComp",
    components: { CourseCard, InfoCourseCard, ReviewsComp },
    props: {
      type: String
    },

    data(){
      return{
        newCourses
      }
    }
}
</script>

<style lang="scss" scoped>

@import '../assets/style/vars.scss';


  .courses{
    background-color: white;
    .btn{
      background-color: #f2b91e;
      border-color: #f2b91e;
      text-transform: uppercase;
      font-weight: bold;
      padding: 10px 20px;
      transition: all 2s;
      overflow: hidden;
      &:hover .overlay{
        width: 124px;
      }
      .overlay{
        width: 0px;
        height: 46px;
        transition: all 2s;
        background-color: rgba(0, 0, 0, 0.164);
        top: 0;
        left: 0;
      }
    } 
  }

  .bg-color{
    background-color: #edf2f5;
  }

  

</style>