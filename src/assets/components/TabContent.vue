<script setup>
defineProps({
  isActive: Boolean, 
});
</script>

<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>

<style scoped>
</style>
