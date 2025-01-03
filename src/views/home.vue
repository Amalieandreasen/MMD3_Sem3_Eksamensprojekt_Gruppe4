<script setup>
import {ref} from 'vue'; 
import Navigation from '../assets/components/Navigation.vue';
import TheButton from '../assets/components/TheButton.vue';

// States
const h1 = ref("Autentisk italiensk restaurant i Aalborg")

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

.firstSection h2, .firstSection p{
    margin-inline: 2rem;
}

.firstSection h2, .firstSection p, .firstSection img{
    margin-top: 2rem;
}

.firstSection img{
    width: 100%;
}


</style>
