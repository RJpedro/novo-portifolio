<script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps({
    textColor: {
      type: String,
      default: 'white',
    },
    bgColor: {
      type: String,
      default: 'black',
    },
    buttonText: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    download: {
      type: Boolean,
      required: true,
      default: false,
    },
    alt: {
      type: String,
      required: true,
    },
  });

  const buttonStyle = {
    backgroundColor: props.bgColor,
    color: props.textColor,
  };

  const download = props.download;
  const href = props.href;
  const alt = props.alt;
</script>

<template>
    <a :style="buttonStyle" class="text-base bg-p-black text-p-white py-2 px-4 rounded-full border" :download="download ? '' : undefined" :href :alt>
        {{ buttonText }}
    </a>
</template>