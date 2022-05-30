<template>
  <div class="call-to-act p-5 d-flex">
    <div class="container-fluid">
      <div class="row">

        <div class="col-12 col-md-6 subscribe">
          <div>
            <span class="me-1 white">Limited Sale:</span>
            <span>All courses with 55% off</span>
          </div>
          <!-- input -->
          <div class="input-group mt-4 mb-2 position-relative">
            <input type="text" class="input-group rounded-pill" placeholder="Enter your E-mail">
            <button type="button" class="btn btn-primary rounded-pill text-uppercase position-absolute">Subscribe</button>
          </div>
        </div>

        <!-- count-down -->
        <div class="col-12 col-lg-6 count-down d-flex justify-content-center align-items-center">
          <div class="ms-5">
            <h2>26</h2>
            <p>Days</p>
          </div>
          <div class="ms-5">
            <h2>01</h2>
            <p>Hours</p>
          </div>
          <div class="ms-5">
            <h2>47</h2>
            <p>Minutes</p>
          </div>
          <div class="ms-5">
            <h2>34</h2>
            <p>Seconds</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountDown'
}
</script>

<style lang="scss" scoped>
  @import '../assets/style/vars.scss';

  .call-to-act{
    position: absolute;
    bottom: -7%;
    left: 50%;
    transform: translate( -50% );
    width: 75%;
    border-radius: 15px;
    background-color: $darkYellow;
    //subscribe
    .subscribe, .count-down{
      // width: 50%;
      span{
        font-size: 2.25rem;
        font-family: "Roboto Slab", serif;
        font-weight: 700;
      }
      input{
        border: 0;
        padding: 14px 20px;
        font-size: 0.85rem;
        color: $textDarkGray;
      }
      .btn{
        top: 0;
        right: -1px;
        font-size: 0.85rem;
        padding: 14px 20px;
        font-family: "Roboto Slab", serif;
        background-color: $buttonColor;
        border-color: $buttonColor;
        margin-left: -50px;
      }
      
    }

    //count-down
    .count-down{
      font-family: "Roboto Slab", serif;
      h2{
        color: white;
        font-size: 3.5rem;
      }
      p{
        font-weight: bold;
        font-size: 1.1rem;
      }
    }
  }

  .white{
    color: white;
  }

</style>