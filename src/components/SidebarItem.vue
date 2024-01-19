<template>
  <div class="sidebarItem__container">
    <div :class="computedSidebarIconClasses">
      <i class="fa-solid fa-check"></i>
    </div>
    <div v-if="sidebarState" class="sidebarItem__content"><slot></slot></div>
  </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  sidebarState: {
    type: Boolean,
    required: true
  }
})

const computedSidebarIconClasses = computed(() => [
  'sidebarItem__icon',
  { fill: !props.sidebarState }
])
</script>
<style lang="scss" scoped>
@import '../scss/variables.scss';

.sidebarItem__icon {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  &.fill {
    flex: 1;
  }
  i {
    color: $baseColor;
    font-size: 24px;
    transition: all 0.5s ease;
  }
}
.sidebarItem__content {
  flex: 1;
}
.sidebarItem__container {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    .sidebarItem__icon i {
      color: $hoverColor;
    }
  }
}
</style>
