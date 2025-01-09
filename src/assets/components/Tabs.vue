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
    <aside class="tabNav">
      <div class="tabHeaders">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
        >
          {{ tab.title }}
        </button>
      </div>
    </aside>

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
  scrollbar-width: none; 
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
  padding: 0;
  padding-bottom: 2rem;
}

@media all and (min-width: 768px){
  
  .tabsContainer {
  display: flex; 
  width: 100%;
  height: 100vh; 
}

.tabNav {
  width: 25%; 
  background-color: var(--green); 
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem; 
  border-right: 2px solid var(--gold);
  box-sizing: border-box; 
  position: sticky; 
  top: 0; 
  z-index: 10; 
}

.tabHeaders {
  display: flex;
  flex-direction: column; 
  gap: 1rem; 
}

.tabHeaders button {
  width: 100%; 
  padding: 0.8rem 1rem;
  text-align: left; 
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: var(--gold);
  border-left: 4px solid transparent; 
  transition: background-color 0.3s ease, border-left-color 0.3s ease;
}

.tabHeaders button:hover{
  font-weight: bold;
  border-left-color: var(--gold); 
  background-color: rgba(255, 255, 255, 0.1); 
}

.tabHeaders button.active {
  font-weight: bold;
  border-left-color: var(--gold); 
  background-color: rgba(255, 255, 255, 0.1); 
}

.tabContent {
  width: 80%; 
  overflow-y: auto; 
  box-sizing: border-box; 
}
}

@media all and (min-width: 1024px){
  .tabNav{
    width: 20%;
  }
}
</style>
