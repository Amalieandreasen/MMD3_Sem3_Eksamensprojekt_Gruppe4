<script setup>
import Navigation from '@/assets/components/Navigation.vue';
import TheButton from '@/assets/components/TheButton.vue';
import TheFooter from '@/assets/components/TheFooter.vue';
import ImageSlider from '@/assets/components/ImageSlider.vue';
import FocusedEntryPoints from '@/assets/components/FocusedEntryPoints.vue';
import { useHead } from '@vueuse/head';

import slide1 from '../assets/img/selskabslokalerDesktop/slide1.png';
import slide2 from '../assets/img/selskabslokalerDesktop/slide2.png';
import slide3 from '../assets/img/selskabslokalerDesktop/slide3.png';
import slide4 from '../assets/img/selskabslokalerDesktop/slide4.png';
import slide5 from '../assets/img/selskabslokalerDesktop/slide5.png';
import slide6 from '../assets/img/selskabslokalerDesktop/slide6.png';
import slide7 from '../assets/img/selskabslokalerDesktop/slide7.png';
import slide8 from '../assets/img/selskabslokalerDesktop/slide8.png';

// states

const focusedEntryPointsBackground2 = "/src/assets/img/forsideDesktop/fepSelskabslokaler.png";
const focusedEntryPointsBackground3 = "/src/assets/img/forsideDesktop/fepSelskabspakker.png";
const focusedEntryPointsBackground4 = "/src/assets/img/forsideDesktop/fepBar.png"


const images =[
    {src: slide1, alt:'Billede af selskabslokale'},
    {src: slide2, alt:'Billede af selskabslokale'},
    {src: slide3, alt:'Billede af selskabslokale'},
    {src: slide4, alt:'Billede af selskabslokale'},
    {src: slide5, alt:'Billede af selskabslokale'},
    {src: slide6, alt:'Billede af selskabslokale'},
    {src: slide7, alt:'Billede af selskabslokale'},
    {src: slide8, alt:'Billede af selskabslokale'},

];

// actions

useHead({
  title: 'Selskabslokaler',
  meta: [
    {
      name: 'description',
      content: 'Oplev vores fantastiske selskabslokaler, vi har til hvert et arrangement. Eller bestil Private Dining og prøv en oplevelse ud over det sædvanlige',
    },
  ],
});


</script>

<template>
  <main>
    <Navigation/>
    <section class="heroSec">
      <div class="heroOverlay">
        <img src="../assets/img/selskabslokalerMobil/hero.png" alt="Julemenu" srcset="../assets/img/selskabslokalerDesktop/hero.png 768w">
        <div class="heroText">
          <h1>Se vores selskabslokaler</h1>
        </div>
      </div>
    </section>
    <section class="intro">
        <p>Vores kælder under restauranten, La Cantina, er helt unik og består i alt af 5 hyggelige lokaler af forskellig størrelse. La Cantina åbner udelukkende for selskaber og Private Dining og har sin egen indgang fra Vingaardsgade 25.</p>
    </section>
    <section class="lokaler">
        <div class="laCantina">
            <h2>Vores lokaler i La Cantina</h2>
            <div class="laCantinaLokaler">
            <div class="lokale1">
                <h3>La Cantina</h3>
                <p>45 - 48 Gæster</p>
            </div>
            <div class="lokale2">
                <h3>Il Sotto</h3>
                <p>30 Gæster</p>
            </div>
            <div class="lokale3">
                <h3>Roma</h3>
                <p>16 Gæster</p>
            </div>
            <div class="lokale4">
                <h3>Museum</h3>
                <p>8 gæster</p>
            </div>
            <div class="lokale5">
                <h3>La Grotta</h3>
                <p>8 - 10 Gæster</p>
            </div>
        </div>
    </div>
        <div class="stueEtagen">
            <h2>Vores lokaler i stueetagen</h2>
            <div class="stueEtagenLokaler">
                <div class="stLokale1">
                    <h3>Il Campo</h3>
                    <p>30 gæster</p>
                </div>
                <div class="stLokale2">
                    <h3>Sala Degli Angeli</h3>
                    <p>36 gæster</p>
                </div>
            </div>
        </div>
    </section>
    <div class="imageslider">
        <ImageSlider :images="images"/>
    </div>
    <section class="privateDining">
        <div class="text">
            <h2>Private Dining i La Cantina</h2>
            <p>Private Dining er en oplevelse for dig der ønsker en særlig oplevelse. Her har du muligheden for at sidde i vores Private Dining lokaler i La Cantina og nyde en ekslusiv aften. Der er ikke et minimum antal gæster dog skal omsætningen være på minimum kr. 10000,00 før vi åbner.</p>
            <p>Nogle dage det muligt for mindre selskaber at booke i La Cantina uden at forpligte sig til en minimumsomsætning da denne er foretaget ved at der er et større selskab den pågældende aften - forhør gerne om muligheden. </p>
            <p>Menuen der er på 5 retter er sat op efter klassisk italiensk tradition og baseret på køkkenets fantasi og dagens udvalg af friske råvarer. Vi serverer både fisk, pasta, kød og dessert. Vi tager naturligvis hensyn til gæster med specielle behov mht. menuen, blot oplys dette ved reservationen. </p>
            <p>Start gerne middagen med et glas skummende Franciacorta Cuvée  og en rundvisning i vinkælderen. </p>
        </div>
        <img src="../assets/img/selskabslokalerDesktop/privateDining.png" alt="vinglas">
    </section>
    <section class="priser">
        <section class="menuList">
    <h2>Priser</h2>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Velkomstdrink Franciacorta fra Ronco Calino</h3>
      </div>
      <div class="menuPrice">
        <p>kr. 120,00 pr. glas</p>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Menu</h3>
      </div>
      <div class="menuPrice">
        <p>kr. 795,00 pr. person</p>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Vinmenu “classico” til 5 retters</h3>
      </div>
      <div class="menuPrice">
        <p>kr. 595,00 pr. person</p>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Vinmenu “amore del vino” til 5 retters</h3>
      </div>
      <div class="menuPrice">
        <p>kr. 795,00 pr. person</p>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Vand med eller ud brus ad libitum á </h3>
      </div>
      <div class="menuPrice">
        <p>kr. 30,00 pr. person</p>
      </div>
    </div>
  </section>
  <div class="buttonWrapper">
  <TheButton title="Kontakt os for booking"/>
