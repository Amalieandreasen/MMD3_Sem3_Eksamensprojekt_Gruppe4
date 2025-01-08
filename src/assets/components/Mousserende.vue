<script setup>
const menuItems = [
  { name: "Spumante Dry DOC", description: "Spumante Dry laves på Chardonnay og Glera druer i Veneto regionen i det nordøstlige Italien. Duften er klassisk for mousserende vine fra dette område med fersken, pære, æble og citrus, smagen er tør, men tilført friskhed i form at modne frugter og akacie.", price: "l. Kr. 85,00 1/1 . Kr. 350,00 " },

];
</script>

<template>
 <section class="heroSec">
    <div class="imgOverlay">
      <img src="../img/vinkortMobil/mousserende.png" alt="Billede af vin">
      <div class="txtOverlay">
        <h3>Mousserende</h3>
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
    <!-- <div class="imgHideMobile">
      <img src="../img/drinks&snakcksMenuMobil.png" alt="">
    </div> -->
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

