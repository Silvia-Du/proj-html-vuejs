<template>

  <div class="row">

    <div class="col-12 col-md-6 debug d-flex flex-column align-items-center text-center">
      <h2 class="mb-4">Get My Exclusive Investing Book just for $19.50</h2>
      <p class="mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, molestiae. Ea mollitia obcaecati, adipisci tenetur quo dolorum, rem placeat non asperiores ?
      </p>
      <img src="../assets/img/amazon.png" alt="amazon-logo">
    </div>

    <div class="img-hover"></div>

  </div>

</template>

<script>
export default {
  name: 'CattToActOffer'
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars.scss';

  h2{
    color: $mainYellow;
  }
  p{
    color: white;
  }
  img{
    max-width: 155px;
  }
  .img-hover{
    object-fit: cover;
    background-image: url(../assets/img/book.png);
    background-size: cover;
    background-position: center;
    position: absolute;
    height: 90%;
    width: 500px;
    bottom: 0;
    left: 50%;
  }

  @media screen and (max-width: 768px ){
    .img-hover{
      display: none;
    }
  }

</style>