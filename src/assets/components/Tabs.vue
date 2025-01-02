<script setup>
import { ref } from 'vue';

defineProps({
  tabs: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: '',
  },
});

const activeTab = ref(0);
</script>

<template>
  <div class="tabs-container">
    <!-- Optional Page Title -->
    <h2 v-if="title" class="page-title">{{ title }}</h2>

    <!-- Tab Headers -->
    <div class="tab-headers">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === index }"
        @click="activeTab = index"
      >
        {{ tab.title }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="tab-content">
      <!-- Dynamically render the content component -->
      <component :is="tabs[activeTab].component" />
    </div>
  </div>
</template>

<style scoped>
.tabs-container {
  width: 100%;
  background-color:  green;
}

.page-title {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.tab-headers {
  display: flex;
  overflow-x: auto;
  margin-bottom: 1rem;
  border-bottom: 2px solid #ccc;
}

.tab-headers button {
  flex: 1;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  font-size: 1rem;
  white-space: nowrap;
  text-transform: capitalize;
}

.tab-headers button.active {
  border-bottom: 2px solid #00b894;
  font-weight: bold;
}

.tab-content {
  padding: 1rem;
}
</style>
