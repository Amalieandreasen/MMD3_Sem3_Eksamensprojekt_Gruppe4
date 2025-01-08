<script setup>
// import af ref, Splide for at der kan laves billedesliders, Splides css og useHead til at definere metadata
import {ref, onMounted} from 'vue'; 
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useHead } from '@vueuse/head';

// Her importeres de forskellige components som skal bruges på siden
import Navigation from '../assets/components/Navigation.vue';
import TheButton from '../assets/components/TheButton.vue';
import ImageSlider from '../assets/components/ImageSlider.vue';
import FocusedEntryPoints from '@/assets/components/FocusedEntryPoints.vue';
import TheFooter from '@/assets/components/TheFooter.vue';

// Her importeres billederne som skal bruge i billede slideren. 
import slide1 from '../assets/img/forsideDesktop/slide1.png';
import slide2 from '../assets/img/forsideDesktop/slide2.png';
import slide3 from '../assets/img/forsideDesktop/slide3.png';
import slide4 from '../assets/img/forsideDesktop/slide4.png';
import slide5 from '../assets/img/forsideDesktop/slide5.png';
import slide6 from '../assets/img/forsideDesktop/slide6.png';
import slide7 from '../assets/img/forsideDesktop/slide7.png';

// States
// Her defineres h1 som en reaktiv variabel. Dette gør at den er dynamisk og kan ændres.
const h1 = ref("Autentisk italiensk restaurant i Aalborg")

// Her defineres et array af billeder som bruges til billede slideren.
const images =[
    {src: slide1, alt:'Billede af forret'},
    {src: slide2, alt:'Billede af pastaret'},
    {src: slide3, alt:'Billede af pizza'},
    {src: slide4, alt:'Billede af forret'},
    {src: slide5, alt:'Billede af pizza'},
    {src: slide6, alt:'Billede af pastaret'},
    {src: slide7, alt:'Billede af risotto'},
];

// Her hentes billederne til focused entry points
const focusedEntryPointsBackground1 = "/test-sem3Eksamen/src/assets/img/forsideDesktop/fepSelskabsmenu.png";
const focusedEntryPointsBackground2 = "/test-sem3Eksamen/src/assets/img/forsideDesktop/fepSelskabslokaler.png";
const focusedEntryPointsBackground3 = "/test-sem3Eksamen/src/assets/img/forsideDesktop/fepSelskabspakker.png";

// Her defineres de muligheder som vi har ved at bruge splide til vores billede slider. her sættes blandt andet at der kun skal vises et billede på små skærme, den skal selv skifte slide og skal starte forfra. link til splide.js: https://splidejs.com/
const splideOptions = ref({
  autoplay: true,
  slidesToScroll:1,
  gap:50,
  focus:'left',
  rewind: true,
  perPage: 3,  
  breakpoints: {
    768: {
      perPage: 1, 
    },
  },
});

// Her sættes en variabel som kan skifte imellem false og true som bruges på loading screenenn.
const isLoading = ref(true);

// actions


onMounted(() => {
    // I denne onMounted gør jeg at loading kun ses en gang for hver session. LoadingComplete er det som skal sættes inde i sessionStorage og derfor prøver vi først aat se om det er derinde
    const loadingComplete = sessionStorage.getItem('loadingComplete');
    const loadingScreen = document.querySelector(".loadingScreen")

    if (!loadingComplete) {
        // Hvis ikke der kan findes loading complete så kører den loadingscreenen og efterfølgende bliver
        setTimeout(() => {
            sessionStorage.setItem('loadingComplete', 'true');
            isLoading.value = false;
        }, 3000);
        // hvis den fandt loadingComplete sættes isloading til false og loading screenen fjernes
    } else {
        isLoading.value = false;
        loadingScreen.style.display = 'none';
    }
});


// Her opdateres title og meta description for forsiden ved hjælp af librariet VueUse - Head. link til library: https://github.com/vueuse/head
useHead({
  title: 'Sangiovanni',
  meta: [
    {
      name: 'description',
      content: 'Velkommen til Sangiovanni, italiensk restaurant i Aalborg',
    },
  ],
});

</script>

