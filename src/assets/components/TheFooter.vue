<script setup>
import TheButton from './TheButton.vue';
</script>

<template>
    <footer>
        <section class="logo">
            <img src="../img/forsideDesktop/logo.png" alt="logo">
        </section>
        <div class="flexWrapper">
        <section class="lokation">
            <h2>Find os</h2>
            <p>Vi ligger centralt placeret i Aalborg på Vesterbro. Vores indgangs adresse er: Vingårdsgade 25, 9000 Aalborg</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2170.222211903977!2d9.913078876662905!3d57.047735891516105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932f4caba1259%3A0xabe8b333a1903362!2sSanGiovanni!5e0!3m2!1sda!2sdk!4v1735931586510!5m2!1sda!2sdk" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
        <section class="abningstider">
            <h2>Åbningstider</h2>
            <div class="restaurantAbning">
                <h3>Restaurant</h3>
                <p>Søn. - ons. 16:30 - 21:00 (køkken)</p>
                <p>Tors. - lør. 16:30 - 21:30 (køkken)</p>
            </div>
            <div class="barAbning">
                <h3>IL Bar</h3>
                <p>Søn. - ons. 16:30 - 24:00</p>
                <p>Tors. - lør. 16:30 - 02:00</p>
            </div>
        </section>
        <section class="kontakt">
            <h2>Kontakt os</h2>
            <a href="tel:98113755">Telefon: +45 98 11 37 55</a>
            <a href="mailto:sangiovanni@sangiovanni.dk">Mail: sangiovanni@sangiovanni.dk</a>
            <TheButton title="Book bord"/>
        </section>
    </div>
    </footer>
</template>

<style scoped>
footer{
    background-color: var(--green);
    padding: 2rem;
}

.logo{
    margin-bottom: 2rem;
}

.logo img{
    width: 300px;
}

.lokation h2{
    text-align: center;
    margin-bottom: 2rem;
}

iframe{
    width: 100%;
    height: auto;
    margin-bottom: 2rem;
}

.abningstider h2{
    text-align: center;
    margin-bottom: 2rem;
}

.restaurantAbning{
    margin-bottom: 2rem;
}

.restaurantAbning h3, .restaurantAbning p, .barAbning h3, .barAbning p{
    text-align: center;
}

.kontakt{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
}

.kontakt h2{
    text-align: center;
    margin-bottom:2rem;
}

.kontakt a{
    color: var(--gold);
    text-align: center;
}

button{
    margin-top: 2rem;
}

@media all and (min-width: 768px){

    .flexWrapper{
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: baseline;
}

.logo{
    display: flex;
    justify-content: center;
    align-items: center;
}

}

</style>