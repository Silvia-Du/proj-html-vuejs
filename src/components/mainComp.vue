<template>
  <div>
    <!-- JUMBOTRON -->
    <div class="jumbotron debug d-flex align-items-center">
      <div class="container">
        <div class="row d-flex justify-content-end">

          <div class="col-12 col-md-6 text-box debug">
            <h1>Start Your human revoultion today</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate ut ratione. Esse, alias error?</p>
          </div>
        </div>

      </div>
    </div>

    <AboutComp />
    <!-- new course -->
    <CoursesComp :type="'New Courses'"/>
    <!-- cta book -->
    <ContainerFullW :type="'Cta'" />
    <!-- about Course -->
    <CoursesComp :type="'Why my Courses?'"/>
    <!-- performance -->
    <ContainerFullW :type="'performance'"/>


  </div>
</template>

<script>
import AboutComp from './AboutComp.vue';
import CoursesComp from './CoursesComp.vue';
import ContainerFullW from './ContainerFullW.vue';
export default {
    name: "MainComp",
    components: { AboutComp, CoursesComp, ContainerFullW }
}
</script>

<style lang="scss" scoped>

.jumbotron{
  height: 100vh;
  background-image: url(../assets/img/slide-1.jpg);
  background-size: cover;
  background-position: center;
}

</style>