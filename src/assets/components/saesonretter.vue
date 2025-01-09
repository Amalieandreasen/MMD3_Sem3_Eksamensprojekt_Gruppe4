<script setup>
const menuItemsFR = [
  { name: "18 måneder lagret Parmaskinke på butterdej med trøffelmayo", price: "kr. 155,00", populare: true  },
  { name: "Mortadella fra Bologna med straciatella ost og pistacienødder", price: "kr. 98,00", populare: false  },
  { name: "Bagt torsk på variation af kål med parmesansauce", price: "kr. 165,00", populare: false  },
];

const menuItemsPR = [
  { name: "18 måneder lagret Parmaskinke på butterdej med trøffelmayo", price: "kr. 155,00", populare: true  },
  { name: "Mortadella fra Bologna med straciatella ost og pistacienødder", price: "kr. 98,00", populare: false  },
  { name: "Bagt torsk på variation af kål med parmesansauce", price: "kr. 165,00", populare: false  },
];

const menuItemsFK = [
  { name: "18 måneder lagret Parmaskinke på butterdej med trøffelmayo", price: "kr. 155,00", populare: true  },
  { name: "Mortadella fra Bologna med straciatella ost og pistacienødder", price: "kr. 98,00", populare: false  },
  { name: "Bagt torsk på variation af kål med parmesansauce", price: "kr. 165,00", populare: false  },
];
</script>

<template>
 <section class="heroSec">
    <div class="imgOverlay">
      <img src="../img/menuMobil/saaesonretterHero.png" alt="Billede af sæsonret">
      <div class="txtOverlay">
        <h3>Sæsonretter</h3>
      </div>
    </div>
  </section>
<section class="menuList">
  <div class="menuWrapper">
    <div class="contentWrapper">
      <div>
        <h3>Forreter</h3>
        <div v-for="item in menuItemsFR" :key="item.name" class="menuItem">
          <div class="menuTxt">
            <p class="nameP">{{ item.name }}</p>
            <p class="descP">{{ item.description }}</p>
          </div>
          <div class="menuPrice">
            <p>{{ item.price }}</p>
          </div>
        </div>
      </div>
      <div class="deskImg">
        <img src="../img/menuDesktop/sasonretter1.png" alt="">
      </div>
    </div>
  </div>
</section>
<section class="menuList">
  <div class="menuWrapper">
    <div class="contentWrapper">
      <div>
        <h3>Pasta & Ris</h3>
        <div v-for="item in menuItemsPR" :key="item.name" class="menuItem">
          <div class="menuTxt">
            <p class="nameP">{{ item.name }}</p>
            <p class="descP">{{ item.description }}</p>
          </div>
          <div class="menuPrice">
            <p>{{ item.price }}</p>
          </div>
        </div>
      </div>
      <div class="deskImg">
        <img src="../img/menuDesktop/sasonretter2.png" alt="">
      </div>
    </div>
  </div>
</section>
<section class="menuList">
  <div class="menuWrapper">
    <div class="contentWrapper">
      <div>
        <h3>Fisk & Kød</h3>
        <div v-for="item in menuItemsFK" :key="item.name" class="menuItem">
          <div class="menuTxt">
            <p class="nameP">{{ item.name }}</p>
            <p class="descP">{{ item.description }}</p>
          </div>
          <div class="menuPrice">
            <p>{{ item.price }}</p>
          </div>
        </div>
      </div>
      <div class="deskImg">
        <img src="../img/menuDesktop/sasonretter3.png" alt="">
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

.menuList h3{
    color: var(--gold);
}

.menuWrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.contentWrapper {
  display: flex;
  flex-direction: row; 
  gap: 2rem;
}

.menuText {
  flex: 1;
}

.deskImg {
  flex: 1;
}

.menuList:nth-of-type(even) .contentWrapper {
  flex-direction: row-reverse; 
}

.menuList:nth-of-type(odd) .contentWrapper {
  flex-direction: row; 
}

.menuItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--gold);
}

.menuItem:last-of-type {
  border-bottom: none;
}

.menuTxt .nameP{
    font-weight: bold;
}

.menuTxt .descP {
  margin: 0;
  color: #bbb; 
}

.menuPrice p {
  margin: 0;
  font-weight: 300;
  text-align: right;
}

.deskImg{
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

  .contentWrapper {
    flex-direction: column; 
  }

  .deskImg {
    flex-shrink: 0; 
  }
}

@media all and (min-width: 1024px){
  .deskImg{
    display: block;
  }
}

</style>

