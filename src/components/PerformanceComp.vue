<template>
  <div class="data row">

    <!-- Item -->
    <div v-for="(item, index) in performanceData" :key="`item-${index}`"
    class="col-6 col-md-3 d-flex align-items-end mb-2">
      <i :class="`fa-solid ${item.icon} mb-2 me-3`"></i>
      <div class="text-box">
        <p>{{item.value}}</p>
        <p>{{item.name}}</p>
      </div>
    </div>
    <!-- Item -->
    
  
   
    
  </div>
</template>

<script>
import {performanceData} from '../assets/data/dataMainComp';

export default {
  name: 'PerformanceComp',

  data(){
    return{
      performanceData
    }
  }
}
</script>

<style lang="scss" scoped>

.data{
  color: #fcfcfc;
  line-height: 1.6rem;
  font-family: "Roboto Slab", serif;

  & p:first-child{
    font-size: 1.8rem;
    font-weight: bold;
    color: #eab830;
  }

  i{
    font-size: 2.5rem;
  }

  p{
    // font-size: 0.9rem;
    margin-bottom: 0;
  }
}

  
</style>