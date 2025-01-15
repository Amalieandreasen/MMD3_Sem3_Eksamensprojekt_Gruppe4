<script setup>
defineProps({
  imgSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  imgAlt: {
    type: String,
    required: true
  },
  imgSrcSet: {
    type: String,
    required: false
  }
});
</script>

<template>
  <section class="heroSec">
  <div class="heroOverlay">
    <img 
      :src="imgSrc" 
      :alt="imgAlt"
      :srcset="imgSrcSet"
    >
    <div class="heroText">
      <h1>{{ title }}</h1>
    </div>
  </div>
</section>
</template>

<style scoped>
.heroSec {
  position: relative;
  width: 100%;
  height: 50vh; 
  overflow: hidden;
}

.heroSec img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.heroOverlay {
  position: relative;
  width: 100%;
  height: 100%;
}

.heroOverlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  z-index: 1;
}

.heroText {
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  text-align: center;
}
</style>
