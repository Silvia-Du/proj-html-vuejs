<template>
  
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        
    <div v-for="(card, index) in cardsList" :key="`card-${index}`"
    class="col position-relative mb-4">

      <img :src="card.image" :alt="card.subtitle">
      <span v-if="card.spacial"
      class="badge text-uppercase position-absolute">special</span>

      <!-- text-box -->
      <div class="text-box pt-1 px-3">
        <p class="title pt-4 mb-2 mx-5">{{card.name}}</p>
        <p class="subtitle mt-3">{{card.subtitle}}</p>

        <div class="data d-flex justify-content-between py-3 mt-4">

          <div class="left box">
            <i class="fa-solid fa-signal"></i>
            <span>{{card.level}}</span>
          </div>
          <div class="center box">
            <i class="fa-solid fa-list-ul"></i>
            <span>{{card.lectures}}</span>
          </div>
          <div class="right box">
            <i class="fa-regular fa-clock me-1"></i>
            <span>{{card.courseHours}}</span>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    cardsList: Array 
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars.scss';

  
  img{
    width: 100%;
  }

  .badge{
    display: inline-block;
    top: 8px;
    right: 21px;
    font-size: 0.7rem;
    font-family: "Barlow", sans-serif;
    padding: 7px 10px;
    color: white;
    background-color: #f09b23;
  }

 .text-box{
   background-color: white;
      .title{
        font-family: "Barlow", sans-serif;
        font-size: 1.3rem;
        font-weight: bold;
        color: $titleColor;
        line-height: 1.6rem;
      }
      .subtitle{
        color: $textGray;
        font-size: 1.1rem;
      }

      .data{
        border-top: 1px solid $textGray;
        font-size: 0.8rem;
        font-weight: 500;
        color: $titleColor;
        i{
          color: $mainYellow;
          font-size: 0.85rem;
          margin-right: 5px;
        }
      }
    }

</style>