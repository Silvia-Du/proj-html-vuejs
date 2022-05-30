<template>
  <div class="reviews row">
    <div class="col-12 col-md-7">

      <div class="carousel d-flex justify-content-center align-items-center">
  
        <i @click="decrease()"
        class="fa-solid fa-arrow-left-long me-5"></i>
  
        <div class="img-box py-3 mx-5">
         
           <img @click="selected = index"
           :class="{'active': selected === index}"
          v-for="(review, index) in reviews" :key="`rec${index}`"
           :src="review.image" :alt="review.alt">
        </div>
  
        <i @click="increase()"
        class="fa-solid fa-arrow-right-long ms-5"></i>
  
      </div>
  
      <div class="text-box">
        <p class="title mt-3 mb-0">{{reviews[selected].title}}</p>
  
        <div class="star-box mb-4">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half"></i>
        </div>
        <p class="mb-5">{{reviews[selected].text}}</p>
      </div>

    </div>
  </div>
</template>

<script>

import { reviews } from '../assets/data/dataMainComp'
export default {
  name: 'ReviewsComp',

  data(){
    return{
      reviews,
      selected: 1
    }
  },

  methods:{
    increase(){
      this.selected += 1;
      if(this.selected === reviews.length){
        this.selected = 0;
      }
    },

    decrease(){
      this.selected -= 1;
      if(this.selected === -1){
        this.selected = reviews.length -1;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars.scss';

.col-12{
  margin: 0 auto;
}

.carousel{
  img{
    border-radius: 50%;
    margin: 0 10px;
    transition: all 1s;
    &.active{
      transform: scale(1.3);
    }
  }

  i{
    font-size: 1.5rem;
    color: $titleColor;
  }
}

.text-box{
  .title{
    font-size: 1.3rem;
    font-weight: bold;
    color: $titleColor;
    font-family: "Roboto Slab", serif;
  }
  p{
    color: #4d5156;
  }

  i{
    color: #f2b91e;
  }
}

</style>