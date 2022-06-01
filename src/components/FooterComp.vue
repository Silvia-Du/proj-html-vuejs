<template>
  <footer class="py-5 px-5">
    <div class="container pt-3">
      <div class="row">
        <!-- About -->
        <div 
        class="col-6 col-md-3">
          <p class="title">About</p>
          <p>Masterstudy is Education WordPress theme featured by Learning Managment System (LMS) for online education. Developed by Stylemix Themes.</p>
          <div class="social-box">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>

        <!-- Contact -->
        <div class="col-6 col-md-3">
          <p class="title">Contact</p>
          <p>USA, California 20, First Avenue,<br>California</p>

            <p class="mb-0">Tel: +1 212 458 300 32</p>
            <p>Fax: +1 212 357 24 14</p>

          <p>info@masterstudy.com</p>
        </div>

        <!-- Pages -->
        <div class="col-6 col-md-3">
          <p class="title">Pages</p>
          <div class="lists d-flex">
            <ul v-for="(list, index) in pages" :key="`list${index}`">
              <li class="mb-2"
              v-for="(item, index) in list" :key="`item${index}`"
              ><a :href="item.link">{{item.title}}</a></li>
            </ul>
            
          </div>
        </div>
        <!-- Blog -->
        <div class="col-6 col-md-3 col-blog">
          <p class="title">Blog</p>

          <div class="block mb-2 d-flex">
            <div>

              <img class="me-3"
              src="../assets/img/photo-1517520287167-4bbf64a00d66-69x69.jpeg" alt="photographer">
            </div>
            <div>
              <p class="article mb-0">Our main target is to "Developing Yourself as a Leader"</p>
              <p class="date">-- August 9, 2018</p>
            </div>
          </div>

          <div class="block mb-2 d-flex">
            <div>
              <img class="me-3"
              src="../assets/img/photo-1490376840453-5f616fbebe5b-69x69.jpeg" alt="girls-img">
            </div>
            <div>
              <p class="article mb-0">Those Other Collage, Expenses You Aren't Thinking About</p>
              <p class="date">-- June 3, 2015</p>
            </div>
          </div>
            
        </div>

      </div>
    </div>
  </footer>
</template>

<script>

import {pages} from '../assets/data/footerLists';

export default {
  name: 'FooterComp',

  data(){
    return{
      pages
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars.scss';

  footer{
    background-color: #f2b91e;
    .col-6{
      color: $titleColor;
      .title{
        font-family: "Roboto Slab", serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-transform: uppercase;
      }
      p.article{
        font-size: 1.1rem;
        font-family: "Roboto Slab", serif;  
        font-weight: bold; 
      }
      p.date{
        color: $textDarkGray;
        font-size: 0.9rem;
      }
      p{
        width: 100%;
      text-overflow: ellipsis;

      }

      i{
        margin-right: 15px;
        font-size: 1.2rem;
        color: $titleColor;
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
    .blog p:first-child{
      font-size: 0.9rem;
      text-transform: lowercase;
    }
  }
</style>