<script setup>
import { ref, onMounted } from 'vue';

// States
const isScrolled = ref(false);

// Functions
onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 0;
  });
});
</script>


<template>
    <nav :class="{ scrolled: isScrolled }">
      <div class="logo">
        <router-link to="/"><img src="../img/forsideDesktop/logo.png" alt="" /></router-link>
      </div>
      <label for="btn" class="icon"><img src="../img/SVG/burgermenu.svg" alt="burgermenu" /></label>
      <input type="checkbox" id="btn" />
      <ul>
        <li>
          <label for="btn-1" class="show">Menu &#x25BC;</label>
          <a href="#">Menu &#x25BC;</a>
          <input type="checkbox" id="btn-1" />
          <ul>
            <li><router-link to="/menukort">Menukort</router-link></li>
            <li><router-link to="/vinkort">Vinkort</router-link></li>
            <li><router-link to="/drikkevarer">Drikkevarer</router-link></li>
            <li><a href="https://login.onlinepos.dk/taw_v3/13320/">Take Away</a></li>
          </ul>
        </li>
        <li>
          <label for="btn-2" class="show">Selskaber &#x25BC;</label>
          <a href="#">Selskaber &#x25BC;</a>
          <input type="checkbox" id="btn-2" />
          <ul>
            <li><router-link to="/selskabspakker">Selskabspakker & møder</router-link></li>
            <li><router-link to="/selskabslokaler">Se vores selskabslokaler</router-link></li>
            <li><router-link to="/selskabsmenu">Selskabsmenu ud af huset</router-link></li>
          </ul>
        </li>
        <li><a href="#">IL Bar</a></li>
        <li><router-link to="/julognytaar">Jul & nytår</router-link></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Om Sangiovanni</a></li>
        <li><a href="#">Kontakt</a></li>
        <li><a href="https://book.dinnerbooking.com/dk/da-DK/book/table/pax/195/2" class="book">Book bord</a></li>
      </ul>
    </nav>
  </template>
  

<style scoped>
nav a{
    color: var(--gold);
    font-family: "Noto Serif Display", serif;
    font-weight: 300;
    font-size: 20px;
    text-decoration: none;
    padding: 8px 15px;
    margin-left: 2px;
    margin-right: 2px;
    line-height: 70px;
}

nav:after{
    content:'';
    clear: both;
    display: table;
}

nav ul{
    float: right;
    list-style-type: none;
    margin-right: 40px;
    position: relative;
}

nav ul li{
    float:left;
    display: inline-block;
}

nav ul ul{
    position: absolute;
    top: 90px;
    opacity: 0;
    visibility: hidden; 
    transition: top .3s;
    border: 1px solid var(--gold);
    padding: 0;
}

nav.scrolled ul ul{
    background-color: var(--green);
} 
nav ul li:hover > ul{
    top: 60px;
    opacity: 1;
    visibility: visible;
}

nav ul ul li{
    position:relative;
    width: auto;
    float: none;
    display: list-item;
}

nav .logo img{
    float: left;
    width: 200px;
    margin-left: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
}
nav{
    display: flex;
   align-items: center;
   justify-content: space-between;
   position: sticky;
   top: 0;
   transition: background-color 0.3s ease;
   z-index: 1000;
   margin-top: -100px;
}

nav.scrolled{
    background-color: var(--green);
}

nav ul li a:hover{
    box-shadow: 0 0 5px var(--gold);
}

nav ul ul li a{
    line-height: 50px;
}

nav ul ul li a:hover{
    box-shadow: none;
}

.show,input, .icon{
    display: none;
}

.book{
    border: 1px solid var(--gold);
    color: var(--gold);
    font-size: 20px;
    font-family: "Noto Serif Display", serif;
    font-weight: 300;
    padding: 10px;
    box-shadow: none;
}

@media all and (max-width: 1024px){
    nav ul{
        margin-right: 0px;
        float: left;
        background-color: var(--green);
        margin-top: 10px;
        transition: right 0.3s ease-in-out;
    }

    nav .logo{
        padding-left: 30px;
        width: 100%;
        margin-bottom: -2rem;
    }

    nav ul li, nav ul ul li{
        display: block;
        width: 100%;
    }

    nav ul ul{
        top: 70px;
        position:static;
        float: none;
        opacity: 1;
        visibility: visible;
     }

    .show{
        display: block;
        color: var(--gold);
        font-size: 20px;
        padding: 0 20px;
        line-height: 70px;
        cursor:pointer;
        font-family: "Noto Serif Display", serif;
        font-weight: 300;
    }

    nav ul li a:hover{
        box-shadow: none;
    }

    .icon{
       display: block; 
       width: 40px;
       position: absolute;
       right: 40px;
       cursor: pointer;
    }

    .show + a, ul{
        display: none;
    }

    [id^=btn]:checked + ul{
        display: block;
    }

    nav{
    display: block;

}
}

</style>
