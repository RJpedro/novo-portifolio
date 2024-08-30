<script setup lang="ts">
  import HomeComponent from '@/components/HomeComponent.vue';
  import ProjectComponent from '@/components/ProjectComponent.vue';
  import ExperienceComponent from '@/components/ExperienceComponent.vue';
</script>

<template>
  <main class="flex flex-col w-2/3 justify-center items-center">
    <HomeComponent />
    <ProjectComponent />
    <ExperienceComponent />
  </main>
</template>

<script lang="ts">
  const stylesheet = document.querySelectorAll('[rel="stylesheet"]');
  let count = 0;

  stylesheet.forEach((link) => {
    if (!count) link.removeAttribute('disabled');
    count++;
  });
</script>