<template>
    <!-- Her bruges vues inbyggede component transition til at lave loading screenen og få den til at fade ud når loading screenen afsluttes. dette gøres med css.  -->
    <Transition name="fade">
        <!-- v-if er et vue directive som her bruges til at vise loadingScreenen hvis isLoading er true -->
      <div v-if="isLoading" class="loadingScreen">
        <div class="spinner">
            <img src="../assets/img/SVG/pizza.svg" alt="pizza">
        </div>
        <div class="logoLoading">
        <img src="../assets/img/forsideDesktop/logo.png" alt="logo">
    </div>
      </div>
    </Transition>
    <Transition name="fade" class="fadeTransition">
        <!-- ! betyder ikke, så dette vises når isLoading er false -->
        <div v-if="!isLoading">
            <!-- Her indsættes navigations Componentet -->
    <Navigation/>
    <section class="hero">
        <video muted loop autoplay src="../assets/img/forsideDesktop/heroVideo.mp4"></video>
        <div class="heroOverlay"></div>
        <!-- Her indsættes h1 som blev lavet med ref -->
        <h1>{{ h1 }}</h1>
    </section>
    <section class="firstSection">
        <div class="familienContent">
        <h2>Vi skaber unikke oplevelser - hver dag</h2>
        <p>Siden 1988 har SanGiovanni været en familiedrevet restaurant med fokus på autentisk italiensk mad og gæstfrihed. Grundlagt af Benthe og Giovanni Volpi, er restauranten vokset gennem generationer og tilbyder i dag både Trattoria & Pizzeria, den italienske bar “il Bar,” selskabslokaler og vinkælderen La Cantina. Med rødder i italienske traditioner og en passion for kvalitet, skaber vi unikke oplevelser for vores gæster - hver dag.
        </p>
    </div>
        <div class="familienbillede">
        <img src="../assets/img/forsideMobil/familien.png" alt="Familen Volpi" srcset="../assets/img/forsideDesktop/familien.png 768w">
    </div>
    </section>
    <section class="secondSection">
        <div class="canneloniContent">
        <h2>italienske delikatesser</h2>
        <p>Vores menu er skabt igennem mange år. En menu med de bedste italienske retter, hvor du ikke går ned på kvaliteten. Hver ret er kælet for. Prøv vores pizzaer med hjemmelavet koldhævet pizzadej eller en autentisk pastaret hvor du kan være sikker på at pastaen er hjemmelavet. Hver dag forbereder vi vores pasta i kælderen så den er frisklavet til dig.
        </p>
        <p>Vi anbefaler også vores mest populære pastaret som er Gratineret Cannelloni fyldt med braiseret krondyr og urter. Langtidstegt kærlighed i hjemmelavet pasta. Buon appetito!</p>
        <div class="menuButtons">
            <!-- Her indsættes routerLinks rundt om TheButton komponentet. -->
            <router-link to="/menukort">
            <TheButton title="Se menukort"/>
        </router-link>
        <a href="https://book.dinnerbooking.com/dk/da-DK/book/table/pax/195/2" target="_blank">
            <TheButton title="Book Bord"/>
        </a>
        </div>
    </div>
        <div class="canneloniBillede">
        <img src="../assets/img/forsideMobil/canneloni.png" alt="Familen Volpi" srcset="../assets/img/forsideDesktop/canneloni.png 768w">
    </div>
    </section>
    <!-- Her indsættes billede slideren fra komponentet. Her bruges v-bind til at vise de billeder som blev hentet ind i states.  -->
    <div class="imageslider">
        <ImageSlider :images="images"/>
    </div>
    <section class="focusedWrapper">
        <router-link to="/selskabsmenu">
            <!-- Her hentes hver Focused Entry Point. her er der defineret props i komponentet som gør at der kan indsættes billede, titel, tekst og en titel til knappen på den side de skal bruges -->
    <FocusedEntryPoints
    :image=focusedEntryPointsBackground1
    h3="Selskabsmenu"
    p="Skal du holde et selskab derhjemme, har vi den helt rigtige løsning for dig med vores selskabsmenu ud af huset."
    buttonTitle="Læs mere"
    />
</router-link>
<router-link to="/selskabslokaler">
    <FocusedEntryPoints
    :image=focusedEntryPointsBackground2
    h3="Se vores selskabslokaler"
    p="Vi har adskillige flotte selskabslokaler til dit arrangement. Læs mere her og se billeder fra vores La Cantina."
    buttonTitle="Læs mere"
    />
</router-link>
<router-link to="/selskabspakker">
    <FocusedEntryPoints
    :image=focusedEntryPointsBackground3
    h3="Selskabspakker & møder"
    p="Vi tilbyder skrædersyet selskabspakker til dit næste møde eller arrangement. Mad, drikke og lokale samlet et sted."
    buttonTitle="Læs mere"
    />
