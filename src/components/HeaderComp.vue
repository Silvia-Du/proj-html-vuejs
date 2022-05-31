<template>
  <div class="header d-flex align-items-center">
    <div class="container d-flex justify-content-center">

      <div class="row">
        <div class="col-4 d-flex align-items-center">
          <img @click="$emit('clickedLink', 'Main')" src="../assets/img/MasterStudy-1.svg" alt="logo-svg">

          </div>
        <div class="col-8 d-none d-xl-block d-flex">
          <div class="right d-flex align-items-center justify-content-end">

            <!-- Nav -->
            <nav class="sd-nav ">
              <ul class="mb-0">

                <li @click="clickedLink(item,index)" @mouseover="hoverIndex = index" @mouseleave="hoverIndex = -1"
                class="mt-2 position-relative pb-2" v-for="(item, index) in navItems" :key="`nav-${index}`">
                  <a :href="item.link">{{item.name}}</a>

                  <!-- dropdown -->
                  <div v-show="checkDropD(item,index)" class="dropdown position-absolute" @mouseover="hoverIndex = index">
                    
                      <p v-for="(el, index) in item.dropdown" :key="`dd-${index}`"><a :href="el.link">{{el.name}}</a></p>
                   
                  </div>

                  <!-- line object for active -->
                  <div :class="{'active': index === indexActive}"
                  class="line-active mt-2 position-relative">
                    <i class="fa-solid fa-caret-up position-absolute"></i>
                  </div>
                </li>

              </ul>
              <!-- badge -->
              <span class="badge text-uppercase">New</span>
            </nav>
            <!-- social icons -->
            <div class="social ms-5">
              <a v-for="(icon, index) in socialItems" :key="`icons-${index}`"
              :href="icon.link"><i :class="`fa-brands ${icon.ref}`"></i></a>
            </div>
          </div>
         

        </div>
        <div class="_toggler col-8 d-xl-none d-flex justify-content-end align-items-center">
          <i class="fa-solid fa-bars"></i>
        </div>



      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',

  props:{
    socialItems: Array,
    navItems: Array
  },

  data(){
    return{
      indexActive: 4,
      hoverIndex: -1,
    }
  },

  methods: {
    checkDropD(item,index){

      if(index === this.hoverIndex && item.dropdown != null){
        return true
      }else{
        return false
      }
    },

    clickedLink(item,index){
      this.indexActive = index;
      console.log(item.name);
      this.$emit('clickedLink', item.name);
    }
  },
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

    .right{
      width: 100%;
      height: 100%;

      .sd-nav{
        position: relative;
        flex-shrink: 0;
        .badge{
          display: inline-block;
          color: white;
          background-color: #dc1245;
          font-size: 0.5rem;
          padding: 4px 5px;
          border-radius: 4px 4px 4px 0;
          position: absolute;
          top: -2px;
          left: 66%;
        } 
      }
      .social{
        flex-shrink: 0;
        i{
          margin: 10px;
          font-size: 1.1rem;
          color: $titleColor;
          &:hover{
            color: $darkYellow;
          }
        }
      }
    }

    img{
      height: 38px;
    }
    ._toggler i{
      border: 1px solid $titleColor;
      padding: 4px 7px;
      border-radius: 5px;
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
    margin-left: 30px;
    height: 100%;

    .line-active{
      height: 3px;
      width: 80%;
      background-color: #f3c035;
      display: none;

      &.active{
        display: block;
      }

      .fa-caret-up{
        color: #f3c035;
        font-size: 0.8rem;
        top: -5px;
        left: 50%;
        transform: translate(-50%);
      }
      
    }

    a{
      color: $titleColor;
      font-weight: bold;
      font-size: 1.1rem;
      text-decoration: none;
      &:hover{
        color: $darkYellow;
      }
    }

    .dropdown{
      cursor: pointer;
      width: 220px;
      padding: 10px 10px 10px 30px;
      top: 35px;
      left: 50%;
      transform: translate(-50%);
      z-index: 800;
      background-color: white;
      border-top: 3px solid $darkYellow;
      box-shadow: 2px 2px 3px rgb(182, 178, 178);
      a{
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
    
  }
}



</style>