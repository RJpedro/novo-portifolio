<script setup lang="ts">
    import ArrowIcon from '@/components/icons/ArrowIcon.vue';
</script>

<template>
    <section id="projects" class="flex flex-col justify-center items-center gap-7 my-24 w-full">
        <h2 class="text-4xl uppercase font-extrabold bg-clip-text text-p-transparent bg-gradient-to-b from-p-orange-100 to-p-orange-200">Projetos</h2>
        <section id="projects-carrousel" class="flex justify-center items-center flex-wrap gap-8">
            <a alt="Link para o linkedin onde foi feito a postagem do notizia." href="https://www.linkedin.com/posts/caiocesardesouza2003_notizia-wordpress-wordpressdeveloper-activity-7127428336242339840-aLOF?utm_source=share&utm_medium=member_desktop" target="_blank">
                <img src="@/assets/img/notizia.webp" alt="Imagem do projeto Notizia" class="project-image">
                <div class="project-content">
                    <p class="project-title">Clique aqui para visitar</p>
                    <p class="project-sub-title">Notizia</p>
                    <ArrowIcon class="project-icon"/>
                </div>
            </a>
            <a alt="Link para o repositório do projeto futebol api." href="https://github.com/RJpedro/futebol-api" target="_blank">
                <img src="@/assets/img/futebol-api.webp" alt="Imagem do projeto Futebol Api" class="project-image">
                <div class="project-content">
                    <p class="project-title">Clique aqui para visitar</p>
                    <p class="project-sub-title">Api de Futebol</p>
                    <ArrowIcon class="project-icon"/>
                </div>
            </a>
        </section>
    </section>
</template>
