<script setup>
// Her laves et array som indeholder de forskellige elementer som skal vises på siden
const menuItems = [
  { name: "Sodavand", description: "Pepsi, Pepsi Max, Faxe Kondi, Mirinda appelsin", price: " 50cl. kr. 59,00 / 70 cl. kr. 72,00" },
  { name: "Tea Freddo - Galvanina	", description: "Fersken Iste fra Galvanina øko", price: "35,5 cl. kr. 59,00" },
  { name: "Acqua Communale Naturale / Frizzante", description: "Kulltreret vand - med eller uden uden brus", price: "70 cl. Kr. 45,00" },
  { name: "Italienske økologiske sodavand Galvanina", description: "Italian BIO lemonade from Galvanina - Lemon, Mandarin, Red-orange, Pomegranate ", price: "35,5 cl. kr. 59,00" },
];
</script>

<template>
 <section class="heroSec">
    <div class="imgOverlay">
      <img src="../img/drinks&snakcksMenuMobil.png" alt="Billede af drinks & Snacks">
      <div class="txtOverlay">
        <h3>Kolde drikkevarer</h3>
      </div>
    </div>
  </section>
  <!-- Her laves en dynamisk genereret liste med v-for -->
  <section class="menuList">
  <!-- Iterer over hver 'item' i 'menuItems'-arrayet -->
  <div 
    v-for="item in menuItems" 
    :key="item.name" 
    class="menuItem"
  >
    <!-- Viser teksten til hvert menupunkt -->
    <div class="menuTxt">
      <!-- Viser navnet på elementet -->
      <h3>{{ item.name }}</h3>
      <!-- Viser beskrivelsen af elementet -->
      <p>{{ item.description }}</p>
    </div>

    <!-- Viser prisen på elementet -->
    <div class="menuPrice">
      <p>{{ item.price }}</p>
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

@media all and (min-width: 1800px){
  .menuList{
    padding-left: 20rem;
    padding-right: 20rem;
  }
}
</style>

