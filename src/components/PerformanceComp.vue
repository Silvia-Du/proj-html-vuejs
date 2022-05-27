<template>
  <div class="data debug row">
    <!-- Item -->
    <div class="col-6 col-md-3 d-flex align-items-end debug mb-2">
      <i class="fa-solid fa-user-group mb-2 me-3"></i>
      <div class="text-box">
        <p>1234</p>
        <p>descrizione</p>
      </div>
    </div>
    <!-- Item -->
    <div class="col-6 col-md-3 d-flex align-items-end debug mb-2">
      <i class="fa-solid fa-film mb-2 me-3"></i>
      <div class="text-box">
        <p>1234</p>
        <p>descrizione</p>
      </div>
    </div>
    <!-- Item -->
    <div class="col-6 col-md-3 d-flex align-items-end debug mb-2">
      <i class="fa-regular fa-image mb-2 me-3"></i>
      <div class="text-box">
        <p>1234</p>
        <p>descrizione</p>
      </div>
    </div>
    <!-- Item -->
    <div class="col-6 col-md-3 d-flex align-items-end debug mb-2">
      <i class="fa-regular fa-thumbs-up mb-2 me-3"></i>
      <div class="text-box">
        <p>1234</p>
        <p>descrizione</p>
      </div>
    </div>
   
    
  </div>
</template>

<script>
export default {
  name: 'PerformanceComp'
}
</script>

<style lang="scss" scoped>

.data{
  color: #fcfcfc;

  & p:first-child{
    font-size: 1.3rem;
    color: #eab830;
  }

  i{
    font-size: 2rem;
  }

  p{
    margin-bottom: 0;
  }
}

  
</style>