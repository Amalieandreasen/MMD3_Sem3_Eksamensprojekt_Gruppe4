<script setup>
import { ref } from 'vue';
// Her impoteres diverse komponenter som skal bruges på dette view
import Tabs from '@/assets/components/Tabs.vue';
import ItalienskOl from '@/assets/components/ItalienskOl.vue';
import KoldeDrikkevarer from '@/assets/components/KoldeDrikkevarer.vue';
import Navigation from '../assets/components/Navigation.vue';
import TheFooter from '@/assets/components/TheFooter.vue';

// Her oprettes et array med de forskellige Tabs der skal bruges. 
const menukortTabs = [
  { title: "Italienske Øl", component: ItalienskOl },
  { title: "Kolde drikkevarer", component: KoldeDrikkevarer },
  { title: "Kaffe", component: "Forretter" },
  { title: "Likør", component: "Forret" }
];

</script>

<template>
    <main>
      <Navigation/>
        <section class="heroSec">
      <div class="heroOverlay">
        <img src="../assets/img/drikkevarerMobil/hero.png" alt="Vin" srcset="../assets/img/drikkevarerDesktop/hero.png 768w">
        <div class="heroText">
          <h1>Drikkevare</h1>
        </div>
      </div>
    </section>

    <section class="introSec">
      <div class="introWrapper">
      <div>
      <h3>Drikkevare</h3>
      <p>
        Vi tilbyder et udsøgt udvalg af drikkevarer, der passer til enhver lejlighed. Nyd smagen af autentiske italienske øl, kølige og læskende drikke, klassisk kaffe eller en aromatisk likør som den perfekte afslutning på dit måltid. Uanset hvad du vælger, er vores drikkevarer skabt til at komplementere din oplevelse hos os.
      </p>
    </div>
      <img class="introImg" src="../assets/img/drikkevarerDesktop/introBillede.png" alt="Menu Image">
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
}

</style>