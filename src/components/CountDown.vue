<template>
  <div class="call-to-act p-5 d-flex">
    <div class="container-fluid">
      <div class="row">

        <div class="col-12 col-lg-6 subscribe text-center text-lg-start">
          <div>
            <span class="me-1 white">Limited Sale:</span>
            <span>All courses with 55% off</span>
          </div>
          <!-- input -->
          <div class="input-group mt-4 mb-2 position-relative">
            <input v-model="newObject.emailAdress"
            type="text" class="input-group rounded-pill" placeholder="Enter your E-mail" required>
            <button @click="newSuscriber()"
            type="button" class="btn btn-primary rounded-pill text-uppercase position-absolute">Subscribe</button>
          </div>
        </div>
        <!-- subscription -->
        <div v-show="getnewData"
        :class="{'center': checksubscription}"
        class="subscription position-fixed py-3">

          <!-- input area for subscription -->
          <div v-show="checksubscription === false">
          
            <!-- name/surname -->
            <div class="mb-3">
              <label class="form-label">Your name</label>
              <input v-model="newObject.name"
              type="text" class="form-control" placeholder="name" required>
            </div>
            <div class="mb-3">
              <label class="form-label">Your surname</label>
              <input v-model="newObject.surname"
              type="text" class="form-control" placeholder="surname" required>
            </div>
            <!-- agreement -->
            <div class="form-check">
              <input @click="newObject.agreement = !newObject.agreement"
              class="form-check-input" type="checkbox" value="" id="flexCheckDefault" required>
              <label class="form-check-label" for="flexCheckDefault">
                <a href="#">Agree terms and condition</a>
              </label>
            </div>
            <div class="d-flex justify-content-center my-3">
              <button @click="getSubscription()"
              type="button" class="btn btn-warning rounded-pill text-uppercase">Get Discount</button>
            </div>
          </div>
          <!-- feedback Subscription -->
          <div v-show="checksubscription" class="text-center">
            <p>Iscrizione avvenuta con successo!</p>
            <div class="d-flex justify-content-center my-3">
              <button @click="getnewData = false"
              type="button" class="btn btn-warning rounded-pill text-uppercase">Ok!</button>
            </div>
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
import axios from 'axios';

export default {
  name: 'CountDown',


  data(){
    return{
      getnewData: false,
      checksubscription: false,
      myEndPoint: 'http://localhost:3000/registeredEmail',

      newObject:{
        emailAdress: '',
        name: '',
        surneame: '',
        agreement: true
      }
    }
  },

  methods:{
    newSuscriber(){
      this.getnewData = true;
    },

    getSubscription(){

      axios.post(this.myEndPoint, this.newObject)
      .then(response =>{
        console.log(response);
      })
      .catch(error =>{
        console.log(error);
      })
      this.checksubscription= true;
    }
  }
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

    //subscription

    .subscription{
      min-height: 300px;
      width: 400px;
      background-color: white;
      box-shadow: 0 0 10px gray;
      border-radius: 15px;
      bottom: -7%;
      left: 50%;
      transform: translate( -50% );
      z-index: 999;
      .btn{
        width: 50%;
        color: white;
        font-family: "Roboto Slab", serif;
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

  //class for feedback
  .center{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 768px ){
    .call-to-act .subscribe span,
    .call-to-act .count-down h2{
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 992px ){
    .call-to-act .subscribe span,
    .call-to-act .count-down h2{
      font-size: 2rem;
    }
  }

  

</style>