<script setup>
import TheButton from '@/assets/components/TheButton.vue';
import { ref } from 'vue';
import Tabs from '@/assets/components/Tabs.vue';
import SnacksDrinks from '@/assets/components/SnacksDrinks.vue';
import Forretter from '@/assets/components/Forretter.vue';
import Saesonretter from '@/assets/components/saesonretter.vue';

const menukortTabs = [
  { title: "Sæsonretter", component: Saesonretter },
  { title: "Snacks & Drinks", component: SnacksDrinks },
  { title: "Forretter", component: Forretter },
  { title: "Pasta", component: "Forret" },
  { title: "Kød", component: "Forret" },
  { title: "Tilbehør", component: "Forret" },
  { title: "Pizze", component: "Forret" },
  { title: "Dessert", component: "Forret" },
  { title: "Børnemenu", component: "Forret" },
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
    <h3>Noget for enhver smag</h3>
    <p>
      Oplev vores lækre italienske menukort med noget for enhver smag. Vi har sammensat et væld af lækre italienske retter både faste velkendte klassikere og sæsonretter som bliver udskiftet i forhold til smag og sæson. <br> <br>
      For at fuldende opleveslsen, kan du udforske vores nøje udvalgte vinkort og drikkevare.  
    </p>
    <div class="btnDiv">
    <TheButton title="Vinkort"/>
    <TheButton title="Drikkevare"/>
    </div>
</section>

<Tabs :tabs="menukortTabs" title="Udvalg" />
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

.btnDiv{
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}


</style>