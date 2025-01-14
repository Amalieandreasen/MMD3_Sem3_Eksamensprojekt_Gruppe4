<script setup>
import Navigation from '@/assets/components/Navigation.vue';
import TheButton from '@/assets/components/TheButton.vue';
import TheFooter from '@/assets/components/TheFooter.vue';
import SectionAdjustable from '@/assets/components/SectionAdjustable.vue';
import FocusedEntryPoints from '@/assets/components/FocusedEntryPoints.vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {ref} from 'vue'; 
import { useHead } from '@vueuse/head';

// states
const focusedEntryPointsBackground2 = "/test-sem3Eksamen/src/assets/img/forsideDesktop/fepSelskabslokaler.png";
const focusedEntryPointsBackground3 = "/test-sem3Eksamen/src/assets/img/forsideDesktop/fepSelskabspakker.png";
const focusedEntryPointsBackground4 = "/test-sem3Eksamen/src/assets/img/forsideDesktop/fepBar.png"

const splideOptions = ref({
  autoplay: true,
  slidesToScroll:1,
  gap:50,
  focus:'left',
  rewind: true,
  perPage: 1, 
  autoHeigt: true, 
});

// actions
useHead({
  title: 'Selskabspakker',
  meta: [
    {
      name: 'description',
      content: 'Hos Sangiovanni kan vi holde hvert et arrangement. Vi har lavet selskabspakker for de mest typiske, så kig her og lad dig inspirere',
    },
  ],
});

// Billeder til Section Component
import helaftenImgMobil from '@/assets/img/selskabspakkerMobil/helaftensarrangement.png'
import helaftenImgDesktop from '@/assets/img/selskabspakkerDesktop/helaftensarrangement.png'
import bryllupImgMobil from '@/assets/img/selskabspakkerMobil/bryllupspakken.png'
import bryllupImgDesktop from '@/assets/img/selskabspakkerDesktop/bryllupspakken.png'
import konfirmationImgMobil from '@/assets/img/selskabspakkerMobil/konfirmationspakken.png'
import konfirmationImgDesktop from '@/assets/img/selskabspakkerDesktop/konfirmationspakken.png'


const sections = [
    {
    title: "Helaftensarrangementer",
    paragraphs: [
    "Ved et helaftens arrangement på SanGiovanni, er alt med i den fastsatte kuvertpris lige fra velkomst til bar og natmad.",
    "Et helaftensarrangement kan tilpasses til lige dine behov alt efter menuen, hvor mange der skal med og hvilken anledning selskabet skal holdes til. Selskaber kan holdes i vores flotte lokaler i La Cantina.",
    ],
    imgSrc: helaftenImgMobil,
    imgAlt: "La Cantina",
    imgSrcSet: `${helaftenImgDesktop} 768w`,
    button1Title: "Kontakt os for booking",
    button1IsPdf: false,
    button2Title: "Hent brochure om selskaber",
    button2Href:
      "https://drive.google.com/file/d/19RQlnFxq5hAsNvmKqb05Wx6E_LPTKtUj/view?usp=sharing",
    button2IsPdf: true,
    isReverse: false,
},
{
    title: "Bryllupspakken",
    paragraphs: [
      "Brylluppet er livets store fest, og vi har mange års erfaring med at gøre denne store dag helt jeres.",
      "Der er mange ting der skal tages hånd om, og vi hjælper jer gerne hele vejen igennem med sparring og vejledning så I får lige nøjagtig den fest I drømmer om.",
    ],
    imgSrc: "../assets/img/selskabspakkerMobil/bryllupspakken.png",
    imgAlt: bryllupImgMobil,
    imgSrcSet: `${bryllupImgDesktop} 768w`,
    button1Title: "Kontakt os for booking",
    button1IsPdf: false,
    button2Title: "Læs alt om bryllupspakken",
    button2Href:
      "https://drive.google.com/file/d/19RQlnFxq5hAsNvmKqb05Wx6E_LPTKtUj/view?usp=sharing",
    button2IsPdf: true,
    isReverse: true,
  },
  {
    title: "Konfirmationspakken",
    paragraphs: [
      "Konfirmation er en stor dag for det unge menneske, og derfor hjælper vi gerne med at holde en smuk og vellykket fest lige efter jeres behov.",
      "Kontakt os i dag, så hjælper vi jer fra start til slut.",
    ],
    imgSrc: "../assets/img/selskabspakkerMobil/konfirmationspakken.png",
    imgAlt: konfirmationImgMobil,
    imgSrcSet: `${konfirmationImgDesktop} 768w`,
    button1Title: "Kontakt os for booking",
    button1IsPdf: false,
    button2Title: "Læs alt om konfirmationspakken",
    button2Href:
      "https://drive.google.com/file/d/19RQlnFxq5hAsNvmKqb05Wx6E_LPTKtUj/view?usp=sharing",
    button2IsPdf: true,
    isReverse: false,
  },
];

