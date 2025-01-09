<script setup>
// Her laves et array som indeholder de forskellige elementer som skal vises på siden
const menuItems = [
  { name: "Bohemian Pils fadøl/draft 5% alc. 0,3l", description: "En traditionel pilsner på 5% vol., der har en ot gylden farve. Smagsmæssigt har Bohemian Pilsner et nt udtryk af korn og ristet brød. En øl der byder på en behagelig medium bitterhed med et skarpt aromatisk udtryk fra den tilsatte Saaz humle.", price: "kr. 89,00" },
  { name: "Vienna Lager fadøl/draft 5,4% alc. 0,3l", description: "Vienna Lager er Canediguerras hyldest til en af Europas mest klassiske øltyper. I Danmark kender vi den ravfarvede Vienna Lager som en Classic - en lagerøl som smager dejligt af karamel. Denne øl er på 5,4% vol., og har en ren og mild smag, hvor man nænsomt har tilføjet humle, så de sarte noter af karamel kan træde frem.", price: "kr. 89,00" },
  { name: "American IPA 33 cl. flaske 6.7% alc.", description: "En betagende IPA med stor bitterhed. I denne øl har man udelukkende tilsat amerikanske humletyper der giver en forfriskende og distinkt frugtig øl med meget mundfylde.", price: "kr. 72,00" },
  { name: "Vienna Lager fadøl/draft 5,4% alc. 0,3l", description: "Vienna Lager er Canediguerras hyldest til en af Europas mest klassiske øltyper. I Danmark kender vi den ravfarvede Vienna Lager som en Classic - en lagerøl som smager dejligt af karamel. Denne øl er på 5,4% vol., og har en ren og mild smag, hvor man nænsomt har tilføjet humle, så de sarte noter af karamel kan træde frem.", price: "kr. 72,00" },
];

</script>

<template>
 <section class="heroSec">
    <div class="imgOverlay">
        <img src="../img/drikkevarerMobil/italienskeOl.png" alt="Italiensk Ol">
      <div class="txtOverlay">
        <h3>Italiensk Øl</h3>
      </div>
    </div>
  </section>
    <!-- Her laves en dynamisk genereret liste med v-for -->
  <section class="menuList">
    <div class="wrapper">
    <div>
    <div v-for="item in menuItems" :key="item.name" class="menuItem">
      <!-- Viser navnet på elementet -->
  <div class="menuHeader">
    <h3>{{ item.name }}</h3>
    <!-- Viser prisen på elementet -->
    <p class="menuPrice">{{ item.price }}</p>
  </div>
  <!-- Viser description på elementet -->
  <p class="menuTxt">{{ item.description }}</p>
</div>

</div>
</div>
  </section>
</template>

<style scoped>
.heroSec {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.imgOverlay {
  position: relative;
  width: 100%;
  height: auto;
}

.imgOverlay img {
  width: 100%;
  height: auto;
  display: block; 
}

.txtOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); 
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.txtOverlay h3 {
  margin: 0;
}

.menuList {
  padding: 1rem;
}

.menuItem {
  display: flex;
  flex-direction: column; 
  border-bottom: 1px solid var(--gold); 
  padding: 1rem 0;
}

.menuHeader {
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  margin-bottom: 0.5rem; 
}

.menuHeader h3 {
  margin: 0;
}

.menuHeader .menuPrice {
  white-space: nowrap; 
  font-weight: bold;
  text-align: right;
  margin: 0;
}

.menuTxt {
  color: #bbb; 
  line-height: 1.5; 
  margin: 0;
  max-width: 75ch;
}


.menuItem:last-of-type {
  border-bottom: none;
}

.menuTxt h3 {
  margin: 0;
}

.menuTxt p {
  margin: 0;
  color: #bbb; 
}

.menuPrice p {
  margin: 0;
  font-weight: bold;
  text-align: right;
}

.imgHideMobile{
    display: none;
}

@media all and (min-width: 768px){

  .heroSec {
    height: 20vh; 
    max-height: 300px; 
  }

  .imgOverlay {
    height: 100%; 
  }

  .imgOverlay img {
    height: 100%;
    object-fit: cover; 
  }

}

@media all and (min-width: 1024px){

    .imgHideMobile{
    display: block;
}

.wrapper{
    display: flex;
    gap: 2rem; 
    padding: 1rem;
    justify-content: center;
}
}
</style>

