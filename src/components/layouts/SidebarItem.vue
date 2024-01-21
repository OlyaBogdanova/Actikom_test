<template>
  <div class="sidebarItem__container">
    <div class="sidebarItem__content"><slot></slot></div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import '../../scss/variables.scss';

.sidebarItem__content {
  flex: 1;
  font-size: 18px;
}
.sidebarItem__container {
  padding: 10px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}
@media (max-width: 700px) {
  .sidebarItem__content {
    font-size: 12px;
  }

  .sidebarItem__container {
    height: 35px;
  }
}
</style>
