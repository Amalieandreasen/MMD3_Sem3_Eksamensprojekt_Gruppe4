<script setup>
const menuItems = [
  { name: "Lemoncello Spritz", description: "Lemoncello, øko spumante, mineralvand", price: "kr. 98,00" },
  { name: "Galvanina Spritz", description: "alc. fri", price: "kr. 75,00" },
  { name: "Hugo Spritz", description: "Hyldeblomstlikør, spumante, mineralvand", price: "kr. 98,00" },
  { name: "Italian Gin Hass", description: "Italiensk Gin, Mangosirup, citronsodavand", price: "kr. 98,00" },
  { name: "Italian GT", description: "Italiensk Gin og øko tonic fra Galvanina", price: "kr. 98,00" },
  { name: "Negroni", description: "Campari, Vermouth, Italiensk Gin", price: "kr. 98,00" },
  { name: "Spumante Dry øko.", description: "", price: "kr. 85,00 pr. glas" },
  { name: "Bruschetta med tomat", description: "", price: "kr. 65,00" },
];
</script>

<template>
 <section class="heroSec">
    <div class="imgOverlay">
      <img src="../img/drinks&snakcksMenuMobil.png" alt="Billede af drinks & Snacks">
      <div class="txtOverlay">
        <h3>Snacks & Drinks</h3>
      </div>
    </div>
  </section>
  <section class="menuList">
    <div v-for="item in menuItems" :key="item.name" class="menuItem">
      <div class="menuTxt">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </div>
      <div class="menuPrice">
        <p>{{ item.price }}</p>
      </div>
    </div>
    <div class="imgSnacknDrinks">
      <img src="../img/drinks&snakcksMenuMobil.png" alt="">
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

  .menuList{
    padding-left: 2rem;
    padding-right: 2rem;
  }

}

@media all and (min-width: 1800px){
  .menuList{
    padding-left: 20rem;
    padding-right: 20rem;
  }
}
</style>

