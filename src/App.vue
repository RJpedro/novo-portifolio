<script setup lang="ts">
  import MainSection from './sections/MainSection.vue';
  import HeaderComponent from './components/HeaderComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
</script>

<template>
  <section class="flex flex-col justify-center items-center h-screen w-screen overflow-y-auto">
    <HeaderComponent />
    <MainSection />
    <FooterComponent />
  </section>
</template>

<style>
  @import '@/assets/output.css';
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>