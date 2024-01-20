<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheSidebar from '@/components/TheSidebar.vue'
import Services from '@/services/services'
import TheMain from '@/views/TheMain.vue'
async function gg() {
  await Services.getClients()
}
gg()
</script>

<template>
  <div class="app_container"><TheSidebar /><TheMain /></div>
</template>

<style scoped>
.app_container {
  display: flex;
}
</style>
