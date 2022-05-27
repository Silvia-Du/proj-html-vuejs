<template>
  <div class="reviews">
    <div class="carousel debug">Carosello</div>
    <div class="text-box debug">
      <p class="title mb-1">Titolo recensione</p>

      <div class="star-box debug mb-4">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i>
      </div>
      <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nesciunt, officiis tempora rem inventore atque itaque mollitia omnis fuga in voluptatem possimus minus ad praesentium repellat, repellendus nisi, suscipit laborum.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewsComp'
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars.scss';


.carousel{
  height: 100px;
}

.text-box{
  .title{
    font-size: 1.2rem;
    font-weight: bold;
    color: $titleColor;
  }
  p{
    color: #4d5156;
  }

  i{
    color: #f2b91e;
  }
}

</style>