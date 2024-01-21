<template>
  <div class="sidebar_container">
    <nav :class="['sidebar', { active: sidebarState }]">
      <div class="sidebar__icon" @click="handleClick">
        <i class="fas fa-arrow-left"></i>
      </div>
      <ul class="sidebar__items">
        <SidebarItem @click="handleClick">
          <RouterLink to="/"> Главная </RouterLink>
        </SidebarItem>
        <SidebarItem @click="handleClick">Fake menu Item 1</SidebarItem>
        <SidebarItem @click="handleClick">Fake menu Item 2</SidebarItem>
      </ul>
    </nav>

    <button v-if="!sidebarState" type="button" class="sidebar__icon_collapse" @click="handleClick">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</template>
<script setup>
defineProps({
  sidebarState: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['updateState'])

import { RouterLink } from 'vue-router'
import SidebarItem from '@/components/layouts/SidebarItem.vue'

function handleClick() {
  emit('updateState')
}
</script>
<style lang="scss">
@import '../../scss/variables.scss';
.sidebar_container {
  width: 0px;
}
.sidebar {
  width: 20vw;
  min-width: 200px;
  position: fixed;
  top: 0;
  left: min(-250px, calc(-20vw - 50px));
  height: 100%;
  z-index: 100;
  background: $baseColor;
  color: #fff;
  transition: all 0.3s;
}

.sidebar.active {
  left: 0;
}

.sidebar__icon {
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: $hoverColor;
  top: 10px;
  right: 0px;
  transform: translateX(50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.sidebar__icon_collapse {
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 100;
  color: $hoverColor;
  background-color: #fff;
  font-size: 18px;
}
.sidebar__items {
  padding-top: 30px;
}

@media (min-width: 900px) {
  .sidebar_container {
    width: 20vw;
  }
  .sidebar {
    left: 0;
  }

  .sidebar__icon_collapse {
    display: none;
  }
  .sidebar__icon {
    display: none;
  }
}
</style>