</script>

<template>
   <main>
    <Navigation/>
    <section class="heroSec">
      <div class="heroOverlay">
        <img src="../assets/img/selskabspakkerMobil/hero.png" alt="Julemenu" srcset="../assets/img/selskabspakkerDesktop/hero.png 768w">
        <div class="heroText">
          <h1>Selskabspakker og møder</h1>
        </div>
      </div>
    </section>
    <section class="intro">
        <h2>Selskaber til dit behov</h2>
        <div class="introPWrap">
        <p>På SanGiovanni byder vi velkommen til alle former for selskaber og arrangementer. Alt fra bryllup til konfirmation, mærkedage og firmafester og der går sjældent en weekend uden et arrangement.</p>
        <p>Her på siden kan du se et udvalg af de pakker vi tilbyder og nederst på siden har du mulighed for at se hvordan du kan tilpasse menuen til dit selskab</p>
        </div>
    </section>
    <SectionAdjustable
      v-for="(section, index) in sections"
      :key="index"
      :title="section.title"
      :paragraphs="section.paragraphs"
      :imgSrc="section.imgSrc"
      :imgAlt="section.imgAlt"
      :imgSrcSet="section.imgSrcSet"
      :button1Title="section.button1Title"
      :button1IsPdf="section.button1IsPdf"
      :button2Title="section.button2Title"
      :button2Href="section.button2Href"
      :button2IsPdf="section.button2IsPdf"
      :isReverse="section.isReverse"
    />
   <section class="modePakken">
    <div class="displayWrapper">
    <h3>Mødepakken</h3>
    <p> Hold Deres næste møde i inspirerende og unikke rammer i hjertet af Aalborg. Vi ligger lige i mellem to af Aalborgs store P-pladser, ”Budolfi” og ”Gåsepigen”.
        Vi har på SanGiovanni flere muligheder for at afholde et inspirerende møde..</p>
        <p>Vi kan tilbyde følgende møde pakke til eftermiddags / aftenmøde:</p>
        <ul>
            <li>Kaffe/te, frisk frugt og koldt vand ved ankomst</li>
            <li>Lokale opstillet efter aftale, koldt vand under mødet</li>
            <li>Projektor</li>
            <li>Lærred</li>
            <li>Flipover</li>
            <li>2 retters middag inkl. 2 genstande, vand og afsluttet med kaffe/te med sødt</li>
        </ul>
        <div class="buttonWrapper">
        <TheButton title="Kontakt os for booking" :isPdf="false"/>
    </div>