</div>
    </section>
    <section class="focusedWrapper">
    <router-link to="/selskabspakker">
    <FocusedEntryPoints
    :image=focusedEntryPointsBackground2
    h3="Selskabspakker & Møder"
    p="Vi tilbyder skræddersyet selskabspakker til dit næste møde eller arrangement. Mad, drikke og loakle samlet et sted."
    buttonTitle="Læs mere"
    />
</router-link>
<router-link to="/selskabsmenu">
    <FocusedEntryPoints
    :image=focusedEntryPointsBackground3
    h3="Selskabsmenu ud af huset"
    p="Skal du holde et selskab derhjemme, har vi den helt rigtige løsning for dig med vores selskabsmenu ud af huset."
    buttonTitle="Læs mere"
    />
</router-link>
    <FocusedEntryPoints
    :image=focusedEntryPointsBackground4
    h3="IL Bar"
    p="Hos Sangiovanni har vi vores helt egen bar hvor du kan nyde en drink, kaffe eller noget helt tredje. "
    buttonTitle="Læs mere"
    />
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
  z-index: 5;
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

.intro p{
    margin-inline: 2rem;
    margin-block: 2rem;  
}

.laCantina h2, .stueEtagen h2{
    text-align: center;
    margin-bottom: 2rem;
}

.laCantina{
    background-color: var(--green);
    padding: 2rem;
}

.laCantinaLokaler{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    justify-items: center;
}

.stueEtagen{
    padding: 2rem;
}

.stueEtagenLokaler{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
}

.menuList {
  padding: 2rem;
}

.menuItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gold); 
  padding: 1rem 0;
}

.menuItem:last-of-type {
  border-bottom: none;
}

.menuTxt h3 {
  margin: 0;
  font-size: 1.2rem;
}

.menuTxt p {
  margin: 0;
  font-size: 0.9rem;
  color: #bbb; 
}

.menuPrice p {
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
}

.text h2{
    text-align: center;
}

.text{
    padding: 2rem;
}

.text p{
    margin-top: 1rem;
}

.privateDining img{
    width: 100%;
    height: 50%;
}

.buttonWrapper{
    display: flex;
    justify-content: center;
    align-self: center;
}

@media all and (min-width: 768px){
    .intro{
        margin-inline: 10rem;
        margin-block: 5rem;
    }

    .lokaler{
        display: flex;
    }

    .laCantina{
        width: 50%;
    }

    .privateDining{
        display: flex;
        margin-inline: 5rem;
    }

    .privateDining img{
        padding: 2rem;
        height: 100%;
    }

    .priser{
        margin-inline: 5rem;
    }

    .focusedWrapper{
    display: flex;
    justify-content: center;
    margin-block: 5rem;
}
}

@media all and (min-width: 1800px){
 .laCantina, .stueEtagen, .privateDining, .priser{
        padding-inline: 20rem;
    }

    .intro{
      margin-inline: 30rem;
    }

    .focusedWrapper{
    margin-inline: 20rem;
   }
}
</style>