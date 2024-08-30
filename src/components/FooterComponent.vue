<script setup lang="ts">
    import LinkedlnIcon from '@/components/icons/LinkedlnIcon.vue';
    import WhatsappIcon from '@/components/icons/WhatsappIcon.vue';
    import GmailIcon from '@/components/icons/GmailIcon.vue';
</script>

<template>
    <footer class="w-full flex justify-center bg-p-black-100">
        <section id="contact" class="w-2/3 flex flex-col justify-center items-start pt-24">
            <h2 class="text-xl font-extrabold text-p-white mb-8">Contato</h2>
            <p class="text-sm text-p-secundary-100 mb-16">
                Um Profissional eficiente, com boas habilidades de relacionamento interpessoal, que contribuem para a
                prestação de um serviço de excelência e para o suporte à equipe em tarefas diversas, visando colaborar efetivamente com a rotina de trabalho.
            </p>
            <div id="medias" class="flex gap-6 mb-20">
                <a href="mailto:jp.santos1008@gmail.com" alt="Link para me enviar um email." title="Link para me enviar um email."><GmailIcon class="w-6 h-6"/></a>
                <a href="https://wa.me/5512992112438" alt="Link para o meu Whatsaap." title="Link para o meu Whatsaap."><WhatsappIcon class="w-6 h-6"/></a>
                <a href="https://www.linkedin.com/in/joao-pedro-6289bb216/" alt="Link para o meu Linkedin." title="Link para o meu Linkedin."><LinkedlnIcon class="w-6 h-6"/></a>
            </div>
        </section>
    </footer>
</template>