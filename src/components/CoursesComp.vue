<template>
  <div class="courses pt-5 pb-2 text-center">
    <h2 class="mb-4">New Courses</h2>
    <div class="container debug">
     <CourseCard />

    </div>
    <button type="button" class="btn btn-primary rounded-pill my-5">Load More</button>
  </div>
</template>

<script>
import CourseCard from './CourseCard.vue';
export default {
    name: "CoursesComp",
    components: { CourseCard }
}
</script>

<style lang="scss" scoped>

@import '../assets/style/vars.scss';


  .courses{
    background-color: #edf2f5;
   
    .btn{
      background-color: #f2b91e;
      border-color: #f2b91e;
      text-transform: uppercase;
      font-weight: bold;
      padding: 10px 20px;
    }
   
  }

</style>