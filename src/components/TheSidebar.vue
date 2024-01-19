<template>
  <div :class="containerClasses">
    <div :class="iconClasses" @click="changeSidebarState">
      <i class="fa-solid fa-chevron-up"></i>
    </div>
    <div class="sidebar__content">
      <div class="sidebar__label">{{ computedLabel }}</div>
      <SidebarItem v-for="item in sidebarItemsList" :key="item" :sidebar-state="openSidebar">{{
        item
      }}</SidebarItem>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import SidebarItem from '@/components//SidebarItem.vue'
const openSidebar = ref(true)
function changeSidebarState() {
  openSidebar.value = !openSidebar.value
}
const containerClasses = computed(() => ['sidebar__container', !openSidebar.value ? 'close' : null])
const iconClasses = computed(() => ['sidebar__stateIcon', !openSidebar.value ? 'close' : null])
const computedLabel = computed(() => (openSidebar.value ? 'My App' : ''))

const sidebarItemsList = ['О нас', 'Блог', 'Наши сотрудники', 'Контакты']
</script>
<style lang="scss">
@import '../scss/variables.scss';
.sidebar__container {
  height: 100vh;
  width: 20%;
  background-color: rgb(255, 255, 255);
  position: relative;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  padding: 0px 25px 0px 0px;
  transition: all 0.5s ease-out;
  &.close {
    width: 61px;
    padding-right: 0;
  }
}
.sidebar__stateIcon {
  position: absolute;
  top: 5px;
  right: 0px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: $baseColor;
  transform: translateX(50%) rotate(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &.close {
    transform: translateX(50%) rotate(90deg);
  }
  i {
    color: white;
  }
}
.sidebar__label {
  padding: 10px;
  font-size: 24px;
  text-transform: uppercase;
  color: $baseColor;
}
</style>
