<script setup>
const props = defineProps({
  title: String,
  isPdf: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <!-- Inspiration til hover effekten er taget fra: https://codepen.io/mhouse/pen/qbrxVB -->
      <button class="slide">
        <div v-if="props.isPdf">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#1C1C1C" width="20px">
    <path
        d="M64 464l48 0 0 48-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 304l-48 0 0-144-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
</svg>
        </div>
        {{ props.title }}
      </button>
</template>

<style scoped>
button {
  background-color: var(--gold);
  border: none;
  color: black; 
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  font-family: "Noto Serif Display", serif;
  font-weight: 400;
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
  cursor: pointer;
  position: relative;
  z-index: 1;
  overflow: hidden;
  border: 1px solid var(--gold);
  max-width: 400px;
}

button:hover {
  color: var(--gold);
}
button::after {
  content: "";
  background: var(--background);
  position: absolute;
  z-index: -1;
  display: block;
  left: 0;
  right: 0;
  top: -100%;
  bottom: 100%;
}
.slide::after {
  transition: all 0.35s;
}
.slide:hover::after {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: all 0.35s;
}

button:hover svg{
    fill: var(--gold);
}
</style>
