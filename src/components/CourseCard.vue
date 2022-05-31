<template>
  
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        
    <div
    v-for="(card, index) in cardsList" :key="`card-${index}`"
    class="col position-relative mb-4">
      <div class="img-box position-relative">
        <img :src="card.image" :alt="card.subtitle">
        <div class="overlay position-absolute justify-content-center align-items-center">
          <p :class="{'delate': card.discount != 0}" class="mb-0 me-1">${{card.price}}</p>
          <p class="mb-0 yellow" v-if="card.discount != 0">${{getDiscount(card)}}</p>
        </div>
      </div>
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
  },

  methods:{
    getDiscount(card){
      let cardDiscount = card.price - (card.price * (card.discount/100)) ;
      return cardDiscount.toFixed(2);
    },

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars.scss';

  .col{
    &:hover .overlay{
      display: flex;
    }
  }
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
        font-family: "Roboto Slab", serif;
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

    //overlay
    .overlay{
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.514);
      display: none;
      p{
        font-size: 1.7rem;
        font-weight: bold;
        color: white;
        font-family: "Roboto Slab", serif;
        &.yellow{
          color: $darkYellow;
        }
        &.delate{
          text-decoration: line-through;
          transform: scale(0.8);
          color: rgb(189, 184, 184);
        }
      }
    }

</style>