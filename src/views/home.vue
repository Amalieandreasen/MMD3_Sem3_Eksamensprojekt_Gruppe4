<script setup>
import {ref} from 'vue'; 
import Navigation from '../assets/components/Navigation.vue';
import TheButton from '../assets/components/TheButton.vue';
import ImageSlider from '../assets/components/ImageSlider.vue';

import slide1 from '../assets/img/forsideDesktop/slide1.png';
import slide2 from '../assets/img/forsideDesktop/slide2.png';
import slide3 from '../assets/img/forsideDesktop/slide3.png';
import slide4 from '../assets/img/forsideDesktop/slide4.png';
import slide5 from '../assets/img/forsideDesktop/slide5.png';
import slide6 from '../assets/img/forsideDesktop/slide6.png';
import slide7 from '../assets/img/forsideDesktop/slide7.png';

// States
const h1 = ref("Autentisk italiensk restaurant i Aalborg")

const images =[
    {src: slide1, alt:'slide1'},
    {src: slide2, alt:'slide2'},
    {src: slide3, alt:'slide3'},
    {src: slide4, alt:'slide4'},
    {src: slide5, alt:'slide5'},
    {src: slide6, alt:'slide6'},
    {src: slide7, alt:'slide7'},
];

</script>

<template>
    <Navigation/>
    <section class="hero">
        <video muted loop autoplay src="../assets/img/forsideDesktop/heroVideo.mp4"></video>
        <div class="heroOverlay"></div>
        <h1>{{ h1 }}</h1>
    </section>
    <section class="firstSection">
        <h2>Vi skaber unikke oplevelser - hver dag</h2>
        <p>Siden 1988 har SanGiovanni været en familiedrevet restaurant med fokus på autentisk italiensk mad og gæstfrihed. Grundlagt af Benthe og Giovanni Volpi, er restauranten vokset gennem generationer og tilbyder i dag både Trattoria & Pizzeria, den italienske bar “il Bar,” selskabslokaler og vinkælderen La Cantina. Med rødder i italienske traditioner og en passion for kvalitet, skaber vi unikke oplevelser for vores gæster – hver dag.
        </p>
        <img src="../assets/img/forsideMobil/familien.png" alt="Familen Volpi" srcset="../assets/img/forsideDesktop/familien.png 768w">
    </section>
    <section class="secondSection">
        <h2>italienske delikatesser</h2>
        <p>Vores menu er skabt igennem mange år. En menu med de bedste italienske retter, hvor du ikke går ned på kvaliteten. Hver ret er kælet for. Prøv vores pizzaer med hjemmelavet koldhævet pizzadej eller en autentisk pastaret hvor du kan være sikker på at pastaen er hjemmelavet. Hver dag forbereder vi vores pasta i kælderen så den er frisklavet til dig.
        </p>
        <p>Vi anbefaler også vores mest populære pastaret som er Gratineret Cannelloni fyldt med braiseret krondyr og urter. Langtidstegt kærlighed i hjemmelavet pasta. Buon appetito!</p>
        <div class="menuButtons">
            <TheButton title="Se menukort"/>
            <TheButton title="Book Bord"/>
        </div>
        <img src="../assets/img/forsideMobil/canneloni.png" alt="Familen Volpi" srcset="../assets/img/forsideDesktop/canneloni.png 768w">
    </section>
    <div class="imageslider">
        <ImageSlider :images="images"/>
    </div>
    <section class="focusedEntryPoints">
        
    </section>
</template>

<style scoped>
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


</style>
