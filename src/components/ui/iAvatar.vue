<template>
  <div class="avatar">
    <img :src="avatarUrl" alt="avatar" />
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { getRandomNumber } from '@/utils/functions'
const avatarsURL = [
  'https://randomuser.me/api/portraits/men/',
  'https://randomuser.me/api/portraits/women/'
]

const numberOfAvatar = computed(() => getRandomNumber(1, 100) + '.jpg')
const avatarPath = computed(() => avatarsURL[getRandomNumber(0, 1)])
const avatarUrl = computed(() => avatarPath.value + numberOfAvatar.value)
</script>
<style lang="scss" scoped>
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>
