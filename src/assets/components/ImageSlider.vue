<script setup>
// Her importeres splide.js komponenter som bruges til karusselen og splide css
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

// defineProps skal hentes for at bruge props til at definere billederne
import { defineProps, ref } from 'vue';

// States
// Her defineres det billede array som billede karussellen skal modtage
const props = defineProps({
  images: {
    type: Array,
    required: true,
  }
});

// Her defineres de muligheder som vi har ved at bruge splide til vores billede slider. her sættes blandt andet at der kun skal vises et billede på små skærme, den skal selv skifte slide og skal starte forfra. link til splide.js: https://splidejs.com/
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
  <!-- her bindes splides muligheder til komponentet -->
   <Splide :options="splideOptions">
    <!-- her bruges vues directive v-for til at iterere igennem billede arrayet -->
    <SplideSlide v-for="(image,index) in props.images" :key="index">
      <img :src="image.src" :alt="image.alt">
    </SplideSlide>
  </Splide>
</template>

<style scoped>

.splide__slide img {
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}


</style>