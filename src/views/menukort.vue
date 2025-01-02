<script setup>
import TheButton from '@/assets/components/TheButton.vue';
import { ref } from 'vue';
import Tabs from '@/assets/components/Tabs.vue';

const menukortTabs = [
  { title: "Forret", component: "Forret" },
  { title: "Forret", component: "Forret" },
  { title: "Forret", component: "Forret" },
  { title: "Forret", component: "Forret" },
  { title: "Forret", component: "Forret" },
  { title: "Forret", component: "Forret" },
  { title: "Forret", component: "Forret" },
  { title: "Forret", component: "Forret" },
];

</script>

<template>
    <main>
        <section class="heroSec">
      <div class="heroOverlay">
        <img src="../assets/img/menuHeroMobil.png" alt="">
        <div class="heroText">
          <h1>Menukort</h1>
        </div>
      </div>
    </section>

<section class="introSec">
    <h3>Sæsonretter</h3>
    <p>Vi har forsigtigt udvalgt vores sæsonretter for at give dig den bedste oplevelse, med friske råvare der passer til årstiden. 
    <br>
    <br>
    For at fuldende opleveslsen, kan du udforske vores nøje udvalgte vinkort og drikkevare. </p>
    <TheButton title="Kontakt mig"/>
    <TheButton title="Kontakt mig"/>
</section>

<Tabs :tabs="menukortTabs" title="Snacks Menu" />
</main>
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

.introSec{
    margin: 8%;
}
.introSec h3 {
    text-align: center;
    margin-bottom: 1rem;
}


</style>