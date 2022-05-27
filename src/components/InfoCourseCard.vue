<template>
  <div class="info-course">
    <div class="container debug">
      <div class="row">
        <!-- Card -->
        <div class="card col-12 col-md-6 debug d-flex flex-row py-5 mb-2">
          <div class="debug px-4">
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div class="text-box">
            <p class="title">Titolo</p>
            <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab mollitia necessitatibus nostrum. Exercitationem, vero nostrum in sunt libero hic et veritatis non? Dicta omnis natus placeat est ipsum perspiciatis</p>
          </div>
        </div>
        <!-- Card -->
        <div class="card col-12 col-md-6 debug d-flex flex-row py-5 mb-2">
          <div class="debug px-4">
            <i class="fa-solid fa-rocket"></i>
          </div>
          <div class="text-box">
            <p class="title">Titolo</p>
            <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab mollitia necessitatibus nostrum. Exercitationem, vero nostrum in sunt libero hic et veritatis non? Dicta omnis natus placeat est ipsum perspiciatis</p>
          </div>
        </div>
        <!-- Card -->
        <div class="card col-12 col-md-6 debug d-flex flex-row py-5 mb-2">
          <div class="debug px-4">
            <i class="fa-regular fa-thumbs-up"></i>
          </div>
          <div class="text-box">
            <p class="title">Titolo</p>
            <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab mollitia necessitatibus nostrum. Exercitationem, vero nostrum in sunt libero hic et veritatis non? Dicta omnis natus placeat est ipsum perspiciatis</p>
          </div>
        </div>
        <!-- Card -->
        <div class="card col-12 col-md-6 debug d-flex flex-row py-5 mb-2">
          <div class="debug px-4">
            <i class="fa-solid fa-gear"></i>
          </div>
          <div class="text-box">
            <p class="title">Titolo</p>
            <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ab mollitia necessitatibus nostrum. Exercitationem, vero nostrum in sunt libero hic et veritatis non? Dicta omnis natus placeat est ipsum perspiciatis</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCourseComp'
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars.scss';


.card{
  border-left: 5px solid $darkYellow;
  .text-box{
    & p:first-child{
      font-weight: bold;
      color: $titleColor;
      font-size: 1.3rem;
    }

    & p:last-child{
      color: $textGray;
    }
    text-align: left;
  }
  i{
    font-size: 2rem;
    color: $darkYellow;
  }
}

</style>