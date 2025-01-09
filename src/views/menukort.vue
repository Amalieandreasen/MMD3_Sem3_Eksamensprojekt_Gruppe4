<script setup>
import TheButton from '@/assets/components/TheButton.vue';
import { ref } from 'vue';
import Tabs from '@/assets/components/Tabs.vue';
import SnacksDrinks from '@/assets/components/SnacksDrinks.vue';
import Saesonretter from '@/assets/components/saesonretter.vue';
import Dummy from '@/assets/components/Dummy.vue';
import Navigation from '../assets/components/Navigation.vue';
import TheFooter from '@/assets/components/TheFooter.vue';
import { useHead } from '@vueuse/head';

const menukortTabs = [
  { title: "Sæsonretter", component: Saesonretter },
  { title: "Snacks & Drinks", component: SnacksDrinks },
  { title: "Forretter", component: Dummy },
  { title: "Pasta", component: Dummy },
  { title: "Kød", component: Dummy },
  { title: "Tilbehør", component: Dummy },
  { title: "Pizze", component: Dummy },
  { title: "Dessert", component: Dummy },
  { title: "Børnemenu", component: Dummy },
];

useHead({
  title: 'Menukort',
  meta: [
    {
      name: 'description',
      content: 'Se vores store udvalg af italienske delikatesser',
    },
  ],
});

</script>

<template>
    <main>
      <Navigation/>
        <section class="heroSec">
      <div class="heroOverlay">
        <img src="../assets/img/menuDesktop/hero.png" alt="">
        <div class="heroText">
          <h1>Menukort</h1>
        </div>
      </div>
    </section>

    <section class="introSec">
      <div class="introWrapper">
      <div>
      <h3>Noget for enhver smag</h3>
      <p>
        Oplev vores lækre italienske menukort med noget for enhver smag. Vi har sammensat et væld af lækre italienske retter både faste velkendte klassikere og sæsonretter som bliver udskiftet i forhold til smag og sæson. <br> <br>
        For at fuldende opleveslsen, kan du udforske vores nøje udvalgte vinkort og drikkevarer.
      </p>
      <div class="btnDiv">
        <RouterLink to="/vinkort">
        <TheButton title="Vinkort"/>
      </RouterLink>
      <RouterLink to="/drikkevarer">
        <TheButton title="Drikkevarer"/>
      </RouterLink>
      </div>
    </div>
      <img class="introImg" src="../assets/img/menuHeroMobil.png" alt="Menu Image">
    </div>
    </section>

<Tabs :tabs="menukortTabs" title="Udvalg" />
<TheFooter/>
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
.introImg{
  display: none;
}

.btnDiv{
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
}

@media all and (min-width: 768px){

  .introWrapper{
    display: flex; 
    justify-content: space-between; 
    align-items: center;
  }

 
  .introImg {
    display: block; 
    width: 40%;  
    margin: 0;  
  }

  .introSec p {
    flex: 1;
    padding-right: 2rem;
  }

  .introSec h3{
    text-align: left;
  }

  .btnDiv{
    flex-direction: row;
  }

}

@media all and (min-width: 1800px){
    .introSec{
      margin-inline: 20rem;
    }
  }

</style>