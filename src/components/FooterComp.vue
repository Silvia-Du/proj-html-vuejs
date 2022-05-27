<template>
  <footer class="py-5 px-5">
    <div class="container-fluid debug">
      <div class="row">
        <!-- About -->
        <div class="col-6 col-md-3 debug">
          <p>About</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, quo deserunt? Autem itaque similique, quaerat cumque,</p>
          <div class="social-box">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>

        <!-- Contact -->
        <div class="col-6 col-md-3 debug">
          <p>Contact</p>
          <p>USA, California 20, First Avenue,<br>California</p>

            <p class="mb-0">Tel: +1 212 458 300 32</p>
            <p>Fax: +1 212 357 24 14</p>

          <p>info@masterstudy.com</p>
        </div>

        <!-- Contact -->
        <div class="col-6 col-md-3 debug">
          <p>Pages</p>
          <div class="lists d-flex">
            <ul class="debug">
              <li><a href="#">ListItem</a></li>
              <li><a href="#">ListItem</a></li>
              <li><a href="#">ListItem</a></li>
            </ul>
            <ul class="debug">
              <li><a href="#">ListItem</a></li>
              <li><a href="#">ListItem</a></li>
              <li><a href="#">ListItem</a></li>
            </ul>
          </div>
        </div>
        <!-- Blog -->
         <!-- Contact -->
        <div class="col-6 col-md-3 debug">
          <p>Blog</p>

          <div class="block">
            
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p>data</p>
          </div>

          <div class="block">
            <img src="" alt="">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <p>data</p>
          </div>
            
        </div>



      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp'
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars.scss';

  footer{
    background-color: #f2b91e;
    .col-6{
      color: $titleColor;
      & p:first-child{
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
      }
      p{
        font-size: 0.8rem;
      }

      // {}

      i{
        margin-right: 5px;
      }

      a{
        color: $titleColor;
        text-decoration: none;
      }

      .lists{
        ul{
          width: 50%;
        }
      }
    }
  }
</style>