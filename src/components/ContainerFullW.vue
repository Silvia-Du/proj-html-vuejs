<template>
  <div :class="[{'bg-library': type === 'Cta'},{'bg-people': type === 'performance'}]"
  class="sd-row d-flex align-items-center">
    <div class="container">
      <CallToActOffer v-show="type === 'Cta'" />
      <PerformanceComp v-show="type === 'performance'"/>
    </div>
  </div>
</template>

<script>
import CallToActOffer from './CallToActOffer.vue';
import PerformanceComp from './PerformanceComp.vue';
export default {
    name: "ContainerFullW",
    components: { CallToActOffer, PerformanceComp },
    props: {
      type: String
    },

}
</script>

<style lang="scss" scoped>

.sd-row{
  height: 57vh;
  background-size: cover;
  position: relative;
}

.bg-library{
  background-image: url(../assets/img/slider_1-1917x607-1914x606.jpg);
  background-position: center;
}

.bg-people{
  background-image: url(../assets/img/counter-1919x1101.jpg);
  background-position: top;
}
  

</style>