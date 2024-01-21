<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import TheSidebar from '@/components/layouts/TheSidebar.vue'
import Services from '@/services/services'
;(async function getClientsInfo() {
  await Services.getClients()
})()
const openSidebar = ref(false)
function handleClick() {
  openSidebar.value = false
}

function changeSidebarState() {
  openSidebar.value = !openSidebar.value
}
</script>

<template>
  <div class="app_container">
    <TheSidebar :sidebar-state="openSidebar" @update-state="changeSidebarState" />

    <RouterView @click="handleClick" />
  </div>
</template>

<style scoped>
.app_container {
  display: flex;
}
</style>
