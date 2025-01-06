<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import { defineProps, ref } from 'vue';

// States
const props = defineProps({
  images: {
    type: Array,
    required: true,
  }
});

const splideOptions = ref({
  autoplay: true,
  lazyLoad:'nearby',
  slidesToScroll:1,
  focus:'left',
  rewind: true,
  perPage: 4,  
  arrows: false,
  breakpoints: {
    768: {
      perPage: 2, 
    },
  },
});
</script>

<template>
   <Splide :options="splideOptions">
    <SplideSlide v-for="(image,index) in props.images" :key="index">
      <img :src="image.src" :alt="image.alt">
    </SplideSlide>
  </Splide>
</template>

<style scoped>
.slide__slide img {       
  object-fit: cover;
}
</style>