</router-link>
</section>
<section class="reviews">
    <h2>Hvad siger vores kunder</h2>
    <!-- Her bruges splide js librariet til at lave anmeldelse sektionen. Hver SplideSlide er en anmeldelse. -->
     <!-- Her bruges v-bind til at hente mulighederne som blev defineret i script. -->
    <Splide :options="splideOptions">
    <SplideSlide>
        <h3>Simon Løvstrup</h3>
        <div class="stars">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
        </div>
        <p>kompromisløs kvalitet fra enden til anden. Vi har netop afholdt forlovelsesfest i kælderen hos Sangiovanni. Fantastiske omgivelser, betjening og ikke mindst maden. <br>Alle gæster følte sig mere end velkommen og havde en super aften. Vi er måske ikke de nemmeste i verden at overraske eller imponere med god service og restaurantoplevelser. Men her blev vi sat helt til vægs. Vi kommer med sikkerhed igen!</p>
        <div class="googleicon">
        <img src="../assets/img/SVG/google.svg" alt="google">
    </div>
    </SplideSlide>
    <SplideSlide >
        <h3>Stine Mark Christansen</h3>
        <div class="stars">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
        </div>
        <p>Vi holdte vores bryllup hos San Giovanni i deres selskabslokaler med tilstødende barområde.<br> Der var god service fra start til slut; både under planlægningen og under selve festen.Lækker mad - og rigeligt af den - opmærksomme tjenere, der var gode til at fylde op i glassene under middagen.<br>Vi har absolut ikke fortrudt, at vi valgte San Giovanni og kan varmt anbefale dem til selskaber </p>
        <div class="googleicon">
        <img src="../assets/img/SVG/google.svg" alt="google">
    </div>
    </SplideSlide>
    <SplideSlide >
        <h3>Jonas Østergaard</h3>
        <div class="stars">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
        </div>
        <p>Vi var på Giovanni og havde en sublim oplevelse. Betjeningen var super og maden var fantastisk. <br>Vinene spillede rigtigt godt sammen med de serverede retter ( vi vil anbefale jer at rådføre jer med tjeneren, da han har rigtig godt styr på at sætte vin og mad sammen). <br>Prisleje og niveau stemmer rigtig fint overens  Vi vil helt klart vælge San Giovanni igen næste gang vi er i Ålborg. </p>
            <div class="googleicon">
        <img src="../assets/img/SVG/google.svg" alt="google">
    </div>
    </SplideSlide>
    <SplideSlide >
        <h3>Rene Kronborg</h3>
        <div class="stars">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
        </div>
        <p>Sødt og venligt personale ved modtagelsen. Vi var 7 som havde bestilt bord Hurtigt fik vi bestilt mad og drikkevare. Super gode vin Rød og Rosé. Vi bestilt pizza og pastaret. Super lækker og velsmagende pizza Men det ville være godt hvis pizza var skåret ud i 6 eller 8 stykker. Pasta ret var også lækker I alt en dejlig oplevelse Med mad lavet af gode råvare </p>
            <div class="googleicon">
        <img src="../assets/img/SVG/google.svg" alt="google">
    </div>
    </SplideSlide>
    <SplideSlide >
        <h3>Dan Lorenzen</h3>
        <div class="stars">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
        </div>
        <p>Super atmosfære som virkelig formår at fange den italienske krogstil, alt fra dekor til den fantastiske Ternet dug og olivenolie som pryder dit bord når du først sætter dig. Personalet er meget kompetent og venligt. Maden er exceptionel vi bestilte antipasto efterfulgt af en frisk velkomstdrink, derefter en frisk fanget lange velakompanieret af veltillavet tilbehør som man selv vælger. En dejlig let og smagsfuldt dessert sluttede aften af, alt sammen skyllet ned med rigtig god drue. Så alt i alt kan der kun gives 5 stjerner. Det er ikke billigt men det er alle pengene værd. Det anbefales at bestille bord, men det er ikke så mærkeligt. Super super. </p>
            <div class="googleicon">
        <img src="../assets/img/SVG/google.svg" alt="google">
    </div>
    </SplideSlide>
    <SplideSlide >
        <h3>Thomas Christensen</h3>
        <div class="stars">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
            <img src="../assets/img/SVG/stjerne.svg" alt="stjerne">
        </div>
        <p>Fantastisk dag.......... Vi holdte min søns konfirmation i San Giovanni ´s selskabslokaler som er placeret i kælderen af restauranten. Rammerne var sat. En inspiration til en middelalder borg. Vi kunne se og mærke at alle hvad gjort sig ekstra umage for at vi fik en dejlig dag. Maden var sindssyg god og vinene var ligeså. Vi var så heldige, at tjeneren som præsenterede maden og vinen lige havde vundet en sølvmedalje i skels, hvilke gjorde at stemningen blev løfter med den udførlige indføring i hvad vi skulle have at spise og drikke. Alt i alt så er vi super glade for at have valgt netop San Giovanni som ramme for vores søns konfirmation. Tusinde tak for mad. </p>
            <div class="googleicon">
        <img src="../assets/img/SVG/google.svg" alt="google">
    </div>
    </SplideSlide>
  </Splide>
