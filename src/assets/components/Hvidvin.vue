<script setup>
const menuItems = [
    { name: "Trebbiano dAbruzzo Bove DOC ", description: `
Familien Bove har dyrket vin i den midt-Italienske Abruzzo region siden 1800-tallet, men har først selv
startet en vin produktion i 1960erne. Vinen her laves på Trebbiano druer tilsat ca. 10% chardonnay. Lys
gul farve med grønne reekser. Næse med n frugtighed og blomster og i munden præsenteres en delikat
smagsfylde og friskhed. En tiltalende og let, tør hvidvin.
`, price: " gl. kr. 75,00 ½. Kr. 150,00 1/1 . Kr. 298,00" },

    { name: "Chardonnay Alpha Zeta IGT", description: `Alpha Zeta ligger i den nordøstlige Veneto region som er kendte for bla. Amarone. Denne vin er lavet
100% på Chardonnay druer. Duften har noter af æble og pære. Smagen er tør, let fedme og harmonisk
afslutning med sprød syre.`, price: "gl. kr. 85,00 1/1 . Kr. 345,00 " },

    { name: "Pinot Grigio ”Terrapieno” Alpha Zeta IGT", description: `Alpha Zeta ligger i den nordøstlige Veneto region som er kendte for bla. Amarone. Denne vin er lavet
100% på Pinot Grigio druer fra marken Terrapieno. Duften har grønne noter af blomst, drue og akacie,
smagen er intens og elegant med sprød eftersmag.`, price: "1/1 . Kr. 360,00 " },
];
</script>

<template>
 <section class="heroSec">
    <div class="imgOverlay">
      <img src="../img/vinkortMobil/mousserende.png" alt="Billede af vin">
      <div class="txtOverlay">
        <h3>Hvidvin</h3>
      </div>
    </div>
  </section>
  <section class="menuList">
    <div class="wrapper">
    <div>
    <div v-for="item in menuItems" :key="item.name" class="menuItem">
  <div class="menuHeader">
    <h3>{{ item.name }}</h3>
    <p class="menuPrice">{{ item.price }}</p>
  </div>
  <p class="menuTxt">{{ item.description }}</p>
</div>

</div>
    <div class="imgHideMobile">
      <img src="../img/drinks&snakcksMenuMobil.png" alt="">
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
  font-size: 1rem;
  font-weight: bold;
  text-align: right;
  margin: 0;
}

.menuTxt {
  color: #bbb; 
  line-height: 1.5; 
  margin: 0;
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
}
}
</style>

