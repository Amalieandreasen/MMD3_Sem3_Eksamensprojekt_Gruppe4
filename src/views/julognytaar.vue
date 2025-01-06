<script setup>
import {ref} from 'vue'; 
import Navigation from '@/assets/components/Navigation.vue';
import TheButton from '@/assets/components/TheButton.vue';
import TheFooter from '@/assets/components/TheFooter.vue';
</script>

<template>
    <main>
    <Navigation/>
    <section class="heroSec">
      <div class="heroOverlay">
        <img src="../assets/img/julognytaarMobil/hero.png" alt="Julemenu" srcset="../assets/img/julognytarDesktop/hero.png 768w">
        <div class="heroText">
          <h1>Jul & Nytår</h1>
        </div>
      </div>
    </section>
    <section class="julemenu">
        <h2>Julemenu</h2>
        <p>Fejr julen med eksklusive middage i La Cantina, hvor vi tilbyder specialdesignede menuer for at skabe den perfekte julestemning. Nyd en aften med familie og venner med alt fra velkomstdrinks til en skøn middag akkompagneret af tilpassede vine.
        </p>
        <div class="juleButton">
        <TheButton title="Se menuen" />
    </div>
        <img src="../assets/img/julognytarMobil/julemenu.png" alt="Julemenu" srcset="../assets/img/julognytarDesktop/julemenu.png 768w">
    </section>
    <section class="nytaarsAften">
        <h2>Nytårsaften hos Sangiovanni</h2>
        <p>Vi åbner dørene kl. 17:30 nytårsaften. Aftenen starter med et glas bobler og snacks, mens vi ser Kongens nytårstale kl. 18:00. Derefter nyder vi en nøje sammensat femretters menu med vinparinger til hver ret. Fortsæt aftenen i ‘IL BAR’ med after dinner drinks, hvor vi byder velkommen til det nye år indtil kl. 02:00.
        </p>
        <div class="nytaarsaftenButtons">
        <TheButton title="Se menuen" />
        <TheButton title="Book bord" />
    </div>
        <img src="../assets/img/julognytaarMobil/nytaarsaften.png" alt="Nytårsaften" srcset="../assets/img/julognytarDesktop/nytaarsaften.png 768w">
    </section>
    <section class="nytaarsMenu">
        <h2>Nytårsmenu ud af huset</h2>
        <p>Foretrækker du at fejre nytåret hjemme? Bestil vores komplette nytårsmenu, klar til let færdiggørelse. Menuen leveres med instruktioner og alt nødvendigt for en festlig aften derhjemme. Afhentning er den 31. december fra kl. 11:00 til 14:00.
        </p>
        <div class="nytaarsmenuButtons">
        <TheButton title="Se menuen" />
        <TheButton title="Bestil Menu" />
    </div>
        <img src="../assets/img/julognytaarMobil/nytaarsmenu.png" alt="Nytårsmenu" srcset="../assets/img/julognytarDesktop/nytaarsmenu.png 768w">
    </section>
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
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 2;
  text-align: center;
}

.julemenu h2, .nytaarsAften h2, .nytaarsMenu h2{
    text-align: center;
    margin-block: 2rem;
}

.julemenu p, .nytaarsAften p, .nytaarsMenu p{
    margin-inline: 2rem;
    margin-bottom: 2rem;
}

.julemenu img, .nytaarsAften img, .nytaarsMenu img{
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.juleButton{
    display: flex;
    justify-content: center;
    align-items: center;
}

.nytaarsaftenButtons, .nytaarsmenuButtons{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

</style>