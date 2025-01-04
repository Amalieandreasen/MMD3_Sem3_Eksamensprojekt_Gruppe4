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
      <img src="../img/drinks&snakcksMenuMobil.png" alt="Billede af drinks & Snacks">
      <div class="txtOverlay">
        <h3>Sæsonretter</h3>
      </div>
    </div>
  </section>
  <section class="menuList">
    <div v-for="item in menuItemsFR" :key="item.name" class="menuItem">
      <div class="menuTxt">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </div>
      <div class="menuPrice">
        <p>{{ item.price }}</p>
      </div>
    </div>
  </section>
  <section class="menuList">
    <div v-for="item in menuItemsPR" :key="item.name" class="menuItem">
      <div class="menuTxt">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </div>
      <div class="menuPrice">
        <p>{{ item.price }}</p>
      </div>
    </div>
  </section>
  <section class="menuList">
    <div v-for="item in menuItemsFK" :key="item.name" class="menuItem">
      <div class="menuTxt">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
      </div>
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
</style>

