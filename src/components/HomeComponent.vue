<script setup lang="ts">
  import MyPhoto from '@/components/icons/MyPhoto.vue';
  import ButtonComponent from '@/components/ButtonComponent.vue';
  import curriculoPDF from '@/assets/archives/curriculo.pdf';
</script>

<template>
  <section
    class="font text-4xl font-extrabold bg-clip-text text-p-transparent bg-gradient-to-b from-p-blue-100 to-p-blue-200 w-full h-full flex flex-col justify-center items-center text-center gap-10 mt-24"
    id="home"
  >
    <MyPhoto />
    <h1 class="text-5xl font-extrabold text-p-white">
      Olá, Eu sou o
      <span
        class="font-extrabold bg-clip-text text-p-transparent bg-gradient-to-r from-p-orange-200 to-p-purple-200"
        >João Pedro!</span
      >
    </h1>
    <p class="text-base text-p-secundary-100">
      Sou tecnólogo em análise e desenvolvimento de sistemas full stack com um pouco mais de 2
      anos de experiência profissional, especializado em desenvolvimento web. Minha experiência
      reside em criação e manutenção de aplicações web, muitas das vezes utilizando as
      seguintes tecnologias: javascript, html, php, css, tailwind, wordpress, jquery, bootstrap,
      git, github.
    </p>
    <ButtonComponent
      textColor="white"
      bgColor="black"
      buttonText="Download CV"
      download
      alt="Clique aqui para fazer o download do PDF do meu currículo."
      :href="curriculoPDF"
    />
    <p class="text-p-secundary-100 text-lg font-bold uppercase tracking-widest">Experience with</p>
    <div class="flex flex-wrap gap-8">
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/git.webp" alt="Imagem do Git" />
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/github.webp" alt="Imagem do GitHub" />
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/html.webp" alt="Imagem do HTML" />
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/javascript.webp" alt="Imagem do Javascript" />
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/laravel.webp" alt="Imagem do Laravel" />
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/css.webp" alt="Imagem do CSS" />
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/firebase.webp" alt="Imagem do Firebase" />
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/php.webp" alt="Imagem do Php" />
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/tailwind.webp" alt="Imagem do Tailwind" />
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/typescript.webp" alt="Imagem do Typescript" />
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/wordpress.webp" alt="Imagem do Wordpress" />
      <img class="w-8 h-8 grayscale-effect" src="@/assets/img/vue.webp" alt="Imagem do Vue" />
    </div>
  </section>
</template>
