<script setup>
import { ref, onMounted, watch } from 'vue';

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
const scrollPercentage = ref(0);

const onScroll = (event) => {
  const element = event.target;
  const maxScroll = element.scrollWidth - element.clientWidth;
  scrollPercentage.value = (element.scrollLeft / maxScroll) * 100;
};
</script>

<template>
  <div class="tabsContainer">
    <div class="tabHeaderContainer">
      <div class="tabHeaders" @scroll="onScroll">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
        >
          {{ tab.title }}
        </button>
      </div>
      <div class="scrollIndicator">
        <div class="scrollProgress" :style="{ width: scrollPercentage + '%' }"></div>
      </div>
    </div>

    <div class="tabContent">
      <component :is="tabs[activeTab].component" />
    </div>
  </div>
</template>

<style scoped>
.tabsContainer {
  width: 100%;
}

.page-title {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.tabHeaderContainer {
  position: relative;
}

.tabHeaders {
  display: flex;
  overflow-x: auto;
  margin-bottom: 1rem;
  background-color: var(--green);
  padding-top: 1rem;
  padding-bottom: 1rem;
  scrollbar-width: none; /* Firefox */
}

/* For edge, chrome */
.tabHeaders::-webkit-scrollbar {
  display: none; 
}

.tabHeaders button {
  flex: 1;
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  white-space: nowrap;
  color: var(--gold);
}

.tabHeaders button.active {
  border-bottom: 2px solid var(--gold);
  font-weight: bold;
}

.scrollIndicator {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
}

.scrollProgress {
  height: 100%;
  background: var(--gold);
  transition: width 0.2s ease;
}

.tabContent {
  padding: 1rem;
}
</style>
