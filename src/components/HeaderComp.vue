<template>
  <div class="header debug d-flex align-items-center">
    <div class="container debug d-flex justify-content-center">

      <div class="row">
        <div class="col-4 debug d-flex align-items-center">
          <img src="../assets/img/MasterStudy-1.svg" alt="logo-svg">

          </div>
        <div class="col-8 d-none d-lg-block debug d-flex">
          <div class="right d-flex align-items-center justify-content-end">

            <nav class="sd-nav debug ">
              <ul>
                <li><a href="#">NavItem</a></li>
                <li><a href="#">NavItem</a></li>
                <li><a href="#">NavItem</a></li>
                <li><a href="#">NavItem</a></li>
                <li><a href="#">NavItem</a></li>
              </ul>
              <!-- qui va il tag in absolute -->
            </nav>
    
            <!-- SOCIAL -->
            <div class="social debug ms-5">
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
         

        </div>
        <div class="_toggler col-8 d-lg-none d-flex justify-content-end debug">
          H
        </div>



      </div>

      <!-- NAV -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp'
}
</script>

<style lang="scss" scoped>

@import '../assets/style/vars.scss';

.header{
  height: 100px;
  background-color: white;
  color: $titleColor;
  .row{
    width: 100%;

    img{
      height: 35px;
    }
    .right{
      width: 100%;
      height: 100%;
      a{
        color: $titleColor;
      }
      i{
        margin: 10px;
      }
    }
    
 
  }
}

ul{
  list-style: none;
  height: 100%;
  display: flex;
  padding: 0;
  li{
    justify-content: center;
    align-items: center;
    margin: 10px;
    height: 100%;
    margin-bottom: 0;
    a{
      text-decoration: none;
    }
  }
}

</style>