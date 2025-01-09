<script setup>
import { useHead } from '@vueuse/head';
import Navigation from '@/assets/components/Navigation.vue';
import TheButton from '@/assets/components/TheButton.vue';
import TheFooter from '@/assets/components/TheFooter.vue';
useHead({
  title: 'Selskabsmenu',
  meta: [
    {
      name: 'description',
      content: 'Vi tilbyder selskabsmenuer ud af huset, til dig som vil levere fantastisk mad til dine gæster, men gerne vil gøre det nemt og overskueligt',
    },
  ],
});
</script>

<template>
    <main>
      <Navigation/>
    <section class="heroSec">
      <div class="heroOverlay">
        <img src="../assets/img/selskabbsmenuMobil/hero.png" alt="hero" srcset="../assets/img/selskabmenuDesktop/hero.png 768w">
        <div class="heroText">
          <h1>Selskabsmenu ud af huset</h1>
        </div>
      </div>
    </section>
    <section class="intro">
        <p>Skal du holde fest eller arrangement? Vi tilbyder lækre selskabsmenuer ud af huset, så du kan fokusere på gæsterne, mens vi sørger for maden.</p>
        <p>Vælg mellem vores forskellige kombinationer, der passer til enhver smag og anledning – uanset om det er en hyggelig middag eller en større fest.
          Kontakt os for at høre mere, eller for at finde den menu, der passer perfekt til dit selskab!</p>
    </section>
    <section class="forretter">
    <div class="displayWrapper">
    <h3>Forret</h3>
    <div class="divider">
    <img src="../assets/img/SVG/menuDivider.svg" alt="svg" class="divider">
  </div>
   <section class="menuList">
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Lufttørret Italiensk skinke med marinerede oliven</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Toskansk fennikelsalami med syltede grøntsager</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Tomatsalat med frisk bøffelmozzarella og basilikum</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Vitello Tonnato, kold rosastegt kalvekød med tunsauce</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Bresaola med parmesanost og rucola</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Italiensk ost med tilbehør</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Surdejsbrød, jomfruolie og middelhavssalt med salvie som brøddypper</h3>
      </div>
    </div>
  </section>
</div>
  <img src="../assets/img/selskabmenuDesktop/forret.png" alt="forret" class="foodImage">
</section>
  <section class="hovedretter">
    <div class="displayWrapper">
    <h3>Hovedret</h3>
    <div class="divider">
    <img src="../assets/img/SVG/menuDivider.svg" alt="svg">
  </div>
   <section class="menuList">
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Salt´im Boca - Tynde skiver kalvekød i lag med salvie og parmaskinke</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Grillet lammeryg med hvidløg og rosmarin</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Bøf skåret af oksemørbrad med årstiden sauce</h3>
      </div>
    </div>
  </section>
</div>
<img src="../assets/img/selskabmenuDesktop/hovedret.png" alt="hovedret" class="foodImage">
</section>
<section class="desserter">
    <div class="displayWrapper">
    <h3>Dessert</h3>
    <div class="divider">
    <img src="../assets/img/SVG/menuDivider.svg" alt="svg">
  </div>
   <section class="menuList">
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Vores hjemmelavede Tira-Mi-Su</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Chokoladekage toppet med chokolademousse</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Citrontærte med brændt marengs</h3>
      </div>
    </div>
  </section>
</div>
  <img src="../assets/img/selskabmenuDesktop/dessert.png" alt="dessert" class="foodImage">
</section>
<section class="tilkob">
    <div class="displayWrapper">
    <h3>Tilkøb</h3>
    <div class="divider">
    <img src="../assets/img/SVG/menuDivider.svg" alt="svg">
  </div>
   <section class="menuList">
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Ekstra brød kr. 50,00 pr. stk.</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Hjemmelavet basilikumspesto kr. 25,00 pr. pers.</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Hjemmelavet tapanade af soltørrede tomater kr. 25,00 pr. pers.</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Hjemmelavet oliventapenade kr. 25,00 pr. pers.</h3>
      </div>
    </div>
    <div class="menuItem">
      <div class="menuTxt">
        <h3>Vores hjemmelavede Italienske is - chokolade eller vanilje kr. 65,00 pr. 500ml.</h3>
      </div>
    </div>
  </section>
</div>
  <img src="../assets/img/selskabmenuDesktop/tilkøb.png" alt="tilkøb" class="foodImage">
</section>
<section class="pris">
  <h3>
    Pris
  </h3>
  <p>495 kr pr. person (Min. 6 personer)</p>
</section>
<section class="anretning">
  <h3>Anretning</h3>
  <p>Forretten er anrettet på pænt engangsemballage og klar til at sætte på bordet. Brødet skal skæres ud. Vi anbefaler I har nogle små skåle til olivenolie og middelhavssaltet som kan bruges som brøddypper og måske en lille tallerken pr. gæst til dette</p>
  <p>Hovedretten er komplet forberedt og skal blot varmes op - der medfølger vejledning.</p>
  <p>Desserten er anrettet på pænt engangsemballage og klar til at sætte på bordet eller anrette på tallerken.</p>
  <div class="buttonWrapper">
    <a href="https://drive.google.com/file/d/1mwZkjAWfTycosXWSTRf44_ufJVfjLOUJ/view?usp=sharing" target="_blank">
  <TheButton title="Se vejledning til tilberedning" :isPdf="true"/>
</a>
</div>
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

.displayWrapper h3{
  text-align: center;
  margin-top: 2rem;
}

.foodImage{
  width: 100%;
  height: 50%;
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
  text-align: left;
}

.menuTxt p {
  margin: 0;
  font-size: 0.9rem;
  color: #bbb; 
  text-align: center;
}

.divider{
 display: flex;
 justify-content: center;
 align-items: center;
}

.divider img{
  width: 80%;
}

.pris{
  background-image: url(../assets/img/SVG/prisramme.svg);
  min-height: 200px;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-size: contain;
  margin-inline: 1rem;
  background-position: center;
  margin-block: 2rem;
}

.anretning h3{
  text-align: center;
  margin-top: 2rem;
  color: var(--background);
}

.anretning p{
  text-align: center;
  margin-top: 1rem;
  margin-inline: 2rem;
  color: var(--background);
}

.anretning{
  background-color: var(--white);
  padding-block: 2rem;
}

.buttonWrapper{
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 2rem;
}

@media all and (min-width: 768px){
  .intro{
    margin-inline: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.forretter, .hovedretter, .desserter, .tilkob{
    display: grid;
    margin-inline: 5rem;
    margin-block: 3rem;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
}

.hovedretter img, .tilkob img{
  grid-column: 1/2 ;
  grid-row: 1/2;
}

.foodImage{
  width: 80%;
  height: auto;
}

.pris{
  padding: 6rem;
}

.anretning{
  padding-inline: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.menuTxt h3 {
  text-align: left;
}
}

@media all and (min-width: 1800px){
    .forretter, .hovedretter, .desserter, .tilkob{
        margin-inline: 20rem;
    }

    .intro{
      margin-inline: 30rem;
    }

    .anretning{
        padding-inline: 20rem;
    }
  }


</style>