<script setup>
defineProps({
  title: String, 
  isActive: Boolean, 
  onClick: Function, 
});
</script>

<template>
  <button
    :class="{ active: isActive }"
    @click="onClick"
  >
    {{ title }}
  </button>
</template>

<style scoped>
button {
  flex-shrink: 0;
  padding: 10px 20px;
  border: 2px solid #2ecc71;
  background-color: #2ecc71;
  color: black;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

button:hover {
  background-color: #27ae60;
  color: white;
}

button.active {
  background-color: #27ae60;
  color: white;
}
</style>
