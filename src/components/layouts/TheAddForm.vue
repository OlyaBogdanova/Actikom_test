<template>
  <form class="form__container" :class="{ error: error }" @submit.prevent="submitHandler">
    <iInput label="Имя" v-model="newClient.fullname" />
    <iInput label="Телефон" v-model="newClient.phone" />
    <iInput label="Регион" v-model="newClient.region" />
    <iDropDown label="Статус" :options="statusOptions" v-model="newClient.status" />
    <iButton>Отправить</iButton>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import iInput from '@/components/ui/iInput.vue'
import iDropDown from '@/components/ui/iDropDown.vue'
import iButton from '@/components/ui/iButton.vue'
import Client from '@/models/Client'
import { useAppStore } from '@/stores/AppStore'
import { storeToRefs } from 'pinia'
const { statusOptions } = storeToRefs(useAppStore())
const { addClient } = useAppStore()

const error = ref(false)
const newClient = ref(new Client())

function submitHandler() {
  if (!Object.values(newClient.value).every(Boolean)) {
    error.value = true
  } else {
    error.value = false
    addClient(newClient.value)
    newClient.value = new Client()
  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/variables.scss';
.form__container {
  display: flex;
  gap: 5px;
  flex-direction: column;
  border: 1px solid $grayColor;
  padding: 10px;
  margin: 10px 0 0 0;
  border-radius: 10px;
  &.error {
    border: 2px solid red;
  }
}
</style>