</section>
<article class="facebookSection">
<h2>Vi er på Facebook</h2>
<p>Vi opdaterer ofte vores sociale medier med nyheder, inspiration til dit næste selskab og meget mere. </p>
<div class="posts">
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsangiovanniaalborg%2Fposts%2Fpfbid0N8cAkaZY3uxe8i1HdMnEVEudYCCBueycSKhwi5rPQ72syhBBQ5XrcB5w8QYrjvnJl&show_text=true&width=500" width="300" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsangiovanniaalborg%2Fposts%2Fpfbid02kPoDcjXta6queYkbdzEGFDbpB2dBuik6MoKJYAiBZvVtBuAPznNVBnPuDSnFGgNNl&show_text=true&width=500" width="300" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsangiovanniaalborg%2Fposts%2Fpfbid0GEZXF4NWEfP8wqFUtuTWubvwCzENvYqiqVYLtMae23kBc4oSFDNegT7z1jtioposl&show_text=false&width=500" width="300" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
</div>
</article>
<!-- Her indsættes footer komponentet -->
<TheFooter/>
 </div>
</Transition>

</template>

<style scoped>
/* Dette csss bruges sammen med vue transition komponentet */
/* loading screenen vil starte med opacity 0 (fade-enter-from) herefter fader loading screenen frem (fade-enter-active). når elementet fjernes fader loading screenen ud (fade-leave-active) og til sidst bliver den skult med opacity 0 (fade-leave-to) */
.fade-enter-active, .fade-leave-active{
transition: opacity 1s ease-in-out;
position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

.fade-enter-from, .fade-leave-to{
    opacity: 0;
    overflow-x: hidden;
}

.loadingScreen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--green);
  overflow-x: hidden;
}

.spinner img{
    animation: spin 2s linear infinite;
    width: 150px;
    transform-origin: center;
    overflow-x: hidden;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.hero {
    position: relative;
    width: 100%;
    height: 100vh; 
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.heroOverlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.37); 
    z-index: 1;
}

.hero video {
    position: absolute; 
    top: 0;
    left: 0;
    width: 100%;  
    height: 100%; 
    object-fit: cover; 
    z-index: 0; 
}

.hero h1{
    position: absolute;
    bottom: 10%;
   z-index: 2;
   margin-inline: 1rem;
   text-align: center;
}

.firstSection h2, .firstSection p, .secondSection h2, .secondSection p{
    margin-inline: 2rem;
}

.firstSection h2, .firstSection p, .firstSection img, .secondSection h2, .secondSection p, .secondSection img{
    margin-top: 2rem;
}

.firstSection img, .secondSection img{
    width: 100%;
}

.familienContent{
    background-image: url(../assets/img/SVG/vinmark.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
}

.canneloniContent{
    background-image: url(../assets/img/SVG/italien.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}

.reviews{
    background-color: var(--green);
    padding: 2rem;
}

.reviews h2{
    text-align: center;
    margin-bottom: 2rem;
}

.stars{
    display: flex;
    gap: 0.5rem;
    margin-block: 0.5rem;
}

.googleicon img{
    width: 30px;
    margin-top: 1rem;
}

.posts{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.facebookSection h2{
    margin-top: 2rem;
    text-align: center;
}

.facebookSection p{
    margin-top: 1rem;
    text-align: center;
    margin-bottom: 1rem;
}

.menuButtons{
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 2rem;
    gap: 1rem;
    margin-inline: 2rem;
}


@media all and (min-width: 1024px){
.firstSection{
    display: flex;
    margin-inline: 5rem;
}

.familienContent, .canneloniContent{
    width: 100%;
}

.secondSection{
    display: flex;
    flex-direction: row-reverse;
    margin-inline: 5rem;
}

.familienbillede, .canneloniBillede, .menuButtons{
    margin: 2rem;
}

.focusedWrapper{
    display: flex;
    justify-content: center;
    margin-block: 5rem;
}

.posts{
   display: flex;
   flex-direction: row;
   margin-bottom: 2rem ;
}

iframe{
    max-width: 30vw;
}

.menuButtons{

    flex-direction: row;
}
}

@media all and (min-width: 1800px){
   
   .firstSection, .secondSection {
       margin-inline: 20rem;
   }

   .focusedWrapper{
    margin-inline: 20rem;
   }

   .reviews{
    padding-inline: 20rem;
   }
   }
</style>
