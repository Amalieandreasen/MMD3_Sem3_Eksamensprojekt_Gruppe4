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
    <section class="focusedEntryPoints">
        <article class="entryPoint">
           <div class="entryPointContent" :style="{ backgroundImage: 'url(' + image + ')' }">
            <h3>{{ h3 }}</h3>
            <p>{{ p }}</p>
            <TheButton :title="buttonTitle"/>
           </div> 
           <div class="Overlay"></div>
        </article>
    </section>
</template>

<style scoped>
.entryPointContent{
    background-image:url(../img/forsideDesktop/fepSelskabspakker.png);
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
    height: 400px;
    background-size: cover;
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

.Overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
    z-index: 0; 
}
</style>