<template>

  <div class="row">

    <div class="col-12 col-md-6 d-flex flex-column align-items-center text-center px-5">
      <h2 class="mb-4">Get My Exclusive Investing Book just for $19.50</h2>
      <p class="mb-4">
        <i>
        Vestibulum imentum eu urna vel cursus. Aenean vehicula quam quam, vitae pellentesque urna elementum cursus.
        </i>
      </p>
      <img src="../assets/img/amazon.png" alt="amazon-logo">
    </div>

    <div class="img-hover"></div>

    <div class="tool-shed d-flex flex-column align-items-center">
      <i class="fa-solid fa-desktop"></i>
      <i class="fa-solid fa-life-ring"></i>
      <i class="fa-solid fa-wrench"></i>
      <i class="fa-solid fa-cart-shopping"></i>
      <i class="fa-solid fa-mobile-screen-button"></i>
    </div>

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
    font-size: 1.5rem;
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

  .tool-shed{
    width: 50px;
    padding: 25px 25px 0 25px;
    background-color: white;
    position: absolute;
    top: 35px;
    right: 0;
    i{
      margin-bottom: 25px;
      font-size: 1.2rem;
      color: $textDarkColor;
    }
  }

  @media screen and (max-width: 768px ){
    .img-hover{
      display: none;
    }
  }

</style>