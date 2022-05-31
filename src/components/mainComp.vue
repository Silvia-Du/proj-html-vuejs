<template>
  <div>
    <!-- JUMBOTRON -->
    <div class="jumbotron d-flex align-items-center container-fluid">

      <!-- <div class="container-fluid"> -->
        <div class="row d-flex justify-content-lg-end">
          <div class="col-12 col-lg-6 text-boxs  px-md-5 text-center text-md-start">
            <h1 class="mb-4">Start Your Human <span style="color: #f2b91e">Revoultion</span>  today</h1>
            <p>A wonderful revolution has taken possession of my entire soul, like these sweet mornings of spring which i enjoy my whole heart.</p>
          </div>
        </div>
      <!-- </div> -->

      <CountDown />

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
    <!-- Reviews -->
    <CoursesComp :type="'What Students Say'"/>


  </div>
</template>

<script>
import AboutComp from './AboutComp.vue';
import CoursesComp from './CoursesComp.vue';
import ContainerFullW from './ContainerFullW.vue';
import CountDown from './CountDown.vue';

export default {
    name: "MainComp",
    components: { AboutComp, CoursesComp, ContainerFullW, CountDown }
}
</script>

<style lang="scss" scoped>

.jumbotron{
  height: 100vh;
  background-image: url(../assets/img/slide-1.jpg);
  background-size: cover;
  background-position: center;
  position: relative;
  .row{
    margin: 0 auto;
  h1{
    font-size: 3.75rem;
  }
 
  .col-12{
    margin-right: 128px;
    margin-bottom: 200px;
  }
  }
}

 @media screen and (max-width: 992px ){
    
  .col-12{
    margin-right: 0;
    margin-bottom: 200px;
    h1{
      font-size: 2.5rem;
    }
  }
  }

</style>