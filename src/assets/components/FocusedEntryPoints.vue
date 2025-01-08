<script setup>
import TheButton from './TheButton.vue';
import { defineProps } from 'vue';

// Her bliver definerws 4 props som komponentet skal modtage.
defineProps({
  // billedet skal være en string da det er et baggrundsbillede
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
          <!-- her bruge v-bind til at binde baggrundsbilledet som et baggrundsbillede.  -->
           <div class="entryPointContent" :style="{ backgroundImage: 'url(' + image + ')' }">
            <!-- her skal titlen indsættes -->
            <h3>{{ h3 }}</h3>
            <!-- Her skal teksten indsættes -->
            <p>{{ p }}</p>
            <!-- her skal titlen til knappen indsættes -->
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
.entryPointContent{
  height: 400px;
  max-width: 100%;
}
}
</style>