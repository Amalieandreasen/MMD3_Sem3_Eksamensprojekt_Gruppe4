<script setup>
import TheButton from '@/assets/components/TheButton.vue';
import { ref } from 'vue';
import Tabs from '@/assets/components/Tabs.vue';
import Mousserende from '@/assets/components/Mousserende.vue';
import Hvidvin from '@/assets/components/Hvidvin.vue';
import hero from '@/assets/img/vinkortMobil/hero.png'
import mobileHero from '@/assets/img/vinkortDesktop/hero.png'
import { useHead } from '@vueuse/head';

import Navigation from '../assets/components/Navigation.vue';
import TheFooter from '@/assets/components/TheFooter.vue';
import TheHero from '@/assets/components/TheHero.vue';

const menukortTabs = [
  { title: "Mousserende", component: Mousserende },
  { title: "Hvidvin", component: Hvidvin },
  { title: "Rødvin", component: "Rødvin" },
  { title: "Rosé Vin", component: "Forret" }
];

useHead({
  title: 'Vinkort',
  meta: [
    {
      name: 'description',
      content: 'Vi har et stort udvalg af alle slags vin. Oplev vores almindelige eller udvidede vinkort.',
    },
  ],
});

</script>

<template>
    <main>
      <Navigation/>
        <!-- <section class="heroSec">
      <div class="heroOverlay">
        <img src="../assets/img/vinkortMobil/hero.png" alt="Vin" srcset="../assets/img/vinkortDesktop/hero.png 768w">
        <div class="heroText">
          <h1>Vinkort</h1>
        </div>
      </div>
    </section> -->
    <TheHero
    :imgSrc="hero" 
    :imgSrcSet="`${mobileHero} 768w`"
    title="Vinkort"
    imgAlt="Billede af vin"
    />

    <section class="introSec">
      <div class="introWrapper">
      <div>
      <h3>Vinkort</h3>
      <p>
        Vi har forsigtigt udvalgt vores sæsonretter for at give dig den bedste oplevelse, med friske råvare der passer til årstiden. For at fuldende oplevelsen, kan du udforske vores nøje udvalgte vinkort og drikkevare. 
      </p>
      <div class="btnDiv">
        <a href="https://drive.google.com/file/d/1JiH6jidTdNgp06-_dpR_yf0xDXLNRw1O/view?usp=sharing" target="_blank">
        <TheButton title="Udvidet Vinkort" :isPdf="true"/>
      </a>
      <RouterLink to="/drikkevarer">
        <TheButton title="Drikkevarer"/>
      </RouterLink>
      </div>
    </div>
      <img class="introImg" src="../assets/img/vinkortDesktop/introBillede.png" alt="Vinhylde">
    </div>
    </section>

<Tabs :tabs="menukortTabs" title="Udvalg" />
<TheFooter/>
</main>
</template>

<style scoped>
/* .heroSec {
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
} */

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