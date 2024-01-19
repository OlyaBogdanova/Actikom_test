<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheSidebar from '@/components/TheSidebar.vue'
import Services from '@/services/services'
Services.getClients()
</script>

<template>
  <div><TheSidebar /></div>
</template>

<style scoped></style>
