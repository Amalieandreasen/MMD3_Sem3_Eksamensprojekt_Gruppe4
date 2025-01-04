<script setup>
import TheButton from './TheButton.vue';
import { defineProps, ref } from 'vue';

defineProps({
  image: {
    type: String,
    required: true
  },
  h3: {
    type: String,
    required: true
  },
  p: {
    type: String,
    required: true
  },
  buttonTitle: {
    type: String,
    required: true
  }
});
</script>

<template>

        <article class="entryPoint">
           <div class="entryPointContent" :style="{ backgroundImage: 'url(' + image + ')' }">
            <h3>{{ h3 }}</h3>
            <p>{{ p }}</p>
            <TheButton :title="buttonTitle"/>
           </div> 
           <div class="Overlay"></div>
        </article>
   
</template>

<style scoped>
.entryPointContent{
    background-image:url(../img/forsideDesktop/fepSelskabspakker.png);
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
    background-size: cover;
    height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    text-align: center;
    z-index: 1;
}

.entryPoint{
    padding:2rem;
    margin: 2rem;
    border: 1px solid var(--gold);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

@media all and (min-width: 768px){
  .entryPoint{
    max-width: 25vw;
}

.entryPointContent{
  height: 400px;
  max-width: 100%;
}
}
</style>