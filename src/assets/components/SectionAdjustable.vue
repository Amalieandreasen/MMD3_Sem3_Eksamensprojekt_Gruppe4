<script setup>
import TheButton from "@/assets/components/TheButton.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  paragraphs: {
    type: Array,
    required: true,
  },
  imgSrc: {
    type: String,
    required: true,
  },
  imgAlt: {
    type: String,
    required: true,
  },
  imgSrcSet: {
    type: String,
    required: false,
  },
  button1Title: {
    type: String,
    required: true,
  },
  button1IsPdf: {
    type: Boolean,
    default: false,
  },
  button2Title: {
    type: String,
    required: true,
  },
  button2Href: {
    type: String,
    required: false,
  },
  button2IsPdf: {
    type: Boolean,
    default: false,
  },
  isReverse: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
<section :class="['sectionWrapper', { reverse: isReverse }]">
    <img :src="imgSrc" :alt="imgAlt" :srcset="imgSrcSet" class="sectionImage" />
    <div class="textWrapper">
      <h3>{{ title }}</h3>
      <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
      <div class="buttonWrapper">
        <TheButton :title="button1Title" :isPdf="button1IsPdf" />
        <a :href="button2Href" target="_blank">
          <TheButton :title="button2Title" :isPdf="button2IsPdf" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
}

section.reverse {
  flex-direction: column-reverse;
}

img {
    width: 100%;
}

p{
    margin-inline: 2rem;
    margin-bottom: 1rem;  
}

h3{
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 1rem;
}

@media all and (min-width: 768px) {
  
  section {
    display: flex;
    flex-direction: row;
    margin-inline: 5rem;
    margin-block: 3rem;
    gap: 2rem;
}

  section.reverse {
    flex-direction: row-reverse;
  }

  img {
  width: 50%;

    }
    .buttonWrapper{
    flex-direction: row;
}
}

.displayWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.buttonWrapper{
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    margin-bottom: 2rem;
}
</style>