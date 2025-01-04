<script setup>

 const props = defineProps({
    title: String
   })
</script>

<template>
    <a href="">
        <button>{{ props.title }}</button>
    </a>
</template>

<style scoped>
    button{
    background-color: var(--gold); 
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    font-family: "Noto Serif Display", serif;
    font-weight: 300;
    }
</style>