</div>
    <img src="../assets/img/selskabspakkerMobil/modepakken.png" alt="La Cantina" srcset="../assets/img/selskabspakkerDesktop/modepakken.png 768w">
   </section>
   <section class="menuSlider">
    <h3>Tilpas dit arrangement</h3>
    <p>Tilpas dit arrangement med lige den menu som passer bedst til din smag. Nedenunder kan du se hvad vi tilbyder af forretter, hovedretter og desserter. Hvis du har et helt særligt ønske kan du dog altid spørge. Vi kan med garanti opfylde dit ønske. </p>
    <Splide :options="splideOptions">
        <SplideSlide class="slide1">
            <img src="../assets/img/selskabspakkerDesktop/forretter.png" alt="Forretter">
            <div class="menuItems">
                <h3>Forretter</h3>
                <p>Der er også forretter vi kun har i sæson og disse kan oplyses ved henvendelse.
                </p>
                <ul>
                    <li>18 mdr. lagret Parmaskinke på butterdej med trøffelmayo og revet parmesan
                    </li>
                    <li>Frisk ravioli med sæsonens fyld vendt i sauce af lufttørret pancetta(italiensk bacon),
                italienske tomater og aubergine tilsmagt med frisk basilikum og høvlet parmesan
                </li>
                <li>Dagens fisk - denne ret afgøres af sæson + 25,00 pr. pers.</li>
                <li>Hjemmerøget laks med urter, citron og råmarinerede zucchini
                </li>
                <li>Årstidens risotto af ægte Carnaroliris mættet med parmigiano reggiano.
                </li>
                <p>Foråret kan eks. være med asparges og jomfruhummer, efteråret med svampe og trøffel men kan tilpasses efter ønske og der kan forekomme et tillæg afhængig af hvilken type der ønskes. + 25,00 pr. pers.</p>
                </ul>
            </div>
        </SplideSlide>
        <SplideSlide class="slide2">
            <img src="../assets/img/selskabspakkerDesktop/hovedretter.png" alt="Hovedretter">
            <div class="menuItems">
                <h3>Hovedretter</h3>
                <p>Til alle hovedretter serveres der dagens grønt fra torvet i Parma og små kartofler fra Vildmosen krydret med frisk rosmarin. Ønsker De vi skal byde hovedretten rundt 2. gang fra fad kan dette bestilles mod et tillæg på kr. 35,00 pr. pers.
                </p>
                <ul>
                    <li>Helstegt kalvefilet serveret med en cremet sauce med frisk salvie
                    </li>
                    <li>Velmodnet helstegt oksefilet serveret med egen sauce tilsmagt med friske krydderurter    
                </li>
                <li>Helstegt lammekrone krydret med rosmarin og hvidløg serveret med egen sauce + 35,00   pr. </li>
                <li>Hjemmerøget laks med urter, citron og råmarinerede zucchini
                </li>
                <li>Helstegt oksemørbrad omviklet med ”lardo”(saltet speck fra Toscana) hertil kraftig sky   med krydderurter + 35,00 pr. pers.
                </li>
                <li>Stegt andebryst serveret med rødvins ”sugo” med oliven og esdragon </li>
                <li>Lammeculotte krydret med hvidløg og rosmarin serveret med lammesky</li>
                </ul>
            </div>
        </SplideSlide>
        <SplideSlide class="slide3">
            <img src="../assets/img/selskabspakkerDesktop/desserter.png" alt="Desserter">
            <div class="menuItems">
                <h3>Desserter</h3>
                <ul>
                    <li>SanGiovannis mørke og rige chokoladekage toppet med mousse, serveret med hjemmela-  vet Italiensk is og frugt + kr. 20,00 pr. pers.
                    </li>
                    <li>Panna Cotta med årstidens friske og marinerede bær serveret med hjemmelavet sorbet af  skovbær  
                </li>
                <li> Tira-Mi-Su, italiensk kage med ladyfingers i mascarponecreme</li>
                <li>Citrontærte med brændt marengs og hjemmelavet italiensk vaniljeis + kr. 15,00
                </li>
                <li>Islagkage i 2 lag på chokoladebund serveret med årstiden frugt. Vi laver selv den italien-  ske is og der kan vælges 2 slags udefra flg. varianter: Chokolade, Pistacie, Vanilje og   Jordbær
                </li>
                </ul>
            </div>
        </SplideSlide>
    </Splide>
   </section>
   <section class="focusedWrapper">
    <router-link to="/selskabslokaler">
    <FocusedEntryPoints
    :image=focusedEntryPointsBackground2
    h3="Se vores selskabslokaler"
    p="Vi har adskillige flotte selskabslokaler til dit arrangement. Læs mere her og se billeder fra vores La Cantina."
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
a{
    text-decoration: none;
}
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

.intro h2{
text-align: center;
margin-block: 2rem;
}

.intro p, .modePakken p{
    margin-inline: 2rem;
    margin-bottom: 1rem;  
}

.modePakken h3{
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
}

.modePakken img{
    width: 100%;
}

.buttonWrapper{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2rem;
}

.menuSlider{
    background-color: var(--green);
    padding-bottom: 2rem;
}

.menuSlider h3{
    padding-block: 2rem;
    text-align: center;
}

.menuSlider p{
    margin-inline: 2rem;
    margin-bottom: 2rem;
}

.slide1, .slide2, .slide3{
    background-color: var(--white);
}

.slide1 h3, .slide2 h3, .slide3 h3, .slide1 p, .slide2 p, .slide3 p, .slide1 li, .slide2 li, .slide3 li{
color: var(--background);
}

.slide1 img, .slide2 img, .slide3 img{
    display: none;
}

@media all and (min-width: 768px){

.focusedWrapper{
    display: flex;
    justify-content: center;
    margin-block: 5rem;
}

.intro{
    margin-inline: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modePakken{
    display: flex;
    margin-inline: 5rem;
    margin-block: 3rem;
    gap: 2rem;
}

.modePakken img{
    width: 50%;
}

.buttonWrapper{
    flex-direction: row;
}

.modePakken{
    flex-direction: row-reverse;
}

.menuSlider{
    padding-inline: 10rem;
}

.slide1 img, .slide2 img, .slide3 img{
    display: block;
    width: 30%;
}

.slide1, .slide2, .slide3{
    display: flex;
    flex-direction: row;
}

}

@media all and (min-width: 1800px){
    .modePakken, .intro{
        margin-inline: 20rem;
    }

    .menuSlider{
        padding-inline: 20rem;
    }

    .focusedWrapper{
    margin-inline: 20rem;
   }
}

</style>