<template>
  <div class="courses pt-5 pb-2 text-center">
    <h2 class="mb-4">New Courses</h2>
    <div class="container debug">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        
        <div class="col">
          <img src="../assets/img/photo-1496307042754-b4aa456c4a2d-370x200.jpeg" alt="music-img">
          <div class="text-box debug">

            <p class="title pt-4">Title</p>
            <p class="subtitle">Subtitle</p>

              <div class="data d-flex justify-content-around debug py-2">
              <div class="left box">
                <i class="fa-solid fa-signal"></i>
                <span>Advanced</span>
              </div>
              <div class="center box">
                <i class="fa-solid fa-list-ul"></i>
                <span>N' of Lecture</span>
              </div>
              <div class="right box">
                <i class="fa-regular fa-clock"></i>
                <span>H' of course</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <button type="button" class="btn btn-primary rounded-pill my-5">Load More</button>
  </div>
</template>

<script>
export default {
  name: 'CoursesComp'
}
</script>

<style lang="scss" scoped>

@import '../assets/style/vars.scss';


  .courses{
    background-color: #edf2f5;
    img{
      width: 100%;
    }
    .btn{
      background-color: #f2b91e;
      border-color: #f2b91e;
      text-transform: uppercase;
      font-weight: bold;
      padding: 10px 20px;
    }
    .text-box{
      .title{
        font-size: 1.2rem;
        font-weight: bold;
        color: $titleColor;
      }
      .subtitle{
        color: $textGray;
      }

      .data{
        border-top: 1px solid $textGray;
        font-size: 0.8rem;
        color: $textDarkGray;
        i{
          color: $mainYellow;
          font-size: 0.7rem;
          margin-right: 5px;
        }
      }
    }
  }

</style>