<template>
  <div class="about">
    <div class="container">
      <div class="row py-5">
        <!-- col left -->
        <div class="col-12 col-md-5 left py-5 pe-5 d-flex justify-content-center flex-column align-items-center">
          <h2 class="my-5">Hey there, my name is John Doe. I'm the founder of the Brain Academy.</h2>
          <img src="../assets/img/sign.jpg" alt="signature.jpg">
        </div>
        <!-- col right -->
        <div class="col-12 col-md-7 pb-3 ps-5 d-flex justify-content-center align-items-center">
          <p>A wonderful serenity has taken posssession of my entire soul, like these sweet mornings of spring which i enjoy my whole heart. I am alone, and feel the charm of existence in this spot, which  was created for the bliss of soul like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existance, that i neglect my talents. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stragy gleams steal into the inner sanctuary</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutComp'
}
</script>

<style lang="scss" scoped>

  .about{
    background-color: white;
    p{
      font-size: 1.2rem;
    }
    
  }

</style>