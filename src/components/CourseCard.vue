<template>
  
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        
    <div class="col position-relative">

      <img src="../assets/img/photo-1496307042754-b4aa456c4a2d-370x200.jpeg" alt="music-img">
      <span class="badge text-uppercase position-absolute">special</span>

      <!-- text-box -->
      <div class="text-box pt-1 px-3">
        <p class="title pt-4 mb-2">How to be a DJ Make Electronic Music</p>
        <p class="subtitle mt-3">Subtitle</p>

        <div class="data d-flex justify-content-between py-3 mt-4">

          <div class="left box">
            <i class="fa-solid fa-signal"></i>
            <span>Advanced</span>
          </div>
          <div class="center box">
            <i class="fa-solid fa-list-ul"></i>
            <span>N' of Lecture</span>
          </div>
          <div class="right box">
            <i class="fa-regular fa-clock me-1"></i>
            <span>H' of course</span>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: 'CourseCard'
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
        line-height: 1.5rem;
      }
      .subtitle{
        color: $textGray;
        font-size: 1rem;
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