<template>
  <div class="userPage__container">
    <iAvatar />
    <div class="user__name">
      {{ client.fullname
      }}<i class="fa-solid fa-trash icon" @click="deleteClientHandler(client.id)"></i>
    </div>
    <div class="user__info">
      <div v-for="(key, value) in userInfo" :key="value" class="userInfo__item">
        <div>{{ value }}</div>
        <div>{{ key }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import iAvatar from '@/components/ui/iAvatar.vue'
import { useAppStore } from '@/stores/AppStore'
const { findClient } = useAppStore()
const { deleteClient } = useAppStore()

const route = useRoute()
const router = useRouter()

const id = computed(() => route.params.userId)
const client = computed(() => findClient(id.value))

const userInfo = computed(() => {
  const info = {
    ...client.value
  }
  delete info.fullname

  return info
})

function deleteClientHandler(id) {
  deleteClient(id)
  router.push('/')
}
</script>
<style lang="scss" scoped>
.userPage__container {
  display: flex;
  width: 80vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 15px;
}

.user__info {
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid black;

  border-radius: 5px;
}
.userInfo__item {
  display: flex;
  padding: 5px;
  &:not(:last-of-type) {
    border-bottom: 1px solid black;
  }

  div {
    flex: 1;
  }
}
.icon {
  margin: 0 10px;
  color: red;
  cursor: pointer;
}
@media (max-width: 900px) {
  .userPage__container {
    width: 100vw;
  }
  .user__info {
    width: 90%;
  }
}
</style>
